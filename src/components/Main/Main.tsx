import { Topnav } from '../Topnav/Topnav';

export const Main = (props: any) => {
  return (
    <main
      className="
      ml-0
      xs:ml-[48px]
      md:ml-[200px]
      relative
      w-full
     bg-slate-200
      px-2
      md:px-8
      xl:px-0
      xl:max-w-[1200px]
      xl:mx-auto
      xl:shadow-[20px_0_40px_20px_rgba(226,232,240,1),-20px_0_40px_20px_rgba(226,232,240,1)]
      overflow-x-hidden"
    >
      <div className="fixed max-w-full xl:max-w-[1200px] min-w-full xl:min-w-[1200px] max-h-[100vh] min-h-[100vh]">
        <div className="rounded-full absolute w-24 h-24 top-2/3 left-1/3 bg-fuchsia-600"></div>
        <div className="rounded-full absolute w-4 h-4 top-3/4 right-1/4 bg-green-400"></div>
        <div className="rounded-full absolute w-8 h-8 bottom-1/4 left-2/3 bg-fuchsia-600"></div>
        <div className="rounded-full absolute w-48 h-48 bottom-1/3 right-1/4 bg-green-400"></div>
        <div className="rounded-full absolute w-48 h-48 top-2/3 left-3/4 bg-fuchsia-600"></div>
        <div className="rounded-full absolute w-12 h-12 top-1/4 right-1/3 bg-green-400"></div>
        <div className="rounded-full absolute w-8 h-8 bottom-3/4 left-1/2 bg-fuchsia-600"></div>
        <div className="rounded-full absolute w-4 h-4 bottom-2/3 right-1/3 bg-green-400"></div>
        <div className="rounded-full absolute w-24 h-24 top-1/4 left-1/4 bg-fuchsia-600"></div>
        <div className="rounded-full absolute w-12 h-12 top-2/3 right-1/4 bg-green-400"></div>
        <div className="rounded-full absolute w-8 h-8 bottom-2/3 left-1/3 bg-fuchsia-600"></div>
        <div className="rounded-full absolute w-36 h-36 bottom-1/4 right-2/3 bg-green-400"></div>
      </div>
      <Topnav></Topnav>

      {props.children}
    </main>
  );
};
