# Simple two-pointer Ruby

**Author:** glacials
**Votes:** 0
**Link:** [https://leetcode.com/problems/flatten-2d-vector/solutions/4939873/](https://leetcode.com/problems/flatten-2d-vector/solutions/4939873/)

---

# Intuition
We want to iterate through each subarray, but when we're done with a subarray we need to remember where we are in the outer array so we can advance to the next subarray.

# Approach
We'll use one pointer `outer` to track our position in the outer array and another `inner` to track our position in the inner array.

When `inner` grows outside its array's bounds, we'll reset it to zero and advance `outer` instead. Since inner arrays can have length zero, we might need to do this multiple times in one go, so we'll put this logic in a loop.

So that we can easily answer `has_next` without needing to move any pointers around (which would complicate dealing with that new state in future method calls), we'll advance them to the next specific item to return at the _end_ of `next`, so that the next `next` just reads from the pointers' existing positions.

# Complexity
- Time complexity: $$O(1)$$

- Space complexity: $$O(1)$$

# Code
```
class Vector2D
    def initialize(vec)
        @outer = 0
        @inner = -1
        @vec = vec
        advance_ptr
    end

    def next()
        n = @vec[@outer][@inner]
        advance_ptr
        return n
    end

    def has_next()
        @outer < @vec.length
    end

    private

    def advance_ptr
        @inner += 1
        while @outer <= @vec.length - 1 && @inner > @vec[@outer].length - 1
            @outer += 1
            @inner = 0
        end
    end
end
```