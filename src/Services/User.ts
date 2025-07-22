import { User } from '../Models/index';
import { UserSchema  } from '../Interface/User';

const addOne = async (item: UserSchema, options = {}) => new User(item).save(options);
const getOne = async (criteria: object, projection?: object, options = {}, populate = '') => await User.findOne(criteria, projection, options).populate(populate);
const getMany = async (criteria: object, projection?: object, options = {}, populate = '') => await User.find(criteria, projection, options).populate(populate);
const updateOne = async (criteria: object, dataToSet: object, options = {}) => await User.findOneAndUpdate(criteria, dataToSet, options);
const updateMany = async (criteria: object, dataToSet: object, options = {}) => await User.updateMany(criteria, dataToSet, options);

export default{
  addOne,
  getOne,
  getMany,
  updateOne,
  updateMany,
}