# Swift solution with thoughts progress

**Author:** tzef
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/solutions/2924892/](https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/solutions/2924892/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Genral thoughts
after find odds
two way to make it become even
1. two odds connect each other and both become even
2. two odds connect to other even nodes, deal with new even nodes

Because the at most two new edge constraints
-> check odd nodes must be 2 or 4 (if > 4 the needed edges must over two)
so we can limit to three cases based on the odds count

**A. 0 odds**
Already make condition, return true

**B. 4 odds**
only can connect each other (approach 2)
if connect to other nodes, no more chance can deal with new nodes

**C. 2 odds**
if approach 2 work, just need one new edge to make both 2 odds to even degrees

else we should check approach 1, by going through n nodes to find one node can connect to two odds together
we can't connect to two different even nodes, same reason as case B, no more chance can deal with new nodes

# Approach
<!-- Describe your approach to solving the problem. -->

We only need to knwo how to check two nodes can connect
it should be clear after two example

check odds can connect a-b
by adjacentList[a] not contains b and vice versa
1: [2, 3, 4] -> no noded can add
2: [1]
3: [1]
4: [1]

1: [2] -> 1-2(x), 1-2, 1-3
2: [1]
3: [4]
4: [3]

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

$$O(n)$$ because we leverate on set in adjacent list to get $$O(1)$$ contain check

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

$$O(n)$$ for adjacent list

# Code
```
class Solution {
    var adjacentList = [Int: Set<Int>]()
    func isPossible(_ n: Int, _ edges: [[Int]]) -> Bool {
        for edge in edges {
            adjacentList[edge[0], default: Set<Int>()].insert(edge[1])
            adjacentList[edge[1], default: Set<Int>()].insert(edge[0])
        }
        
        var odds = [Int]()
        adjacentList.forEach { 
            if $0.value.count % 2 == 1 {
                odds.append($0.key)
            }
        }
        if odds.count == 0 {
            return true
        }
        
        guard odds.count == 2 || odds.count == 4 else {
            return false
        }
        if odds.count == 2 {
            if canConnect(odds[0], odds[1]) {
                return true
            } else {
                for i in 1...n {
                    if canConnect(i, odds[0]) && canConnect(i, odds[1]) {
                        return true
                    }
                }
                return false
            }
        } else {
            return 
                (canConnect(odds[0], odds[1]) && canConnect(odds[2], odds[3])) ||
                (canConnect(odds[0], odds[2]) && canConnect(odds[1], odds[3])) ||
                (canConnect(odds[0], odds[3]) && canConnect(odds[1], odds[2]))
        }
    }
    
    func canConnect(_ node1: Int, _ node2: Int) -> Bool {
        return 
            !adjacentList[node1, default: Set<Int>()].contains(node2) && 
            !adjacentList[node2, default: Set<Int>()].contains(node1)
    }
}
```