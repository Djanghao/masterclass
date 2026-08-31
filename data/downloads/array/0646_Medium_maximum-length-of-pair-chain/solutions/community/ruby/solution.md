# O(n) Ruby solution with explanation (no DP)

**Author:** dtkalla
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-length-of-pair-chain/solutions/3519320/](https://leetcode.com/problems/maximum-length-of-pair-chain/solutions/3519320/)

---

# Intuition
We want as many non-intersecting intervals as possible.  It's essentially the same as this question:
https://leetcode.com/problems/non-overlapping-intervals/

# Approach
1. Sort the pairs.
2. Start with the first interval.  This initializes count to 1 and last (the value we're going to compare with) to the last value in the interval.
3. Iterate through the rest of the intervals.
    - If the start of the new interval is bigger than the end of the last one, the intervals don't intersect.  Increment count and set last to be the last value of the new interval.
    - If not, set last to be whichever is smaller between the old and new interval.
4. Return the count.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
def find_longest_chain(pairs)
    pairs.sort!
    count = 1
    last = pairs.shift[1]
    
    until pairs.empty?
        a,b = pairs.shift
        if a > last
            count += 1
            last = b
        else
            last = [last,b].min
        end
    end

    count
end
```