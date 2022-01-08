import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import mammoth from 'mammoth';
import parser from 'html-react-parser';

// Upload word document file to render as JSX Element

export default function useDocument() {
  const [doc, setDoc] = useState<string>('');
  const contentContainerRef = useRef<HTMLDivElement>(null);

  // OPTIONAL:
  // change Alt Text to embedded youtube link for it to work
  // add caption to images
  useEffect(() => {
    if (contentContainerRef)
      for (let i = 0; i < contentContainerRef.current!.children.length; i++) {
        let child = contentContainerRef.current?.children[i];

        let grandChild: HTMLImageElement = child!
          .children[0] as HTMLImageElement;

        // for embedded link
        if (grandChild?.alt !== undefined && grandChild?.alt.includes('/embed'))
          child!.innerHTML = `<iframe width="560" height="315" src=${grandChild.alt} title="YouTube video player" frameborder="0" allowfullscreen></iframe>`;

        // for image caption
        if (
          grandChild?.alt !== undefined &&
          !grandChild?.alt.includes('/embed')
        ) {
          // Add CSS to image-caption to edit the caption yourself
          child!.innerHTML = `${child?.innerHTML}<p class="image-caption">${grandChild.alt}</p>`;
          // Add class to every image as 'image'
          child!.children[0].classList.add('image');
        }
      }
  }, [doc]);

  // handle file selection and convert it to ArrayBuffer
  const handleFileSelect = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      readFileInputEventAsArrayBuffer(
        event,
        async (arrayBuffer: ArrayBuffer) => {
          await mammoth
            .convertToHtml({ arrayBuffer: arrayBuffer })
            .then((res) => setDoc(res.value));
        }
      );
    },
    [doc]
  );

  // file converter to ArrayBuffer
  const readFileInputEventAsArrayBuffer = (
    event: ChangeEvent<HTMLInputElement>,
    callback: any
  ) => {
    const file = event.target.files![0];
    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      const arrayBuffer = loadEvent.target!.result;
      callback(arrayBuffer);
    };
    reader.readAsArrayBuffer(file);
  };

  return {
    doc: parser(doc!),
    handleFileSelect,
    ref: contentContainerRef,
  };
}
