import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function SortBy({ setPage, setSortBy, setOrder }) {
  function handleClick(e) {
    const parts = e.target.value.split("&");
    setPage(1);
    setSortBy(parts[0]);
    setOrder(parts[1]);
  }

  return (
    <div className="flex m-7 gap-1">
      <label htmlFor="sortby" className="text-sm">
        Sort by:{" "}
      </label>
      <select
        name="sortby"
        id="sortby"
        defaultValue="created_at"
        className="bg-amber-50"
        onChange={(e) => handleClick(e)}
      >
        <optgroup label="Descending">
          <option value="created_at">Date (latest)</option>
          <option value="comment_count">Comments (most)</option>
          <option value="votes">Likes (most)</option>
        </optgroup>
        <hr />
        <optgroup label="Ascending">
          <option value="created_at&asc">Date (oldest)</option>
          <option value="comment_count&asc">Comments (least)</option>
          <option value="votes&asc">Likes (least)</option>
        </optgroup>
      </select>
    </div>
  );
}
