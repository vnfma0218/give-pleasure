const CommentItem = () => {
  return (
    <li>
      <div>
        <div className="flex items-center gap-x-1 text-gray-700 text-sm ">
          <div className="rounded-full bg-gray-400 border w-12 h-12 mr-2"></div>
          <p>닉네임</p>
          <div className="w-[2.5px] h-[2.5px] bg-black rounded-full"></div>
          <span>약 2시간 전</span>
        </div>
        <div className="content mt-2">
          <p>
            프리랜서이고 한번 경험해고 앞으로 진로결정하는것도 상관없다고봅니다.
            <br />
            4개월이 좀 걸리긴하지만 현장에서 어떤 방식으로 개발하고 어떻게
            <br />
            프로젝트가 돌아가는지도 보세요
          </p>
        </div>
        <div className=""></div>
      </div>
    </li>
  );
};
export default CommentItem;
