import { useState } from 'react';
import styleModule from './update-name.module.scss';

export default function (props) {
    const { item, submit, currentIndex } = props;
    const [nameItem, setNameItem] = useState(item.name);

    const handleSubmit = (event) => {
        console.log('111',currentIndex,nameItem)
        event.preventDefault();
        // submit({ ...item, name: nameItem });
        // console.log({ ...item, name: nameItem });
        // 更新数据
        submit({...item, name: nameItem},currentIndex)
    };

    const handleChange = (event) => {
        console.log(item);
        setNameItem(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                名字:
          <input type="text" value={nameItem} onChange={handleChange} />
            </label>
            <input type="submit" value="提交" />
        </form>
    );
}
