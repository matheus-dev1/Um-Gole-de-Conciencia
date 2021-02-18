/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'

function Login() {
    return (
        <>
        <Header />
<section class="form my-4 mt-5 pt-5 mx-5">
    <div class="container ">
        <div class="row roww no-gutters">
            <div class="col-lg-5">
                <img src={require('../../assets/images/login.png').default} class="img-fluid" alt=""/>  
            </div>
            <div class="col-lg-7 px-5 pt-5">
                <img id="logo" src={require('../../assets/images/logo.png').default} alt="Conscire"/>
                {/*  */}
                <h5 class= "my-3 p-2">Entre na sua conta</h5>
                
                <form action='../Back-end/php/login_usuario.php' method='POST'>
                    <div class="form-row">
                        <div class="col-lg-7">
                            <input type="email" name="email" placeholder="Seu email aqui" class="form-control my-3 p-4"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-lg-7">
                            <input type="password" name="senha" placeholder="********" class="form-control my-3 p-4"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-lg-7">
                            <button type="submit" class="btn1 mt-3 mb-5">Login</button>
                        </div>
                    </div>
                    <p>Não possui uma conta?<br/> <a href="./cadastro.php"> Registre-se aqui</a></p>
                    <p><a href="./index.php"> Voltar para Conscire</a></p>
                </form>
            </div>
        </div>
    </div>
</section>
<Footer />
        </>
    )
}

export default Login