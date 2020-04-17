const db = require("../data/db-config");

module.exports = {
  getResources,
  getResourceById,
  addResource,
  getProjects,
  getProjectById,
};

function getResources() {
  return db("resource");
}

function getResourceById(id) {
  return db("resource").where({ id }).first();
}

function addResource(resource) {
  return db("resource")
    .insert(resource)
    .then((id) => ({ id: id[0] }));
}

function getProjects() {
  return db("project");
}

function getProjectById(id) {
  return db("project").where({ id }).first();
}
