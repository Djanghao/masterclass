# 8 lines in Ruby

**Author:** StefanPochmann
**Votes:** 23
**Link:** [https://leetcode.com/problems/product-of-array-except-self/solutions/65855/](https://leetcode.com/problems/product-of-array-except-self/solutions/65855/)

---

Same algorithm as everybody, just in Ruby. I like the usage of indexes `i`, `-i` and `~i`.

    def product_except_self(nums)
        n = nums.size
        out = [1] * n
        left = right = 1
        1.upto(n-1) { |i|
            out[i] *= left *= nums[i-1]
            out[~i] *= right *= nums[-i]
        }
        out
    end