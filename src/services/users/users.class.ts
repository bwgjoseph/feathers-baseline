import { Service } from 'feathers-mongoose';
import User from './users.interface';

class Users extends Service<User> {}

export default Users;
