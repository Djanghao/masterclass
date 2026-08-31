# simple swift solution #sss

**Author:** eclipse_kkk
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/4920816/](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/4920816/)

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
```
class Solution {
    func sumOfEncryptedInt(_ nums: [Int]) -> Int {
        var sum = 0
        for i in 0 ..< nums.count {
            var mx = 0
            var num = nums[i]
            var count = ""
            while num > 0 {
                count.append("1")
                mx = max(mx, num % 10)
                num /= 10
            }
            num = Int(count)! * mx
            sum += num 
                
        }
        
        return sum 
    }
}
```