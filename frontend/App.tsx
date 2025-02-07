import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [backendReturned200, setBackendReturned200] = useState<null | boolean>(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/example')
      .then(response => {
        if (response.ok) {
          setBackendReturned200(true);
        } else {
          setBackendReturned200(false);
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setBackendReturned200(false);
      });
  }, []);
  
  return (
    <View style={styles.container}>
      <Text>
        {backendReturned200 === null
          ? 'Checking backend status...'
          : backendReturned200
          ? 'Backend is up and running! :D'
          : 'Failed to connect to the backend.'}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
