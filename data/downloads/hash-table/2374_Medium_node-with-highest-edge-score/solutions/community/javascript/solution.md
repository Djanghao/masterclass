# ❇ Crisp n Clear👌 🏆O(N)❤️ Javascript❤️ Memory👀 5.55%🕕 Meaningful Vars✍️ 🔴❇ ✅ 👉 💪🙏

**Author:** anurag-sindhu
**Votes:** 1
**Link:** [https://leetcode.com/problems/node-with-highest-edge-score/solutions/2760744/](https://leetcode.com/problems/node-with-highest-edge-score/solutions/2760744/)

---


Time Complexity: O(N)
Space Complexity: O(N)

```
function findSmallest(arr) {
    let small = Infinity;
    for (const iterator of arr) {
        if (iterator < small) {
            small = iterator;
        }
    }
    return small;
}

var edgeScore = function (edges) {
    let maxSum = -Infinity;
    const outputConfig = {};
    const edgeConfig = {};
    for (let index = 0; index < edges.length; index++) {
        const to = edges[index];
        if (!edgeConfig[to]) {
            edgeConfig[to] = 0;
        }
        const tempOutput = edgeConfig[to] + index;
        if (!outputConfig[tempOutput]) {
            outputConfig[tempOutput] = [];
        }
        outputConfig[tempOutput].push(to);
        if (tempOutput > maxSum) {
            maxSum = tempOutput;
        }
        edgeConfig[to] = tempOutput;
    }
    return Math.min(...outputConfig[maxSum]);
};
```