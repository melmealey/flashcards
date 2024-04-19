import { Tr, Td } from '@chakra-ui/react'
import { useState } from 'react'


const Cell = ({ card, children, updateFlashCard, isFront }) => {
    const [content, setContent] = useState(children)

    const handleInputChange = (event) => {
        setContent(event.target.value)
    }

    const handleBlur = () => {
        updateFlashCard({content, card, isFront}) //pass things in here. you prob need the id and isFront? 
    }
    return (
        <Td>{
          <input 
                value={content} 
                onBlur={handleBlur} 
                onChange={handleInputChange}
                />
        }</Td>
    )
}


const TableRow = ({ card, updateFlashCard }) => {
    const {id, front, back} = card
    return (
        <Tr key={id}>
            <Cell isFront {...{card, updateFlashCard}}>{front}</Cell>
            <Cell {...{card, updateFlashCard}}>{back}</Cell>
        </Tr>
    )
}

export default TableRow