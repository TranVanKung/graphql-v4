"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.getUserById = exports.getAllUser = exports.deleteUser = exports.createUser = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
let seedUser = [{
  _id: 1,
  username: "tranvancong",
  email: "cong@mgail.com"
}, {
  _id: 2,
  username: "user 2",
  email: "user2@mgail.com"
}, {
  _id: 3,
  username: "user 3",
  email: "user3@mgail.com"
}];
const getAllUser = async () => {
  return seedUser;
};
exports.getAllUser = getAllUser;
const getUserById = async userId => {
  return _lodash.default.find(seedUser, {
    _id: userId
  });
};
exports.getUserById = getUserById;
const createUser = async user => {
  const newUser = {
    ...user
  };
  seedUser = [...seedUser, newUser];
  return newUser;
};
exports.createUser = createUser;
const updateUser = async (_id, user) => {
  const userIndex = _lodash.default.findIndex(seedUser, user => Number(user?._id) === Number(_id));
  const oldUser = _lodash.default.find(seedUser, user => Number(user?._id) === Number(_id));
  seedUser.splice(userIndex, 1, {
    ...oldUser,
    ...user
  });
  return seedUser;
};
exports.updateUser = updateUser;
const deleteUser = async userId => {
  seedUser = _lodash.default.filter(seedUser, user => Number(user?._id) !== Number(userId));
  return seedUser;
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJzZWVkVXNlciIsIl9pZCIsInVzZXJuYW1lIiwiZW1haWwiLCJnZXRBbGxVc2VyIiwiZ2V0VXNlckJ5SWQiLCJ1c2VySWQiLCJfIiwiZmluZCIsImNyZWF0ZVVzZXIiLCJ1c2VyIiwibmV3VXNlciIsInVwZGF0ZVVzZXIiLCJ1c2VySW5kZXgiLCJmaW5kSW5kZXgiLCJOdW1iZXIiLCJvbGRVc2VyIiwic3BsaWNlIiwiZGVsZXRlVXNlciIsImZpbHRlciJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlL3VzZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVVzZXIgfSBmcm9tIFwiQC9tb2RlbC91c2VyXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmxldCBzZWVkVXNlcjogSVVzZXJbXSA9IFtcbiAgeyBfaWQ6IDEsIHVzZXJuYW1lOiBcInRyYW52YW5jb25nXCIsIGVtYWlsOiBcImNvbmdAbWdhaWwuY29tXCIgfSxcbiAgeyBfaWQ6IDIsIHVzZXJuYW1lOiBcInVzZXIgMlwiLCBlbWFpbDogXCJ1c2VyMkBtZ2FpbC5jb21cIiB9LFxuICB7IF9pZDogMywgdXNlcm5hbWU6IFwidXNlciAzXCIsIGVtYWlsOiBcInVzZXIzQG1nYWlsLmNvbVwiIH0sXG5dO1xuXG5jb25zdCBnZXRBbGxVc2VyID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gc2VlZFVzZXI7XG59O1xuXG5jb25zdCBnZXRVc2VyQnlJZCA9IGFzeW5jICh1c2VySWQ6IG51bWJlcikgPT4ge1xuICByZXR1cm4gXy5maW5kKHNlZWRVc2VyLCB7IF9pZDogdXNlcklkIH0pO1xufTtcblxuY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jICh1c2VyOiBJVXNlcikgPT4ge1xuICBjb25zdCBuZXdVc2VyID0geyAuLi51c2VyIH07XG4gIHNlZWRVc2VyID0gWy4uLnNlZWRVc2VyLCBuZXdVc2VyXTtcblxuICByZXR1cm4gbmV3VXNlcjtcbn07XG5cbmNvbnN0IHVwZGF0ZVVzZXIgPSBhc3luYyAoX2lkOiBudW1iZXIsIHVzZXI6IElVc2VyKSA9PiB7XG4gIGNvbnN0IHVzZXJJbmRleCA9IF8uZmluZEluZGV4KFxuICAgIHNlZWRVc2VyLFxuICAgICh1c2VyOiBJVXNlcikgPT4gTnVtYmVyKHVzZXI/Ll9pZCkgPT09IE51bWJlcihfaWQpXG4gICk7XG4gIGNvbnN0IG9sZFVzZXIgPSBfLmZpbmQoXG4gICAgc2VlZFVzZXIsXG4gICAgKHVzZXI6IElVc2VyKSA9PiBOdW1iZXIodXNlcj8uX2lkKSA9PT0gTnVtYmVyKF9pZClcbiAgKTtcblxuICBzZWVkVXNlci5zcGxpY2UodXNlckluZGV4LCAxLCB7IC4uLm9sZFVzZXIsIC4uLnVzZXIgfSk7XG5cbiAgcmV0dXJuIHNlZWRVc2VyO1xufTtcblxuY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jICh1c2VySWQ6IG51bWJlcikgPT4ge1xuICBzZWVkVXNlciA9IF8uZmlsdGVyKFxuICAgIHNlZWRVc2VyLFxuICAgICh1c2VyOiBJVXNlcikgPT4gTnVtYmVyKHVzZXI/Ll9pZCkgIT09IE51bWJlcih1c2VySWQpXG4gICk7XG5cbiAgcmV0dXJuIHNlZWRVc2VyO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlVXNlciwgZ2V0VXNlckJ5SWQsIGdldEFsbFVzZXIsIGRlbGV0ZVVzZXIsIHVwZGF0ZVVzZXIgfTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBRUEsSUFBSUEsUUFBaUIsR0FBRyxDQUN0QjtFQUFFQyxHQUFHLEVBQUUsQ0FBQztFQUFFQyxRQUFRLEVBQUUsYUFBYTtFQUFFQyxLQUFLLEVBQUU7QUFBaUIsQ0FBQyxFQUM1RDtFQUFFRixHQUFHLEVBQUUsQ0FBQztFQUFFQyxRQUFRLEVBQUUsUUFBUTtFQUFFQyxLQUFLLEVBQUU7QUFBa0IsQ0FBQyxFQUN4RDtFQUFFRixHQUFHLEVBQUUsQ0FBQztFQUFFQyxRQUFRLEVBQUUsUUFBUTtFQUFFQyxLQUFLLEVBQUU7QUFBa0IsQ0FBQyxDQUN6RDtBQUVELE1BQU1DLFVBQVUsR0FBRyxZQUFZO0VBQzdCLE9BQU9KLFFBQVE7QUFDakIsQ0FBQztBQUFDO0FBRUYsTUFBTUssV0FBVyxHQUFHLE1BQU9DLE1BQWMsSUFBSztFQUM1QyxPQUFPQyxlQUFDLENBQUNDLElBQUksQ0FBQ1IsUUFBUSxFQUFFO0lBQUVDLEdBQUcsRUFBRUs7RUFBTyxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUFDO0FBRUYsTUFBTUcsVUFBVSxHQUFHLE1BQU9DLElBQVcsSUFBSztFQUN4QyxNQUFNQyxPQUFPLEdBQUc7SUFBRSxHQUFHRDtFQUFLLENBQUM7RUFDM0JWLFFBQVEsR0FBRyxDQUFDLEdBQUdBLFFBQVEsRUFBRVcsT0FBTyxDQUFDO0VBRWpDLE9BQU9BLE9BQU87QUFDaEIsQ0FBQztBQUFDO0FBRUYsTUFBTUMsVUFBVSxHQUFHLE9BQU9YLEdBQVcsRUFBRVMsSUFBVyxLQUFLO0VBQ3JELE1BQU1HLFNBQVMsR0FBR04sZUFBQyxDQUFDTyxTQUFTLENBQzNCZCxRQUFRLEVBQ1BVLElBQVcsSUFBS0ssTUFBTSxDQUFDTCxJQUFJLEVBQUVULEdBQUcsQ0FBQyxLQUFLYyxNQUFNLENBQUNkLEdBQUcsQ0FBQyxDQUNuRDtFQUNELE1BQU1lLE9BQU8sR0FBR1QsZUFBQyxDQUFDQyxJQUFJLENBQ3BCUixRQUFRLEVBQ1BVLElBQVcsSUFBS0ssTUFBTSxDQUFDTCxJQUFJLEVBQUVULEdBQUcsQ0FBQyxLQUFLYyxNQUFNLENBQUNkLEdBQUcsQ0FBQyxDQUNuRDtFQUVERCxRQUFRLENBQUNpQixNQUFNLENBQUNKLFNBQVMsRUFBRSxDQUFDLEVBQUU7SUFBRSxHQUFHRyxPQUFPO0lBQUUsR0FBR047RUFBSyxDQUFDLENBQUM7RUFFdEQsT0FBT1YsUUFBUTtBQUNqQixDQUFDO0FBQUM7QUFFRixNQUFNa0IsVUFBVSxHQUFHLE1BQU9aLE1BQWMsSUFBSztFQUMzQ04sUUFBUSxHQUFHTyxlQUFDLENBQUNZLE1BQU0sQ0FDakJuQixRQUFRLEVBQ1BVLElBQVcsSUFBS0ssTUFBTSxDQUFDTCxJQUFJLEVBQUVULEdBQUcsQ0FBQyxLQUFLYyxNQUFNLENBQUNULE1BQU0sQ0FBQyxDQUN0RDtFQUVELE9BQU9OLFFBQVE7QUFDakIsQ0FBQztBQUFDIn0=