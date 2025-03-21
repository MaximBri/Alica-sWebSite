import { FC } from 'react';

export const Checkbox: FC<{ isChecked: boolean; setIsChecked: () => void }> = ({
  isChecked,
  setIsChecked,
}) => {
  return (
    <label className="flex items-center justify-center cursor-pointer -mt-[1px] select-none">
      <div
      className='w-5 h-5 bg-transparent border-2 border-checkbox dark:border-white rounded-[4px] flex items-center justify-center'
        style={{
          backgroundColor: isChecked ? '#007bff' : '',
          transition: 'background-color 0.3s',
        }}
      >
        {isChecked && (
          <span className='text-white text-sm'>✔</span>
        )}
      </div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={setIsChecked}
        className="hidden"
      />
    </label>
  );
};
