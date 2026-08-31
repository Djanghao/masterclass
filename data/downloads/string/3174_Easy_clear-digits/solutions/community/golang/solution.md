# Simple & Detailed Step-by-step Explanation || O(n)

**Author:** muhammadfarhankt
**Votes:** 3
**Link:** [https://leetcode.com/problems/clear-digits/solutions/5280201/](https://leetcode.com/problems/clear-digits/solutions/5280201/)

---

# Intuition
- The problem requires repeatedly removing the first digit found in the string and its closest non-digit character to the left. Given that there won't be repeated digits, we can handle the problem in a single pass through the string. Our goal is to iterate through the string, identify digits, and remove them along with the closest non-digit character to their left in a single traversal.

## If this solution helped you, please consider giving it an upvote. \u2B06\uFE0F Your feedback motivates me to share more insights and solutions.
# Approach
1. Initialize an empty result list: This will store the characters that are not removed.
2. Iterate through each character in the string:
    - If the character is a digit:
        - Check if there is a non-digit character in the result list.
        - If there is, remove the last character from the result list (the closest non-digit character to the left of the current digit).
        - Do not add the current digit to the result list.
    - If the character is not a digit, add it to the result list.
3. Convert the result list back to a string and return it.

# Complexity
- Time complexity: O(n) The solution iterates through the string once, performing constant time operations (checking conditions and adding/removing characters) for each character. Hence, the time complexity is  O(n), where \uD835\uDC5B is the length of the string.

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n) In the worst case, if there are no digits, the result list will contain all characters of the input string.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```C++ []
class Solution {
public:
    std::string clearDigits(std::string s) {
        std::string result;
        for (char c : s) {
            if (c >= '0' && c <= '9') {
                if (!result.empty() && result.back() >= 'a' && result.back() <= 'z') {
                    result.pop_back();
                }
            } else {
                result.push_back(c);
            }
        }
        return result;
    }
};
```
```Java []
class Solution {
    public String clearDigits(String s) {
        StringBuilder result = new StringBuilder();
        for (char c : s.toCharArray()) {
            if (Character.isDigit(c)) {
                if (result.length() > 0 && Character.isLetter(result.charAt(result.length() - 1))) {
                    result.deleteCharAt(result.length() - 1);
                }
            } else {
                result.append(c);
            }
        }
        return result.toString();
    }
}
```
```Go []
func clearDigits(s string) string {
    var result []rune
    
    for _, char := range s {
        if char >= '0' && char <= '9' {
            
            if len(result) > 0 && result[len(result)-1] >= 'a' && result[len(result)-1] <= 'z' {
                result = result[:len(result)-1]
            }
            
        } else {
            result = append(result, char)
        }
    }
    return string(result)
    
}
```
```Javascript []
/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let result = [];
    for (let char of s) {
        if (char >= '0' && char <= '9') {
            if (result.length > 0 && result[result.length - 1] >= 'a' && result[result.length - 1] <= 'z') {
                result.pop();
            }
        } else {
            result.push(char);
        }
    }
    return result.join('');
};
```
```Python []
class Solution:
    def clearDigits(self, s: str) -> str:
        result = []
        for char in s:
            if char.isdigit():
                if result and result[-1].isalpha():
                    result.pop()
            else:
                result.append(char)
        return ''.join(result)
```
```Dart []
class Solution {
  String clearDigits(String s) {
    List<String> result = [];
    for (int i = 0; i < s.length; i++) {
      String char = s[i];
      if (char.codeUnitAt(0) >= '0'.codeUnitAt(0) && char.codeUnitAt(0) <= '9'.codeUnitAt(0)) {
        if (result.isNotEmpty && result.last.codeUnitAt(0) >= 'a'.codeUnitAt(0) && result.last.codeUnitAt(0) <= 'z'.codeUnitAt(0)) {
          result.removeLast();
        }
      } else {
        result.add(char);
      }
    }
    return result.join('');
  }
}
```