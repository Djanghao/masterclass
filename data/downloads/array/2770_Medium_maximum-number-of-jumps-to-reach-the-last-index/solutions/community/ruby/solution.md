# Ruby solution with memoization, explained

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/3993704/](https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/3993704/)

---

# Intuition
At each point, check which of the later points can be jumped to and which leads to the maximum sequence.  Memoize for efficiency.

# Approach
1. Store nums and target as class variables so they can be accessed in the helper function.
2. Create a memo.
3. Find the maximum number of jumps starting at 0.
4. Return -1 if it's not possible to reach the end, max jumps otherwise.

Helper function:
1. Return 0 if you're at the end of nums -- there are no more jumps possible.
2. Return a stored result if it's in memo.
3. Create an array of options for each later point in nums:
    - If you can not jump directly to that point, return the value - infinity to signify it's impossible.
    - Otherwise, perform the jump and return 1 + the function starting at the new point.
4. Memoize and return whichever option has the highest value.

# Complexity
- Time complexity:
$$O(n^2)$$ (could probably be improved)

- Space complexity:
$$O(n)$$

# Code
```
def maximum_jumps(nums, target)
    @nums, @target = nums, target
    @memo = Array.new(nums.length+1,nil)    
    res = jumps(0)
    res == -Float::INFINITY ? -1 : res
end

def jumps(i)
    return 0 if i == @nums.length - 1
    return @memo[i] if @memo[i]

    options = (i+1...@nums.length).map do |k|
        if (@nums[i] - @nums[k]).abs > @target
            -Float::INFINITY
        else
            1 + jumps(k)
        end
    end
    @memo[i] = options.max
end
```