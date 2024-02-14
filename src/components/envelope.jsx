export const Envelope = () => {
  return (
    <>
      <div className="envelope-wrapper">
        <div id="Envelope" className="close">
          <div className="front flap"></div>
          <div className="front pocket"></div>
          <div className="letter">
            <p className="words line1">Are you a software update?</p>
            <p className="words line2">Because you've got my heart racing.</p>
            <p className="words line3">My love for you is like a loop:</p>
            <p className="words line3">...it never ends.</p>
            <p className="words line4">xoxo...</p>
            <p className="words line5">Joy</p>
          </div>
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
        <button id="open">Open</button>
        <button id="reset">Reset</button>
      </div>
    </>
  )
}