# O(n), Beats 87.50% of users with Swift

**Author:** Victor-SMK
**Votes:** 0
**Link:** [https://leetcode.com/problems/semi-ordered-permutation/solutions/5248445/](https://leetcode.com/problems/semi-ordered-permutation/solutions/5248445/)

---


```
class Solution {
    func semiOrderedPermutation(_ nums: [Int]) -> Int {
        var ans = 0
        var flag = true
        
        for (i, num) in nums.enumerated(){
            if num == 1 || num == nums.count{
                ans += abs(i + 1 - num)
                if num == nums.count && flag{
                    ans -= 1
                }
                if num == 1{
                    flag = false
                }
            }
        }

        return ans
    }
}
```