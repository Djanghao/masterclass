# Ruby Kadane (O(N))

**Author:** rmuntani
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/5913630/](https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/5913630/)

---

# Intuition
Given A=[a1,a2,a3,...] and B=[b1,b2,b3,...], if sum(A) > sum(B), there exists at least one an > bn, and there could be one or more bn > an. If we were to replace one or more `bns` with their equivalent `ans`, we'd increase the total value of sum(A). The greater the difference between an and bn, the greater that sum would increase.

With that in mind, we want to find the subarray of `nums1 - nums2` that has the least value so we can increase sum(nums1) to its maximum. We need to to the same for sum(nums2) to find the maximum sum.

The code bellow could be improved to use less memory, as creating the difference arrays is not necessary.

# Code
```ruby []
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer}
def maximums_spliced_array(nums1, nums2)
    s1 = nums1.sum
    s2 = nums2.sum
    diff1 = nums1.zip(nums2).map{_1-_2}    
    diff2 = nums2.zip(nums1).map{_1-_2}
    ans = 0

    [[diff1, s1], [diff2, s2]].each do |diff, sum|
        max = 0
        min = 0
        acc_sum = 0
        diff.each do |val|
            acc_sum += val
            min = [min, acc_sum - max].min
            max = [max, acc_sum].max
        end
        ans = [ans, sum - min].max
    end

    ans
end
```