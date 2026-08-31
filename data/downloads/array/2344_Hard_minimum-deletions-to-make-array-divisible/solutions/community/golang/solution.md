# Straightforward Go Lang O(n^2)

**Author:** ilya-pimenov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/3750017/](https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/3750017/)

---

# Intuition & Approach

I implemented brute force and it was accepted `\xAF\\_(\u30C4)_/\xAF`.

But it can be optimized to a better complexity then $$O(n^2)$$ with Greatest Common Divisor.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
```
func minOperations(nums []int, numsDivide []int) int {
    divides := func(n int) bool {
        for _, v := range numsDivide {
            if v % n != 0 {
                return false
            }
        }
        return true
    }

    sort.Ints(nums)
    prev := -1
    for i := 0; i < len(nums); i++ {
        if prev == nums[i] {
            continue
        }
        prev = nums[i]

        if divides(nums[i]) {
            return i
        }
    }
    return -1    
}
```