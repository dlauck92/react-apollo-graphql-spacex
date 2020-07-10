const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.POR || 5000;

app.listen(PORT, function () {
  console.log(
    "==> Listening on port %s. Visit http://localhost:%s/graphql in your browser.",
    PORT,
    PORT
  );
});
