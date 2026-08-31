# Swift - DFS - Single Method

**Author:** pitt500
**Votes:** 2
**Link:** [https://leetcode.com/problems/nested-list-weight-sum/solutions/796057/](https://leetcode.com/problems/nested-list-weight-sum/solutions/796057/)

---

```
class Solution {
    func depthSum(_ nestedList: [NestedInteger], _ depth: Int = 1) -> Int {
        var counter = 0
        
        for n in nestedList {
            if n.isInteger() {
                counter += n.getInteger() * depth
            } else {
                counter += depthSum(n.getList(), depth + 1)
            }
        }
        
        return counter
    }
}
```