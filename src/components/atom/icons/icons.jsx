
const Icons = ({src,alt, className}) => {
    return (
        <img src={src} 
        alt={alt} 
        className={`icom-atom ${className}`}/>
    );
};

export default Icons;