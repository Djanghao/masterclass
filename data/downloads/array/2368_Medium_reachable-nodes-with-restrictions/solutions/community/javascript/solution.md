# ❇ Crisp n Clear👌 🏆O(N)❤️ Javascript❤️ Runtime 👀 25.88%🕕 Meaningful Vars✍️ 🔴❇ ✅ 👉 💪🙏

**Author:** anurag-sindhu
**Votes:** 2
**Link:** [https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/2760780/](https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/2760780/)

---

Runtime: 1047 ms, faster than 25.88% of JavaScript online submissions for Reachable Nodes With Restrictions.
Memory Usage: 184.9 MB, less than 5.88% of JavaScript online submissions for Reachable Nodes With Restrictions.
Time Complexity: O(N)
Space Complexity: O(N)

```
var reachableNodes = function (n, edges, restricted) {
    const restrictedConfig = (function () {
        const config = {};
        for (const iterator of restricted) {
            config[iterator] = true;
        }
        return config;
    })();
    const config = {};
    for (const [from, to] of edges) {
        if (!config[from]) {
            config[from] = {};
        }
        if (!config[to]) {
            config[to] = {};
        }
        config[from][to] = true;
        config[to][from] = true;
    }
    const visited = {};
    function visit(from) {
        if (restrictedConfig[from]) {
            return;
        }
        if (visited[from]) {
            return;
        }
        visited[from] = true;
        for (const key in config[from]) {
            visit(key);
        }
    }
    visit((from = 0));

    return Object.keys(visited).length;
};
```