# Two dfs calls, pass all tests even after test cases update

**Author:** eforce
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-subtree-sizes-after-changes/solutions/5990235/](https://leetcode.com/problems/find-subtree-sizes-after-changes/solutions/5990235/)

---

# Approach
Create array from `parent` and update `parent` array using dfs with backtracking, second time we create array using modified `parent` and calculate number of nodes.

# Code
```javascript []
/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number[]}
 */
var findSubtreeSizes = function(parent, s) {
    const n = parent.length;
    const arr = Array.from({ length: n }, () => new Array());

    for (let i = 1; i < n; ++i) {
        arr[parent[i]].push(i);
    }

    const dfs = (node, map) => {
        const prev = map.get(s[node]);
        if (prev !== undefined) parent[node] = prev;
        map.set(s[node], node);
        for (let c of arr[node]) {
            dfs(c, map);
        }
        map.set(s[node], prev);
    };

    dfs(0, new Map());

    const result = new Array(n).fill(0);
    const arrSum = Array.from({ length: n }, () => new Array());

    for (let i = 1; i < n; ++i) {
        arrSum[parent[i]].push(i);
    }

    const calc = node => {
        let sum = 1;
        for (let c of arrSum[node]) {
            sum += calc(c);
        }
        return result[node] += sum;
    };

    calc(0);

    return result;
};
```