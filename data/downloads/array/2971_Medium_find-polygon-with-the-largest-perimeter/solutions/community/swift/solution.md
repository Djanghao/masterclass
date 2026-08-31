# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/solutions/4733425/](https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/solutions/4733425/)

---

# Complexity
- Time complexity: $$O(n * log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func largestPerimeter(_ nums: [Int]) -> Int {
        let nums = nums.sorted(by: >)
        var sum = nums.reduce(0, +)
        for i in 0 ..< nums.count - 2 {
            sum -= nums[i]
            if nums[i] < sum {
                return nums[i] + sum
            }
        }
        return -1
    }
}
```