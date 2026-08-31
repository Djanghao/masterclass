# 🔥SIMPILL💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/solutions/6101288/](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/solutions/6101288/)

---

![image.png](./images/0.png)


---


## Intuition
The problem requires finding the minimum number of characters to remove from either the beginning or the end of a string `s` so that at least `k` instances of each character ('a', 'b', 'c') remain.  
To solve this efficiently:
1. Use a **sliding window** approach to determine the largest substring of `s` such that removing the substring leaves at least `k` occurrences of each character.
2. The result will then be the total string length minus the size of this valid substring.

---

## Approach
1. **Count Characters in the Entire String**:  
   Start by counting occurrences of each character ('a', 'b', 'c'). If any character occurs fewer than `k` times, it's impossible to satisfy the condition, and we return `-1`.

2. **Sliding Window**:  
   Use a sliding window to find the largest substring such that removing it leaves at least `k` instances of each character in the rest of the string.  
   - Start with two pointers `l` (left) and `r` (right) for the sliding window.
   - As `r` expands, decrement the character counts from the total.
   - If removing the current window results in fewer than `k` occurrences of any character, increment `l` to shrink the window and restore the counts.
   - Update the result with the smallest number of characters left outside the valid window.

3. **Edge Cases**:  
   - If `k` is zero, no characters need to remain, so the result is `0`.
   - If the string already satisfies the condition, return `0`.

---

## Complexity
- **Time Complexity**:  
  - \\(O(n)\\): One pass is required to count characters, and another \\(O(n)\\) pass for the sliding window.

- **Space Complexity**:  
  - \\(O(1)\\): The solution uses a constant amount of space for character counts and variables.

---

## Code

```dart []
class Solution {
  int takeCharacters(String s, int k) {
    // Total counts for 'a', 'b', 'c'
    List<int> count = List.filled(3, 0);
    for (int i = 0; i < s.length; i++) {
      count[s.codeUnitAt(i) - 'a'.codeUnitAt(0)]++;
    }

    // If any character has fewer than k occurrences, return -1
    if (count.reduce((a, b) => a < b ? a : b) < k) {
      return -1;
    }

    // Sliding window approach
    int res = s.length;
    int l = 0; // Left pointer

    for (int r = 0; r < s.length; r++) {
      count[s.codeUnitAt(r) - 'a'.codeUnitAt(0)]--;

      // Shrink the window if removing it makes any character count < k
      while (count.reduce((a, b) => a < b ? a : b) < k) {
        count[s.codeUnitAt(l) - 'a'.codeUnitAt(0)]++;
        l++;
      }

      // Calculate the minimum characters to remove
      res = (res < (s.length - (r - l + 1))) ? res : (s.length - (r - l + 1));
    }

    return res;
  }
}
```

```java []
public class Solution {
    public int takeCharacters(String s, int k) {
        int[] count = new int[3];
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }

        if (Math.min(count[0], Math.min(count[1], count[2])) < k) {
            return -1;
        }

        int res = s.length();
        int l = 0;

        for (int r = 0; r < s.length(); r++) {
            count[s.charAt(r) - 'a']--;

            while (Math.min(count[0], Math.min(count[1], count[2])) < k) {
                count[s.charAt(l) - 'a']++;
                l++;
            }

            res = Math.min(res, s.length() - (r - l + 1));
        }

        return res;
    }
}
```

```python []
class Solution:
    def takeCharacters(self, s: str, k: int) -> int:
        count = [0] * 3
        for c in s:
            count[ord(c) - ord('a')] += 1

        if min(count) < k:
            return -1

        res = len(s)
        l = 0

        for r in range(len(s)):
            count[ord(s[r]) - ord('a')] -= 1

            while min(count) < k:
                count[ord(s[l]) - ord('a')] += 1
                l += 1

            res = min(res, len(s) - (r - l + 1))

        return res
```

```javascript []
var takeCharacters = function(s, k) {
    const count = [0, 0, 0];
    for (const c of s) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    if (Math.min(...count) < k) {
        return -1;
    }

    let res = s.length;
    let l = 0;

    for (let r = 0; r < s.length; r++) {
        count[s.charCodeAt(r) - 'a'.charCodeAt(0)]--;

        while (Math.min(...count) < k) {
            count[s.charCodeAt(l) - 'a'.charCodeAt(0)]++;
            l++;
        }

        res = Math.min(res, s.length - (r - l + 1));
    }

    return res;
};
```

```cpp []
class Solution {
public:
    int takeCharacters(string s, int k) {
        vector<int> count(3, 0);
        for (char c : s) {
            count[c - 'a']++;
        }

        if (*min_element(count.begin(), count.end()) < k) {
            return -1;
        }

        int res = s.length();
        int l = 0;

        for (int r = 0; r < s.length(); r++) {
            count[s[r] - 'a']--;

            while (*min_element(count.begin(), count.end()) < k) {
                count[s[l] - 'a']++;
                l++;
            }

            res = min(res, (int)(s.length() - (r - l + 1)));
        }

        return res;
    }
};
```

```go []
func takeCharacters(s string, k int) int {
    count := make([]int, 3)
    for _, c := range s {
        count[c-'a']++
    }

    if min(count) < k {
        return -1
    }

    res := len(s)
    l := 0

    for r := 0; r < len(s); r++ {
        count[s[r]-'a']--

        for min(count) < k {
            count[s[l]-'a']++
            l++
        }

        res = min(res, len(s)-(r-l+1))
    }

    return res
}

func min(arr []int) int {
    res := arr[0]
    for _, val := range arr {
        if val < res {
            res = val
        }
    }
    return res
}
```

---

![image.png](./images/1.png) {:style='width:250px'}
