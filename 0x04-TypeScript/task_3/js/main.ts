/// <reference path='crud.d.ts' />

import { RowElement, RowID } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Silva'
}

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Silva',
  age: 23
}

CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(125);
