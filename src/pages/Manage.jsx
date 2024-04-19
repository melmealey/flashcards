import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
    Button,
    Box
} from '@chakra-ui/react'
import { useState } from 'react'
import TableRow from '../components/TableRow'


const flashcardList = [
    {
        id: 1,
        front: '2+2',
        back: '4'
    },
    {
        id: 2,
        front: 'what is a cloud?',
        back: 'water in the sky'
    },
    {
        id: 3,
        front: `what's the best color?`,
        back: 'lime green'
    }

]

const Manage = () => {
    const [flashcards, setFlashcards] = useState(flashcardList)

    const addCard = () => {
        //add a new card to flashcards with a blank front and back
        const newCard = {
            front: '',
            back: '',
            id: flashcards[flashcards.length - 1].id + 1
        }

        setFlashcards(flashcards => [...flashcards, newCard])

    }

    const updateFlashCard = ({content, card, isFront}) => {
        const newArr = flashcards.map(flashcard => flashcard.id === card.id 
            ? isFront ? {...card, front: content} : {...card, back: content} 
            : flashcard)

        setFlashcards(newArr)
    }

    return (
        <Box>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Front</Th>
                            <Th>Back</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {flashcards.map((card) => (
                            <TableRow key={card.id} {...{card, updateFlashCard}}/>
                        ))}
                    </Tbody>

                </Table>
            </TableContainer>
            <Button onClick={addCard}>+</Button>
        </Box>
    )
}

export default Manage