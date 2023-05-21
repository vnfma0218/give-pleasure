import CommentInput from '@/components/postDetail/CommentInput';
import CommentList from '@/components/postDetail/CommentList';
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

      {/* 댓글 입력창 */}
      <CommentInput />
      {/* 댓글 목록 */}
      <CommentList />
    </div>
  );
}
