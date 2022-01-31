const { deepEqual, ok } = require('assert');
const Database = require('./db_people');
const DEFAULT_ITEM_CADASTRAR = { nome: 'Teste', id: 1 };
const DEFAULT_ITEM_ATUALIZAR = {
  nome: 'Bruno',
  id: 2,
};

describe('Suite de manipulação de people', () => {
  before(async () => {
    await Database.remover();
    await Database.cadastrar(DEFAULT_ITEM_CADASTRAR);
    await Database.cadastrar(DEFAULT_ITEM_ATUALIZAR);
  });

  it('deve cadastrar uma pessoa', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    await Database.cadastrar(DEFAULT_ITEM_CADASTRAR);

    const [realResult] = await Database.listar(expected.id);
    deepEqual(realResult, expected);
  });

  it('deve listar uma pessoa pelo id', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const result = await Database.listar(1);
    deepEqual(result[0], expected);
  });

  it('deve atualizar uma pessoa pelo id', async () => {
    const expected = {
      ...DEFAULT_ITEM_ATUALIZAR,
      nome: 'Bruno',
    };
    await Database.atualizar(expected.id, {
      nome: expected.nome,
    });

    const [realResult] = await Database.listar(expected.id);
    deepEqual(realResult, expected);
  });
});
