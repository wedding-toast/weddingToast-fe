import { Link } from 'react-router-dom';
import ArrowIcon from 'assets/images/arrow.svg?react';
import ResultIcon from 'assets/images/result-icon.svg?react';
import { useLocation } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Swal from 'sweetalert2';
import { CAUTION_TEXT_CATEGORIES } from 'constants/index';

const RESULT_TITLE = `${name}님을 위한\n축사가 도착했어요`;
const CAUTION_TITLE = '축사를 읽을 때 이런 부분을\n조심해주세요';
const COPY_BUTTON_TEXT = '축사 복사하기'
const HOME_BUTTON_TEXT = '홈으로 가기'

const ResultPage = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const location = useLocation();

  const result = location.state.result;
  const name = location.state.name;

  return (
    <div className="h-screen bg-slate-100">
      <div className="mx-auto  w-[375px] bg-white">
        <div className="bg-gradient bg-cover px-6 pb-10 ">
          <div className="flex h-16 w-full items-center justify-between">
            <ArrowIcon />
          </div>
          <div className="mb-7 flex h-[68px] items-center justify-between">
            <span className="whitespace-pre-line font-Pretendard	text-2xl font-bold text-gray800">
              {RESULT_TITLE}
            </span>
            <ResultIcon />
          </div>
          <div className="w-[327px] rounded-[10px] border border-solid border-white bg-gradient-to-b from-[rgba(255,255,255,0.52)] via-transparent to-[rgba(255,255,255,0.52)] px-[26px] py-[29px] pt-[29px] backdrop-blur-[10px]">
            <span className="font-Pretendard text-[15px] leading-[170%] tracking-[-0.6px] text-gray600">
              {result.result}
            </span>
            <CopyToClipboard
              text="복사확인"
              onCopy={() =>
                Toast.fire({
                  icon: 'success',
                  title: '축사가 성공적으로 복사되었습니다!',
                  iconColor: '#7990F6',
                })
              }
            >
              <button className="mt-[57px] flex h-[55px] w-[275px] items-center justify-center rounded-[10px] bg-gray700 font-Pretendard text-[17px] font-bold text-white">
                {COPY_BUTTON_TEXT}
              </button>
            </CopyToClipboard>
          </div>
        </div>
        <div className="px-6 pb-10 pt-[62px]">
          <div className="mb-[14px] whitespace-pre-line font-Pretendard text-[20px] font-bold leading-[28px] tracking-[-0.5px] text-gray800">
            {CAUTION_TITLE}
          </div>
          {CAUTION_TEXT_CATEGORIES.map((el, index) => (
            <div key={index} className="mb-4 w-[327px] rounded-[10px] bg-gray900 px-4 py-[29px] opacity-70">
              <div className="mb-[6px] font-Pretendard text-base font-bold text-black">{el.title}</div>
              <ul className="list-disc pl-4">
                {el.description.map((desc, descIndex) => (
                  <li key={descIndex} className="mt-[12px] text-[14px] leading-[163%] tracking-[-0.5px]">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <Link to={'/'}>
            <button className="mt-[28px] flex h-[55px] w-[327px] items-center justify-center rounded-[10px] bg-gray700 font-Pretendard text-[17px] font-bold text-white">
              {HOME_BUTTON_TEXT}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
