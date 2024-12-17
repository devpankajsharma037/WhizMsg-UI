const Container = ({ children }: React.PropsWithChildren<{}>) => {
  return <div className="mx-auto  max-w-[88rem] px-6 lg:px-8 ">{children}</div>;
};

export default Container;
