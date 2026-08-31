# Frequency hashes, O(n), O(n)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/5031847/](https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/5031847/)

---


```
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer[]}
def find_intersection_values(nums1, nums2)
    nums1_freq = nums1.tally
    nums2_freq = nums2.tally
    a = 0
    nums1.each do |num|
        if nums2_freq[num] and nums2_freq[num] > 0
            a += 1
        end
    end

    b = 0
    nums2.each do |num|
        if nums1_freq[num] and nums1_freq[num] > 0
            b += 1
        end
    end
    
    [a,b]
end
```