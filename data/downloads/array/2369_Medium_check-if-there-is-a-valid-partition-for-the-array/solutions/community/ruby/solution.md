# Ruby solution with memoization, explained (100%/100%)

**Author:** dtkalla
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/3901264/](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/3901264/)

---

# Intuition
Start at the beginning of the array.  If the first two  or first threee elements form a valid subarray, see if the rest of the array can be partitioned.  (Return true if you get to the end.)  Memoize for efficiency.

# Approach
1. Create a memo that will take in the index and say if the subarray starting at that point can be partitioned.
2. Make nums a class variable to it's accessible in the helper function.
3. Call the helper function for index 0.

Helper function:
1. Return true if you reached the end of the array.
2. Return a stored value in memo if there is one.  (Note that we can't do ```return @memo[i] if @memo[i]``` because ```@memo[i]``` could exist but be false, which is falsey.  Check if it exists by seeing if ```@memo[i]``` is nil.)
3. Create an options array.
    - Option 1: the first two numbers match, so we partition off a subarray of 2 from the beginning.
    - Option 2: the first three numbers match, so we parition off three.
    - Option 3: the first three elements are increasing by 1, so we patition off three.
4. Check if options cantains true, memoize, and return.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
def valid_partition(nums)
    @memo = {}
    @nums = nums

    valid?(0)
end

def valid?(i)
    return true if i == @nums.length
    return @memo[i] if @memo[i] != nil

    options = []
    options << valid?(i+2) if @nums[i] == @nums[i+1]
    options << valid?(i+3) if @nums[i] == @nums[i+1] && @nums[i] == @nums[i+2]
    options << valid?(i+3) if @nums[i+2] &&
                              @nums[i+1] == @nums[i] + 1 &&
                              @nums[i+2] == @nums[i] + 2

    @memo[i] = options.any? { |option| option }
end
```