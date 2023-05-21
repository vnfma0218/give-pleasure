import TextEditor from '@/components/common/TextEditor';

const CommentInput = () => {
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const changeComment = (value: string) => {
    console.log(value);
  };
  return (
    <div>
      <p>179개의 댓글</p>
      <div className="flex border p-5 w-full">
        <div className="w-2/12">
          <div className="rounded-full bg-gray-400 border w-12 h-12 mr-2"></div>
        </div>
        <div className="w-full flex flex-col justify-start">
          {/* 입력 input (text editor) */}
          <div className="border w-full">
            <TextEditor modules={modules} onChange={changeComment} />
          </div>
          <div className="w-30 self-end">
            <button className="btn btn-sm mt-4 px-7">댓글 쓰기</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommentInput;
