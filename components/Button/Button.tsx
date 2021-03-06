import { colors } from "../../styles/theme";

interface MyProps {
  children?: React.ReactNode;
  onClick(): void;
}
const defaultProps = {};
const Button = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const { children, onClick } = props;
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button {
          display: flex;
          align-items: center;
          background: ${colors.black};
          border: 0;
          color: #fff;
          cursor: pointer;
          border-radius: 9999px;
          font-size: 16px;
          font-weight: 800;
          padding: 8px 24px;
          transition: opacity 0.3s ease;
          margin: 10px auto;
        }
        button > :global(svg) {
          margin-right: 8px;
        }
        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
};

export default Button;
