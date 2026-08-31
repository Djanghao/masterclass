# JavaScript DFS + Memo

**Author:** jim11
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-most-similar-path-in-a-graph/solutions/1533877/](https://leetcode.com/problems/the-most-similar-path-in-a-graph/solutions/1533877/)

---

```
var mostSimilar = function (n, roads, names, targetPath) {
    let map = {};
    for (let i = 0; i < roads.length; i++) { // O(N)
        const [from, to] = roads[i];
        if (map[from] === undefined) map[from] = [];
        if (map[to] === undefined) map[to] = [];
        map[from].push(to);
        map[to].push(from);
    }
    
    let res;
    let min = Infinity;
    let memo = new Array(names.length).fill(0).map(_ => new Array(targetPath.length));
    for (let i = 0; i < names.length; i++) { // O(N)
        const temp = dfs(i, 0);
        if (min > temp.dist) {
            min = temp.dist;
            res = temp;
        }
    }
    return res.path;

    function dfs(currentLocation, index) { // O(N^2)
        if (memo[currentLocation][index] !== undefined) {
            return memo[currentLocation][index];
        }

        let destinations = map[currentLocation];
        if (index === targetPath.length - 1) {
            let dist =  0;
            if (names[currentLocation] !== targetPath[index]) {
                dist++;
            }
            return { dist, path: [currentLocation] };
        }

        let m = Infinity;
        let smallest;
        for (let i = 0; i < destinations.length; i++) {
            const temp = dfs(destinations[i], index + 1);
            if (temp.dist < m) {
                m = temp.dist;
                smallest = temp;
            }
        }

        let d = 0;
        if (names[currentLocation] !== targetPath[index]) {
            d++;
        }
        memo[currentLocation][index] = { dist: smallest.dist + d, path: [currentLocation, ...smallest.path] };
        return memo[currentLocation][index];
    }
};
```