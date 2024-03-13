export default function Loading() {
  return (
    <span className="flex flex-col items-center justify-center min-h-screen	">
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="animate-spin m-auto min-h-max min-w-max"
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
  </span>
  );
}
