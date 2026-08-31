# Simple solutions with C++, Java & Python

**Author:** cpcs
**Votes:** 49
**Link:** [https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/3771266/](https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/3771266/)

---

# Intuition
(1) Put all the forbidden strings in the hashmap.
(2) For each i from n - 1 to 0 (in reverse order).
(3) Check whether we have fobidden word by enumberating or the lengths from 1 to max_length_of_forbidden_word strting at i. Keep the valid right position.
The key point is if [i..x] is invalid then [(i - 1)..x] is invalid too.



# Complexity
- Time complexity:
O(n * max_length_of_forbidden_words ^ 2) the square is because hashmap is not free. It needs O(length) to calculate the hash value and find.

- Space complexity:
O(sum of forbidden words length)

# Code
```
class Solution {
public:
    int longestValidSubstring(string word, vector<string>& forbidden) {
        int len = 0;
        unordered_set<string> all;
        for (const string &s : forbidden) {
            all.insert(s);
            len = max(len, (int) s.length());
        }
        const int n = word.length();
        int r = 0;
        for (int i = n - 1, right = n; right > r && i >= 0; --i) {
            int now = 0;
            string temp;
            for (int j = i; j < right && j - i < len; ++j) {
                temp.push_back(word[j]);
                if (all.count(temp)) {
                    right = j;
                    break;
                }
            }
            r = max(r, right - i);
        }
        return r;
        
    }
};
```

Java
```
class Solution {
    public int longestValidSubstring(String word, List<String> forbidden) {
           int len = 0;
        Set<String> all = new HashSet<>();
        for (String s : forbidden) {
            all.add(s);
            len = Math.max(len, s.length());
        }
        int n = word.length();
        int r = 0;
        for (int i = n - 1, right = n; right > r && i >= 0; --i) {
            int now = 0;
            StringBuilder temp = new StringBuilder();
            for (int j = i; j < right && j - i < len; ++j) {
                temp.append(word.charAt(j));
                if (all.contains(temp.toString())) {
                    right = j;
                    break;
                }
            }
            r = Math.max(r, right - i);
        }
        return r;
    }
}
```

Python:
```
class Solution:
    def longestValidSubstring(self, word: str, forbidden: List[str]) -> int:
        length = 0
        all = set()
        for s in forbidden:
            all.add(s)
            length = max(length, len(s))
        n = len(word)
        r = 0
        right = n
        for i in range(n - 1, -1, -1):
            if right <= r:
                break
            now = 0
            temp = ''
            for j in range(i, min(right, i + length)):
                temp += word[j]
                if temp in all:
                    right = j
                    break
            r = max(r, right - i)
        return r

```
