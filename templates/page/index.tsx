import { NextPage } from "next";

interface MyProps {}
const defaultProps: MyProps = {};
const TemplateName : NextPage = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="TemplateName" className="row justify-content-center">
      <div className="col-md-10">
        <h1>TemplateName component</h1>
      </div>
    </div>
  );
};



export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/hello`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { name: data.name } };
}
export default TemplateName;
