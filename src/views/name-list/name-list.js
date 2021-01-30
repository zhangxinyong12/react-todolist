import styleModule from './name-list.module.scss';
import Button from '../../components/button';
import UpdateName from '../update-name/update-name';
import { useState,useEffect } from 'react';

export default function (props) {
    const [show, setShow] = useState(false);
    const [item, setTtem] = useState({});
    const [currentIndex, setCurrentIndex] = useState('')
    const [listArr, setListArr] = useState([])

    useEffect(()=>{
        setListArr(props.list)
    },[props.list])
    // const { list } = props;
    const showUpdate = (item,index) => {
        setShow(true);
        setTtem(item);
        setCurrentIndex(index)
    };
    const upDateList = (data,index) => {
        // console.log(data,index)
        listArr.splice(index,0,data)
        listArr.splice(index+1, 1)
        setListArr([...listArr])
    }
    const listEle = listArr.map((item, index) => (
        <li  key={item.name + item.age}>
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
            {show ? <UpdateName item={item} submit={upDateList} currentIndex={currentIndex}></UpdateName> : ''}
        </div>
    );
}
