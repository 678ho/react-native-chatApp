import Login from "./Login";
import Signup from "./Signup";
import AuthStack from "../navigations/AuthStack";

const Navigation = () => {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
};

export default Navigation;