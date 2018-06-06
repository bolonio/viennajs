import React from 'react'

export default function Footer (props: Props) {
  return (
    <footer className='footer-main'>
      <div className='links'>
        <div className='gptw-logo'>
          <a href='https://www.greatplacetowork.at/workplace/item/104/willhaben+internet+service+GmbH+%26+Co+KG' target='_blank'>
            <img src='https://cache.willhaben.at/img/logo_gptw.png' alt='Great Place to Work - Beste Arbeitgeber' />
          </a>
        </div>
        <div className='footer-site-map-wrapper'>
          <ul className='noStyle noPad footer-site-map'>
            <li className='footer-main-title'><a href='https://www.willhaben.at/iad/contactsupportform'>Kontakt</a></li>
            <li className='footer-main-title'><a href='https://werbung.willhaben.at' target='_blank'>will Werbung</a></li>
            <li className='footer-main-title'><a href='https://www.willhaben.at/iad/jobs-bei-willhaben'>Jobs bei willhaben</a></li>
            <li className='footer-main-title'><a href='https://www.willhaben.at/iad/presse'>Presse</a></li>
            <li className='footer-main-title'><a href='https://www.willhaben.at/iad/help'>FAQ</a></li>
            <li className='footer-main-title'><a href='https://www.willhaben.at/iad/sitemap'>Sitemap</a></li>
            <li className='footer-main-title'><a href='https://www.willhaben.at/iad/sicherheitshinweise'>Sicherheitshinweise</a></li>
            <li className='footer-main-title'><a href='https://www.willhaben.at/agb'>AGB</a></li>
            <li className='footer-main-title'><a href='https://www.willhaben.at/datenschutzerklaerung'>Datenschutzerklärung</a></li>
            <li className='footer-main-title'><a href='https://datenschutz.willhaben.at'>Meine Daten</a></li>
            <li className='footer-main-title'><a href='https://www.willhaben.at/iad/impressum'>Impressum</a></li>
            <li className='footer-main-title'><a href='https://www.willhaben.at/iad/mobile'>Mobile und Apps</a></li>
            <li className='footer-main-title'><a href='https://tech.willhaben.at/'>Tech Blog</a></li>
            <li className='footer-main-title'><a href='https://www.willhaben.at/jobs/paymentinformation'>Gehaltsinformationen</a></li>
          </ul>
        </div>
      </div>
      <div className='copyright'>
        <div className='copyright-elem'>© 2018 willhaben. Alle Rechte
            vorbehalten.
        </div>
      </div>
    </footer>
  )
}
