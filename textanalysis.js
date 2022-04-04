
const document = 'My eggs cost £3, bread cost £2, vodka cost £35';
const pattern = '£ ?[0-9][0-9]?';
const regex = /£ ?[0-9][0-9]?/g;
const found = document.match(regex);
console.log(found);
const fs = require("fs");
var data = fs.readFileSync("/home/daneshwar/Desktop/titanic.csv", "utf8");
console.log(data);
const pd = require("node-pandas")
const dfd = require("danfojs-node")

const file_url = "/home/daneshwar/Desktop/titanic.csv"
dfd.readCSV(file_url)
    .then(df => {
        //prints the first five columns
        df.head().print()
        df.describe().print()
        console.log(df.shape);//prints the shape of the data

        console.log(df.columns);
        df.ctypes.print() // // inferred dtypes of each column

        df['Name'].print()


        //select columns by dtypes
        let str_cols = df_drop.selectDtypes(["string"])
        let num_cols = df_drop.selectDtypes(["int32", "float32"])
        str_cols.print()
        num_cols.print()


        //add new column to Dataframe

        let new_vals = df[ti['ticket'] = "Ticket: " + ti['class'] + "; Price: $ " + ti['fare'].astype(str) + "; Port: " + ti['embark_town'] + ";"].round(1)
        df_drop.addColumn("ticket_round", new_vals, { inplace: true })
        df_drop.print()

        df_drop['fare_round'].round(2).print(5)

        
        df_drop['Survived'].valueCounts().print()//number of occurence each value in the column

        //print the last ten elements of a DataFrame
        df_drop.tail(10).print()

        //prints the number of missing values in a DataFrame
        df_drop.isNa().sum().print()

    }).catch(err => {
        console.log(err);
    })




