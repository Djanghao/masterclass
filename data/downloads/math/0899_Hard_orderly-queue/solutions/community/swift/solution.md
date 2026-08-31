# Swift. Easy to understand. 100 %

**Author:** giria
**Votes:** 0
**Link:** [https://leetcode.com/problems/orderly-queue/solutions/2785800/](https://leetcode.com/problems/orderly-queue/solutions/2785800/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
For k equal to 1 we need to do rotation and find the minimum
For k > 1 is enough to sort the string.

# Complexity
- Time complexity:
O(N^2)



# Code
```
class Solution {
    func orderlyQueue(_ s: String, _ k: Int) -> String {
        if k == 1 {
            var arr = Array(s)
            var min = "\\u{FFFF}" // a string with a big Unicode point value
            for _ in 1...s.count {
                let letter = arr.removeFirst()
                arr.append(letter)
                min = Swift.min(min, String(arr))
            }
            return min
        } else {
            
            let arr = Array(s)
            
            return String(arr.sorted())
            
        }
    }
}
```