# Simple swift solution

**Author:** Ayushi_Tyagi
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-mountain-in-array/solutions/5983594/](https://leetcode.com/problems/longest-mountain-in-array/solutions/5983594/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func longestMountain(_ arr: [Int]) -> Int {

        var maxLen = 0
        var i = 1

        while(i < arr.count-1) {
            if arr[i] > arr[i+1] && arr[i] > arr[i-1] {
                var left = i
                var right = i
                while(left > 0 && (arr[left-1] < arr[left])) {
                    left -= 1
                }
                while(right < arr.count-1 && (arr[right] > arr[right+1])) {
                    right += 1
                }
                maxLen = max(maxLen, right - left + 1)
            }
            i += 1
        }
       
        return maxLen
    }
}
```