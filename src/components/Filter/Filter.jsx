import { Select } from '@chakra-ui/react';

function Filter({ type, options, onSelect }) {
  return (
    <Select
      variant="flushed"
      placeholder={`Choose a ${type}`}
      onChange={(ev) => {
        onSelect(ev.target.value);
      }}
    >
      {options?.map((value) => (
        <option key={`${type}-${value}`} value={value}>
          {value}
        </option>
      ))}
    </Select>
  );
}

export default Filter;
