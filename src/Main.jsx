import { Routes, Route } from 'react-router-native';
import RepositoryList from './pages/RepositoryList';
import SignIn from './components/SignIn';
import AppBar from './components/AppBar';
import { View } from 'react-native';
import { platformStyles } from './utils/Platform';
import { StatusBar } from 'react-native';

function Main() {
    return (
        <View style={platformStyles}>
            <StatusBar barStyle={'light-content'} />
            <AppBar />
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/repositories" element={<RepositoryList />} />
            </Routes>
        </View>
    );
}

export default Main;