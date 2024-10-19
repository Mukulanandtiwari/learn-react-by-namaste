import { useEffect, useState } from 'react'
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
        console.log(json);
        setUserInfo(json);
    }

    const{ name, location, avatar_url } = userInfo;

    return (
        <div className="user-card">
            <img className='avatar-img' src={avatar_url} alt='user avatar'/>
            <h1>Name: {name}</h1>
            <h3>Location: {location}</h3>
            <h4>Contact: @tiwari</h4>
        </div>
    )
};

export default User;