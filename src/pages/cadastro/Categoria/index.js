import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../../components/PageTemplate';

function CadastroCategoria() {
    return (
        <PageTemplate>
            <h1>Cadastro de categoria</h1>

            <form>

                <label>
                    Nome da Categoria:
                    <input
                        type="text"
                    />
                </label>

                <button>
                    Cadastrar
                </button>
            </form>

            <Link to='/'>
                Ir para a home
            </Link>
        </PageTemplate>
    );
}

export default CadastroCategoria;