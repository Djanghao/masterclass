# Swift | 2 solutions

**Author:** pagafan7as
**Votes:** 1
**Link:** [https://leetcode.com/problems/lexicographical-numbers/solutions/5813880/](https://leetcode.com/problems/lexicographical-numbers/solutions/5813880/)

---

This solution is short and accepted, but it is $O(n\\log n)$:

```
class Solution {
    func lexicalOrder(_ n: Int) -> [Int] {
        (1...n).sorted { String($0) < String($1) }
    }
}
```

For a linear time solution, with no additional space, except for the call stack:

# Code
```swift []
class Solution {
    func lexicalOrder(_ n: Int) -> [Int] {
        var res = [Int]()

        func dfs(_ prefix: Int) {
            if prefix > n { return }
            if prefix > 0 { res.append(prefix) }
            for d in 0...9 {
                if prefix * 10 + d > 0 {
                    dfs(prefix * 10 + d)
                }
            }
        }

        dfs(0)
        return res
    }
}
```