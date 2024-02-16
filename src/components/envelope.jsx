import { useEffect, useRef, useState} from "react"
import './envelope.css'
import { Letter } from './letter'
import { Hearts } from "./hearts"

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
          <Hearts/>
        </div>
      </div>
      <div className="button-wrapper">
        <button id="Toggle" ref={toggleRef} onClick={toggleEnvelope}>Open/Close Envelope</button>
      </div>
    </>
  )
}