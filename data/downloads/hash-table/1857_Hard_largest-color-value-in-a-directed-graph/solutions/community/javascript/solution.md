# JS DFS solution

**Author:** Shivam-Swarnkar
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-color-value-in-a-directed-graph/solutions/3396557/](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/solutions/3396557/)

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
 * @param {string} colors\r
 * @param {number[][]} edges\r
 * @return {number}\r
 */\r
var largestPathValue = function(colors, edges) {\r
    const n = colors.length;\r
    const visited = Array(n).fill(0);\r
    const maxCount = Array(n).fill(0).map(_=>Array(26).fill(0));\r
    const adj = Array(n).fill(0).map(_=>[]);\r
    \r
    for(const [a,b] of edges){\r
      adj[a].push(b);\r
    }\r
    let res = 0;\r
    for(let i=0; i<n; i++){\r
      res = Math.max(res, dfs(i, maxCount));\r
    };\r
    return res === Infinity ? -1 : res;\r
\r
    function dfs(node, colorsCount){\r
      const cur = colors[node].charCodeAt()-97;\r
      if(!visited[node]){\r
        visited[node] = 1;\r
        for(const next of adj[node]){\r
          if(dfs(next, colorsCount) === Infinity){\r
            return Infinity;\r
          }\r
          for(let k=0; k<26; k++){\r
            maxCount[node][k] = Math.max(maxCount[node][k], maxCount[next][k]);\r
          }\r
        }\r
        maxCount[node][cur]++;\r
        visited[node] = 2;\r
      }\r
      return visited[node] === 2 ? maxCount[node][cur] : Infinity;\r
    }\r
};\r
```