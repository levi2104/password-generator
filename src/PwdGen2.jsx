import { useState } from "react"
import { FaCheck } from "react-icons/fa6"
import { FiCopy } from "react-icons/fi"

const PwdGen2 = () => {
  const [pass, setPass] = useState("12345678")
  const [length, setLength] = useState(8)
  const [isNumChecked, setIsNumChecked] = useState(false)
  const [isCharChecked, setIsCharChecked] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const setPassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let nums = "0123456789"
    let specialChars = "!@#$%*"
    let password = ""

    if(isNumChecked){
      chars += nums
      password += nums[Math.floor(Math.random() * nums.length)]
    }

    if(isCharChecked){
      chars += specialChars
      password += specialChars[Math.floor(Math.random() * specialChars.length)]
    }

    for(let i = password.length; i < length; i++){
      password += chars[Math.floor(Math.random() * chars.length)]
    }

    setPass(password)
  }

  const setCopy = () => {
    window.navigator.clipboard.writeText(pass)
    setIsCopied(true)

    setTimeout(() => setIsCopied(false), 3000)
  }

  return (
    <div className="bg-black text-white flex justify-center">
      <div className="mt-12 h-fit w-fit p-4 rounded-md space-y-4" style={{backgroundColor: "olive"}}>
        <div className="flex gap-2 justify-center items-center">
          <div>Password:</div>
          <input type="text" className="text-black focus:outline-none rounded-sm p-2" value={pass} readOnly/>
          <button onClick={setCopy}>{isCopied ? <FaCheck/> : <FiCopy/>}</button>
        </div>

        <div className="flex gap-2">
          <input type="range" value={length} min={6} max={50} onChange={e => setLength(e.target.value)}/>
          <div>Length: {length}</div>

          <div className="flex gap-1 ml-6">
            <label htmlFor="number">Number</label>
            <input type="checkbox" id="number" checked={isNumChecked} onChange={e => setIsNumChecked(e.target.checked)}/>
          </div>

          <div className="flex gap-1 ml-1">
            <label htmlFor="char">Characters</label>
            <input type="checkbox" id="char" checked={isCharChecked} onChange={e => setIsCharChecked(e.target.checked)}/>
          </div>
        </div>

        <div className="flex gap-2 justify-center">
          <button 
            className="py-2 px-3 border border-white rounded-md bg-white text-black"
            onClick={setPassword}
          >
            Generate
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default PwdGen2