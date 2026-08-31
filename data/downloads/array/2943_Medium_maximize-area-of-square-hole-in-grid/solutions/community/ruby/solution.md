# Ruby solution with sorting, explained (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/4332137/](https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/4332137/)

---

# Intuition
To form a square-shaped hole, the bars removed must be consecutive.  The largest rectangle-shaped hole possible comes from removing as many consecutive horizontal bars as possible and as many consecutive vertical bars as possible; we then trim this down to a square.

# Approach
1. Sort both bars array.  (Not sure if this is necessary: all the examples were sorted, but the problem didn't seem to specify that the array would be sorted.)
2. Find the longest consecutive sequence of each and take the smaller of the two (since it's a square, not a rectangle).  Add one (the hole is one bigger than the number of bars removed), square, and return.

Helper function: find the maximum number of consecutive elements.
1. If the array is empty, the max sequence is zero.  Return 0.
2. Otherwise, initialize max, curr, and prev.
3. Iterate through the rest of the elements of the array.  For each element:
    - If it's one more than the previous element, increment curr (length of current sequence) and update max as appropriate.
    - Otherwise, reset curr to 1. 
    - Either way, update prev.
4. Return max.

# Complexity
- Time complexity:
$$O(n * log(n))$$

- Space complexity:
$$O(n)$$

# Code
```
def maximize_square_hole_area(n, m, h, v)
    h.sort!
    v.sort!
    ([max_seq(h), max_seq(v)].min + 1)**2
end

def max_seq(arr)
    return 0 if arr.length == 0
    prev = arr.shift
    max = 1
    curr = 1
    until arr.empty?
        new = arr.shift
        if new == prev + 1
            curr += 1
            max = curr if curr > max
        else
            curr = 1
        end
        prev = new
    end
    max
end
```