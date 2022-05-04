import Logo from "./Logo";

const Header = () => (
    <header>
        <nav>
            <Logo />
            {/* {!isHome && <LogoutButton />} */}
        </nav>
    </header>
);

export default Header;