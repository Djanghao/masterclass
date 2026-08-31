# Greedy Ruby solution, with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-factorization/solutions/4197403/](https://leetcode.com/problems/minimum-factorization/solutions/4197403/)

---

# Intuition
We want to use as few digits as possible.  In cases with the same number of digits, we want to use the biggest digits possible, since that also lets us use smaller digits.  (For example, if our number is 18, we'd rather use 29 than 36.)  Both of these considerations suggest a greedy strategy: take the biggest factors we can until we run out of factors, then order them from smallest to largest.

# Approach
1. Edge case: return 1 is num is 1.  (Otherwise, we don't want to use a digit 1 since it just makes our number longer.)
2. Iterate through the numbers 2-9 backwards, taking out as many factors of each number as possible.  Store them in a res array.
3. If your number is still greater than 1, it means you have a multi-digit prime factor (e.g., 11).  Return 0 since it's not possible to factorize.
4. Join the digits in reverse and convert back to an array.
5. If your number is outside of the range, return 0; otherwise, return the number.

# Complexity
- Time complexity:
$$O(log(n))$$

- Space complexity:
$$O(log(n))$$

# Code
```
def smallest_factorization(num)
    return 1 if num == 1

    res = []

    (2..9).to_a.reverse.each do |i|
        while num % i == 0
            num /= i
            res << i
        end
    end

    return 0 if num > 1

    res = res.reverse.join('').to_i
    res > 2**31 ? 0 : res
end
```