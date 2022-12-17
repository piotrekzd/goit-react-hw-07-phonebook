import { TailSpin } from "react-loader-spinner";
import style from './Loader.module.css';

export const Loader = () => {
    <div className={style.loader}>
        <TailSpin
            height="80"
            width="80"
            color="#add8e6"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>
};