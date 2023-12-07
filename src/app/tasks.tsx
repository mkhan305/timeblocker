'use client'; 
import { useState } from 'react'; 
import { Input, HStack, VStack, Button } from '@chakra-ui/react'; 
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

export type Task = { 
    name : string, 
    id: string, 
    timeCompleted : number
}; 

export default function Tasks() { 
    const [tasks, setTasks] = useState<string[]>([]); 

    // changes the tasks to an Array of <Checkbox> JSX elements that we can display
    // const taskBoxes =  tasks.map((t, i) => <Checkbox key={i} onChange={onCheck} id={String(i)}>{t}</Checkbox>)
    const taskBoxes =  tasks.map((t, i) => <Task key={i} name={t} id={i}/> )

    function onCheck(event : React.ChangeEvent<HTMLInputElement>) { 
        console.log(event.currentTarget)
    }

    function submit(event : React.KeyboardEvent<HTMLInputElement> ) { 
        if (event.key === "Enter") { 
            event.preventDefault(); 
            
            // mutating the array doesnt trigger a rerender - we must create a new array and update from there 
            setTasks([...tasks, event.currentTarget.value]); 

            // resets the value of the input 
            event.currentTarget.value = ""; 
            console.log(tasks); 
        }
    }
    return (
        <form id="taskAdder"> 
            <VStack alignItems="start" spacing={5}> 
                <Input w="100%" size="md" variant="flushed" placeholder='Add Task' onKeyDown={submit}/>  
                
                <CheckboxGroup>
                    {taskBoxes}
                </CheckboxGroup>
            </VStack> 
        </form>
    )
}


export function Task({ name, id } : { name : string, id : Number }) { 
    
    const [isChecked, setIsChecked] = useState(false); 



    function toggleStrike(event : React.ChangeEvent<HTMLInputElement>) { 
        console.log(event.currentTarget.id); 
        
        // if not checked, push item to completedItems 

        const currentTasksString= localStorage.getItem("completedTasks") ? localStorage.getItem("completedTasks") : "[]"; 
        let currentTasks : CompletedTasks = JSON.parse(currentTasksString ? currentTasksString : ""); 

        if (!isChecked) { 
            
            currentTasks.push({ name: event.currentTarget.name, id: event.currentTarget.id, timeCompleted: Date.now() })
            // completedItems.push("hi"); 
        }
        else { 
            const length = currentTasks.length; 
            for (let i = 0; i < length; ++i) { 
                const task = currentTasks[i]; 
                if (task.name == event.currentTarget.name && task.id == event.currentTarget.id) { 
                    currentTasks.splice(i, 1); 
                    break; 
                }
            }
        }
        console.log(currentTasks); 
        localStorage.setItem("completedTasks", JSON.stringify(currentTasks));   
        setIsChecked(!isChecked)
    }


    return ( 
        <Checkbox colorScheme="gray" name={name} id={String(id)} onChange={toggleStrike} textDecoration={isChecked ? "line-through" : "none"}> {name} </Checkbox> 
    )

}; 