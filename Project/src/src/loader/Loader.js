import './Loader.css';

export default function Loader(props){
    return(
        <div>
            <div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>Loading...</div>
        </div>

    );
}