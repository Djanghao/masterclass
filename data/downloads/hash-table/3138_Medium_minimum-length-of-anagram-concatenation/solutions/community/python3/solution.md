# [Python3] Easy approach without GCD[TC: N^2 log N & N^2 still works]

**Author:** saikiran_k
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5113795/](https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5113795/)

---

# **Solution-I**
<!--# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

<!--# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n^2log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def minAnagramLength(self, s: str) -> int:
        stringList = list(s)
        n = len(s)
        for size in range(1, n):
            if n % size == 0: 
                initialList = sorted(stringList[:size])
                for j in range(size, n, size):
                    temp = stringList[j:j+size]
                    temp.sort()

                    if initialList != temp: 
                        break
                else:
                    return size
                    
        return n
```

---



# **Solution-II**

# Complexity
- Time complexity: $$O(n^2)$$
 *Time complexity seems $$O(n^2)$$ but actual number of iterations does not exceed $$10^8$$.*
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def minAnagramLength(self, s: str) -> int:
        stringList = list(s)
        n = len(s)
        ans = n
        for size in range(1, n):
            if n % size == 0: 
                count = Counter(stringList[:size])

                for j in range(size, n, size):
                    temp = Counter(stringList[j:j+size])

                    if count != temp:
                        break
                else:
                    return size
                    
        return ans
```