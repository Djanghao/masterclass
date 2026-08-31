# Python3 || queue  || T/S: 99% / 99&

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/solutions/6106420/](https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/solutions/6106420/)

---

```python3 []

class Solution:
    def maxTargetNodes(self, edges1: List[List[int]], edges2: List[List[int]]) -> List[int]:

        def find_even(edges: list, n: int) -> list:

            graph = [[] for _ in range(n)]  # store node parity: even (True)/ odd (False)
            queue = deque([(0, -1, True)])  # (node, parent, is_even)
            evens = [False] * n

            for u, v in edges:
                graph[u].append(v)
                graph[v].append(u)

            while queue:
                node, parent, is_even = queue.popleft()
                evens[node] = is_even

                for child in graph[node]:
                    if child == parent: continue
                    queue.append((child, node, not is_even))

            return evens

        n1, n2 = len(edges1) + 1, len(edges2) + 1
        evens1, evens2 = find_even(edges1, n1), find_even(edges2, n2)
        sm1, sm2 = sum(evens1), sum(evens2)

        mx = max(sm2, n2 - sm2)

        # Calculate the result
        ans = [mx + (sm1 if even else n1 - sm1) for even in evens1]

        return ans

```
```cpp []
class Solution {
public:
    vector<int> maxTargetNodes(vector<vector<int>>& edges1, vector<vector<int>>& edges2) {
        auto findEvenNodes = [](vector<vector<int>>& edges, int n) -> vector<bool> {
            vector<vector<int>> graph(n);
            vector<bool> evens(n, false);
            queue<pair<int, bool>> q;
            vector<bool> visited(n, false);

            for (auto& edge : edges) {
                graph[edge[0]].push_back(edge[1]);
                graph[edge[1]].push_back(edge[0]);}

            q.push({0, true}); 
            visited[0] = true;

            while (!q.empty()) {
                auto [node, isEven] = q.front();
                q.pop();
                evens[node] = isEven;

                for (int neighbor : graph[node]) {
                    if (!visited[neighbor]) {
                        visited[neighbor] = true;
                        q.push({neighbor, !isEven});}
                }
            }

            return evens;};

        int n1 = edges1.size() + 1, n2 = edges2.size() + 1;
        vector<bool> evens1 = findEvenNodes(edges1, n1);
        vector<bool> evens2 = findEvenNodes(edges2, n2);

        int sm1 = count(evens1.begin(), evens1.end(), true);
        int sm2 = count(evens2.begin(), evens2.end(), true);
        int mx = max(sm2, n2 - sm2);

        vector<int> result(n1);
        for (int i = 0; i < n1; ++i) {
            result[i] = mx + (evens1[i] ? sm1 : (n1 - sm1));}

        return result;}
};
```
[https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/submissions/1468748195/](https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/submissions/1468748195/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `n1 + n2`.
