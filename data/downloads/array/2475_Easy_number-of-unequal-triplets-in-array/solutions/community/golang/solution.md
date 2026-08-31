# 1 ms Golang solution

**Author:** RICHWING
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/4849090/](https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/4849090/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n^3)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func unequalTriplets(nums []int) int {
    counter:=0
    for i:=0;i<len(nums)-2;i++{
        for j:=i+1;j<len(nums)-1;j++{
            for k:=j+1;k<len(nums);k++{
                if (nums[i]!=nums[j]) && (nums[i] != nums[k]) && (nums[j] != nums[k]){
                    counter++
                }
            }
        }
    }
    return counter
}
```