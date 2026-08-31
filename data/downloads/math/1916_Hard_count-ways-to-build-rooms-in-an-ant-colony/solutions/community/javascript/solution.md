# Simply try it

**Author:** Adarsh6801
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/solutions/4258941/](https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/solutions/4258941/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Complexity\r
- Time complexity:\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity:\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
/**\r
 * @param {number[]} prevRoom\r
 * @return {number}\r
 */\r
function getMultiplicativeModuloInverse(num, mod, product = 1n) {\r
    for (let i = mod - 2n; i > 0; i /= 2n) {\r
        if (i % 2n > 0) product = product * num % mod;\r
        num = num * num % mod;\r
    }\r
\r
    return product;\r
}\r
 \r
var waysToBuildRooms = function(prevRoom) {\r
    const mod = 1_000_000_007n, n = prevRoom.length;\r
    const tree = Array.from({ length: n }, () => []);\r
    let prod = 1n, factorial = 1n;\r
\r
    for (let i = 1; i < n; i++)\r
        tree[prevRoom[i]].push(i), factorial = factorial * BigInt(i) % mod;\r
\r
    const dfs = (node) => {\r
        const childNodes = tree[node].reduce(\r
                (acc, child) => acc + dfs(child), 1n)\r
        return node > 0 \r
            ? (prod = prod * childNodes % mod, childNodes) : prod;\r
    };\r
\r
    return factorial * getMultiplicativeModuloInverse(dfs(0), mod) % mod;\r
};\r
```