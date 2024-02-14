import { useEffect, useRef, useState} from "react";
import './envelope.css'
import { Letter } from './letter'

export const Envelope = () => {

  const envelopeRef = useRef(null)
  const toggleRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const envelopeElement = envelopeRef.current
    const toggleElement = toggleRef.current
    console.log(`Envelope:`)
    console.log(envelopeElement)
    console.log(`toggleElement:`)
    console.log(toggleElement)
  }, [])

  const toggleEnvelope = (event) => {
    event.preventDefault()
    setIsOpen(envelopeRef.current = !envelopeRef.current)
  }

  return (
    <>
      <div className="envelope-wrapper">
        <div id="Envelope" ref={envelopeRef} className={isOpen ? 'open' : 'close'} onClick={toggleEnvelope}>
          <div className="front flap"></div>
          <div className="front pocket"></div>
          <Letter/>
          <div className="hearts">
            <div className="hearts a1"></div>
            <div className="hearts a2"></div>
            <div className="hearts a3"></div>
            <div className="hearts a4"></div>
            <div className="hearts a5"></div>
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        <button id="Toggle" ref={toggleRef} onClick={toggleEnvelope}>Open/Close Envelope</button>
      </div>
    </>
  )
}