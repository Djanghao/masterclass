# ✔️✔️Easy Solutions in Java ✔️✔️, Python ✔️, and C++ ✔️🧐Look at once 💻 with Exaplanation

**Author:** Vikas-Pathak-123
**Votes:** 28
**Link:** [https://leetcode.com/problems/largest-color-value-in-a-directed-graph/solutions/3395923/](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/solutions/3395923/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
The problem asks us to find the longest path in the directed graph such that the path contains all the colors from the string in the same order as they appear in the string. We can use dynamic programming and topological sorting to solve this problem.\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
We can create a directed graph using the edges given in the input. We can use a list of lists to represent the adjacency list of the graph. We can also maintain an array of arrays to keep track of the count of each color in the path that ends at each vertex. We can use another array to keep track of the in-degree of each vertex in the graph. We can use a queue to perform the topological sort of the graph. We can start by adding all the vertices with zero in-degree to the queue. We can then remove a vertex from the queue, update the count of each color in the path that ends at that vertex, and update the in-degree of all its neighbors. If the in-degree of a neighbor becomes zero after updating, we can add it to the queue. We can repeat this process until the queue becomes empty.\r
\r
We can also maintain a variable to keep track of the maximum count of a color in the path. We can update this variable whenever we update the count of a color in the path that ends at a vertex.\r
\r
At the end of the process, we can check if we have processed all the vertices in the graph. If not, we can return -1 as it means there is a cycle in the graph. If we have processed all the vertices, we can return the maximum count of a color in the path.\r
\r
# Complexity\r
- Time complexity:\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
Time complexity: O(V+E), where V is the number of vertices in the graph, and E is the number of edges in the graph. We need to process each vertex and edge at most once.\r
\r
- Space complexity:\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
O(V*26), where V is the number of vertices in the graph. We need to maintain an array of size 26 for each vertex to keep track of the count of each color in the path that ends at that vertex. We also need to maintain an adjacency list for the graph, which requires O(E) space.\r
\r
\r
![image.png](./images/0.png)\r
\r
\r
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D\r
```\r
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning\r
Please give my solution an upvote! \uD83D\uDC4D\r
It's a simple way to show your appreciation and\r
keep me motivated. Thank you! \uD83D\uDE0A\r
```\r
# Code\r
```java []\r
class Solution {\r
public int largestPathValue(String colors, int[][] edges) {\r
    List<List<Integer>> al = new ArrayList<>();\r
    List<int[]> cnt = new ArrayList<>();\r
    int n = colors.length();\r
    for (int i = 0; i < n; i++) {\r
        al.add(new ArrayList<>());\r
        cnt.add(new int[26]);\r
    }\r
    int[] indegrees = new int[n];\r
    for (int[] e : edges) {\r
        al.get(e[0]).add(e[1]);\r
        indegrees[e[1]]++;\r
    }\r
    List<Integer> q = new ArrayList<>();\r
    for (int i = 0; i < n; i++) {\r
        if (indegrees[i] == 0)\r
            q.add(i);\r
    }\r
    int res = 0, processed = 0;\r
    while (!q.isEmpty()) {\r
        List<Integer> q1 = new ArrayList<>();\r
        for (int i : q) {\r
            processed++;\r
            res = Math.max(res, ++cnt.get(i)[colors.charAt(i) - 'a']);\r
            for (int j : al.get(i)) {\r
                for (int k = 0; k < 26; k++)\r
                    cnt.get(j)[k] = Math.max(cnt.get(j)[k], cnt.get(i)[k]);\r
                if (--indegrees[j] == 0)\r
                    q1.add(j);\r
            }\r
        }\r
        q = q1;\r
    }\r
    return processed != n ? -1 : res;\r
}\r
\r
}\r
```\r
```c++ []\r
class Solution {\r
public:\r
  int largestPathValue(string cs, vector<vector<int>>& edges) {\r
    vector<vector<int>> al(cs.size()), cnt(cs.size(), vector<int>(26));\r
    vector<int> indegrees(cs.size());\r
    for (auto &e: edges) {\r
        al[e[0]].push_back(e[1]);\r
        ++indegrees[e[1]];\r
    }\r
    vector<int> q;\r
    for (int i = 0; i < cs.size(); ++i)\r
        if (indegrees[i] == 0)\r
            q.push_back(i);\r
    int res = 0, processed = 0;\r
    while (!q.empty()) {\r
        vector<int> q1;\r
        for (auto i : q) {\r
            ++processed;\r
            res = max(res, ++cnt[i][cs[i] - 'a']);\r
            for (auto j : al[i]) {\r
                for (auto k = 0; k < 26; ++k)\r
                    cnt[j][k] = max(cnt[j][k], cnt[i][k]);\r
                if (--indegrees[j] == 0)\r
                    q1.push_back(j);\r
            }\r
        }\r
        swap(q, q1);\r
    }\r
    return processed != cs.size() ? -1 : res;\r
}\r
};\r
```\r
```python []\r
class Solution(object):\r
    def largestPathValue(self, colors, edges):\r
        n = len(colors)\r
        al = [[] for _ in range(n)]\r
        cnt = [[0] * 26 for _ in range(n)]\r
        indegrees = [0] * n\r
        \r
        for e in edges:\r
            al[e[0]].append(e[1])\r
            indegrees[e[1]] += 1\r
            \r
        q = []\r
        for i in range(n):\r
            if indegrees[i] == 0:\r
                q.append(i)\r
        \r
        res, processed = 0, 0\r
        while q:\r
            q1 = []\r
            for i in q:\r
                processed += 1\r
                res = max(res, cnt[i][ord(colors[i]) - ord('a')] + 1)\r
                cnt[i][ord(colors[i]) - ord('a')] += 1\r
                for j in al[i]:\r
                    for k in range(26):\r
                        cnt[j][k] = max(cnt[j][k], cnt[i][k])\r
                    indegrees[j] -= 1\r
                    if indegrees[j] == 0:\r
                        q1.append(j)\r
            q = q1\r
        \r
        return res if processed == n else -1\r
\r
```\r
\r
# Please Comment\uD83D\uDC4D\uD83D\uDC4D\r
```\r
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A\r
```