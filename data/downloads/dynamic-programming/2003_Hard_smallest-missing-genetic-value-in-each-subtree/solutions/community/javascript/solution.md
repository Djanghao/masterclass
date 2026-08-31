# javascript dfs 876ms

**Author:** henrychen222
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/solutions/1458623/](https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/solutions/1458623/)

---

```
let g, a, res;
const smallestMissingValueSubtree = (parents, nums) => {
    let n = parents.length;
    a = nums;
    g = initializeGraph(n);
    for (let i = 1; i < n; i++) g[parents[i]].push(i);
    res = Array(n).fill(0);
    dfs(0);
    return res;
};

const dfs = (x) => {
    let set = new Set(), miss = 1;
    for (const e of g[x]) {
        let [nset, nmiss] = dfs(e); // accumulation
        miss = Math.max(miss, nmiss);
        set = unionSet(set, nset);
    }
    set.add(a[x])
    while (set.has(miss)) miss++;
    res[x] = miss;
    return [set, miss];
};

const unionSet = (s1, s2) => {
    if (s1.size > s2.size) {
        for (const e of s2) s1.add(e);
        return s1;
    } else {
        for (const e of s1) s2.add(e);
        return s2;
    }
};

const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };
```