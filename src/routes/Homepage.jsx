import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
// import FeaturedPosts from "../components/FeaturedPosts";
// import PostList from "../components/PostList";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Trang chủ</Link>
        <span>•</span>
        <span className="text-blue-800">Bài viết</span>
      </div>

      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div>
          <h1 className="text-gray-800 text-2xl md:text-4xl lg:text-5xl font-bold">
            Chia sẻ kiến thức và góc nhìn hữu ích mỗi ngày
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Nơi tổng hợp những bài viết chất lượng, mang đến thông tin, kinh
            nghiệm và cảm hứng cho công việc cũng như cuộc sống.
          </p>
        </div>

        {/* animated button */}
        <Link to="write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            // className="text-lg tracking-widest animate-spin animatedButton"
            className="text-lg tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Câu chuyện của bạn •
              </textPath>
              <textPath href="#circlePath" startOffset="55%">
                Chia sẻ ý tưởng •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>

      {/* CATEGORIES */}
      <MainCategories />

      {/* FEATURED POSTS */}
      {/* <FeaturedPosts /> */}

      {/* POST LIST */}
      <div>
        <h1 className="my-8 text-2xl text-gray-600">Bài viết mới nhất</h1>
        {/* <PostList /> */}
      </div>
    </div>
  );
};

export default Homepage;
