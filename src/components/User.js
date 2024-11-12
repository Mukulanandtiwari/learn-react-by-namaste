import { useEffect, useState } from 'react';

const User = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Dummy",
    location: "Default",
    avatar_url: "",
  });

  useEffect(() => {
    getUserinfo();
  }, []);

  const getUserinfo = async () => {
    const data = await fetch("https://api.github.com/users/mukulanandtiwari");
    const json = await data.json();
    setUserInfo(json);
  };

  const { name, location, avatar_url } = userInfo;

  return (
    <div className="w-72 p-5 border border-gray-300 rounded-lg shadow-md bg-gray-100 text-center mx-auto mt-6">
      <img className="w-24 h-24 rounded-full mx-auto mb-4" src={avatar_url} alt="user avatar" />
      <h1 className="text-xl font-semibold text-gray-800 mb-2">Name: {name}</h1>
      <h3 className="text-lg text-gray-600 mb-2">Location: {location}</h3>
      <h4 className="text-base text-gray-500">Contact: @tiwari</h4>
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Follow
      </button>
    </div>
  );
};

export default User;
