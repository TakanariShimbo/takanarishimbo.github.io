const Footer = () => {
  const githubLink = "https://github.com/TakanariShimbo";
  const qiitaLink = "https://qiita.com/hmkc1220";
  return (
    <footer className="bg-[#1f1f1f] py-10 text-center text-white">
      <div className="flex justify-center gap-5">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="h-10 w-10"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
            />
          </svg>
        </a>
        <a href={qiitaLink} target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="1 1 22 22"
            fill="currentColor"
            stroke-width="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-10 w-10"
          >
            <path d="M 11.078125 2.679688 C 15.574219 2.570312 18.757812 4.546875 20.640625 8.601562 C 21.457031 10.925781 21.429688 13.246094 20.558594 15.558594 C 20.433594 15.839844 20.285156 16.105469 20.121094 16.359375 C 19.609375 16.183594 19.089844 16.15625 18.558594 16.28125 C 17.914062 16.003906 17.597656 15.523438 17.601562 14.839844 C 18.316406 12.300781 17.8125 10.03125 16.078125 8.039062 C 16.054688 7.535156 16.027344 7.027344 16 6.519531 C 15.996094 6.257812 15.929688 6.019531 15.800781 5.800781 C 15.699219 5.726562 15.59375 5.710938 15.480469 5.761719 C 14.984375 6.042969 14.492188 6.320312 14 6.601562 C 11.980469 5.804688 10.097656 6.058594 8.359375 7.359375 C 7.816406 7.34375 7.285156 7.25 6.761719 7.078125 C 6.550781 7.128906 6.414062 7.265625 6.359375 7.480469 C 6.539062 7.988281 6.671875 8.507812 6.761719 9.039062 C 6.59375 9.597656 6.390625 10.144531 6.160156 10.679688 C 5.65625 12.503906 5.816406 14.261719 6.640625 15.960938 C 7.421875 17.183594 8.527344 17.945312 9.960938 18.238281 C 11.707031 18.515625 13.414062 18.355469 15.078125 17.761719 C 15.597656 17.496094 16.0625 17.160156 16.480469 16.761719 C 16.972656 17.574219 17.679688 18.136719 18.601562 18.441406 C 17.039062 20.085938 15.121094 21.035156 12.839844 21.28125 C 8.429688 21.429688 5.269531 19.519531 3.359375 15.558594 C 1.90625 11.378906 2.800781 7.792969 6.039062 4.800781 C 7.539062 3.652344 9.21875 2.945312 11.078125 2.679688 Z M 11.078125 2.679688 " />
            <path d="M 11.078125 7.160156 C 13 6.945312 14.441406 7.667969 15.398438 9.320312 C 15.738281 9.179688 16.085938 9.074219 16.441406 9 C 16.441406 9.078125 16.441406 9.160156 16.441406 9.238281 C 16.09375 9.273438 15.773438 9.378906 15.480469 9.558594 C 15.515625 9.703125 15.609375 9.785156 15.761719 9.800781 C 16.015625 9.710938 16.269531 9.710938 16.519531 9.800781 C 16.238281 9.914062 15.945312 9.96875 15.640625 9.960938 C 15.625 10.066406 15.652344 10.160156 15.71875 10.238281 C 15.972656 10.355469 16.242188 10.421875 16.519531 10.441406 C 16.539062 10.535156 16.511719 10.613281 16.441406 10.679688 C 16.253906 10.625 16.066406 10.574219 15.878906 10.519531 C 15.878906 12.453125 14.921875 13.558594 13 13.839844 C 11.964844 14.046875 10.921875 14.074219 9.878906 13.921875 C 8.527344 13.582031 7.824219 12.714844 7.761719 11.320312 C 7.539062 11.433594 7.3125 11.539062 7.078125 11.640625 C 6.980469 11.519531 7.007812 11.425781 7.160156 11.359375 C 7.367188 11.269531 7.582031 11.203125 7.800781 11.160156 C 7.800781 11.027344 7.800781 10.894531 7.800781 10.761719 C 7.535156 10.785156 7.265625 10.8125 7 10.839844 C 7 10.761719 7 10.679688 7 10.601562 C 7.292969 10.601562 7.585938 10.601562 7.878906 10.601562 C 7.878906 10.492188 7.878906 10.386719 7.878906 10.28125 C 7.558594 10.269531 7.238281 10.242188 6.921875 10.199219 C 6.90625 10.117188 6.921875 10.035156 6.960938 9.960938 C 7.285156 10.035156 7.621094 10.089844 7.960938 10.121094 C 8.457031 8.554688 9.496094 7.570312 11.078125 7.160156 Z M 11.078125 7.160156 " />
          </svg>
        </a>
      </div>
      <p className="pt-3 text-xs">&copy; 2024 Takanari Shimbo</p>
    </footer>
  );
};

export default Footer;
