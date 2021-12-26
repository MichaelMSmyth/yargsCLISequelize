const Movie = require("./movie.table.js");


exports.createRecord = async (createObj) => {
    try {
        await Movie.sync();
        await Movie.create(createObj);
        console.log()
    } catch (error) {
        console.log(error)
    }
}


exports.readRecord = async (readObj) => {
    try {
        await Movie.sync();
        const searchResult = await Movie.findAll({where: [readObj]});
        searchResult.forEach( element => {
            console.log(element['dataValues'])
        })
    } catch (error) {
        console.log(error)
    }
}


exports.updateRecord = async (updateObj, filterObj) => {
    try {
        await Movie.sync();
        const updateResult = await Movie.update(updateObj, {where: [filterObj]});
        console.log(`${updateResult} records changed`)

    } catch (error) {
        console.log(error)
    }
}

exports.deleteRecord = async (deleteObj) => {
    try {
        await Movie.sync();
        deleteResult = await Movie.destroy({where: [deleteObj]});
        console.log(`${deleteResult} records deleted`)
    } catch (error) {
        console.log(error)
    }
}