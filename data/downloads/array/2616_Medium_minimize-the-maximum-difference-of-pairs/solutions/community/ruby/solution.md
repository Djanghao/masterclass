# Ruby solution with binary search (100%/100%)

**Author:** dtkalla
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/solutions/3406626/](https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/solutions/3406626/)

---

# Intuition
It's easy to check if a maximum value is possible after sorting.  Use binary search to find the minimum maximum value that works.

# Approach
1. Sort the numbers and create a new array of differences.
2. Using a binary search, find the smallest maximum that's possible to achieve.
3. If you use one difference in the helper function, skip over the next (you can't use the same number in multiple pairs).

# Complexity
- Time complexity:
$$O(n * log(n))$$ -- $$O(n * log(n))$$ to sort, and also O(n) to check each of $$O(long(n))$$ possibilities in binary search.

- Space complexity:
$$O(n)$$ for the differences array.

# Code
```
def minimize_max(nums, pairs)
    nums.sort!
    diffs = []
    (1...nums.length).each do |i|
        diffs << nums[i] - nums[i-1]
    end

    (0..diffs.max).bsearch { |n| valid?(diffs, pairs, n) }
end

def valid?(diffs, pairs, n)
    i = 0
    while i < diffs.length && pairs > 0
        if diffs[i] <= n
            i += 2
            pairs -= 1
        else
            i += 1
        end
    end
    pairs == 0
end
```