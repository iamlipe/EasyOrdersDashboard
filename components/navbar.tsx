import { Profile } from "./profile";
import { Business } from "./business";
import { Search } from "./search";

export function NavBar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center">
        <Business />

        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <Profile />
        </div>
      </div>
    </div>
  );
}
