exports.seed = function (knex) {
  return knex("task").insert([
    {
      description: "air orange pineapple butterfly",
      notes: "fourteen lightyears",
      project_id: 1,
      completed: true,
    },
    {
      description: "mars dance grapefruit",
      notes: "ant pole axe spoon",
      project_id: 1,
      completed: false,
    },
    {
      description: "thread hedgehog",
      notes: "hammock foam",
      project_id: 2,
      completed: false,
    },
  ]);
};
