import React, { useState } from 'react';

const App = () => {
    const [video, setVideo] = useState(null);
    const [player, setPlayer] = useState('');

    const handleVideoChange = (e) => {
        setVideo(e.target.files[0]);
    };

    const handlePlayerChange = (e) => {
        setPlayer(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle video upload and player input submission here
        console.log('Video:', video);
        console.log('Player:', player);
    };

    return (
        <div>
            <h1>Upload Video</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="video/*" onChange={handleVideoChange} />
                <input type="text" value={player} onChange={handlePlayerChange} placeholder="Enter Player Name" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default App;