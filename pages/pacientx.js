import appConfig from '../config.json';
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import { createClient } from '@supabase/supabase-js';
import React from 'react';
import { Box, Button, Text, TextField } from '@skynexui/components';

const supabaseClient = createClient(appConfig.SUPABASE_URL,
  appConfig.SUPABASE_ANON_KEY);

const username = 'teste';

export default function Contact() {
  const [lista, setLista] = React.useState([]);

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      // id: listaDeMensagens.length + 1,
      de: 'vanessametonini',
      texto: novaMensagem,
    };

    supabaseClient
      .from('mensagens')
      .insert([
        // Tem que ser um objeto com os MESMOS CAMPOS que você escreveu no supabase
        mensagem
      ])
      .then(({ data }) => {
        console.log('Criando mensagem: ', data);
        setListaDeMensagens([
          data[0],
          ...listaDeMensagens,
        ]);
      });
    setMensagem('');
  }

  React.useEffect(() => {
    supabaseClient
      .from('pacientx')
      .select('*')
      .order('nomeProprioCompleto', { ascending: true })
      .then(({ data }) => {
        // console.log('Dados do pacientx: ', data);
        setLista(data);
      });
  }, []);

  return (
    <section>
      <h2>Pacientxs</h2>

      <MessageList items={lista} />

      {/* <Box
        as="form"
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
        }}
      >

        <TextField
          fullWidth
          label="Nome completo"
          maxLength={50}
          name="nomeProprioCompleto"
          value=""
          variant="basicBordered"
        />

        <TextField
          label="CPF"
          maxLength={14}
          name="cpf"
          onBlur={() => {

          }}
          placeholder="Somente os números"
          value=""
          variant="basicBordered"
        />

        <Button
          href="https://google.com"
          label="Salvar"
        />

      </Box> */}

    </section>
  )
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}

function MessageList(props) {
  return (
    <table border="1">
      <tr><td>NOME</td><td>CPF</td></tr>
      {props.items.map((item) => {
        return (
          <tr>
            <td>
              {item.nomeProprioCompleto}
            </td>
            <td>
              {item.cpf}
            </td>
          </tr>
        );
      })}
      {/* </Box> */}
    </table>
  )
}
