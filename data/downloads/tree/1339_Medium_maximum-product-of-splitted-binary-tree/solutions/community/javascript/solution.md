# 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 | One Pass | 𝗘𝗮𝘀𝘆 𝗮𝗻𝗱 𝗱𝗲𝘁𝗮𝗶𝗹𝗲𝗱 𝗲𝘅𝗽𝗹𝗮𝗻𝗮𝘁𝗶𝗼𝗻  | Video

**Author:** monuchaudhary1
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/2895926/](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/2895926/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
https://youtu.be/xlzomzM9hzM
\uD835\uDDE3\uD835\uDDF9\uD835\uDDF2\uD835\uDDEE\uD835\uDE00\uD835\uDDF2 \uD835\uDDF1\uD835\uDDFF\uD835\uDDFC\uD835\uDDFD \uD835\uDDF0\uD835\uDDFC\uD835\uDDFA\uD835\uDDFA\uD835\uDDF2\uD835\uDDFB\uD835\uDE01\uD835\uDE00 \uD835\uDDEE\uD835\uDDFB\uD835\uDDF1 \uD835\uDDF3\uD835\uDDF2\uD835\uDDF2\uD835\uDDF1\uD835\uDDEF\uD835\uDDEE\uD835\uDDF0\uD835\uDDF8 \uD835\uDDF3\uD835\uDDFC\uD835\uDDFF \uD835\uDDF6\uD835\uDDFA\uD835\uDDFD\uD835\uDDFF\uD835\uDDFC\uD835\uDE03\uD835\uDDF2\uD835\uDDFA\uD835\uDDF2\uD835\uDDFB\uD835\uDE01

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
var maxProduct = function(root) {
    let res = [];
    let MOD = Math.pow(10,9)+7;

    let dfs = function(node) {
        if (!node) return 0;
        if (!node.left && !node.right) return node.val;

        let sumL = dfs(node.left);
        let sumR = dfs(node.right);
        res.push(sumL, sumR);
        return sumL+sumR+node.val;
    }

    let totalSum = dfs(root);
    let max = 0;
    for (let e of res) {
        let cur = e * (totalSum - e);
        max = Math.max(max, cur);
    }
    return max % MOD;
};
```