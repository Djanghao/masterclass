# javascript 112ms beats 100% O(n)

**Author:** ivanburilichev
**Votes:** 1
**Link:** [https://leetcode.com/problems/stone-game-vi/solutions/1750078/](https://leetcode.com/problems/stone-game-vi/solutions/1750078/)

---

the core idea is, every player's best strategy is to take stone that values' sum is biggest
so if you have situation: [1,2,3] vs [7,8,9], first player have to take 3rd stone that value is 3+9=12, to take maximum value to player and minus the opponents' value

and you have Object.values in javascript and they are sorted for you already, so it's actually O(n) to build an object and O(n) to parse through it
```
var stoneGameVI = function(aliceValues, bobValues) {
    let aliceVal = 0
    let bobVal = 0
    let turn = true
    const combined = {}
    let n = aliceValues.length
    for (let i = 0; i < n; i++) {
        if (combined[aliceValues[i] + bobValues[i]]) {
            combined[aliceValues[i] + bobValues[i]].push({value: aliceValues[i] + bobValues[i], id: i})
        } else {
            combined[aliceValues[i] + bobValues[i]] = [{value: aliceValues[i] + bobValues[i], id: i}]
        }
    }
    Object.values(combined).reverse().forEach((value) => {
        value.forEach(val => {
            if (turn) {
                aliceVal += aliceValues[val.id]
            } else {
                bobVal += bobValues[val.id]
            }
            turn = !turn
        })
    })
    if (aliceVal === bobVal) return 0
    return aliceVal > bobVal ? 1 : -1
};