# Easiest to understand (5 line) Ruby solution with backtracking / recursion using reduce

**Author:** witygass
**Votes:** 1
**Link:** [https://leetcode.com/problems/combination-sum-iii/solutions/4211651/](https://leetcode.com/problems/combination-sum-iii/solutions/4211651/)

---

# Intuition
Reduce each level below into the level above descending from 9 down to 1

# Approach
Call combination_sum for each possibility descending down from 9 decrementing the number of digits remaining to fill by 1 and the values to iterate over beginning with the last value. If we encounter an invalid solution, we return an empty array. Which, looping over in the reduce causes to fall out of the result set (nothing to loop over). If we encounter a valid solution, we return it inside a 2D array. This way, when we iterate over the groupings, we can append to each valid solution on the way back up the call stack. We went right to left as we traversed down the call stack, so we append the solution from the call below to the left of the current leading to answers with digits in ascending order.

# Complexity
- Time complexity:
Exponential, for each digit, we have up to 9 more iterations with up to 9 children turtles all the way down.

- Space complexity:
In reality the worst case for space complexity is the size of the response. Here, we use no additional data structure except the result and the temporary results from the call stack below (which are necessarily smaller).

# Code
```
# @param {Integer} k
# @param {Integer} n
# @return {Integer[][]}
def combination_sum3(k, n, last=10)
    return [] if n <= 0 || (k==1 && n >= last)
    return [[n]] if k == 1

    (last - 1).downto(1).reduce([]) do |acc, i|
        combination_sum3(k-1, n-i, i).reduce(acc) { |acc2, sol| acc2 + [sol + [i]] }
    end
end
```