import { Props } from "react";
import styles, { globalStyles } from "./styles";

interface MyProps {
  children?: React.ReactNode;
}
const defaultProps = {};
const AppLayout = (props: MyProps) => {
  // props = { ...defaultProps, ...props };
  const { children } = props;

  return (
    <>
      <div>
        <main>
          {children}
        </main>
      </div>
      <style jsx>{styles}</style>
      <style jsx global>{globalStyles}</style>
    </>
  );
};

export default AppLayout;
