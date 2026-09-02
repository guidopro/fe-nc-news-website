import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getTopics } from "../../api-requests/api-requests-axios";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function TopicFilter({ setPage, setTopic }) {
  function handleTopic(topic) {
    setTopic(topic);
    setPage(1);
  }

  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setAllTopics(topics);
    });
  }, []);

  const formattedTopics = allTopics.map((t) => {
    return (
      <div className="py-1" key={t.slug}>
        <MenuItem>
          <button
            onClick={() => {
              handleTopic(t.slug);
            }}
            className="block w-full px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden cursor-pointer capitalize"
          >
            {t.slug}
          </button>
        </MenuItem>
      </div>
    );
  });

  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-black inset-ring-1 inset-ring-white/5 hover:bg-white/20 cursor-pointer">
        Topics
        <ChevronDownIcon
          aria-hidden="true"
          className="-mr-1 size-5 text-gray-400"
        />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-max origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        {formattedTopics}
      </MenuItems>
    </Menu>
  );
}
