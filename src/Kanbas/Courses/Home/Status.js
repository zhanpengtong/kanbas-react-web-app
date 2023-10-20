import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faSignInAlt, faHome, faStream, faBullhorn, faChartLine, faBell } from '@fortawesome/free-solid-svg-icons';
function Status() {
    const items = [
        { endpoint: 'ImportExistingContent', icon:  faFileDownload},
        { endpoint: 'ImportFromCommons', icon: faSignInAlt },
        { endpoint: 'ChooseHomePage', icon: faHome },
        { endpoint: 'ViewCourseStream', icon: faStream },
        { endpoint: 'NewAnnouncement', icon: faBullhorn },
        { endpoint: 'NewAnalytics', icon: faChartLine },
        { endpoint: 'ViewCourseNotifications', icon: faBell }
    ];
    return (
        <div style={{ marginLeft: '20px' }} className="d-none d-lg-block">
            <button className="wd-button-gray">UnPublish</button>
            <button className="wd-button-green">Publish</button>
            <br /><br />
            <div className="list-group wd-color-gray">
                {items.map(item => (
                    <a href={`/Kanbas/Courses/CourseStatus/${item.endpoint}.html`} className="list-group-item list-group-item-action" style={{ backgroundColor: 'rgb(242, 238, 238)' }}>
                        <FontAwesomeIcon icon={item.icon} style={{ marginRight: '5px' }} />
                        {item.endpoint.replace(/([A-Z])/g, ' $1')}
                    </a>
                ))}
            </div>

            <br />
            <a style={{ fontSize: 'large' }}>To Do</a><hr />
            <div className="row">
                <div className="col-1"><i className="fa-solid fa-circle-info fa-2x" style={{ color: '#ff2600' }}></i></div>
                <div className="col-10">
                    <a href="/Kanbas/Courses/Assignments/screen.html" className="wd-card-link">
                        <div className="col">
                            <div className="card-body">
                                <p style={{ fontSize: 'x-large', color: '#ff2600' }} className="card-title">Grade A1 - ENV + HTML</p>
                                <p className="card-text">100 points・Sep 18 at 11:59pm</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-1"><i className="fa-solid fa-xmark"></i></div>
            </div>
            
        </div>
    );
}

export default Status;
