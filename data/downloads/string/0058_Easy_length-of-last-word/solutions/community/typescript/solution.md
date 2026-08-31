# Beats 100%✅||Full Explained💯||[Java/C++/Python/JavaScript/go/C#]

**Author:** Shivansu_7
**Votes:** 10
**Link:** [https://leetcode.com/problems/length-of-last-word/solutions/4955822/](https://leetcode.com/problems/length-of-last-word/solutions/4955822/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **Initialization**: Initialize `n` to the length of the input string `s` and `result` to 0. `n` will be used as an index to traverse the string from the end towards the beginning.

2. **Traverse the String Backwards**: Using a `while` loop, iterate over the characters of the string from the end towards the beginning by decrementing `n`.

3. **Count Non-Space Characters**: For each character encountered, if it's not a space, increment the `result` variable, which represents the length of the last word.

4. **Encounter a Space**: If a space is encountered, check if `result` is greater than 0. If it is, this means that we've counted a word, so return `result`.

5. **Return Length of Last Word**: After the loop ends, return `result`, which contains the length of the last word in the string. If no word is found, `result` will be 0.

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public int lengthOfLastWord(String s) {
        int n = s.length();
        int result = 0;
        while(n > 0) {
            n--;
            if(s.charAt(n) != ' ') {
                result++;
            }
            else if(result > 0) {
                return result;
            }
        }   
        return result;
    }
}
```
```C++ []
class Solution {
public:
    int lengthOfLastWord(string s) {
        int n = s.length();
        int result = 0;
        while(n > 0) {
            n--;
            if(s[n] != ' ') {
                result++;
            }
            else if(result > 0) {
                return result;
            }
        }   
        return result;
    }
};
```
```Python3 []
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        n = len(s)
        result = 0
        while n > 0:
            n -= 1
            if s[n] != ' ':
                result += 1
            elif result > 0:
                return result
        return result
```
```C# []
public class Solution {
    public int LengthOfLastWord(string s) {
        int n = s.Length;
        int result = 0;
        while (n > 0) {
            n--;
            if (s[n] != ' ') {
                result++;
            }
            else if (result > 0) {
                return result;
            }
        }   
        return result;
    }
}
```
```Go []
func lengthOfLastWord(s string) int {
    n := len(s)
    result := 0
    for n > 0 {
        n--
        if s[n] != ' ' {
            result++
        } else if result > 0 {
            return result
        }
    }
    return result
}
```
```JavaScript []
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n = s.length;
    let result = 0;
    while (n > 0) {
        n--;
        if (s[n] !== ' ') {
            result++;
        } else if (result > 0) {
            return result;
        }
    }   
    return result;
};
```

---
## ***Feel Free to Give Other Approaches in Comment***
---



![5c63d377-8ef4-4beb-b09d-0edb07e09a41_1702955205.6568592.png](./images/0.png)

