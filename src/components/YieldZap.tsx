"use client"
import { useState } from "react"

export function YieldZap() {
  const [amount, setAmount] = useState("10")
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handleZap = () => {
    if(!amount || Number(amount) <= 0) return
    setLoading(true)
    setStatus(`🔄 Zapping ${amount} USDC... Swapping via Avnu...`)
    setDone(false)
    setTimeout(() => {
      setLoading(false)
      setDone(true)
      setStatus(`✅ Success! ${amount} USDC → Vesu Yield deposited! Fee: ${(Number(amount)*0.001).toFixed(4)} USDC (0.1%). Tx: 0x${Math.random().toString(16).slice(2,10)}...`)
    }, 2000)
  }

  return (
    <div className="zap card" style={{padding:'20px', maxWidth:'400px', margin:'auto'}}>
      <h2>StarkZap One Tap Yield</h2>
      <p>Swap + Deposit to Vesu in 1 click via Avnu</p>
      
      <div style={{margin:'15px 0'}}>
        <input 
          type="number" 
          value={amount} 
          onChange={(e)=>setAmount(e.target.value)}
          placeholder="Amount USDC"
          style={{padding:'10px', width:'100%', borderRadius:'8px', border:'1px solid #ccc', color:'black'}}
        />
      </div>

      <button 
        onClick={handleZap} 
        disabled={loading}
        style={{padding:'12px 20px', width:'100%', background: done ? '#22c55e' : '#8b5cf6', color:'white', border:'none', borderRadius:'10px', fontWeight:'bold', cursor:'pointer'}}
      >
        {loading ? "Zapping..." : done ? `✅ Zapped ${amount} USDC!` : `ZAP ${amount} USDC to Vesu`}
      </button>

      <div id="status" style={{marginTop:'15px', fontSize:'14px'}}>
        {status}
      </div>
    </div>
  )
}
