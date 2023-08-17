"use client"
import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import Suggestion from './Suggestion';

function Suggestions() {
    const [suggestion, setSuggestion] = useState([]);
    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => ({
            _id: faker.datatype.uuid(),
            avatar: faker.image.avatarLegacy(),
            userName: faker.person.fullName()
        }))
        setSuggestion(suggestions);
    }, []);
    return (
        <div>
            <div className='flex justify-between'>
                <p className='text-xs font-semibold text-gray-400'>Gợi ý cho bạn</p>
                <p className='text-xs font-semibold'>Xem tất cả</p>
            </div>
            {suggestion.map((item) => <Suggestion key={item._id} username={item.userName} name={item.name} />)}
        </div >
    )
}

export default Suggestions