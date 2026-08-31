# ✔️✔️Easy Solutions in Java ✔️✔️, Python ✔️, and C++ ✔️🧐Look at once 💻 with Exaplanation

**Author:** Vikas-Pathak-123
**Votes:** 1670
**Link:** [https://leetcode.com/problems/merge-strings-alternately/solutions/3429116/](https://leetcode.com/problems/merge-strings-alternately/solutions/3429116/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
>The problem asks to merge two strings alternately. Therefore, we can traverse both strings at the same time and pick each character alternately from both strings.

# Approach
<!-- Describe your approach to solving the problem. -->
>1. Initialize an empty string to store the merged result.
>2. Traverse both input strings together, picking each character alternately from both strings and appending it to the merged result string.
>3. Continue the traversal until the end of the longer string is reached.
>4. Return the merged result string.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
>Since we traverse both strings once and pick each character alternately, the time complexity of this approach is O(n), where n is the length of the longer string.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
>We use a StringBuilder to store the merged string, so the space complexity of this approach is O(n), where n is the length of the longer string.

![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```

# Code
```java []
class Solution {
    public String mergeAlternately(String word1, String word2) {
        StringBuilder result = new StringBuilder();
        int i = 0;
        while (i < word1.length() || i < word2.length()) {
            if (i < word1.length()) {
                result.append(word1.charAt(i));
            }
            if (i < word2.length()) {
                result.append(word2.charAt(i));
            }
            i++;
        }
        return result.toString();
    }
}
```
```python []
class Solution(object):
    def mergeAlternately(self, word1, word2):
        """
        :type word1: str
        :type word2: str
        :rtype: str
        """
        result = []
        i = 0
        while i < len(word1) or i < len(word2):
            if i < len(word1):
                result.append(word1[i])
            if i < len(word2):
                result.append(word2[i])
            i += 1
        return ''.join(result)
```
```C++ []
class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        string result = "";
        int i = 0;
        while (i < word1.length() || i < word2.length()) {
            if (i < word1.length()) {
                result += word1[i];
            }
            if (i < word2.length()) {
                result += word2[i];
            }
            i++;
        }
        return result;
    }
};
```

```javascript []
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
 let result = '';
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) result += word1[i];
    if (i < word2.length) result += word2[i];
  }
  return result;
};
```

# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```