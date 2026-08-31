# Short solution with boolean mapping

**Author:** alessandrocentanni
**Votes:** 0
**Link:** [https://leetcode.com/problems/prison-cells-after-n-days/solutions/4235546/](https://leetcode.com/problems/prison-cells-after-n-days/solutions/4235546/)

---

# Code
```
function prisonAfterNDays(cells: number[], n: number): number[] {
    // after 14 days it just repeats the same order over and over
    let days = n % 14  
    if (!(days)) days = 14

    // since its only 0 and 1, we can convert it to an array of booleans, then loop over the days
    let previousDayCells: boolean[] = cells.map(c => !!c)
    for (let i = 0; i < days; i += 1)
        previousDayCells = dailyOrder(previousDayCells)

    // lastly, convert back to a [0,1..] array
    return previousDayCells.map(c => c ? 1 : 0)
};



function dailyOrder(cells: boolean[]) {
    const todaysCells: boolean[] = []

    // simplified as its just booleans
    for (let j = 0; j < 8; j += 1)
        todaysCells.push(cells[j - 1] === cells[j + 1])

    return todaysCells
}
```