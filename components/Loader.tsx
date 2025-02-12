import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          width: 50px;
          aspect-ratio: 1.154;
          display: grid;
          color: #ec4899; /* pink-500 */
          background:
            linear-gradient(to bottom left, #0000 calc(50% - 1px), currentColor 0 calc(50% + 1px), #0000 0) right/50% 100%,
            linear-gradient(to bottom right, #0000 calc(50% - 1px), currentColor 0 calc(50% + 1px), #0000 0) left/50% 100%,
            linear-gradient(currentColor 0 0) bottom/100% 2px;
          background-repeat: no-repeat;
          transform-origin: 50% 66%;
          animation: l5 4s infinite linear;
        }
        .loader::before,
        .loader::after {
          content: "";
          grid-area: 1/1;
          background: inherit;
          transform-origin: inherit;
          animation: inherit;
        }
        .loader::after {
          animation-duration: 2s;
        }
        @keyframes l5 {
          100% {
            transform: rotate(1turn);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
