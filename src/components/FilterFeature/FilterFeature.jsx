import DropDown from "./DropDown";
import FilterBar from "./FilterBar";
import TopicFilter from "./TopicFilter";

export default function FilterFeature(props) {
  const { setPage, setTopic } = props;

  return (
    <div className="rounded-lg bg-white shadow-sm">
      <div className="flex flex-row justify-center gap-x-8 px-4 py-3">
        <DropDown {...props} />
        <TopicFilter setPage={setPage} setTopic={setTopic} />
      </div>

      <FilterBar {...props} />
    </div>
  );
}
