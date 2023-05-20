import PostItem from './PostItem';

const PostList = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <section className="community py-20 px-14 h-96 w-full">
        <div className="border flex justify-center bg-gray-200 py-5 rounded-lg mb-10">
          <h2>section name</h2>
        </div>
        <ul className="post-list">
          <PostItem />
          <PostItem />
          <PostItem />
        </ul>
      </section>
    </div>
  );
};
export default PostList;
