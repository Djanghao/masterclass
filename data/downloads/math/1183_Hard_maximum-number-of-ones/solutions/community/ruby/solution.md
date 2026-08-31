# Ruby solution translated from Editorial 1 (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-ones/solutions/4203243/](https://leetcode.com/problems/maximum-number-of-ones/solutions/4203243/)

---

# Intuition
This is a translation of the (first) solution in the editorial into Ruby.

# Approach
1. Edge case: return 0 if max_ones is 0.  (This causes problems with negative indexing otherwise.)
2. Initialize count as an empty array.
3. For each position in our square of length len, find how many times that value will repeat in the overall rectangle and push into count.
4. Sort count.
5. Select the last max_one values (those are the ones that will appear the most often) and sum.

# Complexity
- Time complexity:
$$O(s^2 * log(s^2))$$, where *s* is the side length of the repeating square.  The size of the overall rectangle doesn't matter.

- Space complexity:
$$O(s^2)$$

# Code
```
def maximum_number_of_ones(width, height, len, max_ones)
    return 0 if max_ones == 0

    count = []
    (1..len).each do |r|
        (1..len).each do |c|
            count << (1 + (width - c) / len) * (1 + (height - r) / len)
        end
    end

    count.sort!
    count[-max_ones..-1].sum
end
```