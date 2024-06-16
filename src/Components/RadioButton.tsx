import React, { useEffect, useState } from 'react';
import Details from './Details';
import TableAnime from './TableAnime';
import PicturesAnime from './Pictures';


const RadioButton: React.FC<{data: any, character: any, pictures: any}> = ({data, character, pictures}) => {
  const [selectedOption, setSelectedOption] = useState<string>('Details');

  return (
    <div className="flex flex-col px-2">
      <div className="flex space-x-4 border-b border-solid border-gray-400 text-center">
        <label className={`transition cursor-pointer px-2 hover:text-blue-400 dark:hover:text-gray-400 flex items-start space-x-2 font-semibold ${selectedOption === 'Details' ? 'border-blue-500 border-b-2 border-solid': ''}`} >
          Details
          <input
            type="radio"
            value="Details"
            checked={selectedOption === 'Details'}
            onChange={(e) => setSelectedOption(e.target.value)}
            className='form-radio h-4 w-4 text-blue-600 opacity-0 absolute'
          />
        </label>
        <label className={`transition cursor-pointer px-2 hover:text-blue-400 dark:hover:text-gray-400 flex items-start text-center space-x-2 font-semibold ${selectedOption === 'Characters' ? 'border-blue-500 border-b-2 border-solid': ''}`} >
          Characters & Staff
          <input
            type="radio"
            value="Characters"
            checked={selectedOption === 'Characters'}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="form-radio h-4 w-4 text-blue-600 opacity-0 absolute"
          />
        </label>
        <label className={` transition cursor-pointer px-2 hover:text-blue-400 dark:hover:text-gray-400 flex items-start text-center space-x-2 font-semibold ${selectedOption === 'Pictures' ? 'border-blue-500 border-b-2 border-solid': ''}`} >
          Pictures
          <input
            type="radio"
            value="Pictures"
            checked={selectedOption === 'Pictures'}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="form-radio h-4 w-4 text-blue-600 opacity-0 absolute"
          />
        </label>
      </div>
      {selectedOption === 'Details' && (
        <div className="mt-4 p-2">
          <Details data={data} />
        </div>
      )}
      {selectedOption === 'Characters' && (
        <div className="mt-4 p-2">
          <TableAnime data={character} />
        </div>
      )}
      {selectedOption === 'Pictures' && (
        <div className="mt-4 p-2">
          <PicturesAnime pictures={pictures} />
        </div>
      )}
    </div>
  );
};

export default RadioButton;
