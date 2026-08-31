# Find the biggest travel savings in a grid

**Author:** natealmeida
**Votes:** 0
**Link:** [https://leetcode.com/problems/squirrel-simulation/solutions/4270570/](https://leetcode.com/problems/squirrel-simulation/solutions/4270570/)

---

# Intuition
The squirrel can only carry one nut at a time, so you have to go to each nut and the order doesn't matter. Since the only way to travel is up/down/left/right, all distances are calculated by manhattan distance.
$$|x1 - x2| + |y1 - y2|$$

# Approach
The part that I struggled to find was that to choose the first nut for the squirrel, you need to find the maximum savings you can achive vis a vis nut distance to the tree vs nut distance to the squirrel. Subtract that savings value (which may be negative, meaning that you have to incur more travel than you would starting all from tree) from the total of all nut travel distances (2 * the nut's manhattan distance).

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
function minDistance(height: number, width: number, tree: number[], squirrel: number[], nuts: number[][]): number {
    let min_dist = 0;
    let d = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nuts.length; i++) {
        const nut = nuts[i];
        const tree_dist = Math.abs(tree[0] - nut[0]) + Math.abs(tree[1] - nut[1]);
        const squirrel_dist = Math.abs(squirrel[0] - nut[0]) + Math.abs(squirrel[1] - nut[1]);
        const tree_travel = 2 * tree_dist;
        min_dist += tree_travel;
        d = Math.max(d, tree_dist - squirrel_dist);
    }
    console.log(d);    
    
    return min_dist - d;
};
```