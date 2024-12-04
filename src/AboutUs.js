import { useState } from "react";

export function AboutUs(props)
{
    const [name, setName] = useState('Sai');
    const testObj = [
        {
            name:'A',
            gender: 'M',
            id: "12345",
            salary: 6000
        },
        {
            name:'B',
            gender: 'M',
            id: "123456",
            salary: 61000
        },
        {
            name:'D',
            gender: 'F',
            id: "123457",
            salary: 60000
        }
    ]
    
    const handleClick = () => {
        setName('Saran')
    }

    const updatedList = testObj.map((listItems)=>{
        return <li key={listItems.id}>{listItems.name}</li>;
    });

    return(
        <div>
        <ul>{updatedList}</ul>
        <li>{name}</li>
        <input type="button" value="Click here" onClick={handleClick} />
        </div>
    );
}

export default AboutUs;