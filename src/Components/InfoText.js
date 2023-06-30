import './Component.css';

const InfoText = () => {
    const labelStyle = {
        width: '800px',
        top: '450px',
        position: 'absolute',
        fontWeight: 'bold',
        fontSize: '17px',
        color: 'white'
      };

    return (
    <span style={labelStyle} className='info'>
        Observe and enjoy the collaborations of your favorite actors in the peak of their filmmaking. Or just enjoy the pretty colors.
        
        Hover around the graph or use the search to type in the actors you want to see more about. Use the add collaboration button to see what movies two actors have worked on together.
    </span>
    );
};

export default InfoText;