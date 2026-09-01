import DropDown from "./DropDown";
import TopicFilter from "./TopicFilter";

export default function FilterFeature(props) {
  let setPage = props.setPage;
  let setTopic = props.setTopic;
  return (
    <div className="flex flex-row bg-white gap-x-8 py-2.5 justify-center">
      <DropDown {...props} />
      <TopicFilter setPage={setPage} setTopic={setTopic} />
    </div>
  );
}
