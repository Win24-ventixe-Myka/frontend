import React from 'react'

const TermsAndConditions = () => {
  return (
    <div id="terms">
      <div className="event-card">
        <div className="terms-header">
          <h3>Terms & Conditions</h3>
        </div>
        <ol className="terms-list">
          <li className='terms-title'>
            Ticket Purchase and Entry
            <ul className="list-items">
              <li>All attendees must possess a valid ticket for entry.</li>
              <li>Tickets are non-refundable and non-transferable unless specified by the event organizer.</li>
              <li>Attendees must present a valid government-issued ID along with their ticket at the gate.</li>
            </ul>
          </li>

          <li className="terms-title">
            Security and Safety
            <ul className="list-items">
              <li>Attendees are subject to security checks, including bag inspections, upon entry.</li>
              <li>Prohibited items include weapons, drugs, alcohol, fireworks, and other hazardous materials.</li>
              <li>The event organizer reserves the right to deny entry to individuals deemed a security risk.</li>
            </ul>
          </li>
          
        </ol>
      </div>
    </div>
  )
}

export default TermsAndConditions