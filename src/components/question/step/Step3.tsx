import FlowerIcon from 'assets/images/flower.svg?react';

import QuestionTitle from '../QuestionTitle';

const BUTTON_VALUE = [
  { id: 1, value: '신랑', fill: '#AEC9FF' },
  { id: 2, value: '신부', fill: '#FB5500' },
];

const Step3 = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <QuestionTitle text={'축사를 받을 사람은\n신랑인가요, 신부인가요?'} />
      <div className="flex justify-between gap-3">
        {BUTTON_VALUE.map(({ id, value, fill }) => (
          <button
            key={id}
            className="custom-hover flex h-[187px] w-full flex-col items-center justify-between rounded-[5px] bg-gray-100 py-6 font-pretendard"
            data-ga="question_3rd"
          >
            <FlowerIcon fill={fill} />
            <span className="mt-2 font-pretendard text-[17px]">{value}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step3;
