# Swift two pointers

**Author:** TigranNeDoDeveloper
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-way-to-form-string/solutions/3278161/](https://leetcode.com/problems/shortest-way-to-form-string/solutions/3278161/)

---

# Complexity
- Time complexity:
The time complexity of the shortestWay function is O(m * n), where m is the length of the source string and n is the length of the target string. This is because in the worst case, we may need to iterate over the entire source string for each character in the target string.


- Space complexity:
The space complexity is O(1), since the amount of extra memory used by the algorithm does not depend on the length of the input strings. We only use a few variables to keep track of indices and counts, and do not allocate any additional memory.
# Code
```
class Solution {
    func shortestWay(_ source: String, _ target: String) -> Int {
        var targetIndex = 0
        var count = 0
        let sourceArray = Array(source)
        let targetArray = Array(target)
        while targetIndex < targetArray.count {
            let before = targetIndex
            for char in sourceArray {
                if targetIndex < targetArray.count && char == targetArray[targetIndex] {
                    targetIndex += 1
                }
            }
            if before == targetIndex {
                return -1
            }
            count += 1
        }
        return count
    }
}
```