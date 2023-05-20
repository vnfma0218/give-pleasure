import TextEditor from '@/components/common/TextEditor';
import { AiOutlineEye } from 'react-icons/ai';

export default function page() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1>상세페이지</h1>
      {/* user info, page info */}
      <div className="">
        <div className="flex">
          <div className="rounded-full bg-gray-400 border w-12 h-12 mr-2"></div>
          <div>
            <p>닉네임</p>
            <div className="flex items-center text-gray-700 text-sm">
              <span className="mr-2">약 2시간 전</span>
              <div className="flex items-center">
                <AiOutlineEye />
                <span className="ml-1">121</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 내용 */}
      <div className="h-96 border border-black">
        <h1>내용 들어가야함</h1>
      </div>
      <div className="mt-2 divider"></div>

      {/* 댓글 */}
      <div>
        <p>179개의 댓글</p>
        <div className="flex border p-5 w-full">
          <div className="w-2/12">
            <div className="rounded-full bg-gray-400 border w-12 h-12 mr-2"></div>
          </div>
          <div className="w-full relative">
            {/* 입력 input (text editor) */}
            <div className="border w-full">
              <TextEditor />
            </div>

            <button className="btn btn-sm absolute right-0 mt-4 px-6 ">
              댓글쓰기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
