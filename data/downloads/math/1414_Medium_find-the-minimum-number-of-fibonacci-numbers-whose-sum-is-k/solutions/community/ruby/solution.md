# 100%

**Author:** vsrfiles
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/5305754/](https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/5305754/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer} k
# @return {Integer}
def find_min_fibonacci_numbers(k)
    res = generate_fibonacci_sequence(k)
    req = 0
    i = 0
    while k != 0
        diff = k - res[i]
        if diff >= 0
            req = req + 1
            k = diff
        else
            i = i + 1
        end
    end
    req
end

def generate_fibonacci_sequence(limit)
    fibs = [0, 1]
    while (next_fib = fibs[-1] + fibs[-2]) <= limit
      fibs << next_fib
    end
    fibs.reverse
   
end
```