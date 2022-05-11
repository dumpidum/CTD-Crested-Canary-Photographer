import { useSession, signOut, signIn } from "next-auth/react";
import Logo from "./Logo";
function Header() {
    const { data: session } = useSession();

    console.log(session);
    return (
        <div>
            <header>
                <nav>
                    <Logo />
                    {session ? (
                        <>
                            {/* {!isHome && <LogoutButton />} */}
                            < img className="user_img" onClick={signOut} src={session.user.image} alt="profile pic"
                            />
                        </>
                    ) : (<button onClick={signIn}>Sign In</button>)}

                </nav>
            </header>


        </div>
    )
}


export default Header;



