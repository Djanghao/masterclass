# JavaScript solution top down DP with memorisation

**Author:** Koushik-Sarkar
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-cost-of-trip-with-k-highways/solutions/3858406/](https://leetcode.com/problems/maximum-cost-of-trip-with-k-highways/solutions/3858406/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number} n
 * @param {number[][]} highways
 * @param {number} k
 * @return {number}
 */
var maximumCost = function(n, highways, k) {
    let memo = new Map();
    const graph = {};
    if(k >= n) return -1;
    // create graph 
    const createGraph = () => {
        for(let [c1, c2, toll] of highways){
            if(!graph[c1]) graph[c1] = [];
            if(!graph[c2]) graph[c2] = [];
            graph[c1].push([c2, toll]);
            graph[c2].push([c1, toll]);
        }
    }

    const findMaxCost = (index, visited, count) => {
        if(count == 0) return 0;
        let key = `${index}_${visited}`;
        let currMax = -1;
        if(memo.has(key)) return memo.get(key);
        for(let [next, toll] of graph[index] || []){
            if(visited & (1 << next)) continue;
            let newVisited = visited | (1 << next);
            let nextValue = findMaxCost(next, newVisited, count - 1);
            if(nextValue == -1) continue;
            currMax = Math.max(currMax, toll + nextValue);
        }
        memo.set(key, currMax);
        return currMax;
    }

    createGraph();
    let result = -1;
    for(let i = 0; i < n; i++){
        result = Math.max(result, findMaxCost(i, 1 << i, k));
    }
    return result;
};
```