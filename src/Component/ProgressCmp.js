import React from 'react'
import { Progress } from 'semantic-ui-react'
import { render } from '@testing-library/react';

class ProgressCmp extends React.Component {
    render(){
        return (
            <Progress value='4' total='5' progress='percent' />

        );
    }
}

export default ProgressCmp;