import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, Col, Badge } from 'react-bootstrap'
// import userIcon from '../img/userIcon.png'
const Navigation = () => {

    return (
        <Col md={3} className="d-flex flex-column">     
        <Navbar collapseOnSelect expand="md" className="d-block sidebar p-0 pt-1">
          <Navbar.Brand>
            <svg className="nav-icon" width={74} height={19} viewBox="0 0 74 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0)">
                <path fillRule="evenodd" clipRule="evenodd" d="M26.2901 8.06772V5.65382H25.6596C25.2357 5.65427 24.8137 5.71046 24.4044 5.82093C23.9881 5.93233 23.6459 6.05609 23.378 6.19221C23.1137 6.32618 22.8595 6.47926 22.6174 6.65023C22.3784 6.81942 22.2218 6.94115 22.1475 7.01543L21.9867 7.17632V5.91378H19.4518V18.0824H21.9867V11.4969C21.9867 10.3745 22.2732 9.50181 22.8462 8.87874C23.4192 8.25567 24.188 7.94414 25.1526 7.94414C25.5353 7.93989 25.9172 7.98138 26.2901 8.06772ZM39.5718 12.8832L39.7078 11.6205C39.7078 9.91222 39.141 8.4907 38.0073 7.35595C36.8736 6.2212 35.4556 5.65382 33.7533 5.65382C32.0508 5.65382 30.5916 6.26245 29.3756 7.47972C28.1595 8.69698 27.5515 10.1598 27.5516 11.8682C27.5516 13.6425 28.1761 15.1631 29.4251 16.4299C30.6742 17.6967 32.1602 18.3301 33.8833 18.3301C34.5182 18.3313 35.1496 18.2374 35.7567 18.0516C36.3626 17.866 36.8552 17.6638 37.2344 17.445C37.6148 17.2257 37.9749 16.9729 38.3105 16.6899C38.6485 16.4052 38.869 16.203 38.9721 16.0833C39.0752 15.9637 39.1514 15.8709 39.2009 15.8049L37.5561 14.1584L37.1727 14.6289C36.9173 14.9343 36.4824 15.2479 35.8681 15.5698C35.2561 15.8911 34.5745 16.0569 33.8833 16.0525C32.9023 16.0525 32.0552 15.7389 31.342 15.1117C30.6287 14.4845 30.2063 13.7418 30.0745 12.8835H39.5718V12.8832ZM33.7472 7.82014C34.6786 7.82014 35.4535 8.09042 36.0719 8.63098C36.6902 9.17153 37.0737 9.87094 37.2222 10.7292H30.1855C30.3999 9.87092 30.8183 9.17151 31.4407 8.63098C32.0631 8.09044 32.832 7.82017 33.7472 7.82014ZM52.235 18.0824V10.2217C52.235 8.93428 51.761 7.85112 50.813 6.97218C49.8649 6.09325 48.6489 5.6538 47.1648 5.65382C46.5812 5.65241 46.0004 5.73368 45.4396 5.89522C44.883 6.0561 44.4358 6.23972 44.0979 6.44605C43.7598 6.65248 43.4393 6.88642 43.1396 7.1455C42.8384 7.40546 42.6447 7.58702 42.5584 7.69016C42.4716 7.79333 42.4036 7.87792 42.3542 7.94391L43.999 9.59035L44.3328 9.1572C44.5306 8.88484 44.8914 8.61457 45.415 8.34637C45.9383 8.07815 46.5216 7.94404 47.1648 7.94404C47.9067 7.94404 48.5148 8.16276 48.9889 8.60018C49.463 9.03761 49.7 9.57817 49.6998 10.2218L45.2604 10.9893C44.1638 11.1709 43.3002 11.6001 42.6694 12.2768C42.0387 12.9535 41.7234 13.7912 41.7236 14.7897C41.7236 15.714 42.1317 16.5352 42.9479 17.2532C43.7641 17.9712 44.7904 18.3302 46.027 18.3302C46.4485 18.33 46.8684 18.2759 47.2762 18.1692C47.6884 18.0619 48.0306 17.9402 48.3027 17.804C48.568 17.6719 48.8223 17.5188 49.0631 17.346C49.2265 17.2332 49.3833 17.1113 49.533 16.9808C49.6114 16.9066 49.6668 16.8528 49.6998 16.8199V18.0826H52.235V18.0824ZM46.4104 16.0523C45.7507 16.0523 45.2252 15.8996 44.8337 15.5942C44.4423 15.2888 44.2465 14.934 44.2464 14.5296C44.2464 14.0922 44.3865 13.7291 44.6667 13.4403C44.9468 13.1515 45.3137 12.9658 45.7674 12.8834L49.7001 12.252V12.4996C49.7001 13.6385 49.4095 14.5153 48.8282 15.1302C48.247 15.745 47.441 16.0524 46.4104 16.0523ZM62.4868 5.65382C61.7656 5.65648 61.0531 5.81261 60.3968 6.11184C59.7128 6.41718 59.2635 6.66477 59.049 6.85459C58.8344 7.04441 58.6696 7.19708 58.5545 7.31258V0.33078H56.0317V18.0824H58.5545V16.6837L58.7398 16.8693C58.8387 16.9684 59.0057 17.1025 59.2407 17.2717C59.499 17.4552 59.7697 17.6206 60.0508 17.7668C60.3558 17.9277 60.7248 18.0618 61.1576 18.1691C61.5925 18.2767 62.0389 18.3307 62.4868 18.3301C64.0862 18.3301 65.4775 17.7132 66.6605 16.4794C67.8436 15.2456 68.4351 13.7498 68.435 11.992C68.435 10.2342 67.8455 8.73837 66.6666 7.50465C65.4877 6.27093 64.0944 5.65399 62.4868 5.65382ZM62.2334 16.0522C61.2728 16.0522 60.4195 15.6561 59.6734 14.8638C58.9274 14.0716 58.5544 13.1163 58.5545 11.9981C58.5545 10.8798 58.9275 9.92459 59.6734 9.13233C60.4194 8.34008 61.2727 7.94394 62.2334 7.94391C63.1939 7.94391 64.0452 8.34005 64.7872 9.13233C65.5292 9.92461 65.9002 10.8799 65.9001 11.9981C65.9001 13.1163 65.5291 14.0716 64.7872 14.8638C64.0449 15.6561 63.1937 16.0522 62.2334 16.0522ZM74.0001 0.330812H71.4773V18.0824H74.0001V0.330812Z" fill="black" />
                <path fillRule="evenodd" clipRule="evenodd" d="M9.34176 3.46379C8.47123 3.46271 7.61143 3.65593 6.82506 4.02935L6.50464 3.80025V0.421246C8.0848 -0.0718235 9.76815 -0.132864 11.3799 0.244465C12.9916 0.621793 14.4729 1.42373 15.67 2.56699L13.2695 4.96991C12.192 3.99873 10.7923 3.46203 9.34176 3.46379ZM9.34176 15.2395C10.8261 15.2412 12.2558 14.6791 13.3416 13.667L15.67 15.9978C13.9488 17.6471 11.6564 18.5667 9.27256 18.5644C4.15146 18.5644 0 14.4087 0 9.28236H3.32152C3.32126 9.30554 3.45992 9.32839 3.45992 9.35163C3.45995 12.6034 6.09332 15.2395 9.34176 15.2395Z" fill="#6846F6" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width={74} height="18.564" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="nav-toggle" />
          <Navbar.Collapse className="sidebar-sticky" id="nav-toggle">
            <Nav className="flex-column  w-100">
                <Nav.Item>
                  <Nav.Link eventKey="1" as={Link} to="/users" className="d-inline">
                  <svg className="nav-icon" width={14} height={18} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.56372 4.17968C3.56372 2.42386 5.07383 1 6.93601 1C8.79818 1 10.3083 2.42386 10.3083 4.17968C10.3083 5.9355 8.79818 7.9953 6.93601 7.9953C5.07383 7.9953 3.56372 5.9355 3.56372 4.17968Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.866344 16.762C0.577291 14.9905 1.29997 11.0386 7.37005 11.0386C11.519 11.0386 12.819 13.3782 13.0289 15.3626C13.1175 16.2003 12.4581 16.8798 11.624 16.9971C10.02 17.2226 7.68588 17.4123 5.63575 17.1708" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Users
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2" as={Link} to="/sessions" className="d-inline">
                  <svg className="nav-icon" width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1379 6.05714L13.5801 6.30573C15.1116 7.16683 15.1511 9.35771 13.6516 10.2735L4.49877 15.8633C2.96614 16.7993 1 15.6962 1 13.9004V3.02872C1 1.24825 2.93604 0.142957 4.46927 1.04811L9.27586 3.88571" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Sessions
                  </Nav.Link>
                  <Badge variant="secondary">85</Badge>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  eventKey="3" as={Link} to="/analytics" className="d-inline">
                  <svg className="nav-icon" width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6 12.7647V16C10.6 16.5523 10.1523 17 9.59997 17H8.39998C7.84769 17 7.39998 16.5523 7.39998 16V2C7.39998 1.44772 7.84769 1 8.39998 1H9.59998C10.1523 1 10.6 1.44772 10.6 2V8.52941" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="13.8" y="4.76465" width="3.2" height="12.2353" rx={1} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x={1} y="8.52942" width="3.2" height="8.47059" rx={1} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Analytics
                  </Nav.Link>
                  <Badge variant="secondary">Soon</Badge>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  eventKey="4" as={Link} to="/messages" className="d-inline">
                    <svg className="nav-icon" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width={20} height={20} fill="white" />
                      <path d="M15 16L16 16C17.1046 16 18 15.1046 18 14L18 6C18 4.89543 17.1046 4 16 4L4 4C2.89543 4 2 4.89543 2 6L2 14C2 15.1046 2.89543 16 4 16L10 16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17.7417 5.5625L14.6393 7.6505L11.5368 9.7385C11.0962 10.0351 10.5559 10.1959 10 10.1959C9.44413 10.1959 8.90385 10.0351 8.46325 9.7385L2.2583 5.5625" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  Messages
                  </Nav.Link>
                  <Badge variant="secondary">Soon</Badge>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  eventKey="5" as={Link} to="/chats" className="d-inline">
                    <svg className="nav-icon" width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 6.80851L17 3C17 1.89543 16.1046 1 15 1L3 1C1.89543 1 0.999999 1.89543 0.999999 3L1 11.6383C1 12.7429 1.89543 13.6383 3 13.6383L12.0071 13.6383C12.3308 13.6383 12.6498 13.7169 12.9365 13.8674L17 16L17 13.6383L17 10.383" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  Chats
                  </Nav.Link>
                  <Badge variant="secondary">Soon</Badge>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  eventKey="6" as={Link} to="/help" className="d-inline">
                    <svg className="nav-icon" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.5517 3.86101C17.9208 6.23009 18.4479 9.74362 17.1331 12.622C16.7568 13.4457 19.0034 16.5028 18.3254 17.1808C17.6944 17.8118 14.2085 16.0268 13.4488 16.3964C10.5397 17.8119 6.93333 17.3116 4.51723 14.8955C1.47015 11.8484 1.47015 6.90809 4.51723 3.861C7.56431 0.813923 12.5046 0.813923 15.5517 3.86101Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 11.2994C9.86739 11.2994 9.74021 11.2468 9.64645 11.153C9.55268 11.0592 9.5 10.9321 9.5 10.7994V10.6288C9.5 10.3185 9.59616 10.0159 9.77525 9.76257C9.95433 9.50923 10.2075 9.31762 10.5 9.21411C10.7922 9.11039 11.0452 8.91882 11.2242 8.66566C11.4032 8.41251 11.4996 8.11017 11.5 7.80011C11.5 7.40011 11.344 7.02344 11.06 6.74011C10.9213 6.60022 10.7561 6.48928 10.5741 6.41375C10.3922 6.33822 10.197 6.29959 10 6.30011C9.59933 6.30011 9.22267 6.45611 8.93933 6.73944C8.79956 6.87823 8.68875 7.04341 8.61333 7.22537C8.53791 7.40734 8.49939 7.60247 8.5 7.79944C8.5 7.93205 8.44732 8.05923 8.35355 8.153C8.25978 8.24676 8.13261 8.29944 8 8.29944C7.86739 8.29944 7.74022 8.24676 7.64645 8.153C7.55268 8.05923 7.5 7.93205 7.5 7.79944C7.50088 7.13673 7.76458 6.50143 8.23325 6.03289C8.70192 5.56434 9.33729 5.30082 10 5.30011C10.668 5.30011 11.296 5.56011 11.768 6.03278C12.0008 6.26449 12.1853 6.54004 12.311 6.8435C12.4366 7.14697 12.5009 7.47233 12.5 7.80078C12.4993 8.31756 12.3388 8.82149 12.0404 9.24342C11.742 9.66536 11.3204 9.98463 10.8333 10.1574C10.7359 10.1921 10.6515 10.2561 10.5918 10.3406C10.5321 10.4251 10.5001 10.526 10.5 10.6294V10.8001C10.4998 10.9326 10.4471 11.0596 10.3533 11.1532C10.2596 11.2469 10.1325 11.2994 10 11.2994Z" fill="currentColor" stroke="currentColor" strokeWidth="0.3" />
                      <path d="M10 13.7991C10.4142 13.7991 10.75 13.4633 10.75 13.0491C10.75 12.6349 10.4142 12.2991 10 12.2991C9.58579 12.2991 9.25 12.6349 9.25 13.0491C9.25 13.4633 9.58579 13.7991 10 13.7991Z" fill="currentColor" stroke="currentColor" strokeWidth="0.3" />
                    </svg>
                  Help center
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  eventKey="7" as={Link} to="/settings" className="d-inline">
                    <svg className="nav-icon" width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.23 7.53946V0.771484" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12.23 15.9994V12.6154" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.768 10.0774C14.768 10.5794 14.6191 11.0701 14.3403 11.4874C14.0614 11.9048 13.665 12.2301 13.2013 12.4222C12.7375 12.6143 12.2272 12.6646 11.7349 12.5666C11.2425 12.4687 10.7903 12.227 10.4354 11.872C10.0804 11.5171 9.83871 11.0649 9.74078 10.5726C9.64286 10.0802 9.69312 9.56993 9.88521 9.10617C10.0773 8.64241 10.4026 8.24603 10.82 7.96716C11.2373 7.68828 11.728 7.53943 12.23 7.53943C12.9031 7.53943 13.5487 7.80682 14.0246 8.28279C14.5006 8.75875 14.768 9.4043 14.768 10.0774Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3.77002 9.63464V15.9997" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.30804 3.30948C6.30804 2.80751 6.15919 2.31681 5.88031 1.89944C5.60143 1.48207 5.20505 1.15677 4.74129 0.964678C4.27754 0.772584 3.76723 0.722323 3.27491 0.820252C2.78259 0.918181 2.33036 1.1599 1.97542 1.51485C1.62047 1.86979 1.37875 2.32202 1.28082 2.81434C1.18289 3.30666 1.23316 3.81696 1.42525 4.28072C1.61734 4.74448 1.94265 5.14086 2.36002 5.41974C2.77739 5.69862 3.26808 5.84747 3.77005 5.84747C4.44316 5.84747 5.08871 5.58007 5.56468 5.10411C6.04064 4.62814 6.30804 3.98259 6.30804 3.30948V3.30948Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  Settings
                  </Nav.Link>
                </Nav.Item>
            </Nav>
              
          </Navbar.Collapse>
        </Navbar>
          {/* <div className="user d-none d-md-flex justify-content-start mt-auto mb-3">
                  <div>
                   <Image src={userIcon} alt="userimg" roundedCircle />
                  </div>
                  <p className="user-name font-weight-bold d-flex">Peterson <br/> Jacksonmom</p>
          </div> */}
        </Col>
    )
}

export default Navigation
