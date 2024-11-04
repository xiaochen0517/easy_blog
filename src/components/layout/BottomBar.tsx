export default function BottomBar() {
  return (
    <div className="w-full p-2 flex flex-col items-center border-t text-sm font-light">
      <ul className="w-full max-w-6xl flex flex-col content-start flex-wrap text-gray-400">
        {[...Array(5)].map((_, index) => (
          <li key={index} className="basis-1/4 w-fit inline-block mx-4">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >Link {index}</a>
          </li>
        ))}
      </ul>
      <div className="dark:text-gray-400">
        Created by&nbsp;
        <a href="" target="_blank" rel="noopener noreferrer" className="hover:underline">Your Name</a>
        &nbsp;•&nbsp;
        <a href="" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
        &nbsp;•&nbsp;
        <a href="" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
      </div>
    </div>
  )
}
