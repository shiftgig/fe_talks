# FE Day Picker

Im going to make a little demo of [fe_day_picker](https://github.com/sgrepo/fe_day_picker/tree/day-picker-component) component (under development), show the API
an build a custom DayComponent to show the team how to customize your DayPicker component.

We are going to use a demo app that can be found [on fe_day_picker](https://github.com/sgrepo/fe_day_picker/tree/demo), the demo and the component are
are under development there are not final versions.

Demo App:

![dayPickers](/5-day-picker//images/dayPickers.png)


The customDay implementation is going to retrieve coverage value from a shiftsCoverage (just for the first two weeks) object and reflect this value with different styles. If the coverage is 1 the day will have a green background, if not it will be yellow or red.

Final Result:

<img src="/5-day-picker/images/newCustomDayPicker.png" width="50%" height="50%" />

```

ShiftCoverageDayComponent.js:

    import React, {PropTypes} from 'react'
    import {or} from 'ramda'

    const ShiftCoverageDayComponent = (props) => {
    const date = props.date.moment.date()
    const coverage = or(props.shiftCoverage[date], { coverage: 2}).coverage
    let style = {}
    if(coverage === 1){
        style = {backgroundColor: 'green'}
    }
    if(coverage < 1 && coverage > 0.5){
        style = {backgroundColor: 'yellow'}
    }
    if(coverage <= 0.5){
        style = {backgroundColor: 'red'}
    }

    return (
          <div onClick={(e) => onClick(e)} style={{padding: '5px', ...style}}>
            {props.label}
        </div>
    )
    }

    ShiftCoverageDayComponent.propTypes = {
    date: PropTypes.object,
    selected: PropTypes.array,
    shiftCoverage: PropTypes.object,
    }

    export default ShiftCoverageDayComponent

App.js


    import React, {Component} from 'react';
    import DayPicker from './DayPicker/index'
    import CustomDayComponent from './CustomDays/CustomDayComponent'
    import CustomWeekendComponent from './CustomDays/CustomWeekendComponent'
    import ShiftCoverageDayComponent from './CustomDays/ShiftCoverageDayComponent'
    import './styles.css'

    class App extends Component {

    onChange(selected) {
        console.log(selected)
    }

    render() {
        return (
            <div>
             <h1 style={{marginLeft: '45%'}}>Day Pickers</h1>
             <div className="app">
                <div className="day-picker-container">
                  <h3>Default</h3>
                    <DayPicker
                        month={11}
                        year={2017}
                        onChange={this.onChange}
                        selected={['2017-12-09T17:00:00', '2017-12-10T17:00:00', '2017-12-20T17:00:00']}
                        reset={true}/>
                </div>
                <div className="day-picker-container">
                   <h3>CustomDay</h3>
                    <DayPicker
                        month={11}
                        year={2017}
                        onChange={this.onChange}
                        selected={['2017-12-09T17:00:00', '2017-12-10T17:00:00', '2017-12-20T17:00:00']}
                        DayComponent={<CustomDayComponent/>}/>
                </div>
                <div className="day-picker-container">
                    <h3>CustomWeekend</h3>
                    <DayPicker
                        month={11}
                        year={2017}
                        onChange={this.onChange}
                        selected={['2017-12-09T17:00:00', '2017-12-10T17:00:00', '2017-12-20T17:00:00']}
                        DayComponent={<CustomWeekendComponent/>}/>
                </div>
                <div className="day-picker-container">
                    <h3>CustomWeekend</h3>
                    <DayPicker
                        month={11}
                        year={2017}
                        onChange={this.onChange}
                        DayComponent={<ShiftCoverageDayComponent shiftCoverage={shiftsCoverage}/>}/>
                    </div>
            </div>
           </div>
    );
  }
}

export default App;


const shiftsCoverage = {
  1: {coverage: 0.7},
  2: {coverage: 1},
  3: {coverage: 0.3},
  4: {coverage: 0.5},
  5: {coverage: 0.8},
  6: {coverage: 0.9},
  7: {coverage: 1},
  8: {coverage: 1},
  9: {coverage: 1},
  10: {coverage: 1},
  11: {coverage: 1},
  12: {coverage: 1},
  13: {coverage: 1},
  14: {coverage: 1},
}
```
