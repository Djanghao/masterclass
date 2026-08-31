# O(k^2) DP with Prefix Sum

**Author:** metaphysicalist
**Votes:** 19
**Link:** [https://leetcode.com/problems/find-the-original-typed-string-ii/solutions/5971691/](https://leetcode.com/problems/find-the-original-typed-string-ii/solutions/5971691/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can split `word` into $m$ segments, each of which is formed by a single character $w_i$ that appears $s_i$ times. For example, `aabbbc` will be split into $3$ segments as $(w_1, w_2, w_3) = (a, b, c), (s_1, s_2, s_3) = (2, 3, 1)$. 
Therefore, the total number of possible original strings that Alice might have intended to type can be obtained by the product of $\\prod_{i=1}^{m}s_i = s_1 \	imes s_2 \	imes ... \	imes s_m$. 

However, we need to further exclude the cases where the original string is shorter than $k$ characters. To do that, we can compute the ways to form the original string with less than $k$ characters, and substract them from $\\prod_{i=1}^{m}s_i$.

# Approach
<!-- Describe your approach to solving the problem. -->

The typical $O(mk^2)$ DP algorithm, as the recursion given as follows, can be applied to compute $S_{i,j}$, which is the number of the ways to form a string with a length of $j$ by the first $i$ segments.  

$S_{i,j} = \\sum_{c=1}^{\\min(s_i, j)} S_{i-1,j-c}$

The recursion is intuitive that a $j$-length string with $i$ segments can be composed by the following ways: 

Appending 1 $w_i$ to a $(j-1)$-length string with $i-1$ segments
Appending 2 $w_i$ to a $(j-2)$-length string with $i-1$ segments
Appending 3 $w_i$ to a $(j-3)$-length string with $i-1$ segments
...
Appending $c$ $w_i$ to a $(j-c)$-length string with $i-1$ segments

Up to $c = \\min(s_i, j-(i-1))$ of $w_i$ to be appended, where $w_i$ is the letter of the $i$-th segments.  


The straightforward DP can implemented as follows. 

```python3 []
dp = [[0] * (k) for _ in range(m+1)]
dp[0][0] = 1
for i in range(1, m+1):
    for j in range(i, k):
        for c in range(1, min(j-(i-1), segs[i-1])+1):
            dp[i][j] = (dp[i][j] + dp[i-1][j-c]) % 1_000_000_007
```

However, the above $O(mk^2)$ implementation may not pass the time limitation. So, I remove the inner summation loop by using prefix sums. Specifically, we rewrite the recursion as follows.

$S_{i,j} = \\sum_{c=1}^{\\min(s_i, j-(i-1))} S_{i-1,j-c} \\\\ = S_{i-1, j-\\min(s_i, j-(i-1))} + S_{i-1, j-\\min(s_i, j-(i-1))+1} + ... + S_{i-1,j-1} 
\\\\ = \\sum_{t=j-\\min(s_i, j-(i-1))}^{j-1} S_{i-1,t} 
\\\\ = \\sum_{t=0}^{j-1} S_{i-1,t} - \\sum_{t=0}^{j-\\min(s_i, j-(i-1))} S_{i-1,t} $

The last row shows that $S_{i,j}$ can be obtained by doing substraction on two prefix sums of $S$. In this way, the summation (actually performed by using a loop in $O(k)$) can be replaced by a substraction in $O(1)$. As a result, the complexity of the DP speeds up to $O(mk)$.   


Note that we don't need to do the DP when $m \\ge k$ because it is impossible to form a string with $m$ groups by using less than $m$ characters. In other words, $S_{i,j} = 0$ for $j > i$. As a result, the complexity of the DP is $O(k^2)$ strictly, and the overall complexity is $O(n) + O(k^2)$.

# Complexity
- Time complexity: $O(n) + O(k^2)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
mod_mul = lambda a, b: (a * b) % 1_000_000_007
mod_add = lambda a, b: (a + b) % 1_000_000_007
mod_sub = lambda a, b: (a - b) % 1_000_000_007

class Solution:
    def possibleStringCount(self, word: str, k: int) -> int: 
        segs = [1]
        for i in range(1, len(word)):
            if word[i] != word[i-1]:
                segs.append(1)
            else:
                segs[-1] += 1
        total = reduce(mod_mul, segs)
        if k <= len(segs):
            return total
        
        dp = [1] + ([0] * (k-1))
        for i in range(1, len(segs)+1):
            prefix = list(accumulate(dp, mod_add, initial=0))
            dp = [0] * k
            for j in range(i, k):
                dp[j] = mod_sub(prefix[j], prefix[j - min(segs[i-1], j-i+1)])
        less_than_k = reduce(mod_add, dp)
        return mod_sub(total, less_than_k)
```