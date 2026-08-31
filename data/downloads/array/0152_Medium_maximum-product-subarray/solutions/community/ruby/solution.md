# 6 simple lines, Ruby is awesome here

**Author:** StefanPochmann
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-product-subarray/solutions/48413/](https://leetcode.com/problems/maximum-product-subarray/solutions/48413/)

---

I walk over `nums` front to back. My `min` and `max` tell me the smallest and largest product ending with the current number `n`. For the next `n`, I can either use that `n` alone or I can extend the previous min/max products by multiplying them with `n`.

    def max_product(nums)
        min = max = 1
        best = nums[0]
        nums.each { |n|
            min, max = [n, min*n, max*n].minmax
            best = [best, max].max
        }
        best
    end