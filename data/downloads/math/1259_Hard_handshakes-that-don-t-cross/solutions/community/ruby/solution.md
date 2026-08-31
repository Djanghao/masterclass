# Ruby solution with memoization (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/handshakes-that-dont-cross/solutions/4203114/](https://leetcode.com/problems/handshakes-that-dont-cross/solutions/4203114/)

---

# Intuition
If two people (not next to each other) shake hands, they create two groups of people who must shake hands with each other.  Find the number of ways each of those groups can shake hands and multiply.  Add all of these together.

# Approach
0. Create a memo as a class variable so we can reference it on every call of this function.  (We initialize it with our base case: a group of zero people can shake hands 1 way.)  Make modulo a class variable too for simplicity.

1. If we have an odd number of people, there's no possible solution, so return 0.  (That won't happen with the original input, but it can in our recursive calls.)
2. If we have a value stored in memo, return that.
3. Person n-1 can shake hands with any person 0 though n-2.  This divides the group into two groups.  Find the number of ways each of those two groups can shake hands and multiple.
4. Add these possibilities together, take the mod, memoize, and return.

# Complexity
- Time complexity:
$$O(n^2)$$ in the worst case, but $$O(n)$$ in the average case with repeated recursive calls.

- Space complexity:
$$O(n)$$

# Code
```
@mod = 1000000007
@memo = {0 => 1}

def number_of_ways(n)
    return 0 if n % 2 == 1
    return @memo[n] if @memo[n]

    @memo[n] = (0...n-1).map do |i|
        number_of_ways(i) * number_of_ways(n-2-i)
    end.sum % @mod
end
```