# Easiest Solution 🔥✅ | Sliding Window | BEATS 94.94%

**Author:** 1AFN19tfV2
**Votes:** 25
**Link:** [https://leetcode.com/problems/count-substrings-with-k-frequency-characters-i/solutions/5939809/](https://leetcode.com/problems/count-substrings-with-k-frequency-characters-i/solutions/5939809/)

---

# Intuition
We need to count substrings where at least one character appears exactly `k` times. A sliding window approach helps us track character frequencies and adjust the window to find valid substrings efficiently.

# Approach
1. Use a sliding window with a pointer `l` and a frequency map `d` to track characters in the window.
2. For each character, update its frequency in `d`.
3. If any character's frequency reaches `k`, shrink the window by incrementing `l`.
4. Add the number of valid starting positions (`l`) to the result for each window.
5. Return the total count of valid substrings.

# Complexity
- Time complexity: $$O(n)$$, where n is the length of the string.

- Space complexity: $$O(1)$$, since the maximum number of items we store in our hashmap is 26 (every letter).

# Code
```python3 []
class Solution:
    def numberOfSubstrings(self, s: str, k: int) -> int:
        ans = 0
        l = 0
        d = {}
        for c in s:
            d[c] = d.get(c, 0) + 1
            while d[c] == k:
                d[s[l]] -= 1
                l += 1
            ans += l
        return ans
```
```cpp []
class Solution {
public:
    int numberOfSubstrings(string s, int k) {
        int ans = 0;
        int l = 0;
        unordered_map<char, int> d;
        
        for (char c : s) {
            d[c]++;
            while (d[c] == k) {
                d[s[l]]--;
                l++;
            }
            ans += l;
        }
        
        return ans;
    }
};
```
```java []
import java.util.HashMap;

class Solution {
    public int numberOfSubstrings(String s, int k) {
        int ans = 0;
        int l = 0;
        HashMap<Character, Integer> d = new HashMap<>();
        
        for (char c : s.toCharArray()) {
            d.put(c, d.getOrDefault(c, 0) + 1);
            
            while (d.get(c) == k) {
                d.put(s.charAt(l), d.get(s.charAt(l)) - 1);
                l++;
            }
            
            ans += l;
        }

        return ans;
    }
}
```
![image.png](./images/0.png)
