import './Component.css'

const WelcomeText = () => {

    const labelStyle = {
        top: '68px',
        position: 'absolute',
        fontWeight: '150',
        fontSize: '40px',
        color: 'white'
      };

    return (
    <span style={labelStyle} className='begin'>
        WELCOME TO
    </span>
    );
};


export default WelcomeText;