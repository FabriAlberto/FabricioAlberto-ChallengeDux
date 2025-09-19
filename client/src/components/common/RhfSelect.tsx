import { Controller, useFormContext } from "react-hook-form";
import { Dropdown, DropdownProps } from "primereact/dropdown";

interface Props extends DropdownProps {
  name: string;
  label: string;
}

const RHFSelect = ({ name, label, className, ...rest }: Props) => {
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
          <div className="flex w-full flex-column">
            {label && (
              <label htmlFor={name} className="mb-2">
                {label}
              </label>
            )}
            <Dropdown
              value={field.value}
              onChange={(e) => field.onChange(e.value)}
              options={rest.options}
              showClear
              invalid={!!error?.message && !isValid}
              {...rest} 
            />
            {error?.message && !isValid && (
              <p className="mt-1 flex text-xs text-red-500">
                <i className="pi pi-exclamation-circle text-red-500 mr-1" />
                {error?.message}
              </p>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default RHFSelect;
