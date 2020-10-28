import { useState, useEffect } from 'react'

export default function Prices({ bpi }) {
  const [currency, setCurrency] = useState('USD')
  const [list, setList] = useState()

  useEffect(() => {
    let obj
    switch (currency) {
      case 'USD':
        obj = {
          description: bpi.USD.description,
          code: bpi.USD.code,
          rate: bpi.USD.rate,
        }
        break
      case 'GBP':
        obj = {
          description: bpi.GBP.description,
          code: bpi.GBP.code,
          rate: bpi.GBP.rate,
        }
        break
      case 'EUR':
        obj = {
          description: bpi.EUR.description,
          code: bpi.EUR.code,
          rate: bpi.EUR.rate,
        }
        break
    }
    setList(obj)
  }, [currency])
  return (
    <div>
      {list && (
        <ul className="list-group">
          <li className="list-group-item">
            Bitcoin rate for {list.description}:{' '}
            <span className="badge badge-primary mx-2">{list.code}</span>
            <strong>{list.rate}</strong>
          </li>
        </ul>
      )}
      <br />
      <select
        onChange={e => setCurrency(e.target.value)}
        className="form-control"
      >
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  )
}
