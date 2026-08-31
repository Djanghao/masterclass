# Beats 100%. Two pointer.

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/4155140/](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/4155140/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer}
def max_distance(nums1, nums2)
    # We know this is two pointer.
    # We need l < r and nums1[l] <= nums2[r]
    # How can we move forward and gather potential solutions while avoiding n^2?
    # Array is non-increasing, next val can either be the same val or a lower value.

    l = 0
    r = 0
    max = 0
    while l < nums1.size and r < nums2.size 
        if nums1[l] <= nums2[r] 
            potential_max = r - l
            if potential_max > max
                max = potential_max
            end

            r += 1
        else
            l += 1
        end
    end

    max
end
```