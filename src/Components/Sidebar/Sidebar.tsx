import React, {useState} from 'react';
import {Button} from '../Button';
import './Sidebar.css';
import {IArticle, IFormData} from '../../models';


const initFormData: IFormData = {
    name: '',
    lastname: '',
    title: '',
    description: ''
};

export const Sidebar: React.FC<{onSubmit: (data: Omit<IArticle, 'id'>) => void}> = (props) => {
    const [formData, setFormData] = useState<IFormData>(initFormData);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const {id, value} = event.target;
        setFormData({...formData, [id]: value});
    }

    const createData = (): Omit<IArticle, 'id'> => {
        const {name, description, lastname, title} = formData;
        const created_at = new Date().toISOString();
        return {
            title,
            description,
            created_at,
            author: {
                name,
                lastname
            }
        }
    }

    const onSubmit = (event: any) => {
        event.preventDefault()
        setFormData({...initFormData})
        const data = createData()
        props.onSubmit(data);
    }

    return (
        <div className={'sidebar'}>
            <form onSubmit={onSubmit}>
                <div>
                    <p>Author Info:</p>
                    <label htmlFor='name'>Name:</label>
                    <input
                        id='name'
                        type='text'
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <label htmlFor='lastname'>Last Name:</label>
                    <input
                        id='lastname'
                        type='text'
                        required
                        value={formData.lastname}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <p>News Info:</p>

                    <label htmlFor='title'>Title:</label>
                    <input
                        id='title'
                        type='text'
                        required
                        value={formData.title}
                        onChange={handleChange}/>

                    <label htmlFor='description'>Description:</label>
                    <textarea
                        id='description'
                        required
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <Button title={'Add'}></Button>
            </form>
        </div>
    );
}
