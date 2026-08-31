# Recursive Ruby solution with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/factor-combinations/solutions/4197342/](https://leetcode.com/problems/factor-combinations/solutions/4197342/)

---

# Intuition
Find all factors (greater than 1) of n.  For each factor f, find the factors of n/f and append f to each of those arrays.  Remove repeat arrays.

# Approach
0. Outside of the function, create a memo that will handle your base case.  (Having the memo outside is a lot more efficient when we call this function for a lot of differen problems.)

1. Return memo if it exists.
2. Create a list of factors of *n*.  Note that we only have to check numbers up to sqrt(n), since we're taking factor pairs.
3. Create a res array
4. Iterate through the factors.  For each one:
    - Add an array of that factor and n/factor to res.  (Make sure the array is sorted.)
    - Get all combinations of factors of n/factor.
    - For each of those, append factor to the array, sort, and add to res.
5. Remove repeat arrays from res, memoize, and return.

# Complexity
- Time complexity:
This is complicated to say: since we're using a memo to store values between calls, our average time should be $$O(1)$$ with lots of calls.

For an individual call, it takes us $$O(sqrt(n))$$ to find the factors.  Since we find the combinations for each factor, I think overall it would be $$O(sqrt(n) * f)$$, where *f* is the number of factors of *n*.

- Space complexity:
It's not good.  It stores all the combos for any number it finds on any call.  My best guess is $$O(n * log(n))$$, since the number of factors *n* can have is roughly logarithmic.

# Code
```
@memo = {1 => []}

def get_factors(n)
    return @memo[n] if @memo[n]
    factors = []
    (2..Math.sqrt(n)).each do |i|
        if n % i == 0
            factors << i
            factors << n / i
        end
    end

    res = []
    factors.each do |factor|
        res << [factor, n/factor].sort
        combos = get_factors(n/factor)
        
        combos.each do |arr|
            arr += [factor]
            res << arr.sort
        end
    end

    @memo[n] = res.uniq
end
```