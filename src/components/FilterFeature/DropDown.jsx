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
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-black inset-ring-1 inset-ring-white/5 hover:bg-white/20 cursor-pointer">
        Sort By
        <ChevronDownIcon
          aria-hidden="true"
          className="-mr-1 size-5 text-gray-400"
        />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-max origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <button
              onClick={() => handleSort("created_at", "desc")}
              className="block w-full px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden cursor-pointer"
            >
              Newest
            </button>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <button
              onClick={() => handleSort("created_at", "asc")}
              className="block w-full px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden cursor-pointer"
            >
              Oldest
            </button>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <button
              onClick={() => handleSort("comment_count", "desc")}
              className="block w-full px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden cursor-pointer"
            >
              Comments
            </button>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <button
              onClick={() => handleSort("votes", "desc")}
              className="block w-full px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden cursor-pointer"
            >
              Likes
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
