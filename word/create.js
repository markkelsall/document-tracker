
function createTableHeader () {
    let tableHeader = [
        {
            val: "Student Name",
            opts: {
                cellColWidth: 42,
                b:true
            }
        },{
            val: "Term 1",
            opts: {
                cellColWidth: 42,
                b:true
            }
        },{
            val: "Term 2",
            opts: {
                cellColWidth: 42,
                b:true
            }
        },
        {
            val: "Term 3",
            opts: {
                cellColWidth: 42,
                b:true
            }
        },
        {
            val: "Term 4",
            opts: {
                cellColWidth: 42,
                b:true
            }
        }
    ];
    return tableHeader;
}

function createTable (data) {
    let tableHeader = createTableHeader();
    var table = [
        tableHeader,
        [1,'All grown-ups were once children','test', 'test1', 'test2', 'test3'],
        [2,'there is no harm in putting off a piece of work until another day.',''],
        [3,'But when it is a matter of baobabs, that always means a catastrophe.',''],
        [4,'watch out for the baobabs!','END'],
    ]
    return table;
}

module.exports.createTable = createTable;