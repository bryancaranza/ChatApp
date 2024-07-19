import Icon from "@/components/custom/Icon";
import SearchIcon from "@/components/icons/SearchIcon";
import { Input } from "@/components/ui/input";
import useUserHooks from "@/hooks/useUserHooks";
import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { searchUser } = useUserHooks();

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearch(e.target.value);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      searchUser(search);
    }, 500);
    return () => clearTimeout(debounce);
  }, [search]);

  return (
    <div className="flex gap-2 items-center w-full">
      <div className="flex justify-center items-center">
        <Icon className="!bg-[#0B101B] !w-9 !h-9">
          <SearchIcon className="fill-white w-[15px] h-[15px]" />
        </Icon>
      </div>
      <div className="w-full">
        <Input
          value={search}
          onChange={onSearch}
          className="bg-[#0B101B] rounded-full border-none"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
