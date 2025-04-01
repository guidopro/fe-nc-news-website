import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function SortBy({
  setPage,
  setSortBy,
  setOrder,
}) {
  function handleClick(e) {
    const parts = e.target.value.split("&");
    setPage(1);
    setSortBy(parts[0]);
    setOrder(parts[1]);
  }

  return (
    <Menu as="div" className="absolute right-3 inline-block text-left mt-10">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
          Sort by {}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem
            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            onClick={(e) => handleClick(e)}
          >
            <option value="created_at">Date</option>
          </MenuItem>
          <MenuItem
            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            onClick={(e) => handleClick(e)}
          >
            <option value="comment_count">Comment count</option>
          </MenuItem>
          <MenuItem
            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            onClick={(e) => handleClick(e)}
          >
            <option value="votes">Likes</option>
          </MenuItem>
          <MenuItem
            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            onClick={(e) => handleClick(e)}
          >
            <option value="created_at&asc">Date (oldest)</option>
          </MenuItem>
          <MenuItem
            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            onClick={(e) => handleClick(e)}
          >
            <option value="comment_count&asc">Comment count (least)</option>
          </MenuItem>
          <MenuItem
            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            onClick={(e) => handleClick(e)}
          >
            <option value="votes&asc">Likes (least)</option>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
