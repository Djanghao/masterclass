# [Ruby] meet in the middle

**Author:** ilnurnasyrov
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-subsequence-sum/solutions/3324742/](https://leetcode.com/problems/closest-subsequence-sum/solutions/3324742/)

---

Ruby adaptation of https://leetcode.com/problems/closest-subsequence-sum/solutions/1053522/python-meet-in-the-middle/


```ruby
# @param {Integer[]} nums
# @param {Integer} goal
# @return {Integer}
def min_abs_difference(nums, goal)
  min_abs_difference = goal.abs

  # generate all possible sums of the 1st and 2nd half 
  sums1 = sums(nums[0..(nums.count / 2 - 1)])
  sums2 = sums(nums[(nums.count / 2)..-1]).sort

  # for each possible sum of the 1st half, find the sum in the 2nd half
  # that gives a value closest to the goal using binary search
  sums1.each do |sum1|
    remain = goal - sum1
    # binary search for the value in sums2 that's closest to the remaining value
    i = sums2.bsearch_index { |sum2| remain < sum2 } || -1

    difference = (sum1 + sums2[i] - goal).abs
    min_abs_difference = difference if difference < min_abs_difference

    next if i < 1

    difference = (sum1 + sums2[i - 1] - goal).abs
    min_abs_difference = difference if difference < min_abs_difference
  end

  min_abs_difference
end

# function that generates all possible sums of sebsequences
def sums(array)
  sums = [0]

  array.each do |elem|
    0.upto(sums.length - 1) do |i|
      sums.push(sums[i] + elem)
    end
  end

  sums.uniq
end
