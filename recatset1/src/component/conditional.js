
function AnimalImage() {
    let a = Math.random();
    const coinToss =  a < 0.5 ? 'heads' : 'tails';

    const pics = {
        kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
        doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
    };

    return (
        <>

            <img src={coinToss === "heads" ? pics.kitty : pics.doggy} alt="Random Animal" />
            <h1>The value of coinToss = {a}</h1>
        </>
    );
}

export default AnimalImage;
