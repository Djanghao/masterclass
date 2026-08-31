# Official Solution

**Link:** [https://leetcode.com/problems/count-largest-group/solution/](https://leetcode.com/problems/count-largest-group/solution/)

---

[TOC]

## Solution

--- 

### Approach: Hash Map

#### Intuition

For each integer $i$ in the interval $[1, n]$, we can calculate its digit sum $s_i$. We establish a hash mapping from the digit sum to the original number. For each number $i$, we increment the value corresponding to the key $s_i$ by one. We then find the maximum value $m$ in the set of values and traverse the hash table to count the number of occurrences of $m$.

#### Implementation

<iframe src="https://leetcode.com/playground/gf995f5G/shared" frameBorder="0" width="100%" height="500" name="gf995f5G"></iframe>

#### Complexity Analysis

- Time complexity: $O(n \log n)$.

The time complexity for calculating the sum of digits of $x$ is $O(\log_{10} x) = O(\log x)$, so the total time required is $O(n \log n)$. Selecting the maximum element and traversing the hash table both take $O(n)$ time; therefore, the overall time complexity is $O(n \log n) + O(n) = O(n \log n)$.

- Space complexity: $O(\log n)$.
  
Using a hash map as auxiliary space, the number of digits of $n$ is $O(\log_{10} n) = O(\log n)$, and each digit is in the range $[0, 9]$, so the hash map can contain at most $O(10 \log n) = O(\log n)$ keys, and the asymptotic space complexity is $O(\log n)$.