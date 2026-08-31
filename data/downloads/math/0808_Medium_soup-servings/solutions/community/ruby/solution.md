# Ruby O(1) solution with memoization, explained (100%/100%)

**Author:** dtkalla
**Votes:** 3
**Link:** [https://leetcode.com/problems/soup-servings/solutions/3831186/](https://leetcode.com/problems/soup-servings/solutions/3831186/)

---

# Intuition
The probability of this approaches 1 as n increases.  You can return 1 above a certain value and use memoization to handle values below that efficiently.

# Approach
0. Create a memo as a class variable, to increase speed for multiple calls of the function.

Main function:
1. Beyond a certain limit, the probability will be within 10**-5 of 1.  Return 1 beyond this limit.
2. Divide n by 25, rounded up.  (This keeps the numbers smaller, since everything we remove is a multiple of 25 mL.)
3. Call the helper function, starting with n for a and b.

Helper function:
1. If A is out of soup, return 1 (if it's before B) or 0.5 (if simultaneous).  If B but not A is out of soup, return 0.
2. Return a value in the memo if it exists.
3. Calculate the four options.
4. Take the average by adding the four options and dividing by 4, memoize, and return.

# Complexity
- Time complexity:
$$O(n^2)$$ for small *n*, $$O(1)$$ for large *n*.  Since large *n* just means 200 or above (after dividing by 25), I think it's reasonable to call this $$O(1)$$ (especially if it's called many times, since the memo is a class variable).

- Space complexity:
$$O(1)$$ -- since memo is a class variable, it occupies the same space regardless of the input.

# Code
```
@memo = Array.new(200) { Array.new(200,nil) }

def soup_servings(n)
    return 1 if n >= 5000
    n = (n/25.0).ceil
    prob(n,n)
end

def prob(a,b)
    if a <= 0
        return b <= 0 ? 0.5 : 1
    elsif b <= 0
        return 0
    end
    return @memo[a][b] if @memo[a][b]

    option1 = prob(a-4,b)
    option2 = prob(a-3,b-1)
    option3 = prob(a-2,b-2)
    option4 = prob(a-1,b-3)

    @memo[a][b] = [option1,option2,option3,option4].sum / 4.0
end
```