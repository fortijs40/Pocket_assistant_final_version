import { Calendar } from 'react-native-calendars';
import { View } from 'react-native';
import React from 'react';

export default class WorkingCalendar extends React.Component {

  render() {
    return (
      <View style={{ paddingTop: 50, flex: 1 }}>
        <Calendar
          style={{ marginTop: 150 }}
          current={'2022-01-01'}
          minDate={'2012-05-10'}
          maxDate={'2050-05-30'}
          onDayPress={(day) => {
            console.log('selected day', day);
          }}
          monthFormat={'yyyy - MM'}
          onMonthChange={(month) => {
            console.log('month changed', month);
          }}
          hideArrows={false}
          hideExtraDays={false}
          disableMonthChange={false}
          firstDay={1}
        />
      </View>
    );
  }
}
