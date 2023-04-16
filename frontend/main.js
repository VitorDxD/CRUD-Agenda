import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';
import Login from './modules/Login';
import AddEdit from './modules/AddEdit';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.events();
cadastro.events();

const add = new AddEdit('.form-add');
const edit = new AddEdit('.form-edit');
add.events();
edit.events();



