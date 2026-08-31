# Swift LCA

**Author:** tzef
**Votes:** 0
**Link:** [https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/2925005/](https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/2925005/)

---

# Code
```
/*
    Lowerest Common Ancestor
    
    normal tree need recursive as we don't have reference to parent
    array -> tree with ability to find the parent (by i/2)

    O(LogN)
    step 0          step 1          step 2       step3
        1               1              [1]        [[1]]
      /   \\           /   \\           /   \\        / \\
     2     [3]      [2]    [3]      [2]     3     2   3
     \\                \\               \\            \\
     [5]               5                5           5

    
    length = steps + 1(LCA it self)
    
    while left != right:
        if left > right
            left /= 2
        else
            right /= 2
    
    LCA is the value when left == right

    Time Complexity: O(Q * LogN)
 */
class Solution {
    func cycleLengthQueries(_ n: Int, _ queries: [[Int]]) -> [Int] {
        queries.map { LCASteps(n, $0) }
    }
    
    func LCASteps(_ n: Int, _ query: [Int]) -> Int {
        var step = 1
        var left = query[0]
        var right = query[1]
        while left != right {
            step += 1
            if left > right {
                left /= 2
            } else {
                right /= 2
            }
        }
        return step
    }
}

```