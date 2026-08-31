# ✅Frequency || Easy and Clean Code (C++ / Java / C#) Multiple Approach | Beats 100% ✅✅✅

**Author:** Sayan98
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-length-of-string-after-operations/solutions/5506837/](https://leetcode.com/problems/minimum-length-of-string-after-operations/solutions/5506837/)

---

# Intuition
If a character appears three times, two of those occurrences can be removed.

# Approach
- Create an array to count the occurrences of each lowercase letter (a-z).
- Iterate through the string, counting each character.
- If a character's count reaches 3, remove 2 from its count and increment the '**removed**' counter by 2.
- Return the original length minus the number of **removed** characters.

# Complexity
- Time complexity: **O(n)**
- Space complexity: **O(1)**


```Java []
class Solution {
    public int minimumLength(String s) {
        int[] map = new int[26];
        int n = s.length();
        int removed = 0;
        for (int i = 0; i < n; i++) {
            int ch = s.charAt(i) - 'a';
            map[ch]++;

            if(map[ch] == 3) {
                map[ch] -= 2;
                removed += 2;
            }
        }
        return n - removed;
    }
}
```
```C++ []
class Solution {
public:
    int minimumLength(string s) {
        vector<int> map(26);
        int n = s.size();
        int removed = 0;
        for (int i = 0; i < n; i++) {
            int ch = s[i] - 'a';
            map[ch]++;

            if(map[ch] == 3) {
                map[ch] -= 2;
                removed += 2;
            }
        }
        return n - removed; 
    }
};
```
```C# []
public class Solution {
    public int MinimumLength(string s) {
        
        var map = new int[26];
        var n = s.Length;
        var removed = 0;
        for (int i = 0; i < n; i++) {
            int ch = s[i] - 'a';
            map[ch]++;

            if(map[ch] == 3) {
                map[ch] -= 2;
                removed += 2;
            }
        }
        return n - removed;
    }
}
```

# Alternate Approach
```C# []
public class Solution {
    public int MinimumLength(string s) {
        var map = new Dictionary<char, int>();
        var n = s.Length;
        var removed = 0;
        for (int i = 0; i < n; i++) {
            char ch = s[i];
            if (map.ContainsKey(ch)) {
                map[ch]++;
            } else map.Add(ch, 1);

            if(map[ch] == 3) {
                map[ch] -= 2;
                removed += 2;
            }
        }
        return n - removed;
    }
}
```

