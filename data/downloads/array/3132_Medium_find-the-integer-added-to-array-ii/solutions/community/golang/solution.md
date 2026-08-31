# Easy understand | Sort and compare | O(n*logn)

**Author:** vincent0740
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5082160/](https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5082160/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n*logn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n*logn)$$ because of sort, expect for sorting, it's $$O(3n) = O(n)$$

- Space complexity: $$O(n*logn)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n*logn)$$ because of sort, expect for sorting, it's $$O(1)$$

# Code
```
func minimumAddedInteger(nums1 []int, nums2 []int) int {
    slices.Sort(nums1)
    slices.Sort(nums2)
    
    ans := math.MaxInt
    for i := 0; i <= 2; i++ {
        interval := nums2[0] - nums1[i]
        skiped := i
        
        for j := 0; j < len(nums2) && skiped <= 2; j++ {
            n1 := nums2[j] - interval
            
            if n1 != nums1[j + skiped] {
                skiped++
                j--
            }
        }
        
        if skiped <= 2 {
            ans = interval
        }
    }
    
    return ans
}
```