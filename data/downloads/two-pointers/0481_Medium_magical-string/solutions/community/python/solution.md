# 481: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 4
**Link:** [https://leetcode.com/problems/magical-string/solutions/3281323/](https://leetcode.com/problems/magical-string/solutions/3281323/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Check if input n is 0, if so, return 0 as the output.

2. Initialize the magical string s with the first three elements, which are 1, 2, 2.

3. Initialize a variable i to 2, which will be used to keep track of the index of the current number in s.

4. Start a while loop that continues until the length of s is less than n.

5. Inside the while loop, append to s the next number in the sequence, which is 3 minus the previous number in s.

6. The number of times to append the next number in the sequence is given by the value at index i in s.

7. Increment i by 1.

8. Once the while loop is finished, return the number of 1's in the first n elements of s by counting how many times 1 appears in the sublist s[:n].

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def magicalString(self, n: int) -> int:
        if n == 0:
            return 0
        s = [1, 2, 2]
        i = 2
        while len(s) < n:
            s += [3 - s[-1]] * s[i]
            i += 1
        return s[:n].count(1)
```