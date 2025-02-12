import clsx from "clsx";
import { X, Camera } from "lucide-react";
import Image from "next/image";
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode, useState } from "react";
import { UseFormSetValue, UseFormTrigger } from "react-hook-form";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  description?: string | ReactNode;
  error?: string;
  label?: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  trigger: UseFormTrigger<any>;
}

export const FileInput = ({ description, error, label, name, setValue, trigger, ...props }: Props) => {
  const [images, setImages] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newValue = [...images, ...Array.from(event.target.files)];

      setImages(newValue);
      setValue(name, newValue);
      trigger(name);
    }
  };

  const removeImage = (index: number) => {
    const newValue = images.filter((_, i) => i !== index);

    setImages(newValue);
    setValue(name, newValue);
    trigger(name);
  };

  return (
    <div className="control-container">
      {label ? <label className="control-label">{label}</label> : null}

      <div className="w-[100%] md:w-[calc(100%-246px)]">
        <div className="flex gap-x-4 max-w-[100%] overflow-auto">
          {images.length < 10 && (
            <label className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-lg cursor-pointer flex-shrink-0">
              <Camera className="w-6 h-6 text-gray-500" />
              <input {...props} type="file" multiple className="hidden" onInput={handleFileChange} />
            </label>
          )}

          {images.length ? (
            <div className="">
              <div className="flex gap-x-4">
                {images.map((file, index) => (
                  <div key={index} className="relative w-24 h-24 rounded-lg overflow-hidden">
                    <Image
                      src={URL.createObjectURL(file)}
                      width={120}
                      height={90}
                      alt="preview"
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md"
                    >
                      <X className="w-4 h-4 text-black" />
                    </button>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500">{images.length} из 10</p>
            </div>
          ) : null}
        </div>

        <div className={clsx((error || description) && "mt-3")}>
          {error ? <div className="text-danger text-[13px]">{error}</div> : null}
          {description ? <div className="text-secondary text-[13px]">{description}</div> : null}
        </div>
      </div>
    </div>
  );
};
