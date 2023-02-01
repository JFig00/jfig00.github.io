import './styles/about.css';

const About = () => {
    var c = document.getElementById("clickit");
    var up = 0;
    var me = [
        "My name is Johnny Figueroa",
        "I am 22 years old",
        "I attended Florida Atlantic University",
        "I have a Bachelor's in Computer Science",
        "I have a Certificate in Data Science",
        "I specialize in Web Development",
        "This website is my playground! So expect things that are impractical but fun",
        "Feel free to explore the rest of the website! Enjoy!"
    ];

    function B() {
        up++;
        console.log(me[up]);
        if (up >= me.length) {
            up = 0;
        }
        c.innerHTML = me[up];
    }

    return (
        <>
            <div className="grid-container">
                <div className="col-9">
                    <h1 className="middle">About</h1>
                    <p id='clickit'>Hello! Click the button below to learn more about me:</p>
                    <button onClick={B}>Button</button>
                </div>
            </div>
        </>
    )
}

export default About;