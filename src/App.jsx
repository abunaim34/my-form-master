
import './App.css'
import GrandPa from './Components/GrandPa/GrandPa'
// import ReusableForm from './Components/ReusableForm/ReusableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefFrom/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {

  // const handleSignUpSubmit = data => {
  //   console.log('sign up', data)
  // }

  // const handleUpdateProfile = data => {
  //   console.log('update', data)
  // }
  return (
    <>
    <h2>Form master</h2>
    <GrandPa></GrandPa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'Sign UP'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign UP</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} submitBtntext='Update' handleSubmit={handleUpdateProfile}>
      <div>
          <h2>Update Profile</h2>
          <p>Please update your right now</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
