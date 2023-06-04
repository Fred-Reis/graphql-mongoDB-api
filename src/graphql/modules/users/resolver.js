import User from "../../../models/User";

export default {
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id),
  },
  Mutation: {
    createUser: async (_, { data }) => await User.create(data),
    // updateUser: (_, { id, data }) => {
    //   data._id = id;
    //   console.log({ id }, data);
    //   return data;
    // },
    updateUser: async (_, { id, data }) =>
      await User.findOneAndUpdate({ _id: id }, data, { new: true }),
    deleteUser: async (_, { id }) => !!(await User.findByIdAndDelete(id)),
  },
};
