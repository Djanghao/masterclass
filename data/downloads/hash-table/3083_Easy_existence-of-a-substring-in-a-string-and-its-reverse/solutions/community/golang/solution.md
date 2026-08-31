# [C++ / Go] Reverse and Check all substrings - O(n^2) solution

**Author:** mikazuki4712
**Votes:** 1
**Link:** [https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4893651/](https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4893651/)

---

# Approach
Simply create a reverse string and find check each substring of length 2.

# Code
```C++ []
class Solution {
public:
    bool isSubstringPresent(string s) {
        string re = s;
        reverse(re.begin(), re.end());
        
        for (int i = 0; i < s.size() - 1; i++) {
            string tmp = s.substr(i, 2);
            if (re.find(tmp) != string::npos)
                return true;
        }
        
        return false;
    }
};
```
```Go []
func isSubstringPresent(s string) bool {
	reversed := reverseString(s)

	for i := 0; i < len(s) - 1; i++ {
		tmp := s[i : i + 2]
		if strings.Contains(reversed, tmp) {
			return true
		}
	}

	return false
}

func reverseString(s string) string {
	runes := []rune(s)
	for i, j := 0, len(s) - 1; i < j; i, j = i + 1, j - 1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}
```

# Complexity
- Time complexity: $O(n^2)$
- Space complexity: $O(n)$