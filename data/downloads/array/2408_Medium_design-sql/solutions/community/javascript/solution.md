# JavaScript Solution Using Nested Map Objects

**Author:** sronin
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-sql/solutions/2606908/](https://leetcode.com/problems/design-sql/solutions/2606908/)

---

Found this solution helpful? Consider showing support by upvoting this post.
Have a question? Kindly leave a comment below.
Thank you and happy hacking!

Update 09/21/2022: A video solution to this problem will soon be uploaded to the YouTube channel found below. Stay tuned.
https://www.youtube.com/channel/UCFqtWYV7K3vFcA_fKvtJwjQ
```
var SQL = function(names, columns) {
    this.tableMap = new Map()
	//Populating tableMap
    for(let name of names){
        this.tableMap.set(name, new Map())
        this.tableMap.get(name).set("id", 1)
    }
};

SQL.prototype.insertRow = function(name, row) {
    let table = this.tableMap.get(name)
    table.set(table.get("id"),row)
    table.set("id", table.get("id") +1)
};

SQL.prototype.deleteRow = function(name, rowId) {
    let table = this.tableMap.get(name)
    table.delete(rowId)
};

SQL.prototype.selectCell = function(name, rowId, columnId) {
    let table = this.tableMap.get(name)
    let row = table.get(rowId)
    return row[columnId -1]
};
```
