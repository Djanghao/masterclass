# Swift | O(n2)

**Author:** SakSwift
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/2819514/](https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/2819514/)

---

# Intuition: 

> There is a catch, once the LCM is gone past a number (i.e increased from) it will never decrese
no matter how many numbers to keep on adding
hence there is no point checking futher if LCM is already surpassed k

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func subarrayLCM(_ nums: [Int], _ k: Int) -> Int {
        var ans = 0
        for i in 0 ..< nums.count {
            var prev = nums[i]
            for j in i ..< nums.count {
                
                let inLCM = lcm(prev, nums[j])
                
                ans += inLCM == k ? 1 : 0

                prev = inLCM

                // no point checking futher if LCM is already surpassed k
                if inLCM > k {
                    break
                }
            }
        }

        return ans
    }

    private func hcf(_ a: Int, _ b: Int) -> Int {
        if b == 0 {
            return a
        }
        return hcf(b, a%b)
    }

    private func lcm(_ a: Int, _ b: Int) -> Int {
        return (a * b) / hcf(a, b)
    }
}
```