export default {
    login: (user) => {
      console.log(user);
      return fetch("/Users/login", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status !== 401) return res.json().then((data) => data);
        else return { isAuthenticated: false, Users: { username: "", role: "" } };
      });
    },
    editStudent: () => {
      return fetch("user/edit-student/")
        .then((res) => res.json())
        .then((data) => data);
    }
    ,
    updateStudent: (user) => {
      console.log(user);
      return fetch("/user/update-student/", {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => data);
    },
    viewCourses: () => {
      return fetch("/courses/")
        .then((res) => res.json())
        .then((data) => data);
    },
    viewStudents: () => {
      return fetch("/user/")
        .then((res) => res.json())
        .then((data) => data);
    },
    register: (user) => {
      console.log(user);
      return fetch("/user/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => data);
    },
    changePass: (user) => {
      console.log(user);
      return fetch("/user/changePass", {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => data);
    },
    createSchedule: (user) => {
      console.log(user);
      return fetch("/user/createSchedule", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => data);
    },
    logout: () => {
      return fetch("/user/logout")
        .then((res) => res.json())
        .then((data) => data);
    },
    viewSchedule: () => {
      return fetch("/user/viewSchedule")
        .then((res) => res.json())
        .then((data) => data);
    },
    enroll: (user) => {
      console.log(user);
      return fetch("/user/enroll", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => data);
    },
    isAuthenticated: () => {
      return fetch("/user/authenticated").then((res) => {
        if (res.status !== 401) return res.json().then((data) => data);
        else return { isAuthenticated: false, user: { username: "", role: "" } };
      });
    },
  };
  