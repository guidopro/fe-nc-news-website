import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function DropDown({ setPage, setSortBy, setOrder }) {
  function handleSort(sortBy, order) {
    setPage(1);
    setSortBy(sortBy);
    setOrder(order);
  }

  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex items-center justify-center gap-x-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200">
        Sort by
        <ChevronDownIcon aria-hidden="true" className="size-5 text-gray-400" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-40 origin-top-right overflow-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-lg outline-none transition data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <MenuItem>
          <button
            type="button"
            onClick={() => handleSort("created_at", "desc")}
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-50 data-focus:text-gray-900 data-focus:outline-none cursor-pointer"
          >
            Newest
          </button>
        </MenuItem>

        <MenuItem>
          <button
            type="button"
            onClick={() => handleSort("created_at", "asc")}
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-50 data-focus:text-gray-900 data-focus:outline-none cursor-pointer"
          >
            Oldest
          </button>
        </MenuItem>

        <MenuItem>
          <button
            type="button"
            onClick={() => handleSort("comment_count", "desc")}
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-50 data-focus:text-gray-900 data-focus:outline-none cursor-pointer"
          >
            Comments
          </button>
        </MenuItem>

        <MenuItem>
          <button
            type="button"
            onClick={() => handleSort("votes", "desc")}
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-50 data-focus:text-gray-900 data-focus:outline-none cursor-pointer"
          >
            Likes
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
