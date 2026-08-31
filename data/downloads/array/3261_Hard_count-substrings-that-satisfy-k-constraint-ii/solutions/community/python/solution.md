# Sliding windows move in linear motion

**Author:** eofirdavid
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-ii/solutions/5660272/](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-ii/solutions/5660272/)

---

# Intuition

My first approach was to treat this problem as looking for sums of subsequences. In particular, in order to count good k-substring in the range $[l,r]$ I:
1. Count **all** the good k-substrings starting after $l$, and
2. Remove **all** the good k-substrings starting after $l$.

Computing the number of k-substrings starting at a given index is not that hard, however the problem is that the counting above also counts good k-substrings that start inside $[l,r]$ but end after $r+1$.

To fix this problem I noticed the following:
- If $s[l,r]$ is a good k-substring by itself, then the number of good k-substring that it has is just $\\frac{m\\cdot(m+1)}2$ where $m=r-l+1$ is the length of the original substring.
- Otherwise, let $l\\leq a_{l,r}\\leq r$ be the smallest index such that $s[a_{l,r},r]$ is a good k-substring, and again let $m$ be its length. Once again we have all of its $\\frac{m\\cdot(m+1)}2$ substring which are good, and the rest that we need must start in $[l,a-1]$. However, this time we know that these substring cannot end after $r$ from the minimality in the choice of $a_{l,r}$. Now I can use the previous method.


In short:    **Good k-substrings in $[l,r]$** =

- **all substrings in $[a,r]$**
- **Good k-substrings which start in $[l,a-1]$** (and therefore must end before)

For example, with $k=2$ and the string
$0, 0, 1, 1, 0, 1, 0, 0$
we have the suffix of $100$:
$0, 0, 1, 1, 0 | 1, 0, 0$
any of its 6 substrings are 2-good, and any 2-good substring which start in the first 5 characters, must end inside this string.

# Algorithm

## Counting good k-substring starting after given index
To compute these numbers, it is enough to count the good substring starting at each index, and then sum over these counts.
Let **index0, index1** be the first time the $k+1$-th zero (respectively one) appear in the string (or the end of the string if there are not enough 0\\1 s). Then $s[0:\\max(index0, index1)]$ is the  largest substring starting at 0 which is k-good. The good k-substring which start at 0 must be prefixes of it, so there are exactly $\\max(index0, index1)$ such substrings.

For example, with $k=2$, and the string 
$0, 0, 1, 1, 0, 1, 0, 0$
we have that $index0 = 4$ and $index1 = 5$, so that the longest good k-substring is $00110$ (has only two 1s), and the good k-substrings starting at 0 are $0,00,001,0011,00110$.

Next we want to do the same but starting at index 1. Continuing with the example above, we still need to go up to $index1=5$ to see $3=k+1$ ones, but since we don't see the 0 at the beginning of the original string, we can now continue all the way up to $index0=6$. So now the longest k-good substring is 
$0 | 0, 1, 1, 0, 1 | 0 , 0$.

We can continue like this, each time increasing either $index0$ or $index1$ until we reach the end of the string, all of which is done in $O(|s|)$ time complexity.

## Finding $a_{l,r}$

We now need to compute $a_{l,r}$, namely the smallest $l\\leq a\\leq r$ such that $s[a,r]$ is k-good. Using the algorithm from the previous section, this can be easily solved. Run the same algorithm but on the string reversed, so that given $r$ we can find the smallest index such that $s[index,r]$ is k-good. After that we have $a_{l,r}=\\max{index, l}$.


# Complexity
- **Time complexity:**
  All the preprocessing of the string is done in $O(|s|)$
  Each query needs $O(1)$ accesses to the arrays (though probably there is some $\\log(|s|)$ hiding there, depending how arrays are accessed)
  Total of $O(|s|+|queries|)$

- **Space complexity:**
  Extra $O(|s|)$ space for the information about good k-substrings starting\\ending at the indices.

# Code
```python []
class Solution(object):
    def countKConstraintSubstrings(self, s, k, queries):

        # preprocessing
        n = len(s)
        start_at = self.compute_end_points(s, n, k)
        end_at = self.compute_end_points(s[::-1], n, k)[::-1]
        start_after = [v for v in start_at]
        for i in range(n-2, -1, -1):
            start_after[i] += start_after[i+1]

        # queries
        count_substrings = []
        for ll, rr in queries:
            end_len = end_at[rr]
            if end_len > (rr-ll+1):
                end_len = rr-ll+1
            value = ((end_len + 1)*end_len) // 2 # All the substrings
            
            if ll <= rr - end_len:
                value += start_after[ll] - start_after[rr - end_len + 1]
            count_substrings.append(value)

        return count_substrings

    def compute_end_points(self, s, n, k):
        endpoint = [0] * n

        index0 = -1
        counter = k + 1
        while counter > 0:
            index0 += 1
            if index0 == n:
                break
            if s[index0] == '0':
                counter -= 1

        index1 = -1
        counter = k + 1
        while counter > 0:
            index1 += 1
            if index1 == n:
                break
            if s[index1] == '1':
                counter -= 1

        endpoint[0] = max(index0, index1)
        index = 0
        for c in s[:-1]:
            if c == '0':
                if index0 < n:
                    index0 += 1
                    while index0 < n and s[index0] == '1':
                        index0 += 1
            else:
                if index1 < n:
                    index1 += 1
                    while index1 < n and s[index1] == '0':
                        index1 += 1
            index += 1
            # endpoint[index] = max(index0, index1)
            endpoint[index] = (index1 if index0 < index1 else index0) - index

        return endpoint
```