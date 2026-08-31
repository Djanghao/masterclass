# Simple Binary Search 100% Beats

**Author:** Sumeet_Sharma-1
**Votes:** 111
**Link:** [https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/solutions/6130737/](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/solutions/6130737/)

---

# \uD83D\uDE80 Intuition  
We are tasked with finding the **maximum length** \\( x \\) of a **special substring** that occurs at least **three times** in the given string `s`.  
A **special substring** contains only one unique character (e.g., `"aaa"`, `"bbbb"`).  
The solution uses **binary search** combined with **sliding window validation** for efficiency.

---

# \uD83E\uDDE0 Approach  

### \uD83D\uDD0D 1. Binary Search  
- The goal is to identify the **largest \\( x \\)** such that a special substring of length \\( x \\) exists at least three times.  
- **Why binary search?**  
  Binary search is effective because the problem exhibits **monotonic behavior**:
  - If \\( x \\) is valid (i.e., there exists a special substring of length \\( x \\)), then all smaller lengths \\( < x \\) are also valid.
  - Conversely, if \\( x \\) is invalid, then all larger lengths \\( > x \\) are also invalid.  
- We search in the range \\( [1, n] \\), where \\( n \\) is the length of the string:
  - Start with \\( l = 1 \\) (minimum substring length).  
  - End with \\( r = n \\) (maximum substring length).  

---

### \uD83D\uDD27 2. Validation (Helper Function)  
To check if a given \\( x \\) is valid:
1. Use a **sliding window** of size \\( x \\) to iterate over all substrings.
2. For each window:
   - Ensure that all characters in the substring are identical.
   - Count the number of occurrences of this substring in the string.
3. If any substring appears **at least three times**, \\( x \\) is valid.

The sliding window approach ensures efficient computation in \\( O(n) \\) for each validation.

---

### \uD83D\uDD04 3. Iterative Binary Search  
### Perform binary search to find the largest valid \\( x \\):

1. Compute the midpoint:  
   [mid = l + r/2]

2. Use the helper function to validate \\( \	ext{mid} \\):  
   - If mid is valid, move the lower bound up l = mid .  
   - If mid is invalid, move the upper bound down  r =mid.

3. Repeat until \\( l + 1 < r \\).

- After the search:
  - If \\( l \\) is valid, return \\( l \\) as the result.
  - Otherwise, return `-1`.

---

### \uD83D\uDED1 Edge Cases  
- If the string contains no repeating characters, return `-1`.
- For single-character strings, \\( x \\) can equal the entire string length.

---

# \uD83D\uDCCA Complexity  

### \u23F1 Time Complexity  
1. **Binary Search**: \\( O(log n) \\) iterations for \\( n \\) length of the string.  
2. **Sliding Window Validation**: Each check runs in \\( O(n) \\).  
3. **Total**: \\( O(nlog n) \\).

### \uD83D\uDCBE Space Complexity  
- A frequency array or sliding window uses \\( O(1) \\) space.

---
![Screenshot 2024-12-10 063811.png](./images/0.png)


# \uD83C\uDF1F Insights  

1. **Binary Search + Monotonicity**:  
   Binary search works effectively when the validity condition is monotonic.  
   
2. **Sliding Window Optimization**:  
   Instead of evaluating all substrings naively, the sliding window updates counts efficiently for each new substring.

3. **Edge Cases**:  
   - Handle edge cases where no valid substring exists, or the string length is too small.

---

# \uD83D\uDD17 Example Walkthrough  

### Example 1:  
**Input**: `s = "aabccc"`  
- \\( x = 1 \\): Valid (all single-character substrings).  
- \\( x = 3 \\): Valid (substring `"ccc"` occurs 3 times).  
- \\( x = 4 \\): Invalid (no substring of length 4 occurs 3 times).  
- **Output**: \\( 3 \\).

### Example 2:  
**Input**: `s = "abcdef"`  
- \\( x = 1 \\): Valid (all single-character substrings).  
- \\( x = 2 \\): Invalid (no repeating substrings).  
- **Output**: \\( -1 \\).

