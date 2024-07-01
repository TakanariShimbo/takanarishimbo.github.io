/**
 * @returns {JSX.Element}
 */
export const App = () => {
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-green-400 tracking-widest font-medium title-font mb-1">INTRODUCE MY SITES</h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">My Apps Potal Site</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are the AI web applications I have developed. These applications leverage mathematical optimization, machine learning techniques such
            as deep learning, and the recently popular generative AI.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="./images/simple-sudoku-app.png" alt="blog" />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Simple Sudoku App</h1>
                <p class="leading-relaxed mb-3">
                  A simple Sudoku app utilizing OR-Tools, built with FastAPI and React.
                  <a class="hover:underline" href="https://github.com/TakanariShimbo/simple-sudoku-app">
                    Here is the repository of this site.
                  </a>
                </p>
                <div class="flex items-center flex-wrap">
                  <a class="text-green-400 inline-flex items-center md:mb-2 lg:mb-0" href="https://simple-sudoku-app.onrender.com/">
                    Check Site
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="./images/do-we-look-alike.png" alt="blog" />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Do We Look A Like?</h1>
                <p class="leading-relaxed mb-3">
                  A facial similarity detection app utilizing InsightFace, built with Streamlit.
                  <a class="hover:underline" href="https://github.com/TakanariShimbo/do-we-look-alike">
                    Here is the repository of this site.
                  </a>
                </p>
                <div class="flex items-center flex-wrap">
                  <a class="text-green-400 inline-flex items-center md:mb-2 lg:mb-0" href="https://do-we-look-alike.streamlit.app/">
                    Check Site
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="./images/openai-api-demo.png" alt="blog" />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">OpenAI API Demo</h1>
                <p class="leading-relaxed mb-3">
                  A demo app for the OpenAI API, built with Streamlit (API Key is required).
                  <a class="hover:underline" href="https://github.com/TakanariShimbo/openai-api-demo">
                    Here is the repository of this site.
                  </a>
                </p>
                <div class="flex items-center flex-wrap">
                  <a class="text-green-400 inline-flex items-center md:mb-2 lg:mb-0" href="https://openai-api-demo.streamlit.app/">
                    Check Site
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
