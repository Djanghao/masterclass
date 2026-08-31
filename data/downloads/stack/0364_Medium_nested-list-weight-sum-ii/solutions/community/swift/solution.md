# Swift 4ms 98% speed

**Author:** ashishchatterjee
**Votes:** 1
**Link:** [https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/917947/](https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/917947/)

---

In my version of a solution, I used a similar approach as with the Nested List Weight Sum pt 1. First, as seen in the `helper()`, we map the values to their depth (and add those values at the same depth), while tracking the max depth that we reach. Once the `helper()` finishes running, our map looks something like:
```
example input:  [1, [4, [6] ], 3]
map = [
	1: 4    (1 + 3)
	2: 4
	3: 6
]
```

So, back in the `depthSumInverse()`, we iterate through our map using the `for` loop and multiply each value by the `max` depth subtracted by that given depth. This subtraction allows us to get the "reverse" depth. So, following our example, we would have `4 * (3 - 1 + 1) + 4 * (3 - 2 + 1) + 6 * (3 - 3 + 1)` = `12 + 8 + 6` = `26`

Let me know if you have any feedback or questions!

```
class Solution {
    
    var map: [Int:Int] = [:]
    var max = 0
    
    func depthSumInverse(_ nestedList: [NestedInteger]) -> Int {
        helper(nestedList, 1)
        
        var res = 0
        for (key, value) in map {
            res += (value)*(max-key+1)
        }
        return res
    }
    
    func helper(_ list: [NestedInteger],_ depth: Int) {
        max = max(depth,max)
        for i in 0..<list.count {
            if list[i].isInteger() {
                map[depth, default: 0] += list[i].getInteger()
            } else {
                helper(list[i].getList(), depth+1)
            }
        }
    }
}