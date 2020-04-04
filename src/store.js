import { AsyncStorage } from 'react-native';


export async function getReport(month){
    if (!month) {
        return;
    }
    try {
        const report = await AsyncStorage.getItem(month);
        return JSON.parse(report);
    }
    catch (error) {
        alert(`Could not find report for ${month}`);
        return;
    }
}

export async function saveReport(report, monthYear) {
    const newReport = JSON.stringify({
        hours: 34,
        returnVisits: 5,
        placements: 20,
        bibleStudies: 4,
        videos: 7,
    });
    await AsyncStorage.setItem(monthYear, newReport);
}