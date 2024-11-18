import User from "./User";
import UserContext from "../utils/UserContext";

const About = () => {
  return (
    <div className="p-6 text-center bg-white max-w-3xl mx-auto mt-12 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-green-500 mb-4">About</h1>
      <div className="mb-4">
        LoggedIn User
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold text-gray-800">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>
      <h2 className="text-2xl font-semibold mb-6">This is the provider page</h2>
      <User />
    </div>
  );
};

export default About;
