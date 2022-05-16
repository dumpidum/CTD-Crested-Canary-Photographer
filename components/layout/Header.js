
import Logo from "./Logo";
import signIn from "../../pages/signin";
import Link from "next/link";
function Header() {



    return (
        <div>
            <header>
                <nav>
                    <Logo />
                    <>
                        {/* {!isHome && <LogoutButton />} */}
                        < img className="user_img" onClick="" alt="profile pic"
                        />
                    </>
                    <Link href="/signup">Sign Up</Link>{" "}
                    <Link href="/signin">Sign In</Link>
                    <button onClick="">Sign In</button>

                </nav>
            </header>


        </div>
    )
}


export default Header;



