# One line solution C++, Java & Python

**Author:** cpcs
**Votes:** 19
**Link:** [https://leetcode.com/problems/minimize-string-length/solutions/3595387/](https://leetcode.com/problems/minimize-string-length/solutions/3595387/)

---

# Intuition
Just count the number of distinct characters.

# Approach
Just count the number of distinct characters.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
C++
```
class Solution {
public:
    int minimizedStringLength(string s) {
        return unordered_set<char>(s.begin(), s.end()).size();
    }
};
```

Java
```
class Solution {
    public int minimizedStringLength(String s) {
        return (int) s.chars().distinct().count();
    }
}
```

Python
```
class Solution:
    def minimizedStringLength(self, s: str) -> int:
        return len(set(s))
```

