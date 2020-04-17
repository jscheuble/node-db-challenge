exports.seed = function (knex) {
  return knex("resource").insert([
    { resource_name: "computer", description: "young bamboo book candle mask" },
    { resource_name: "microphone", description: "purple guts" },
    { resource_name: "video camera", description: "yellow fish hermit bridge" },
  ]);
};
