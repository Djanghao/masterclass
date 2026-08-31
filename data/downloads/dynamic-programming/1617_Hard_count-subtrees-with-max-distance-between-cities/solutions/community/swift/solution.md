# [swift]BFS+DFS

**Author:** KuShuLian
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/solutions/2249763/](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/solutions/2249763/)

---

```
//https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/
class Solution {
    func countSubgraphsForEachDiameter(_ n: Int, _ _edges: [[Int]]) -> [Int] {

        let edges = _edges.map { e in
            [e[0] - 1,e[1] - 1]
        }

        ///\u6839\u636E`mask`\u6784\u9020\u5B50\u6811\uFF08\u4E5F\u53EF\u80FD\u662F\u68EE\u6797\uFF09
        func buildSubtree( base mask: Int ) -> [[Int]] {
            var tree = [[Int]](repeating: [], count: n)
            for e in edges {
                guard mask & (1 << e[0]) != 0 && mask & (1 << e[1]) != 0 else {continue}
                tree[e[0]].append(e[1])
                tree[e[1]].append(e[0])
            }
            return tree
        }


        ///\u5E38\u89C4DFS
        func dfs(_ node: Int, _ visited: inout Int,_ tree:[[Int]]) {
            visited |= (1 << node)
            for child in tree[node]  {
                guard visited & (1 << child) == 0 else {
                    continue
                }
                dfs(child, &visited, tree)
            }
        }


        ///\u5224\u65AD\u662F\u5426\u662F\u4E00\u68F5\u6811\uFF1A\u4EFB\u4E00\u8282\u70B9\u51FA\u53D1\uFF0C\u90FD\u80FD\u8BBF\u95EE\u5230\u53E6\u4E00\u4E2A\u8282\u70B9
        func isTree(possibleTree: [[Int]], _ mask: Int) -> Bool {
            let anynode = 64 - mask.leadingZeroBitCount - 1
            var visited = 0
            dfs(anynode, &visited, possibleTree)
            return visited == mask
        }

        ///BFS\u6C42\u89E3\u76F4\u5F84\u7684\u4E24\u70B9
        func getPointOfTreeDiameter(_ tree:[[Int]], _ root: Int) -> (point:Int,depth:Int) {
            var point = -1
            var visited = 0
            var depth = 0
            var queue = [Int]()
            queue.append(root)
            visited |= (1 << root)

            while !queue.isEmpty {
                point = queue[0]
                depth += 1
                var newQueue = [Int]()
                for node in queue {
                    for ch in tree[node] {
                        guard 0 == visited & (1 << ch) else {
                            continue
                        }
                        visited |= (1 << ch)
                        newQueue.append(ch)
                    }
                }
                queue = newQueue
            }
            return (point,depth)
        }

        ///\u6C42\u6811\u7684\u76F4\u5F84
        func caculateDiameter(of tree:[[Int]], _ mask: Int) -> Int {
            return  getPointOfTreeDiameter(tree, getPointOfTreeDiameter(tree, 64 - mask.leadingZeroBitCount - 1).point).depth - 1
        }

        var ans = [Int](repeating: 0, count: n - 1)
        for mask in 1..<(1 << n) {
            guard mask.nonzeroBitCount > 1 else {continue}
            //\u6784\u9020\u5B50\u6811
            let subtree = buildSubtree(base: mask)
            //\u4FDD\u8BC1\u5B50\u6811\u5408\u6CD5,\u8FDE\u901A
            guard isTree(possibleTree: subtree, mask) else {continue}
            //\u6C42\u76F4\u5F84
            let d = caculateDiameter(of: subtree, mask)
            ans[d - 1] += 1

        }
        return ans
    }
}
```