# Ruby solution using Hash

**Author:** hirens20
**Votes:** 1
**Link:** [https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/4169122/](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/4169122/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) -> creating hash
O(k) -> for dot product

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(k) as we store only non-zero values

# Code
```
require 'matrix'

class SparseVector
    attr_accessor :hash
=begin
    :type nums: Integer[]
=end
    def initialize(nums)
        @hash = {} # consists of non-zero values with key: index, value: number
        (0...nums.length).each do |i|
            @hash[i] = nums[i] if nums[i] != 0
        end
    end

# Return the dotProduct of two sparse vectors
=begin
    :type vec: SparseVector
    :rtype: Integer
=end
    def dotProduct(vec)
        result = 0
        @hash.each do |key, value|
            result += value * vec.hash[key] if vec.hash[key]
        end
        result
    end
end

# Your SparseVector object will be instantiated and called as such:
# v1 = SparseVector.new(nums1)
# v2 = SparseVector.new(nums2)
# ans = v1.dotProduct(v2)
```