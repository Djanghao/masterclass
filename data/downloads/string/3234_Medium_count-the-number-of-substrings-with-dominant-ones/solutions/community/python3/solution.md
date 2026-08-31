# Easy Sliding Window | Detailed Explanation | O(nsqrtn)

**Author:** Pras28
**Votes:** 68
**Link:** [https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/solutions/5546329/](https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/solutions/5546329/)

---

# Intuition
The key insight for this problem is that for a substring to have "dominant ones", the number of ones **must** be greater than or equal to the square of the number of zeros. This means that as the number of zeros increases, the number of ones needed grows quadratically. This observation leads us to an important conclusion: **the maximum number of zeros in a valid substring can't exceed the square root of the string's length.**


# Approach

Let's break down the solution into steps:

1. **Iterate through possible zero counts:**
   - We iterate from 1 to the square root of the string length (inclusive).
   - This covers all possible counts of zeros that could result in a valid substring.

2. **For each zero count (k), we scan the string:**
   - We use a sliding window technique to keep track of zeros and ones.
   - We use a deque (double-ended queue, although this is not necessary) to store the positions of zeros.
   - We keep count of ones between zeros.

3. **Counting valid substrings:**
   - When we have exactly k zeros and at least k^2 ones, we've found a valid substring.
   - We can extend this subtring by adding ones between the last zero and the zero before it, but we can only start adding from the (k^2)th one before the current position.
   - Thus, we will add the minimum of ones - k^2 + 1 and the number of ones between our last zero and the zero before it.
4. **Handle all-ones substrings:**
   - After the main loop, we count substrings that consist of only ones.
   - These weren't counted in the main loop (which always included at least one zero).

# Complexity
- Time complexity:
$$O(n\\sqrt n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        n = len(s)
        result = 0
        
        # Iterate through possible zero counts (1 to sqrt(n))
        for k in range(1, int(n**0.5) + 1):
            zeros = deque()  # Queue to store positions of zeros
            lastzero = -1    # Position of the zero before the first zero in our window
            ones = 0         # Count of ones in our current window
            
            # Scan through the string
            for right in range(n):
                if s[right] == '0':
                    zeros.append(right)
                    # If we have more than k zeros, remove the leftmost one
                    while len(zeros) > k:
                        ones -= (zeros[0] - lastzero - 1)  # Subtract ones between lastzero and the removed zero
                        lastzero = zeros.popleft()
                else:
                    ones += 1
                
                # If we have exactly k zeros and at least k^2 ones
                if len(zeros) == k and ones >= k**2:
                    # Add the minimum of:
                    # 1. Number of ways to extend to the left (zeros[0] - lastzero)
                    # 2. Number of ways to extend to the right (ones - k**2 + 1)
                    result += min(zeros[0] - lastzero, ones - k**2 + 1)
        
        # Handle all-ones substrings
        i = 0
        while i < n:
            if s[i] == '0':
                i += 1
                continue
            sz = 0
            while i < n and s[i] == '1':
                sz += 1
                i += 1
            # Add number of all-ones substrings
            result += (sz * (sz + 1)) // 2
        
        return result

```