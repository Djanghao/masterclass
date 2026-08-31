# Ruby: Increase counter when current element is one, zero counter when zero.

**Author:** user9697N
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-consecutive-ones/solutions/1477146/](https://leetcode.com/problems/max-consecutive-ones/solutions/1477146/)

---

## Leetcode: 485. Max Consecutive Ones.

**Ruby: Increase counter when current element is one, zero counter when zero.**

For this task need to have a countar and a max variable that initaly equal es zero. Iterating over an input array when element is one increse counter and update a max, when element is zero reset the counter.

Ruby code:
```Ruby
# Leetcode: 485. Max Consecutive Ones.
# https://leetcode.com/problems/max-consecutive-ones/
# = = = = = = =
# Accepted.
# Thanks God!
# = = = = = = =
# https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/638/week-3-september-15th-september-21st/3982/
# @param {Integer[]} nums
# @return {Integer}
def find_max_consecutive_ones(nums)
  max, counter = 0,0
  nums.each do |el|
    if 1 == el
      counter += 1
      max = counter if counter > max
    else
      counter = 0
    end
  end
  max
end
```
