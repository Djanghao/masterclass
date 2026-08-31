# Sort

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/4413184/](https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/4413184/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n log n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer}
def min_number(nums1, nums2)

    nums1.sort!
    nums2.sort!

    nums1_hash = {}
    nums1.each do |v|
        nums1_hash[v] = true
    end

    nums2.each do |v|
        if nums1_hash[v] and v.digits.size == 1
            return v

        end
    end

    char_1 = [nums1[0], nums2[0]].min.to_s
    char_2 = [nums1[0], nums2[0]].max.to_s
    (char_1 + char_2).to_i 
end
```