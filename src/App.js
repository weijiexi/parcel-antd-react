import React from 'react';

import { Button as AntButton } from 'antd';

import "../styles/App.less";

export function App() {
    return (
        <div className="landing-main-text">
            <h1>Welcome to Labs Basic SPA</h1>
            <div className="landing-main-text">
                <p>
                    This is <span>an example</span> of how we&apos;d like for you to approach page/routable
                    components.
                </p>

                <AntButton type="primary">Primary Button</AntButton>

            </div>
        </div>
    );
  }