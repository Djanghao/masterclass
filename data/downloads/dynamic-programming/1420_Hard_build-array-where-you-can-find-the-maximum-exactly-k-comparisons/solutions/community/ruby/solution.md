# Ruby solution with memoization (100%/100%)

**Author:** dtkalla
**Votes:** 1
**Link:** [https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/solutions/4139887/](https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/solutions/4139887/)

---

# Intuition
Iterating through the array, we need to increase the maximum value hit so far exactly k times.  We can solve this with memoization.

# Approach
1. Make n and m class variables so they can be accessed in the helper function.
2. Create a memo for current index (up to n), maximum element hit so far (up to and including m), and how many times more it must increase (k).
3. Call the helper function starting at index 0, max of 0, and k search cost left.

**Helper function**: find the number of ways to construct the rest of the array based on the current index, maximum element hit so far, and times left to increase max.
1. If you're at the end of the array, return 1 if k is zero (valid!) or 0 if not (invalid!).
2. Return 0 if k is less than 0 (invalid, early return)
3. Return the value stored in memo if there is one.
4. Create an options array for different options of the array value at i.
5. The value of the array at i can be anything up to max without affecting max of k.  Push all those options into the array.
6. The value can be greater than max, but that changes both max and decrements k.  Put those options into the array.
7. Add the options, mod, memoize, and return.

# Complexity
- Time complexity:
$$O(n * m * k)$$

- Space complexity:
$$O(n * m * k)$$

# Code
```
def num_of_arrays(n, m, k)
    @n, @m = n, m
    @memo = Array.new(n) { Array.new(m+1) { Array.new(k,nil) } }
    ways(0,0,k)
end

def ways(i,max,k)
    return k == 0 ? 1 : 0 if i == @n
    return 0 if k < 0
    return @memo[i][max][k] if @memo[i][max][k]

    options = []
    (1..max).each { |n| options << ways(i+1,max,k) }
    (max+1..@m).each { |n| options << ways(i+1,n,k-1) }

    @memo[i][max][k] = options.sum % 1000000007
end
```