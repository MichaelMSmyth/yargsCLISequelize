# yargsCLISequelize

This is a MySQL and Sequelize CLI demo. The commands are as follows:

Dot notation can be used with yargs so I can seperate input data from filter and sort in the cli

e.g. node src/app.js --create.title="Movie title" --create.actor="Johhny Megastar"

To create a record:
node src/app.js --create.title="Movie Title" --create.actor="Johhny Megastar"
This will create a record with the input fields { title: 'Movie Title', actor: 'Johhny Megastar' }

To read records:
node src/app.js --read.title="Movie Title" --read.actor="Johhny Megastar"
This will return all records matching the fields { title: 'Movie Title', actor: 'Johhny Megastar' }
The command to read a single record by it's id is: node src/app.js --read._id="id number"

--sort is an optional argument which will sort the returned result. "1" is in ascending order
The full command to read and sort is: node src/app.js --read.actor="Johhny Megastar" --sort.rating="ascending"

If there are no fields in args.read then it will read all records
e.g. --read
or: --read --sort.title="ascending"

To update records:
node src/app.js --update.actor="Replacement Dude" --filter.title="Movie Title"
This will update all records matching the filter with the data in the update object
If you want to update a single record then target that record by id or be very specific with search terms.

To delete a record:
node src/app.js --delete.id="61bfba994522c89d9654e95f"
This will delete the record matching the id
Record id is returned by --read
