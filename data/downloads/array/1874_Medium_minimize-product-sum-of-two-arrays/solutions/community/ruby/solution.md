# Ruby 1 line 100%

**Author:** user0712R
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/2114016/](https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/2114016/)

---

The smallest sum is going to be :
smallest of first array * the biggest of second array + 2nd smallest * 2nd biggest + ....
so lets sort first and reverse sort 2nd and calculate smallest sum
```
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer}
def min_product_sum(nums1, nums2)
    nums1.sort.zip(nums2.sort.reverse).map{|x,y| x*y}.sum
end

```