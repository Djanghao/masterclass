# Python (Simple Maths)

**Author:** rnotappl
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-fair-integer/solutions/2934123/](https://leetcode.com/problems/closest-fair-integer/solutions/2934123/)

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
class Solution:
    def closestFair(self, n):
        def dfs(i):
            i, count = str(i), 0

            for char in i:
                if int(char)%2 == 1:
                    count += 1
                else:
                    count -= 1

            return count == 0

        def func(n):
            total = 10**len(str(n))

            for i in range(len(str(n))//2):
                total += 10**i

            return total


        if len(str(n))%2 == 1:
            return func(n)

        for i in range(n,10*n):
            if len(str(i))%2 == 1:
                return func(i)

            if dfs(i):
                return i

        return -1

            

                



            


            

            










        


```