export default function Header() {
  return (
    <>
      <div className="border border-b-2 ">
        <div className="flex justify-between items-center max-w-[1200px] m-auto p-2 ">
          <div className="text-[1.9em] font-semibold text-zinc-600">
            Countrynomics
          </div>
          <div>
            {' '}
            <i className="ri-contrast-2-fill "></i> Dark Mode
          </div>
        </div>
      </div>
    </>
  );
}
