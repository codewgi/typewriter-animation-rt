import { TypeAnimation } from "react-type-animation";

const Home = () => {
    return ( 
        <div className="w-full min-h-screen bg-neutral-900 grid place-content-center">
            <TypeAnimation
                sequence={[
                    "I Am Web Developer",
                    1000,
                    "I Am Software Developer", 
                    1000, 
                    "I Am BlockChain Developer", 
                    1000
                ]}
                wrapper="span"
                speed={50}
                className="text-6xl font-bold text-neutral-300"
                repeat={Infinity}
            />
        </div>
    );
}
 
export default Home;