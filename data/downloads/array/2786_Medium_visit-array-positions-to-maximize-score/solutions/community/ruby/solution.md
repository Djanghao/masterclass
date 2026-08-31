# Ruby solution with memoization (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/3801971/](https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/3801971/)

---

# Intuition
Each element can be included or not included in the set.  Use memoization to efficiently find the maximum possibility.

# Approach
1. Store nums and x as class variables, and create a class memo variable.
2. Call the helper function starting at index 0 and parity of the 0th element.

Helper function: this take in the current index and parity and return the maximum possible score for the rest of the array.
1. Return 0 if you're past the end of the array.
2. Return the store value in memo if it exists.
There are two options: include the next element, or don't.
3. Option 1: do not include the next element.  (This is easier, so I wrote it first.)  Just increment the index by 1.
4. For option 2, increment the index, update the parity, and add the values of @nums[i].  Subtract @x if the parity changed.
5. Choose the higher option, memoize, and return.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
def max_score(nums, x)
    @nums = nums
    @x = x
    @memo = Array.new(nums.length) { Hash.new }
    score(0, nums[0] % 2)
end

def score(i, parity)
    return 0 if i == @nums.length
    return @memo[i][parity] if @memo[i][parity]
    
    option1 = score(i+1,parity)
    
    option2 = score(i+1,@nums[i] % 2) + @nums[i]
    option2 -= @x unless parity == @nums[i] % 2
    
    @memo[i][parity] = [option1,option2].max
end
```