import { useState, useEffect } from 'react';
import { firebase } from '../firebase';

const collectedTasksExist = () => {};

export const useTasks = selectedProject => {
    const [task, setTasks] = useState([]);

    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection('tasks')
        .where('userId', '==', 'gMecT6PgJmYwG9RQTonN');

        unsubscribe = selectedProject && !collectedTasksExist(selectedProject) ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where(
            'date', 
            '==', 
            moment().format('DD/MM/YYYY')))
        : selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
        : unsubscribe;

    }, []);
}