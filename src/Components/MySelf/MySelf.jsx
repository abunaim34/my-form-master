import Special from "../Special/Special";


const MySelf = ({asset}) => {
    return (
        <div>
            <h2>Abu Naim</h2>
            <section className="flex">
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default MySelf;