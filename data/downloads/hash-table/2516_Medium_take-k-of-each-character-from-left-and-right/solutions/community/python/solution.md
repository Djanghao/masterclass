# Easy Solution | ✅Beats 100% | Two pointer | C++| Java | Python | JavaScript

**Author:** BijoySingh7
**Votes:** 17
**Link:** [https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/solutions/6064203/](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/solutions/6064203/)

---

# \u2B06\uFE0FUpvote if it helps \u2B06\uFE0F


**Connect with me on [Bijoy Sing](https://www.linkedin.com/in/bijoy-sing-236a5a1b2/)!**





```cpp []
class Solution {
public:
    int takeCharacters(string s, int k) {
        int n = s.size();
        int l = 0, r = 0, m;
        int ans = n; 
        int a = 0, b = 0, c = 0;

        // Count total occurrences of 'a', 'b', and 'c'
        int totalA = 0, totalB = 0, totalC = 0;
        for (char ch : s) {
            if (ch == 'a') totalA++;
            else if (ch == 'b') totalB++;
            else if (ch == 'c') totalC++;
        }

        // If there are not enough 'a', 'b', or 'c', return -1
        if (totalA < k || totalB < k || totalC < k) {
            return -1;
        }

        // Reset counters and start sliding window
        a = 0, b = 0, c = 0;
        while (r < n) {
            if (s[r] == 'a') a++;
            if (s[r] == 'b') b++;
            if (s[r] == 'c') c++;
            r++;

            // Shrink window if it exceeds the limits
            while (a > totalA - k || b > totalB - k || c > totalC - k) {
                if (s[l] == 'a') a--;
                if (s[l] == 'b') b--;
                if (s[l] == 'c') c--;
                l++;
            }

            // Update the answer with the minimum number of characters to remove
            ans = min(ans, n - (r - l));
        }

        return ans;
    }
};
```
```python []
class Solution:
    def takeCharacters(self, s: str, k: int) -> int:
        n = len(s)
        l, r = 0, 0
        ans = n
        a, b, c = 0, 0, 0

        # Count total occurrences of 'a', 'b', and 'c'
        totalA, totalB, totalC = s.count('a'), s.count('b'), s.count('c')

        # If there are not enough 'a', 'b', or 'c', return -1
        if totalA < k or totalB < k or totalC < k:
            return -1

        # Reset counters and start sliding window
        while r < n:
            if s[r] == 'a': a += 1
            if s[r] == 'b': b += 1
            if s[r] == 'c': c += 1
            r += 1

            # Shrink window if it exceeds the limits
            while a > totalA - k or b > totalB - k or c > totalC - k:
                if s[l] == 'a': a -= 1
                if s[l] == 'b': b -= 1
                if s[l] == 'c': c -= 1
                l += 1

            # Update the answer with the minimum number of characters to remove
            ans = min(ans, n - (r - l))

        return ans
```


```java []
class Solution {
    public int takeCharacters(String s, int k) {
        int n = s.length();
        int l = 0, r = 0;
        int ans = n;
        int a = 0, b = 0, c = 0;

        // Count total occurrences of 'a', 'b', and 'c'
        int totalA = 0, totalB = 0, totalC = 0;
        for (char ch : s.toCharArray()) {
            if (ch == 'a') totalA++;
            else if (ch == 'b') totalB++;
            else if (ch == 'c') totalC++;
        }

        // If there are not enough 'a', 'b', or 'c', return -1
        if (totalA < k || totalB < k || totalC < k) {
            return -1;
        }

        // Reset counters and start sliding window
        while (r < n) {
            if (s.charAt(r) == 'a') a++;
            if (s.charAt(r) == 'b') b++;
            if (s.charAt(r) == 'c') c++;
            r++;

            // Shrink window if it exceeds the limits
            while (a > totalA - k || b > totalB - k || c > totalC - k) {
                if (s.charAt(l) == 'a') a--;
                if (s.charAt(l) == 'b') b--;
                if (s.charAt(l) == 'c') c--;
                l++;
            }

            // Update the answer with the minimum number of characters to remove
            ans = Math.min(ans, n - (r - l));
        }

        return ans;
    }
}
```


```javascript []
class Solution {
    takeCharacters(s, k) {
        let n = s.length;
        let l = 0, r = 0;
        let ans = n;
        let a = 0, b = 0, c = 0;

        // Count total occurrences of 'a', 'b', and 'c'
        let totalA = 0, totalB = 0, totalC = 0;
        for (let ch of s) {
            if (ch === 'a') totalA++;
            else if (ch === 'b') totalB++;
            else if (ch === 'c') totalC++;
        }

        // If there are not enough 'a', 'b', or 'c', return -1
        if (totalA < k || totalB < k || totalC < k) {
            return -1;
        }

        // Reset counters and start sliding window
        while (r < n) {
            if (s[r] === 'a') a++;
            if (s[r] === 'b') b++;
            if (s[r] === 'c') c++;
            r++;

            // Shrink window if it exceeds the limits
            while (a > totalA - k || b > totalB - k || c > totalC - k) {
                if (s[l] === 'a') a--;
                if (s[l] === 'b') b--;
                if (s[l] === 'c') c--;
                l++;
            }

            // Update the answer with the minimum number of characters to remove
            ans = Math.min(ans, n - (r - l));
        }

        return ans;
    }
}
```

---

### **Step-by-Step Explanation for All Languages:**

1. **Count Total Occurrences of Each Character:**
   - First, we count the occurrences of 'a', 'b', and 'c' in the string. This helps us determine if it's possible to have at least `k` of each character.

2. **Check if It's Possible:**
   - If the total count of any character is less than `k`, it's impossible to satisfy the condition, so we return `-1`.

3. **Sliding Window to Find the Minimum Removals:**
   - We use a sliding window approach with two pointers, `l` and `r`, to traverse the string. We maintain counts of 'a', 'b', and 'c' within the window.
   - We try to minimize the window size while ensuring that the window contains at least `k` occurrences of each character.

4. **Update the Answer:**
   - During each iteration, we update the answer with the smallest number of characters to remove. The window size at each step is calculated as `n - (r - l)`, where `n` is the length of the string.

5. **Return the Final Answer:**
   - After the sliding window traversal, we return the minimum number of characters that need to be removed to meet the condition.

---


---

**If you have any questions about the code or need further clarification, feel free to drop a comment!**