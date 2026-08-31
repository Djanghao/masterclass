# ✅97.43%🔥Easy Solution🔥with explanation🔥

**Author:** MrAke
**Votes:** 329
**Link:** [https://leetcode.com/problems/length-of-last-word/solutions/4954087/](https://leetcode.com/problems/length-of-last-word/solutions/4954087/)

---

# Intuition
#### To solve this problem, we need to find the last word in the string and return its length. We can achieve this by splitting the string into words and then returning the length of the last word.

---

# Approach
#### 1. Strip trailing whitespaces from the input string using the `strip()` method.
#### 2. Split the string into words using the `split()` method.
#### 3. If there are no words after stripping whitespaces, return 0.
#### 4. Otherwise, return the length of the last word, which is the last element in the list of words.

---
# Time complexity:

##### 1. Stripping trailing whitespaces takes linear time, so it's $$O(n)$$ where $$n$$ is the length of the input string.
##### 2. Splitting the string into words also takes linear time, so it's also $$O(n)$$.
##### 3. The overall time complexity is $$O(n)$$.

---
# Space complexity:
#### We store the list of words, which could take up to $$O(n)$$ space if all characters in the input string are non-whitespace.
---
# Code

```python []
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        words = s.strip().split()
        
        if not words:
            return 0
        
        return len(words[-1])
```
```C++ []
class Solution {
public:
    int lengthOfLastWord(string s) {
        int length = 0;
        bool counting = false;
        
        for (int i = s.length() - 1; i >= 0; i--) {
            if (s[i] != ' ') {
                counting = true;
                length++;
            }
            else if (counting) {
                break;
            }
        }
        
        return length;
    }
};
```
```java []
class Solution {
    public int lengthOfLastWord(String s) {
        s = s.trim();
        
        int length = 0;
        for (int i = s.length() - 1; i >= 0; i--) {
            if (s.charAt(i) != ' ') {
                length++;
            }
            else if (length > 0) {
                break;
            }
        }
        
        return length;
    }
}

```
```javascript []
var lengthOfLastWord = function(s) {
    s = s.trim();
    
    let length = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            length++;
        }
        else if (length > 0) {
            break;
        }
    }
    
    return length;
};

```
```C# []
public class Solution {
    public int LengthOfLastWord(string s) {
        s = s.Trim();
        
        int length = 0;
        for (int i = s.Length - 1; i >= 0; i--) {
            if (s[i] != ' ') {
                length++;
            }
            else if (length > 0) {
                break;
            }
        }
        
        return length;
    }
}

```
----

![Screenshot 2023-08-20 065922.png](./images/0.png)












