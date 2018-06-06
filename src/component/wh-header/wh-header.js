import React from 'react'

export default function Header (props: Props) {
  return (
    <header className='nav-header'>
      <div className='wh-mobile-navigation'>
        <nav className='navigation navbar navbar-willhaben clearfix'>
          <div className='navbar-willhaben-wrapper nav-main-line pull-left clearfix'>
            <div className='toggle-menu-button nav-group-left pull-left' ng-click='sidemenuCtrl.onToggleMenu()'>
              <div className='btn-nav btn-nav-left-corner'>
                <i className='icon-burger' aria-hidden='true' />
              </div>
            </div>
            <a href='https://www.willhaben.at'>
              <div id='logo' className='logo pull-left' />
            </a>
          </div>
        </nav>
      </div>
      <div className='wh-navigation'>
        <div className='logo-container pull-left'>
          <a href='https://www.willhaben.at'>
            <div className='logo' />
          </a>
        </div>
        <div className='nav-container pull-right'>
          <nav className='nav-login'>
            <ul className='nav nav-pills'>
              <li>
                <a className='nav-link' href='/jobs/login' data-testid='tid-login-bar-my-job'>
                  Mein Job
                </a>
              </li>
              <li>
                <a className='nav-link login-link' href='/jobs/login' data-testid='tid-login-bar-login'>
                  Login
                </a>
                |
                <a className='nav-link register-link' href='/jobs/registrieren' data-testid='tid-login-bar-register'>
                  Registrieren
                </a>
              </li>
              <li>
                <a className='btn wh-btn-yellow btn-block' href='/jobs/arbeitgeber' role='button' data-testid='tid-login-bar-new-ad'>
                  Anzeige aufgeben
                </a>
              </li>
            </ul>
          </nav>
          <nav className='pull-right nav-main top-navigation'>
            <ul className='nav nav-pills nav-main-top'>
              <li>
                <a href='https://www.willhaben.at/iad/immobilien/'>
                  Immobilien <small>85.466</small>
                </a>
              </li>
              <li>
                <a href='https://www.willhaben.at/iad/gebrauchtwagen/'>
                  Auto &amp; Motor <small>151.114</small>
                </a>
              </li>
              <li>
                <a href='https://www.willhaben.at/jobs/'>
                  Jobs &amp; Karriere <small>13.250</small>
                </a>
              </li>
              <li className='active'>
                <a href='https://www.willhaben.at/iad/kaufen-und-verkaufen/'>
                  Marktplatz <small>4.723.178</small>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
