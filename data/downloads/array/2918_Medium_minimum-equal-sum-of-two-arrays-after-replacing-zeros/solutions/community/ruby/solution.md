# Ruby O(n)

**Author:** azusa152
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/4272679/](https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/4272679/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer}
def min_sum(nums1, nums2)
    cnt1, cnt2 = 0, 0
    sum1, sum2 = 0, 0
    nums1.each do |i|
        if i == 0
            cnt1 += 1
        else
            sum1 += i
        end 
    end 

    nums2.each do |i|
        if i == 0
            cnt2 += 1
        else
            sum2 += i
        end 
    end 


    min1 = sum1 + cnt1 
    min2 = sum2 + cnt2 

    if min1 < min2 && cnt1 == 0 || min1 > min2 && cnt2 == 0
        -1
    else
        [min1, min2].max 
    end

    
end
```