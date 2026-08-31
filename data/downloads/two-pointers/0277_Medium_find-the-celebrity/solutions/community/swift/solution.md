# Swift 🚀

**Author:** _MohamedNasser_
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-celebrity/solutions/6104309/](https://leetcode.com/problems/find-the-celebrity/solutions/6104309/)

---


# Code
```swift []
/**
 * The knows API is defined in the parent class Relation.
 *     func knows(_ a: Int, _ b: Int) -> Bool;
 */

class Solution : Relation {
    var cel = Array(repeating: true, count: 101)

    func findCelebrity(_ n: Int) -> Int {
        let celebrity = dfs(0, n)
        
        if celebrity == -1 {
            return -1
        }

        // make sure everyone knows celebrity knows and he donot know anyone 
        for i in 0..<n {
            if i != celebrity && (!knows(i, celebrity) || knows(celebrity, i)) {
                return -1
            }
        }
        
        return celebrity
    }

    // get the celebrity who does not know anyone
    func dfs(_ a: Int, _ n: Int) -> Int {
        if cel[a] == false {
            return -1
        }

        for b in 0..<n {
            if a != b, cel[b] == true, knows(a, b) {
                cel[a] = false
                return dfs(b, n)
            }
        }

        return a
    }
}

```