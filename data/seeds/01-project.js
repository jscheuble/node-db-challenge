exports.seed = function (knex) {
  return knex("project").insert([
    {
      project_name: "happy cats",
      description: "capsicum sweat dolphin fur",
      completed: true,
    },
    {
      project_name: "fork sweet",
      description: "worm roof witch island porcupine",
      completed: false,
    },
  ]);
};
