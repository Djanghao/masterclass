# Ruby simple faster than 100%

**Author:** el777
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4508797/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4508797/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We may consider each value independent of all other values. So total number of actions should be sum of all actions required to remove each particular value.
How many actions we need to remove all instances of particular value?
If you have only 1 entry of some value this value cannot be removed. 
If you have 2 entries - then you need 1 action type 1 to remove them.
The same for 3 entries.
It's possible to make a table, how many entries are and how many actions you need.
```
1  --> Impossible
2  --> 1
3  --> 1
4  --> 2
5  --> 2
6  --> 2
7  --> 3
8  --> 3
9  --> 3
10 --> 4
11 --> 4
12 --> 4
13 --> 5
...
```

So number = `count / 3` and plus `1` if there's a remainder.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def min_operations(nums)
    nums.tally.sum { |_, c|
        return -1 if c == 1
        quotient, remainder = c.divmod(3)
        quotient + (remainder > 0 ? 1 : 0)
    }
end
```