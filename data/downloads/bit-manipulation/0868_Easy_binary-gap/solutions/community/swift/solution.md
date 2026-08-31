# Simple solution

**Author:** venkatasaipulipati_123
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-gap/solutions/5848788/](https://leetcode.com/problems/binary-gap/solutions/5848788/)

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
    func binaryGap(_ n: Int) -> Int {
        let str = String(n,radix:2)
        let arr = Array(str)
        var ans = 0
        for left in 0..<arr.count{
            var right = arr.count - 1
            while(left < right){
            if(arr[left] == "1" && arr[right] == "1"){
                let subArr = arr[left...right].filter{$0 == "1"}.count
                if(subArr == 2){
                    ans = max(ans,right - left)
                }
            }
            right -= 1
        }
        }
        return ans
    }
}
```