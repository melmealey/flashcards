import { Button, ButtonGroup, CardBody, Text, Flex, Spacer, Box, Card as ChakraCard } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

const Card = ({front, back, id}) => {
    const [isFlipped, setIsFlipped] = useState(false)

    useEffect(()=> {
        setIsFlipped(false)
    }, [id])

    const handleFlip = (defaultValue) =>  {
        if(defaultValue !== undefined){
            setIsFlipped(defaultValue)
            return
        }
        setIsFlipped(isFlipped => !isFlipped)
    }

    return (
        <ChakraCard onClick={() => handleFlip()} m={20} h={400} align="center" style={{ cursor: 'pointer' }}>
            <CardBody display='flex' alignItems='center'>
                <Text style={{ userSelect: 'none' }}>{!isFlipped ? front : back}</Text>
            </CardBody>
        </ChakraCard>
    )
}

export default Card