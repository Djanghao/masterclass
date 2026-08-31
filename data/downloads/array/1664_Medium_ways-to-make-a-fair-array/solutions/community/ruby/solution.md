# Ruby: After removing odd sum is prev odd sum plus even reminder.

**Author:** user9697N
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-make-a-fair-array/solutions/983575/](https://leetcode.com/problems/ways-to-make-a-fair-array/solutions/983575/)

---

##### Leetcode: 1664. Ways to Make a Fair Array.


Create an array that stores cumulative sum of each parity and reminder in the rest of the array of such parity elements. When removing an element sum of odds with be cumulative sum of previous odds plush reminder of evens, and sum of evens will be previous cumulative some of evens plus reminder of odds.

Ruby code:
```Ruby
# 1664. Ways to Make a Fair Array.
# https://leetcode.com/problems/ways-to-make-a-fair-array/
# Runtime: 316 ms, faster than 42.86% of Ruby online submissions for Ways to Make a Fair Array.
# Memory Usage: 219.2 MB, less than 100.00% of Ruby online submissions for Ways to Make a Fair Array.
# @param {Integer[]} nums
# @return {Integer}
def ways_to_make_fair(nums)
    nums.unshift(0)
    sums = [0,0]
    counter = 0
    nums.each_with_index do |el,i|
        if i.even?
            sums[0] += el
        else
            sums[1] += el
        end
    end
    e_sum, o_sum = 0,0
    (1...nums.size).each do |i|
        el = nums[i]
        e_tmp, o_tmp = e_sum,o_sum
        if i.even?
            e_tmp = e_sum + el
        else
            o_tmp = o_sum + el
        end
        # Prev sum minus reminder.
        counter += 1 if e_sum + (sums[1] - o_tmp) == o_sum + (sums[0] - e_tmp)
        e_sum, o_sum = e_tmp, o_tmp
    end
    counter
end
# Leetcode: 1664. Ways to Make a Fair Array.
# https://leetcode.com/problems/ways-to-make-a-fair-array/
# Runtime: 616 ms, faster than 14.29% of Ruby online submissions for Ways to Make a Fair Array.
# Memory Usage: 234.1 MB, less than 42.86% of Ruby online submissions for Ways to Make a Fair Array.
# @param {Integer[]} nums
# @return {Integer}
def ways_to_make_fair(nums)
    tmp = [0] + nums
    even_sum = tmp.each.with_index.sum{|el,i| i.even? ? el : 0 }
    odd_sum = tmp.each.with_index.sum{|el,i| i.odd? ? el : 0 }
    prefix_sum = []
    tmp_even_sum, tmp_odd_sum = 0,0
    tmp_even_reminder, tmp_odd_reminder = even_sum, odd_sum
    counter = 0
    tmp.each_with_index do |el,i|
        if i.even?
            tmp_even_sum += el
            tmp_even_reminder -= el
        else
            tmp_odd_sum += el
            tmp_odd_reminder -= el
        end
        tmp = [tmp_even_sum, tmp_even_reminder, tmp_odd_sum,  tmp_odd_reminder  ]
        prefix_sum.push(tmp)
    end
    (1...prefix_sum.size).each do |i|
        prv = prefix_sum[i-1]
        cur = prefix_sum[i]
        even = prv[0] + cur[3]
        odd =  prv[2] + cur[1]
        counter += 1 if even == odd
    end
    counter
end
```