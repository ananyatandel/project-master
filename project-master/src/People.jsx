import React, { useState } from 'react';
import './index.css'; // Import CSS file for styling

function People() {
  // Define default team members with their roles
  const defaultTeamMembers = [
    { id: 1, name: 'You', role: 'Project Manager' },
    { id: 2, name: 'Jane Smith', role: 'Designer' },
    { id: 3, name: 'John Doe', role: 'Developer' }
  ];

  const [teamMembers, setTeamMembers] = useState(defaultTeamMembers);
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberRole, setNewMemberRole] = useState('');

  // Function to add a new team member
  const addTeamMember = () => {
    if (newMemberName.trim() !== '' && newMemberRole.trim() !== '') {
      const newMember = {
        id: Math.max(...teamMembers.map(member => member.id), 0) + 1,
        name: newMemberName,
        role: newMemberRole
      };
      setTeamMembers([...teamMembers, newMember]);
      setNewMemberName('');
      setNewMemberRole('');
    }
  };

  // Function to delete a team member
  const deleteTeamMember = (id) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };

  return (
    <div className="team-list-container">
      <div className="team-list">
        <h1>Team Members</h1>
        <ul>
          {teamMembers.map(member => (
            <li key={member.id}>
              <span>{member.name} - {member.role}</span>
              <button onClick={() => deleteTeamMember(member.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <div className="add-member-form">
          <input
            type="text"
            value={newMemberName}
            onChange={(e) => setNewMemberName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            value={newMemberRole}
            onChange={(e) => setNewMemberRole(e.target.value)}
            placeholder="Role"
          />
          <button onClick={addTeamMember}>Add Member</button>
        </div>
      </div>
    </div>
  );
}

export default People;
