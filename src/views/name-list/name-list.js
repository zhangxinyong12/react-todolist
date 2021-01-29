import styleModule from './name-list.module.scss';
import Button from '../../components/button';
import UpdateName from '../update-name/update-name';
import { useState } from 'react';

export default function (props) {
    const [show, setShow] = useState(false);
    const [item, setTtem] = useState({});
    const { list } = props;
    const showUpdate = (item) => {
        setShow(true);
        setTtem(item);
    };
    const listEle = list.map((item, index) => (
        <li className={styleModule.list} key={item.name + item.age}>
            <span>名字：{item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span >年龄：{item.age}</span>
            <Button onClick={showUpdate.bind(this, item, index)}>修改</Button>
        </li>
    ));
    return (
        <div>
            <ul>
                {listEle}
            </ul>
            {show ? <UpdateName item={item} submit={setTtem}></UpdateName> : ''}
        </div>
    );
}