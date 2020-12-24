// var Git = require("nodegit");

// Git.Clone("https://github.com/abhishek-123-cell/cloneeee", "./nodegit")
//   // .then(function (repo) {
//   //   return repo.getCommit("59b20b8d5c6ff8d09518454d4dd8b7b30f095ab5");
//   // })
//   .then(function (commit) {
//     return commit.getEntry("README.md");
//   })
//   .then(function (entry) {
//     return entry.getBlob().then(function (blob) {
//       blob.entry = entry;
//       return blob;
//     });
//   })
//   .then(function (blob) {
//     console.log(blob.entry.nodegit() + blob.rawsize() + "b");

//     // console.log(Array(72).join("=") + "\n\n");

//     // Show the entire file.
//     // console.log(String(blob));
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
var Git = require("nodegit");

Git.Clone("https://github.com/abhishek-123-cell/clone-git", "./nodegit").then(
  function (repository) {}.then(function (repo) {
    return repo.getCommit("BH3m2XhR4d1ZKa1AB6LHL9nzkVmBgwAkT0FN+QZiSbQ");
  })
);
console.log("hiii");
var getMostRecentCommit = function (repository) {
  return repository.getBranchCommit("master");
};

var getCommitMessage = function (commit) {
  return commit.message();
};

Git.Repository.open("READMEmd")
  .then(getMostRecentCommit)
  .then(getCommitMessage)
  .then(function (message) {
    console.log(message);
  });
