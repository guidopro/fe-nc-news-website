import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function SortBy({ setPage, setSortBy }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate();
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
          <MenuItem>
            <NavLink
              to="?sort_by=created_at"
              className={
                (({ isActive }) =>
                  isActive ? "text-red-500 underline" : "text-black",
                "block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden")
              }
              onClick={() => {
                setPage(1);
              }}
            >
              Date
            </NavLink>
          </MenuItem>
          <MenuItem>
            <Link
              to="?sort_by=comment_count"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              onClick={() => {
                setPage(1);
              }}
            >
              Comment count
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="?sort_by=votes"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              onClick={() => {
                setPage(1);
              }}
            >
              Likes
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="?sort_by=created_at&order=asc"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              onClick={() => {
                setPage(1);
              }}
            >
              Date (oldest)
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="?sort_by=comment_count&order=asc"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              onClick={() => {
                setPage(1);
              }}
            >
              Comment count (least)
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="?sort_by=votes&order=asc"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              onClick={() => {
                setPage(1);
              }}
            >
              Likes (least)
            </Link>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
