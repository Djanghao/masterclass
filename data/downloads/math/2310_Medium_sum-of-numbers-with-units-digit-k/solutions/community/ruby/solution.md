# Short Ruby solution using modulo, with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/3641629/](https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/3641629/)

---

# Intuition
Multiply the units digit by numbers 1-10 and see if any of them work.

# Approach
1. Special case: return 0 if num is 0.
2. Multiply k by the numbers 1-10 and see if any of them have the same units digit as num.  If they do, and they don't exceed num, that's a valid solution.  (Note that it's fine if it's lower: instead of using 9 and 9, you could use 9 and 49 in the first testcase.)  Because this goes in order and returns early, it will pick the smallest set.
3. If none of these sets worked, return -1

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
def minimum_numbers(num, k)
    return 0 if num == 0
    (1..10).each do |i|
        return i if k*i % 10 == num % 10 && k*i <= num
    end
    -1
end
```