import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import { Hero } from "./sections/hero/Hero";
import { Welcome } from "./sections/welcome/Welcome";
import { Menu } from "./sections/menu/Menu";

export const Home = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Welcome />
            <Menu />
        </>
    );
};
