# Typescript Dynamic Programming, Runtime 100%

**Author:** Chongruei
**Votes:** 1
**Link:** [https://leetcode.com/problems/paint-house/solutions/3700296/](https://leetcode.com/problems/paint-house/solutions/3700296/)

---


# Approach
we have default cost as below
```
[oldRed, oldBlue, oldGreen] = currCost
```
and we have 6 different collections to choose cause we can't choose the same color
```
[newRed, newBlue, newGreen] = newCost

// cause we choose red as new result
[newRed + oldBlue, oldBlue, oldGreen]
[newRed + oldGreen, oldBlue, oldGreen]

// cause we choose blue as new result
[oldRed, oldRed + newBlue, oldGreen]
[oldRed, oldGreen + newBlue, oldGreen]

// cause we choose green as new result
[oldRed, oldBlue, oldRed + newGreen]
[oldRed, oldBlue, oldBlue + newGreen]

// can simplify to below and take this handle newCost
const minR = Math.min(oldBlue + newRed, oldGreen + newRed)
const minB = Math.min(oldRed + newBlue, oldGreen + newBlue)
const minG = Math.min(oldRed + newGreen, oldBlue + newGreen)
```


# Complexity
- Time complexity:
O(n) => costs length

- Space complexity:
O(1) => Red, Blue, Green

# Code
```
function minCost(costs: number[][]): number {
    if (costs.length === 1) { 
        return Math.min(costs[0][0], costs[0][1], costs[0][2])  
    }

    let previousCost = [...costs[0]]

    for (let i = 1; i < costs.length; i++) {
        const [red, blue, green] = costs[i]

        const [oldRed, oldBlue, oldGreen] = previousCost
        const minR = Math.min(oldBlue + red, oldGreen + red)
        const minB = Math.min(oldRed + blue, oldGreen + blue)
        const minG = Math.min(oldRed + green, oldBlue + green)

        previousCost[0] = minR
        previousCost[1] = minB
        previousCost[2] = minG
    }

    const [r,g,b] = previousCost
    return Math.min(r, g, b)  
};
```