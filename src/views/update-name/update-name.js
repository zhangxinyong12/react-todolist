import { useState } from 'react';
import styleModule from './update-name.module.scss';

export default function (props) {
    const { item, submit } = props;
    const [nameItem, setNameItem] = useState(item.name);

    const handleSubmit = (event) => {
        event.preventDefault();
        submit({ ...item, name: nameItem });
        console.log({ ...item, name: nameItem });
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