# Basic technique practice - two formats: 1. dict and check; 2. invariants | Python

**Author:** wxy0925
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-substrings-with-fixed-ratio/solutions/2861648/](https://leetcode.com/problems/number-of-substrings-with-fixed-ratio/solutions/2861648/)

---

1- Two solution formats

Format-1. dict and check

Note: this problem can be transformed to Leetcode problem 560. See below analysis and connection.

```
class Solution:
    def fixedRatio(self, s: str, num1: int, num2: int) -> int:
        d = {0:1}
        t = 0
        res = 0
        for char in s:
            if char == "0":
                t += num2
            else:
                t -= num1
            res += d.get(t, 0)
            d[t] = d.get(t, 0) + 1
        return res
```

Video Explanation: [Format-1, Click Here](https://youtu.be/kuMOB5yV9NE;)

Format-2 using invariants
```
def fixedRatio(self, s: str, num1: int, num2: int) -> int:
        d = collections.defaultdict(int)
        res = 0
        n_zeros = 0
        for i, char in enumerate(s):
            n_zeros += int(char == '0')
            if n_zeros * (num1 + num2) == (i+1) * num1:
                res += 1
            invariant = (num1 + num2) * n_zeros - num1 * i
            d[invariant] += 1
            
        for v in d.values():
            res += (v - 1) * v // 2
        return res
            
```
Video Explanation: [Format-2, Click Here](https://youtu.be/U78JbfhPzGo;)
2- Analysis and relevant videos

"""
Method-1: dict and check

For a substring, the condition that n_zeros : n_ones = num1 : num2 is equivalent to
    n_zeros * num2 = n_ones * num1. (note: num1 != 0, num2 != 0)
    
Idea: Record a "partial sum" t when we linearly scan the string s. When we meet a "0",
    we increment t by num2; when we meet a "0", we decrement t by num1. 
    
    This reduces the counting of qualified subarrays as finding subarrays with "sum" 0.
    
    If we realize the above connection, then solving the problem is very routine. 
    

Connection: See Leetcode 560. Subarray Sum Equals K and alike
Video: [Leetcode 560](https://youtu.be/9aVyCEdVyjw;)

Method-2. Look at invariant quantity

Let f(i) be the number of zeros for the substring starting from beginning and ending at index i

Consider the substring starting from index i+1 and ending at j:

n_zeros : n_ones = num1 : num2

is equivale

n_zeros : (n_zeors + n_ones)  = num1 : (num1 + num2)

i.e., f(j) - f(i) : j - i = n1 : (n1 + n2)

i.e., [ f(j) - f(i) ] * (n1 + n2) = n1 * (j - i),

i.e., f(j) * (n1 + n2) - n1 * j = f(i) * (n1 + n2) - n1 * i    (*)

Note that i and j decouple. So we just need to find the frequencies
of such quantities f(i) * (n1 + n2) - n1 * i when we linearly scan the string.

Note: (*) applies to substrings starting from i+1 up to j, i.e., starting at least from index 1.

To include substrings that starts from zeros and ending at i, we just need to check the condition during the linear scan that:

f(i) : (i + 1) = n1 : (n1 + n2), i.e., f(i) * (n1 + n2) = (i+1) * n1.

Together, this forms the format-2 of solutions.

"""