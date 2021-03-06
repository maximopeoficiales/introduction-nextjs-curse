interface MyProps {
  children?: React.ReactNode;
}
const defaultProps: MyProps = {};
const TemplateName = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const { children } = props;
  return (
    <div data-testid="TemplateName" className="row justify-content-center">
      <div className="col-md-10">
        <h1>TemplateName component</h1>
      </div>
    </div>
  );
};

export default TemplateName;
