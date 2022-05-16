
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
                    
                    
                    </>
                    <Link href="/signup">Sign Up</Link>{" "}
                    <Link href="/signin">Sign In</Link>
                

                </nav>
            </header>


        </div>
    )
}


export default Header;



