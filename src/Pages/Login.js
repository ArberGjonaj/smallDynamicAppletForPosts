import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CInput,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
    CRow,
  } from "@coreui/react";
  import CIcon from "@coreui/icons-react";
import React from "react";
  import Server from '../Axios/server'
  import { NavLink } from "react-router-dom";
class Login extends React.Component {
    state = {
    username: "",
    password: "",
  };
  usernameHandler = (username) => {
    this.setState({ username: username });
  };
  passwordHandler = (password) => {
    this.setState({ password: password });
  };
  login = () => {
      console.log(this.props.history)
    const redirect=()=>{return this.props.history.push("/news/create");}
     Server
       .post("/user_create", {
         username: this.state.username,
         password: this.state.password,
       })
       .then((response)=>{
         const token = response.data.token;
         sessionStorage.setItem("access_token", token);
          redirect()
       })
       .catch((error)=>{
         console.log(error);
         redirect()
       });
 
   };
  componentDidMount (){

  }

    render(){
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            Username
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="text"
                          value={this.state.username}
                          onChange={event=>this.usernameHandler(event.target.value)}
                          autoComplete="username"
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                           Password
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="password"
                          value={this.state.password}
                          onChange={event=>this.passwordHandler(event.target.value)}
                          autoComplete="current-password"
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton color="primary" onClick={this.login} className="px-4">
                            Login
                          </CButton>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <CButton color="link" className="px-0">
                          <NavLink to={"/singup"}>Sing Up</NavLink>
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    );}
  };
  
  export default Login;
  