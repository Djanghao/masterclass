# [swift] DFS

**Author:** KuShuLian
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/solutions/2208256/](https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/solutions/2208256/)

---

```
// https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/
class Solution {
    private typealias Edge = (from: Int,to:Int)
    func minimumScore(_ nums: [Int], _ edges: [[Int]]) -> Int {

        let N = nums.count
        ///\u5EFA\u6811
        var tree = [[Int]](repeating: [], count: N)
        for e in edges {
            tree[e[0]].append(e[1])
            tree[e[1]].append(e[0])
        }


        ///\u4EE50\u4E3A\u6839\u8282\u70B9\uFF0C\u7ED3\u5408\u5C42\u7EA7\u4FE1\u606F\uFF0C\u53EF\u4EE5\u5F97\u5230\u6709\u5411\u6811
        let root = 0
        ///\u4FDD\u5B58\u5404\u4E2A\u8282\u70B9\u7684\u76F8\u5173\u6570\u636E\uFF1A\u5F02\u6216\u503C\uFF0C\u5F53\u524D\u5B50\u6811\u7684\u6240\u6709\u8282\u70B9\u96C6\u5408\uFF0C\u4EE5\u53CA\u5404\u4E2A\u8282\u70B9\u7684\u5C42\u7EA7
        var xorSum = [Int](repeating: 0, count:N )
        var subTrees = [Set<Int>](repeating: [], count: N)
        var level = [Int](repeating: -1, count: N)
        func dfs(_ parent: Int,_ node: Int, _ curLel:Int) {

            xorSum[node] = nums[node]
            subTrees[node].insert(node)
            level[node] = curLel
            for next in tree[node] {
                guard next != parent else {
                    continue
                }
                dfs(node, next, curLel + 1)
                xorSum[node] ^= xorSum[next]
                subTrees[node] = subTrees[node].union(subTrees[next])
            }
        }
        dfs(-1, root,0)

        ///\u8F6C\u5316\u4E3A\u6709\u5411\u8FB9\u5E76\u6392\u5E8F\uFF1A\u4F9D\u636E\u5C42\u7EA7\u4FE1\u606F
        let sortedDirectedEdges:[Edge] = edges.map({ e in
            if level[e[0]] < level[e[1]] {
                return (e[0],e[1])
            } else {
                return (e[1],e[0])
            }
        }).sorted { e1, e2 in
            level[e1.from] < level[e2.from]
        }

        ///\u679A\u4E3E\u5220\u9664\u7684\u4E24\u6761\u8FB9
        var ans = Int.max
        let M = edges.count
        for i in 0..<M {
            var j = i + 1
            while j < M {

                let fe = sortedDirectedEdges[i]
                let se = sortedDirectedEdges[j]
                let nodes = [fe.from,fe.to,se.from,se.to]
                var (f,s,t) = (0,0,0)
                ///\u5206\u60C5\u51B5\u8BA8\u8BBA
                if subTrees[nodes[1]].contains(nodes[2]) {
                    (f,s,t) = (xorSum[root] ^ xorSum[nodes[1]],xorSum[nodes[1]] ^ xorSum[nodes[3]],xorSum[nodes[3]])

                } else {
                    (f,s,t) = (xorSum[root] ^ xorSum[nodes[1]] ^ xorSum[nodes[3]],xorSum[nodes[1]],xorSum[nodes[3]])
                }
                ans = min(ans, max(f,s,t) - min(f,s,t))
                j += 1
            }
        }
        return ans
    }
}

```