import User from "./User";
import UserContext from "../utils/UserContext";

const About = () => {
    return (
        <div className="about-page">
            <h1>About</h1>
            <div>
                LoggedIn User
                <UserContext.Consumer>
                    {({ loggedInUser }) => (
                        <h1 className="text-xl font-bold">{loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
            </div>
            <h2>This is the provider page</h2>
            <User />
        </div>
    )
};

export default About;