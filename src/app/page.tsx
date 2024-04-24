/*import React from 'react';
interface UserProfileState {
  age: number;
}
class UserProfile extends React.Component<any, UserProfileState> {
  constructor(props: any){
    super(props);
    this.state = {
      age: 0
    };
  }

  celebrateBirthday = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.props.name} Profile</h1>
        <p>Age: {this.state.age}</p>
        <button>Happy Birthday!</button>
      </div>
    )
  }
}

export default UserProfile;*/
'use client';
export default function UserProfile({ age = 17, name = "George"}: any){
  function celebrateBirthday(): any{
    return age = age + 1;
  }

  return (
    <div>
      <h1>{name} Profile</h1>
      <p>Age: {age}</p>
      <button onClick={celebrateBirthday}>Happy Birthday!</button>
    </div>
  )
}
