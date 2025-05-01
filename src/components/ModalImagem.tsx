import Image from "next/image";

interface ModalImagemProps {
    isOpen: boolean;
    image: { src: string; alt: string };
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
  }
  

const ModalImagem = ({isOpen,
  image,
  onClose,
  onNext,
  onPrev,
}: ModalImagemProps) => {
  if (!isOpen) return null;

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative max-h-screen overflow-hidden"
        onClick={handleModalClick}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={800}
          height={600}
          className="rounded-xl object-cover"
        />

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4 text-center">
          <p>{image.alt}</p>
        </div>

        <button
          onClick={onPrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-purple-500 dark:bg-purple-800 p-2 rounded-full"
        >
          {"<"}
        </button>

        <button
          onClick={onNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-purple-500 dark:bg-purple-800 p-2 rounded-full"
        >
          {">"}
        </button>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-purple-500 dark:bg-purple-800 p-2 rounded-full z-10"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ModalImagem;
