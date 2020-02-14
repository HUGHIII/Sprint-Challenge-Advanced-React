import {useEffect} from 'react';
import {useState} from 'react';


const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState('');

    useEffect(() => {
        darkMode === true?document.body.classList.add('dark-mode'):
        document.body.classList.remove('dark-mode');
     
    }, [darkMode]);

    return [darkMode,setDarkMode]
}

export default useDarkMode