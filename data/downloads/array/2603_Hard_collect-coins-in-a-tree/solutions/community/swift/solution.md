# Swift Solution | With Explanations.

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/collect-coins-in-a-tree/solutions/3342386/](https://leetcode.com/problems/collect-coins-in-a-tree/solutions/3342386/)

---

# Working
1. Remove all leaves that are worth 0 coins, and remove their edges from the graph. Keep doing this until no more leaves can be removed.
2. Remove all leaves that are still left. Keep doing this until no more leaves can be removed.
3. Remove all leaves that are still left.
4. Count how many leaves are left.
5. If there are any leaves left, the answer is max(0, (leaves - 1) * 2). Otherwise, the answer is 0.

# Approach
1. In the first loop, we are going to remove all the nodes with only one node connected to it and has value 0. We are going to do this using a queue. For each iteration, we are going to remove the node from the queue and remove all the edges connected to it. If the node removed has a value of 0 and has only one edge connected to it, then we are going to add it to the queue for the next iteration. We are going to do this until there are no nodes that have a value of 0 and have only one edge connected to it.
2. In the second loop, we are going to remove all the nodes with only one node connected to it. We are going to do this using a queue. For each iteration, we are going to remove the node from the queue and remove all the edges connected to it. If the node removed has only one edge connected to it, then we are going to add it to the queue for the next iteration. We are going to do this until there are no nodes that have only one edge connected to it.
3. In the third loop, we are going to remove all the nodes with only one node connected to it. We are going to do this using a queue. For each iteration, we are going to remove the node from the queue and remove all the edges connected to it. If the node removed has only one edge connected to it, then we are going to add it to the queue for the next iteration. We are going to do this until there are no nodes that have only one edge connected to it.
4. After this, we are going to find the number of nodes that have more than one edge connected to it. The answer for this problem is going to be the maximum of 0 and twice the number of nodes we found in step 4 minus 1.

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```
class Solution
{
    func collectTheCoins(_ coins: [Int], _ edges: [[Int]]) -> Int
    {
        var n = coins.count
        var g = Array(repeating: Set<Int>(), count: n)
        var degree = Array(repeating: 0, count: n)
        for e in edges
        {
            g[e[0]].insert(e[1])
            g[e[1]].insert(e[0])
            degree[e[0]] += 1
            degree[e[1]] += 1
        }
        var q = [Int]()
        for i in 0..<n
        {
            if degree[i] == 1 && coins[i] == 0
            {
                q.append(i)
            }
        }
        while q.count > 0
        {
            let i = q.removeFirst()
            for n in g[i]
            {
                degree[n] -= 1
                if degree[n] == 1 && coins[n] == 0
                {
                    q.append(n)
                }
                g[n].remove(i)
            }
            g[i].removeAll()
            degree[i] = n
        }
        for i in 0..<n
        {
            if degree[i] == 1
            {
                q.append(i)
            }
        }
        for _ in 0..<2
        {
            let len = q.count
            for _ in 0..<len
            {
                let cur = q.removeFirst()
                for next in g[cur]
                {
                    degree[next] -= 1
                    if degree[next] == 1
                    {
                        q.append(next)
                    }
                    g[next].remove(cur)
                }
                g[cur].removeAll()
                degree[cur] = n
            }
        }
        var left = 0
        for v in g
        {
            if v.count > 0
            {
                left += 1
            }
        }
        return max(0, (left - 1) * 2)
    }
}
```