import React, { useState } from 'react';
import './creategroup.css';
import { useNavigate } from 'react-router-dom';

const CreateGroup = () => {
  const [bio, setBio] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleBioChange = (e) => {
    setBio(e.target.value);
    setCharCount(e.target.value.length);
  };
  const navigate = useNavigate();
  const createclick = () => {navigate('/homepage')}

  return (
    <div className="create-group-container">
      <h1 className="create-group-title">Create Group</h1>
      <div className="form-group">
        <input type="text" className="input-box" placeholder="Group Name" maxLength="50" />
      </div>
      <div className="form-group">
        <input type="password" className="input-box" placeholder="Passkey" maxLength="50" />
      </div>
      <div className="form-group">
        <textarea
          className="bio-input"
          placeholder="Group Bio (max 150 characters)"
          maxLength="150"
          value={bio}
          onChange={handleBioChange}
        />
        <p className="char-counter">{charCount}/150</p>
      </div>
      <button className="create-button" onClick={createclick}>Create</button>
    </div>
  );
};

export default CreateGroup;
