import Link from 'next/link';
import { BiCommentDetail } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';

const PostItem = () => {
  return (
    <li className="post-item">
      <div className="h-20 card rounded-box">
        <div className="flex items-center gap-x-1 text-gray-700 text-sm ">
          <div className="rounded-full bg-gray-400 border w-6 h-6 mr-2"></div>
          <p>닉네임</p>
          <div className="w-[2.5px] h-[2.5px] bg-black rounded-full"></div>
          <span>약 2시간 전</span>
        </div>
        <div className="text-gray-900 w-fit hover:text-blue-500 cursor-pointer my-2">
          <Link href="/post/1">시흥에서 같이 운동하실분 2명 구합니다!</Link>
        </div>
        <div className="flex justify-between">
          <div className="badge badge-info gap-2">모임/파트너</div>
          <div className="icons flex">
            <div className="icon flex items-center mr-2">
              <AiOutlineEye />
              <span>0</span>
            </div>
            <div className="icon flex items-center">
              <BiCommentDetail />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </li>
  );
};

export default PostItem;
