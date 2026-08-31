# Swift [3 Dijkstra] (bisect instead of Heap) Accepted

**Author:** haokin
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/solutions/1846304/](https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/solutions/1846304/)

---

Swift doesn't have Heap. I am using much easier binary search instead of heap.
Even through binary search is O(logn) and Array insert worst case  is O(n). But in most cases Array insert is not worst case.
So even [fact binary search + Array insert] is O(n), it is able to pass most leetcode heap problems.

```
class Solution {
    func minimumWeight(_ n: Int, _ edges: [[Int]], _ src1: Int, _ src2: Int, _ dest: Int) -> Int {
        var G1 = Array(repeating: [(Int,Int)](), count: n), G2 = G1
        for v in edges
        {
            G1[v[0]].append((v[1], v[2]))
            G2[v[1]].append((v[0], v[2]))
        }
        let distance1 = dijkstra(G1, src1), distance2 = dijkstra(G1, src2), distance3 = dijkstra(G2, dest)
        var res = Int.max
        for (d1, (d2, d3)) in zip(distance1, zip(distance2, distance3)) where d1 != -1 && d2 != -1 && d3 != -1
        {
            res = min(res, d1+d2+d3)
        }
        return res == Int.max ? -1 : res
    }
    
    private func dijkstra(_ graph: [[(Int,Int)]], _ K: Int) -> [Int]
    {
        var res = Array(repeating: -1, count: graph.count), stack = [(K,0)]
        while let v = stack.popLast(), res[v.0] == -1
        {
            res[v.0] = v.1
            for (i, w) in graph[v.0]
            {
                maxSorted(&stack, (i, w+v.1))
            }
        }
        return res
    }
    
    private func maxSorted(_ arr: inout [(Int,Int)], _ x: (Int,Int))
    {
        var l = 0, r = arr.count
        while l < r
        {
            let m = (l+r)/2
            if arr[m].1 > x.1
            {
                l = m + 1
            }
            else
            {
                r = m
            }
        }
        arr.insert(x, at: l)
    }
}
```