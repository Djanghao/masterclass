# Javascript DFS + Map

**Author:** uuu06222
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/solutions/3470014/](https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/solutions/3470014/)

---

# Code
```
/**
 * @param {number[]} start
 * @param {number[]} target
 * @param {number[][]} specialRoads
 * @return {number}
 */
const getDist = (x1, y1, x2, y2) => Math.abs(x2-x1) + Math.abs(y2-y1)

var minimumCost = function(start, target, specialRoads) {
    let cost = Infinity
    const map = new Map()
    
    const dfs = (curDist, x, y) => {
        if (curDist > cost) return
        
        // without using any specialRoad
        const toTargetDist = getDist(x, y, target[0], target[1])
        cost = Math.min(toTargetDist + curDist, cost)

        // recording the distance to get to [x, y]
        if (map.get(`${x}, ${y}`) && map.get(`${x}, ${y}`) <= curDist) return
        else map.set(`${x}, ${y}`, curDist)
        
        // using specialRoads
        for(let j=0 ; j<specialRoads.length ; j++) {
            const [x1, y1, x2, y2, d] = specialRoads[j]
            const toSpecialEndDist =  getDist(x, y, x1, y1) + d
            dfs(toSpecialEndDist + curDist, x2, y2)
        }
    }

    dfs(0, start[0], start[1])

    return cost
};
```