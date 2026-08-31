# Ruby solution with memoization (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/solutions/3802467/](https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/solutions/3802467/)

---

# Intuition
Generate the list of xth powers, then iterate through them.  For each one, choose whether or not to include it.  Memoize for efficiency.

# Approach
0. Create a class modulo variable.

Main function:
1. Create an empty array of numbers that will be usable.
2. Iterate through consecutive xth powers until you reach a number bigger than n.  Put each into the array.
3. Create a class variable for the xth powers, and also a memo variable.
4. Call the helper function, starting at index 0 and val of n.  Take the modulo.

Helper function:
1. Return 1 if n is zero -- you've reached your target!
2. Return 0 if you've iterated through all numbers, or the remianing numbers are greater than n.  (Numbers are sorted, so you only need to check the next number.)
3. Return the stored value if there's a value stored in memo.

For each number, there are two options: inlcude, or don't include.  Find both.
4. For option 1, do not include the number.  Increment index and leave n unchanged.
5. For option 2, do include the number.  Increment index and decrease n by the value you're including.
6. Add the two options together, memoize, and return. 

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n^2)$$

# Code
```
@mod = 10**9+7

def number_of_ways(n, x)
    usable_numbers = []
    i = 1
    while i**x <= n
        usable_numbers << i**x
        i += 1
    end
    
    @nums = usable_numbers
    @memo = Array.new(n+1) { {} }
    
    ways(0,n) % @mod
end

def ways(i,n)
    return 1 if n == 0
    return 0 if i == @nums.length
    return 0 if @nums[i] > n
    return @memo[i][n] if @memo[i][n]
    
    option1 = ways(i+1,n)
    option2 = ways(i+1,n-@nums[i])
    
    @memo[i][n] = option1 + option2
end
```