# Code
```cpp []
class Solution {
public:
    int maximumLength(string s) {
        int n = s.size();
        int l = 1, r = n;

        if (!helper(s, n, l)) return -1;

        while (l + 1 < r) {
            int mid = (l + r) / 2;
            if (helper(s, n, mid)) l = mid;
            else r = mid;
        }

        return l;
    }

private:
    bool helper(const string& s, int n, int x) {
        vector<int> cnt(26, 0);
        int p = 0;

        for (int i = 0; i < n; i++) {
            while (s[p] != s[i]) p++;
            if (i - p + 1 >= x) cnt[s[i] - 'a']++;
            if (cnt[s[i] - 'a'] > 2) return true;
        }

        return false;
    }
};
```
```Java []
public class Solution {
    public int maximumLength(String s) {
        int n = s.length();
        int l = 1, r = n;

        if (!helper(s, n, l)) return -1;

        while (l + 1 < r) {
            int mid = (l + r) / 2;
            if (helper(s, n, mid)) l = mid;
            else r = mid;
        }

        return l;
    }

    private boolean helper(String s, int n, int x) {
        int[] cnt = new int[26];
        int p = 0;

        for (int i = 0; i < n; i++) {
            while (s.charAt(p) != s.charAt(i)) p++;
            if (i - p + 1 >= x) cnt[s.charAt(i) - 'a']++;
            if (cnt[s.charAt(i) - 'a'] > 2) return true;
        }

        return false;
    }
}
```
```Python3 []
class Solution:
    def maximumLength(self, s: str) -> int:
        n = len(s)
        l, r = 1, n

        if not self.helper(s, n, l):
            return -1

        while l + 1 < r:
            mid = (l + r) // 2
            if self.helper(s, n, mid):
                l = mid
            else:
                r = mid

        return l

    def helper(self, s: str, n: int, x: int) -> bool:
        cnt = [0] * 26
        p = 0

        for i in range(n):
            while s[p] != s[i]:
                p += 1
            if i - p + 1 >= x:
                cnt[ord(s[i]) - ord('a')] += 1
            if cnt[ord(s[i]) - ord('a')] > 2:
                return True

        return False
```
```Javascript []
/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
    let n = s.length;
    let l = 1, r = n;

    if (!helper(s, n, l)) return -1;

    while (l + 1 < r) {
        let mid = Math.floor((l + r) / 2);
        if (helper(s, n, mid)) l = mid;
        else r = mid;
    }

    return l;
};

/**
 * @param {string} s
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
function helper(s, n, x) {
    let cnt = new Array(26).fill(0);
    let p = 0;

    for (let i = 0; i < n; i++) {
        while (s[p] !== s[i]) p++;
        if (i - p + 1 >= x) cnt[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        if (cnt[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] > 2) return true;
    }

    return false;
}
```
```Ruby []
class Solution
  def maximum_length(s)
    n = s.length
    l, r = 1, n

    return -1 unless helper(s, n, l)

    while l + 1 < r
      mid = (l + r) / 2
      if helper(s, n, mid)
        l = mid
      else
        r = mid
      end
    end

    return l
  end

  def helper(s, n, x)
    cnt = Array.new(26, 0)
    p = 0

    s.each_char.with_index do |char, i|
      while s[p] != char
        p += 1
      end
      if i - p + 1 >= x
        cnt[char.ord - 'a'.ord] += 1
      end
      return true if cnt[char.ord - 'a'.ord] > 2
    end

    false
  end
end
```
```C []
#include <stdio.h>
#include <string.h>

int helper(const char* s, int n, int x) {
    int cnt[26] = {0};
    int p = 0;

    for (int i = 0; i < n; i++) {
        while (s[p] != s[i]) p++;
        if (i - p + 1 >= x) cnt[s[i] - 'a']++;
        if (cnt[s[i] - 'a'] > 2) return 1;  // Return true if more than 2 occurrences of a character
    }

    return 0;  // Return false if no character appears more than twice
}

int maximumLength(char* s) {
    int n = strlen(s);
    int l = 1, r = n;

    if (!helper(s, n, l)) return -1;

    while (l + 1 < r) {
        int mid = (l + r) / 2;
        if (helper(s, n, mid)) l = mid;
        else r = mid;
    }

    return l;
}

int main() {
    char s[] = "aabccc";
    printf("%d\
", maximumLength(s));  // Output: 3
    return 0;
}
```
```C# []
public class Solution {
    public int MaximumLength(string s) {
        int n = s.Length;
        int l = 1, r = n;

        // Call helper function for the initial condition
        if (!Helper(s, n, l)) return -1;

        while (l + 1 < r) {
            int mid = (l + r) / 2;
            if (Helper(s, n, mid)) l = mid;
            else r = mid;
        }

        return l;
    }

    private bool Helper(string s, int n, int x) {
        int[] cnt = new int[26];  // Array to count character frequencies
        int p = 0;

        for (int i = 0; i < n; i++) {
            while (s[p] != s[i]) p++;  // Move p until we find the matching character
            if (i - p + 1 >= x) cnt[s[i] - 'a']++;  // Increment the count for the character
            if (cnt[s[i] - 'a'] > 2) return true;  // If any character appears more than twice, return true
        }

        return false;  // Return false if no character appears more than twice
    }
}
```