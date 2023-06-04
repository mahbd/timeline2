import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {useState} from "react";
import Form from "./Form";


export default function OutlinedTimeline() {
    const [items, setItems] = useState([
        {
            color: "primary",
            content: "Eat"
        },
        {
            color: "secondary",
            content: "Code"
        },
        {
            color: "primary",
            content: "Sleep"
        },
        {
            color: "secondary",
            content: "Repeat"
        }
    ]);

    const onSubmit = (val) => {
        const newItem = {
            color: items.length  % 2 === 0 ? "primary" : "secondary",
            content: val
        };
        const newItems = [...items, newItem];
        setItems(newItems);
    }
    return (
        <div>
        <Timeline position="alternate">
            {
                items.map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot style={{ width: '5px', height: '5px', borderWidth: '5px' }} variant="outlined" color={item.color}/>
                            {index !== items.length - 1 && <TimelineConnector style={{ backgroundColor: 'red', height: '50px', width: '5px' }}/>}
                        </TimelineSeparator>
                        <TimelineContent color={'#f12'}>{item.content}</TimelineContent>
                    </TimelineItem>
                ))
            }
        </Timeline>
            <Form onSubmit={onSubmit} />
        </div>
    );
}