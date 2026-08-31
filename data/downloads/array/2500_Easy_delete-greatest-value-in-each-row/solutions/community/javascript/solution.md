# Short JavaScript Solution

**Author:** sronin
**Votes:** 9
**Link:** [https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/2901675/](https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/2901675/)

---

Found this solution helpful? Consider showing support by upvoting this post.
Have a question? Kindly leave a comment below.
Thank you and happy hacking!
```
var deleteGreatestValue = function (grid) {
    grid.forEach(row => row.sort((a, b) => a - b))
    let sum = 0

    while (grid[0].length) {
        let column = []
        for (let row of grid) column.push(row.pop())
        sum += Math.max(...column)
    }

    return sum
};
```