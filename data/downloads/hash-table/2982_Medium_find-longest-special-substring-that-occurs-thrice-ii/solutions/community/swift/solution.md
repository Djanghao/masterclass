# [Swift] hashmap solution

**Author:** GV1506
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4503817/](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4503817/)

---

```
class Solution {
    func maximumLength(_ s: String) -> Int {
        let arr = Array(s)
        var ans = -1
        var counter = [Character: [Int]]()
        var count = 1
        var cur = arr[0]
        let n = arr.count
        for i in 1..<n {
            if arr[i] == cur {
                count += 1
            } else {
                counter[cur, default: []].append(count)
                count = 1
                cur = arr[i]
            }
        }
        counter[cur, default: []].append(count)
        
        for (c, values) in counter {
            var first = -1
            var second = -1
            var third = -1
            for val in values {
                if val > first {
                    third = second
                    second = first
                    first = val
                } else if val > second {
                    third = second
                    second = val
                } else if val > third {
                    third = val
                }
            }
            ans = max(ans, max(max(third, first-2), min(second, first-1)))
        }
        
        return ans > 0 ? ans : -1
    }
}
```
Time complexity: O(N)
Space complexity: O(N)