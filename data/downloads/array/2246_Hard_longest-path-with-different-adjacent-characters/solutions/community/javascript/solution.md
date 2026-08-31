# J𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 | 𝗦𝗶𝗺𝗽𝗹𝗲 𝗩𝗶𝗱𝗲𝗼 𝗦𝗼𝗹𝘂𝘁𝗶𝗼𝗻 | DFS | BottomUp | Detail Explanation

**Author:** monuchaudhary1
**Votes:** 9
**Link:** [https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3043261/](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3043261/)

---

# Intuition & Approach
<!-- Describe your approach to solving the problem. -->
\uD835\uDDD7\uD835\uDDF2\uD835\uDE01\uD835\uDDEE\uD835\uDDF6\uD835\uDDF9\uD835\uDDF2\uD835\uDDF1 \uD835\uDDD4\uD835\uDDFD\uD835\uDDFD\uD835\uDDFF\uD835\uDDFC\uD835\uDDEE\uD835\uDDF0\uD835\uDDF5 \uD835\uDDD8\uD835\uDE05\uD835\uDDFD\uD835\uDDF9\uD835\uDDEE\uD835\uDDFB\uD835\uDDEE\uD835\uDE01\uD835\uDDF6\uD835\uDDFC\uD835\uDDFB
\uD835\uDDD6\uD835\uDDFC\uD835\uDDFA\uD835\uDDFA\uD835\uDDF2\uD835\uDDFB\uD835\uDE01\uD835\uDE00 \uD835\uDDEE\uD835\uDDFB\uD835\uDDF1 \uD835\uDDF3\uD835\uDDF2\uD835\uDDF2\uD835\uDDF1\uD835\uDDEF\uD835\uDDEE\uD835\uDDF0\uD835\uDDF8 \uD835\uDDEE\uD835\uDDFF\uD835\uDDF2 \uD835\uDDEE\uD835\uDDFD\uD835\uDDFD\uD835\uDDFF\uD835\uDDF2\uD835\uDDF0\uD835\uDDF6\uD835\uDDEE\uD835\uDE01\uD835\uDDF2\uD835\uDDF1
https://youtu.be/p8dYf3_00C0
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
var longestPath = function(parent, s) {
    let n = parent.length

    let children = new Array(n)
    for (let i = 0; i < n; i++) {
        children[i] = new Array()
    }
    for (let i = 1; i < n; i++) {
        children[parent[i]].push(i)
    }

    s = s.split("")
    let longestPath = 0
    let dfs = function(node) {
        let longestLength = 0, longestLength2 = 0
        for (let child of children[node]) {
            let lengthChild = dfs(child)
            if (s[node] == s[child]) continue
            if (longestLength < lengthChild) {
                longestLength2 = longestLength
                longestLength = lengthChild
            }
            else if (longestLength2 < lengthChild) {
                longestLength2 = lengthChild
            }
        }
        longestPath = Math.max(longestPath, longestLength + longestLength2 + 1)
        return longestLength + 1
    }
    dfs(0)
    return longestPath
};
```