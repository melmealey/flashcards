import { useState } from 'react'
import { Button, ButtonGroup, CardBody, Text, Flex, Spacer, Box } from '@chakra-ui/react'
import Card from '../components/Card'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

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

const Study = () => {
    const [flashcards, setFlashcards] = useState(flashcardList)
    const [currentCard, setCurrentCard] = useState(0)

    const incrementCard = () => {
        if (currentCard + 1 < flashcards.length) {
            setCurrentCard(currentCard => currentCard + 1)
        }
    }

    const decrementCard = () => {
        if (currentCard !== 0) {
            setCurrentCard(currentCard => currentCard - 1)
        }
    }

    const restart = () => {
        setCurrentCard(0)
    }

    return (
        
        <Box w={800} align="center" style={{position: 'relative'}}>
            <p>{currentCard + 1} / {flashcards.length}</p>
            <Card {...flashcards[currentCard]}/>
   

            <Box w={400}>
                <Flex>
                    {currentCard > 0 && <Button leftIcon={<ArrowLeftIcon />} colorScheme='teal' onClick={decrementCard}>BACK</Button>}
                    <Spacer />
                    {currentCard < (flashcards.length - 1)
                        ? <Button onClick={incrementCard} rightIcon={<ArrowRightIcon />} colorScheme='teal' >NEXT</Button>
                        : <Button colorScheme='teal' variant='outline' onClick={restart}>Restart</Button>
                    }
                </Flex>

            </Box>
        </Box>
    )
}

export default Study