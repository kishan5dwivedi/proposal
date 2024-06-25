import CommentedImage from '../components/Commented Image'
import CornyQuestion from '../components/Corny Question'
import RandomButton from '../components/Random Button'

import { useRef, useState } from 'react'

import {
  Button,
  Code,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'

export default function Home() 
{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const [confirmed, setConfirmation] = useState(false)

  return (
    <>
    
      <div className="flex flex-row justify-center items-center w-full h-full bg-pink-200 p-10 drop-shadow-xl">
        <div className="w-2/3 h-64 bg-gradient-to-r from-pink-300 to-pink-200 drop-shadow-xl rounded-full text-center transition-all duration-300">
          <h1 className="p-20 tracking-wide text-8xl font-bold text-white uppercase drop-shadow-lg">Hi Adorable</h1>
        </div>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full h-100 bg-pink-50">
        <CommentedImage src='/pretty.jpeg' text="wow so pretty"/>
        <CommentedImage src='/cute.jpeg' text="omg we&apos;re so cute"/>
        <CommentedImage src='/kiss.jpeg' text="we should kiss?"/>
      </div>

      <div className="text-center w-full h-64 bg-pink-200 drop-shadow-xl">
        <h1 className="p-20 tracking-wide text-6xl font-bold text-pink-400 uppercase drop-shadow-xl">So I heard...its ur bday</h1>
      </div>

      <div className="flex flex-col items-center text-center w-full h-96 bg-pink-50 p-10">
        <div className="flex flex-row items-center text-center w-full h-5/6 bg-pink-50">
          <h1 className='w-1/3 text-pink-300 font-bold text-6xl'>You Need </h1>
          <img src='https://sweezy-cursors.com/wp-content/uploads/cursor/milk-amp-mocha-bear-love/milk-mocha-bear-love-custom-cursor.png' width={600}/>
          <h1 className='w-1/3 text-pink-300 font-bold text-6xl'>take my heart</h1>
        </div>
        <h1 className="w-full h-1/4 text-pink-300 font-bold text-6xl uppercase">gift?</h1>
      </div>

      <div className="text-center w-full h-64 bg-pink-200 drop-shadow-xl">
        <h1 className="p-20 tracking-wide text-6xl font-bold text-pink-400 uppercase drop-shadow-xl">So...take my proposal</h1>
      </div>

      <CornyQuestion 
        question="Would you like to be sugar in tea?"
        active="/tea.jpeg"
        primary
        left
      />

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-200 p-5">
        <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>Would you</h1>
      </div>

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 p-5">
        <h1 className='w-2/3 text-pink-300 font-bold text-6xl'>Uh</h1>
      </div>

      <CornyQuestion 
        question="Would you be my oxygen?"
        active="/oxygen.jpeg"
        secondary
        right
      />

      <CornyQuestion 
        question="Would you be my radha?"
        active="/radha.jpeg"
        primary
        left
      />

      <CornyQuestion 
        question="Would you be my wife?"
        active="/wife.jpeg"
  
        secondary
        right
      />

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 px-5 pt-5">
        <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>If I&apos;m C would you be my C++?</h1>
      </div>

      <div className="flex flex-row justify-around items-start text-center w-full h-36 bg-pink-50 pb-5">
        <RandomButton 
          text="No"
          minHeight={ 4600 }
          maxHeight={ 5000 }
        />

        <button 
          className="w-36 bg-pink-400 text-white text-2xl p-5 rounded-2xl"
          onClick={ onOpen }
        >
          YES
        </button>

        <AlertDialog
          isOpen={ isOpen }
          leastDestructiveRef={ cancelRef }
          onClose={ onClose } 
        >
          <AlertDialogOverlay>
            <AlertDialogContent>

              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                OMG.
              </AlertDialogHeader>

              <AlertDialogBody>
                NO WAY SHE JUST SAID YES?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button 
                  colorScheme='pink' 
                  ref={ cancelRef } 
                  onClick={
                    () => 
                    {
                      onClose();
                      setConfirmation(true);
                    }
                  }
                >
                  Confirm
                </Button>
              </AlertDialogFooter>

            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </div>

      {
        confirmed ? 
        <div className="flex flex-col justify-around items-center text-center w-full h-[58em] bg-pink-200 p-5">
          <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>Proposal Confirmation Ticket / Review</h1>
          <div className="flex flex-col items-center gap-5 text-center w-3/4 h-5/6 bg-white p-5 rounded-3xl shadow-xl">
            <img className="h-24" src="https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__480.png" alt=""/>
            <h1 className='w-2/3 text-black font-bold text-4xl underline'>
              Thank You For Your Confirmation!
            </h1>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Name of Partner
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              Kishan Dwivedi
            </h3>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Location
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              pallavi's heart
            </h3>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Time
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              24th August, 2017, 11:00pm
            </h3>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Events
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              • Dinner • Photos • gulu gulu• ar bhi gulu gulu•
            </h3>
            <img className="h-24" src="https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__480.png" alt=""/>
          </div>
        </div>
        : 
        <></>
      }
    
    </>
  )
}
