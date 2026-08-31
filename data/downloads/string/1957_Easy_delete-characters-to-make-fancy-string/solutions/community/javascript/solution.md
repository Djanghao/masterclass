# 🌟 Beats 100.00% 👏  ||  Step-by-Step Breakdown 💯🔥

**Author:** withaarzoo
**Votes:** 14
**Link:** [https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/5991152/](https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/5991152/)

---

![github_promotion_dark.png](./images/0.png)

## **\uD83C\uDF1F Access Daily LeetCode Solutions Repo :** [click here](https://github.com/withaarzoo/LeetCode-Solutions)

---

![Screenshot 2024-11-01 065238.png](./images/1.png)

---

# Intuition
To solve this problem, the main observation is that we need to eliminate characters to ensure that no three consecutive characters are the same. To do this, we can create a result string by carefully adding characters from the input string, only when it does not create three consecutive duplicates. This allows us to build a valid "fancy" string directly without needing to repeatedly delete characters.

---

# Approach
1. **Initialize a result string**: Start with an empty string that will store our final "fancy" string.
2. **Single pass check**: Traverse each character in the input string:
   - For each character, check the last two characters of the result string.
   - If the last two characters in the result match the current character, skip adding this character to avoid three consecutive duplicates.
   - Otherwise, add the character to the result.
3. **Return the result**: By the end of the traversal, `result` will contain a valid "fancy" string with the minimum deletions needed.

---

# Complexity
- **Time Complexity**: \\(O(n)\\), where \\(n\\) is the length of the string `s`, since we only iterate through the string once.
- **Space Complexity**: \\(O(n)\\), as we store the result string, which in the worst case can be as long as the input string.

---

# Code
```C++ []
class Solution {
public:
    string makeFancyString(string s) {
        string result;
        for (char c : s) {
            int n = result.size();
            if (n < 2 || !(result[n - 1] == c && result[n - 2] == c)) {
                result += c;
            }
        }
        return result;
    }
};

```
```Java []
class Solution {
    public String makeFancyString(String s) {
        StringBuilder result = new StringBuilder();
        for (char c : s.toCharArray()) {
            int n = result.length();
            if (n < 2 || !(result.charAt(n - 1) == c && result.charAt(n - 2) == c)) {
                result.append(c);
            }
        }
        return result.toString();
    }
}

```
```JavaScript []
/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        let n = result.length;
        if (n < 2 || !(result[n - 1] === s[i] && result[n - 2] === s[i])) {
            result += s[i];
        }
    }
    return result;
};

```
```Python []
class Solution:
    def makeFancyString(self, s: str) -> str:
        result = []
        for c in s:
            if len(result) < 2 or not (result[-1] == c and result[-2] == c):
                result.append(c)
        return ''.join(result)

```
```Go []
func makeFancyString(s string) string {
    result := []byte{}
    for i := 0; i < len(s); i++ {
        n := len(result)
        if n < 2 || !(result[n-1] == s[i] && result[n-2] == s[i]) {
            result = append(result, s[i])
        }
    }
    return string(result)
}

```

---

# Step-by-Step Detailed Explanation
1. **Initialize the Result**: Start with an empty result string (or list in Python).
2. **Iterate Through Each Character**:
   - For each character in the input string:
     - If the result string has fewer than two characters, add the current character without checks, since two consecutive characters can't form three in a row.
     - If there are already two characters in the result, check if the last two characters are the same as the current character:
       - If yes, skip adding this character to avoid three consecutive identical characters.
       - If no, add the character to the result.
3. **Convert and Return**: After the loop, convert the result list to a string (if necessary) and return it. The resulting string will satisfy the "fancy" condition without any three consecutive identical characters.

---

![upvote_cat.png](./images/2.png)
