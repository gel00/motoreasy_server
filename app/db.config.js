const Config = {
  url:
    "mongodb+srv://gel00:" +
    process.env.MONGO_ATLAS_PW +
    "@cluster0.hbzyr.mongodb.net/tyres_db?retryWrites=true&w=majority",
};

module.exports = Config;
