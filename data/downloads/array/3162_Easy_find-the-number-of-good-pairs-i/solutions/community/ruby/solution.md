# We are so back baby

**Author:** tomrendle
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5874804/](https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5874804/)

---


# Code
```ruby []
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @param {Integer} k
# @return {Integer}
def number_of_pairs(nums1, nums2, k, pairs = 0)
    nums1.each_with_index do |n,i|
        nums2.each_with_index do |subn,subi|
            pairs += 1 if n % (subn * k) == 0
        end
    end
    return pairs
end
```