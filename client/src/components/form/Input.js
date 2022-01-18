export default function Input({
    label,
    name,
    required,
    placeholder,
    onChange,
    type="text",
    disabled,
    ...restProps
}) 
{
    return (
        <label>
            {label}:
            <input 
                type={type}
                required={required}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                {...restProps}
            />
        </label>      
    );
  }