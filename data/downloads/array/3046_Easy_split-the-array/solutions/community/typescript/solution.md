# 9 ms Beats 100.00%

**Author:** vamnguyen
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-the-array/solutions/5945230/](https://leetcode.com/problems/split-the-array/solutions/5945230/)

---

# Complexity
- Time complexity: O(n * logn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function isPossibleToSplit(nums: number[]): boolean {
    nums = nums.sort((a, b) => a - b) // Sort array O(log n)
    let nums1 = {}, // even index of nums array
    nums2 = {} // odd index of nums array
    // ==> nums1.length = nums2.length

    // Push element of nums array to object
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 == 0) {
            if (!nums1[nums[i]]) nums1[nums[i]] = 1
            else nums1[nums[i]]++
        }
        else {
            if (!nums2[nums[i]]) nums2[nums[i]] = 1
            else nums2[nums[i]]++
        }
    }

    
    
    //    Example Test case 1: 
    //        nums1: {
    //            1: 1,
    //            2: 1,
    //            3: 1
    //        }
    //        nums2: {
    //            1: 1,
    //            2: 1,
    //            4: 1
    //        }
    
    // Check nums1 and nums2 distinct elements
    for (let key in nums1) {
        if (nums1[key] > 1) return false
    }

    for (let key in nums2) {
        if (nums2[key] > 1) return false
    }

    return true
};
```