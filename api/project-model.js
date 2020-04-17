const db = require("../data/db-config");

module.exports = {
  getResources,
  getResourceById,
  addResource,
  getProjects,
  getProjectById,
  addProject,
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
    .then((id) => {
      return getResourceById(id[0]);
    });
}

function getProjects() {
  return db("project");
}

function getProjectById(id) {
  return db("project").where({ id }).first();
}

function addProject(project) {
  return db("project")
    .insert(project)
    .then((id) => {
      return getProjectById(id[0]);
    });
}
