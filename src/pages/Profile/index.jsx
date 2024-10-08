import { Container, Form, Avatar } from "./styles";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
  return (
    <Container>
      <header>
      <FiArrowLeft />
      <Link to="/">Voltar</Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/jhonimattos.png" alt="Foto do usário"/>

          <label htmlFor="avatar">
            <FiCamera />

            <input 
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>
        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input 
          placeholder="Senha atual"
          type="passwrod"
          icon={FiLock}
        />

        <Input 
          placeholder="Nova senha"
          type="passwrod"
          icon={FiLock}
        />

        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}