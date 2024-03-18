import './styles.css';
import CardFilmeProps from './interfaces';
import Image from 'next/image';
export default function (props: CardFilmeProps) {
    return (
        <div className='cardFilme'>
            <h2>{props.title}</h2>
            <Image className='image' src={props.image} alt="Imagem p/ o filme" width={220} height={300} />
            <a className='bg-sky-700' href={props.link}>Assistir</a>
        </div>
    );
};