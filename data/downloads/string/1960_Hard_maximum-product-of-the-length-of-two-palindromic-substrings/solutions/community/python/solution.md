# Maximum Product of the Length of Two Palindromic Substrings

**Author:** Ansh1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/solutions/5916880/](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/solutions/5916880/)

---



# Approach
<!-- Describe your approach to solving the problem. -->
Hashing Logic:
The lh() and rh() functions calculate the hash for left-to-right and right-to-left ranges, respectively.
The modulo operation ensures non-negative hash values.

Checking Palindromes:
is_palindromic() uses these hash functions to check if a substring is palindromic.

Dynamic Array Setup:
left and right arrays keep track of the maximum lengths of palindromic substrings up to a given point.

Calculating the Result:
The solution iterates over potential split points and finds the maximum product of palindromic substring lengths.

# Code
```python []
class Solution(object):
    base = 29
    mod = (1 << 31) - 1  # Integer.MAX_VALUE in Java

    def maxProduct(self, s):
        """
        :type s: str
        :rtype: int
        """
        n = len(s)
        
        # Calculate powers of base modulo mod
        pow = [1] * (n + 1)
        for i in range(1, n + 1):
            pow[i] = pow[i - 1] * self.base % self.mod
        
        # Calculate left-to-right hash values
        lh = [0] * (n + 1)
        for i in range(1, n + 1):
            lh[i] = (lh[i - 1] * self.base + ord(s[i - 1]) - ord('a')) % self.mod
        
        # Calculate right-to-left hash values
        rh = [0] * (n + 1)
        for i in range(n - 1, -1, -1):
            rh[i] = (rh[i + 1] * self.base + ord(s[i]) - ord('a')) % self.mod

        # Left hash computation function
        def compute_lh(l, r, hash, pow):
            ans = (hash[r] - hash[l] * pow[r - l]) % self.mod
            if ans < 0:
                ans += self.mod
            return ans

        # Right hash computation function
        def compute_rh(l, r, hash, pow):
            ans = (hash[l] - hash[r] * pow[r - l]) % self.mod
            if ans < 0:
                ans += self.mod
            return ans

        # Function to check if a substring is palindromic using hash comparisons
        def is_palindromic(l, r):
            return compute_lh(l, r, lh, pow) == compute_rh(l, r, rh, pow)

        # Calculate maximum palindrome length ending at or before each position
        left = [0] * n
        max_len = 1
        for i in range(n):
            if max_len < i and is_palindromic(i - max_len - 1, i + 1):
                max_len += 2
            left[i] = max_len

        # Calculate maximum palindrome length starting at or after each position
        right = [0] * n
        max_len = 1
        for i in range(n - 1, -1, -1):
            if i + max_len + 2 <= n and is_palindromic(i, i + max_len + 2):
                max_len += 2
            right[i] = max_len

        # Calculate the maximum product of palindrome lengths
        ans = 1
        for i in range(1, n):
            ans = max(ans, left[i - 1] * right[i])

        return ans

```