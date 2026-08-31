# ✅ Solution in swift (Using Two pointer Approach)

**Author:** JSiraswa
**Votes:** 0
**Link:** [https://leetcode.com/problems/3sum-smaller/solutions/4700256/](https://leetcode.com/problems/3sum-smaller/solutions/4700256/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
# Code
```
class Solution {
    func threeSumSmaller(_ nums: [Int], _ target: Int) -> Int {
        let n = nums.count
        var count = 0
        var numsS = nums.sorted()
        for i in 0..<n {
            let num = numsS[i]
            var start = i+1
            var end = n-1
            while start < end {
                let sum = numsS[start] + numsS[end] + num
                if sum < target {
                    count += end - start
                    start += 1
                } else {
                    end -= 1
                }
            }
        }
        return count
    }
}
```