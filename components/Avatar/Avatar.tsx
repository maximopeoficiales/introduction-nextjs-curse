interface MyProps {
  children?: React.ReactNode;
}
const defaultProps: MyProps = {};
const Avatar = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const { children } = props;
  return (
    <div data-testid="Avatar" className="row justify-content-center">
      <div className="col-md-10">
        <h1>Avatar component</h1>
      </div>
    </div>
  );
};

export default Avatar;
