# Ruby || 2 pointers || T/S O(n)/O(1)

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/subarray-product-less-than-k/solutions/4931529/](https://leetcode.com/problems/subarray-product-less-than-k/solutions/4931529/)

---


# Code
```ruby
def num_subarray_product_less_than_k(nums, k)
    return 0 if k.zero?
    i, prod = -1, 1
    nums.each_with_index.inject(0) {|res, (v, j)|
        prod *= v
        prod /= nums[i += 1] while i < j && prod >= k
        res + j - i
    }
end
```