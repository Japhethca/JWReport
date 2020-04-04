import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Overlay } from 'react-native-elements';
import dateFormat from 'date-fns/format';

import { getReport, saveReport } from '../store';
import AppHeader from '../components/Header';
import FieldCard from '../components/FieldCard';

export default function Dashboard() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [report, setReport] = useState({});

  const currentMonth = dateFormat(new Date(), 'MMMM, yyyy'); // Current month and year
  useEffect(() => {
    saveReport(null, currentMonth) // This needs to be implemented to save actual report.
      .then(() => {
       getReport(currentMonth)
        .then(report => {
          setReport(report);
        })
        .catch(err => {
          alert(`Error fetching reports: ${err}`)
        });
      });
  }, [report]);

  

  // Todo: implement sidebar
  const toggleSidebar = () => {
    setShowSideBar(!showSideBar); // This is a mock implementation
  };

  return (
    <View style={styles.container}>
      <AppHeader showHideMenu={toggleSidebar} backgroundColor={styles.container.backgroundColor}/>
      <Text style={styles.date}>{currentMonth}</Text>
      <View style={styles.cardWrapper}>
        {
          parseReport(report).map((field, index) => (
            <FieldCard 
              key={`${field.text}-${index}`}
              text={field.text} 
              iconName={field.iconName}
              value={field.value}
            />
          ))
        }
      </View>
      <Text style={styles.button} onPress={() => alert('Awaiting implementation.')}>
        <Text style={styles.plusText}>
          +
        </Text>
      </Text>

      <Overlay isVisible={showSideBar}>
        <View>
          <Text>This is the side bar. Awaiting Implementation.</Text>
          <Button title="close" onPress={toggleSidebar}/>
        </View>
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#0c3866',
  },
  cardWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  date: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 18,
    color: '#D1D7DB'
  },
  plusText: {
    fontSize: 30,
    color: '#fff',
    padding: '20',
  },
  button: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: '#ce2029',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 30
  },
});


function parseReport(monthReport) {
  const fields = [
    {
      text: 'Hours',
      iconName: 'schedule',
      value: 0
    },
    {
      text: 'Return Visits',
      iconName: 'beenhere',
      value: 0
    },
    {
      text: 'Placements',
      iconName: 'receipt',
      value: 0
    },    
    {
      text: 'Bible Studies',
      iconName: 'people',
      value: 0
    },
    {
      text: 'Videos',
      iconName: 'slideshow',
      value: 0
    },
  ];

  if (!monthReport) {
    return fields;
  }
  
  return fields.map((field => {
    switch (field.text) {
      case 'Hours':
        return {
          ...field,
          value: monthReport.hours || 0,
        };
      case "Return Visits":
        return {
          ...field,
          value: monthReport.returnVisits || 0,
        };
      case "Placements": 
        return {
          ...field,
          value: monthReport.placements || 0,
        };
      case "Bible Studies":
        return {
          ...field,
          value: monthReport.bibleStudies || 0,
        };
      case "Videos": 
        return {
          ...field,
          value: monthReport.videos,
        };
      default:
        return;
    }
  }));
};
