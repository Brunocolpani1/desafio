const { deepEqual, ok } = require('assert');
const Database = require('./db_finances');
const DEFAULT_ITEM_CADASTRAR = { id: 1, value: 580, date: Date.now(), note: 'Ganhei em um job', people_id: 1 };
const DEFAULT_ITEM_ATUALIZAR = {
  value: 800,
  date: 28/01/2022,
  note: 'Teste',
  id: 2
};

describe('Suite de manipulação de finances', () => {
  before(async () => {
    await Database.remover();
    await Database.cadastrar(DEFAULT_ITEM_CADASTRAR);
    await Database.cadastrar(DEFAULT_ITEM_ATUALIZAR);
  });

  it('deve cadastrar uma deposito', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    await Database.cadastrar(DEFAULT_ITEM_CADASTRAR);

    const [realResult] = await Database.listar(expected.id);
    deepEqual(realResult, expected);
  });

  it('deve listar um deposito pelo id', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const result = await Database.listar(1);
    deepEqual(result[0], expected);
  });

  it('deve atualizar um deposito pelo id', async () => {
    const expected = {
      ...DEFAULT_ITEM_ATUALIZAR,
      value: 880,
      date: Date.now(),
      note: 'Testando'
    };
    await Database.atualizar(expected.id, { 
      value: expected.value,
      date: Date.now(),
      note: expected.note,
    });

    const [realResult] = await Database.listar(expected.id);
    deepEqual(realResult, expected);
  });
});
