import { Controller, useFormContext } from "react-hook-form";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactElement,
  forwardRef,
} from "react";
import { InputText } from "primereact/inputtext";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  name: string;
  classNameInput?: string;
  className?: string;
  icon?: ReactElement;
}

const RHFInput = forwardRef<HTMLInputElement, Props>(function RHFInput(
  {
    name,
    label,
    classNameInput,
    className,
    ...rest
  }: Props,
  ref
) {
  const {
    control,
    formState: { isValid },
  } = useFormContext();
  return (
    <div className={className}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div className="flex flex-column w-full">
            {label && (
              <label htmlFor={name} className="mb-2">
                {label}
              </label>
            )}
            <InputText
              {...field}
              id={name}
              invalid={!!error}
              className={`${classNameInput}`}
              ref={ref}
              {...rest}
            />
            {error?.message && !isValid && (
              <p className="mt-1 flex text-xs text-red-500">
                {" "}
                <span>
                  <i className=" pi pi-exclamation-circle text-red-500 mr-1 " />
                </span>{" "}
                {error?.message}
              </p>
            )}
          </div>
        )}
      />
    </div>
  );
});

export default RHFInput;
