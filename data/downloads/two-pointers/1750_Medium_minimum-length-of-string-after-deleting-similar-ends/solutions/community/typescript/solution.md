# 🔥✅✅ Beats 100% with Proof | Very Easy to Understand ✅✅🔥`

**Author:** areetrahalder
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/solutions/4825543/](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/solutions/4825543/)

---

# Proof - Upvote if you are watching the proof
![image.png](./images/0.png)

> **Solved at Mar 05, 2024 11:45am GMT +5:30**

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the solution is to iteratively find and remove pairs of non-overlapping equal prefixes and suffixes from the string until no such pairs exist. The goal is to return the minimum length of the string after applying these operations.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize two pointers, `left` and `right`, pointing to the start and end of the string, respectively.
2. While `left` is less than `right`:
    * If the characters at positions `left` and `right` are not equal, return the length of the remaining string between them (`right - left + 1`).
    * Set toBeTaken to the character at position `left`.
    * Increment `left` until a character different from toBeTaken is found.
    * Decrement `right` until a character different from toBeTaken is found.
3. Return the length of the remaining string between `left` and `right` (`right - left + 1`).

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
> where n is the length of the input string.

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
> as only a constant amount of extra space is used.

# Code
```Java []
class Solution {
    public int minimumLength(String s) {
        char[] sArr = s.toCharArray();
        int left = 0, right = sArr.length - 1;
        char toBeTaken;
        while(left < right){
            if(sArr[left] != sArr[right]) return right - left + 1;
            toBeTaken = sArr[left];
            while(sArr[left] == toBeTaken  && left < right){
                left++;
            }
            while(sArr[right] == toBeTaken  && left <= right){
                right--;
            }
        }
        return right - left + 1;
    }
}
```
```C []
int minimumLength(char* s) {
    int left = 0, right = strlen(s) - 1;
    char toBeTaken;
    while (left < right) {
        if (s[left] != s[right]) return right - left + 1;
        toBeTaken = s[left];
        while (s[left] == toBeTaken && left < right) {
            left++;
        }
        while (s[right] == toBeTaken && left <= right) {
            right--;
        }
    }
    return right - left + 1;
}

```
```C++ []
class Solution {
public:
    int minimumLength(string s) {
        int left = 0, right = s.length() - 1;
        char toBeTaken;
        while (left < right) {
            if (s[left] != s[right]) return right - left + 1;
            toBeTaken = s[left];
            while (s[left] == toBeTaken && left < right) {
                left++;
            }
            while (s[right] == toBeTaken && left <= right) {
                right--;
            }
        }
        return right - left + 1;
    }
};

```
```C# []
public class Solution {
    public int MinimumLength(string s) {
        int left = 0, right = s.Length - 1;
        char toBeTaken;
        while (left < right) {
            if (s[left] != s[right]) return right - left + 1;
            toBeTaken = s[left];
            while (s[left] == toBeTaken && left < right) {
                left++;
            }
            while (s[right] == toBeTaken && left <= right) {
                right--;
            }
        }
        return right - left + 1;
    }
}

```
```Python []
class Solution(object):
    def minimumLength(self, s):
        """
        :type s: str
        :rtype: int
        """
        sArr = list(s)
        left, right = 0, len(sArr) - 1
        while left < right:
            if sArr[left] != sArr[right]:
                return right - left + 1
            toBeTaken = sArr[left]
            while sArr[left] == toBeTaken and left < right:
                left += 1
            while sArr[right] == toBeTaken and left <= right:
                right -= 1
        return right - left + 1

```
```Python3 []
class Solution:
    def minimumLength(self, s: str) -> int:
        sArr = list(s)
        left, right = 0, len(sArr) - 1
        while left < right:
            if sArr[left] != sArr[right]:
                return right - left + 1
            toBeTaken = sArr[left]
            while sArr[left] == toBeTaken and left < right:
                left += 1
            while sArr[right] == toBeTaken and left <= right:
                right -= 1
        return right - left + 1

```
```Javascript []
/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    const sArr = s.split('');
    let left = 0, right = sArr.length - 1;
    let toBeTaken;
    
    while (left < right) {
        if (sArr[left] !== sArr[right]) return right - left + 1;
        
        toBeTaken = sArr[left];
        
        while (sArr[left] === toBeTaken && left < right) {
            left++;
        }
        
        while (sArr[right] === toBeTaken && left <= right) {
            right--;
        }
    }
    
    return right - left + 1;
};

```
```Typescript []
function minimumLength(s: string): number {
    const sArr: string[] = s.split('');
    let left: number = 0, right: number = sArr.length - 1;
    let toBeTaken: string;

    while (left < right) {
        if (sArr[left] !== sArr[right]) return right - left + 1;

        toBeTaken = sArr[left];

        while (sArr[left] === toBeTaken && left < right) {
            left++;
        }

        while (sArr[right] === toBeTaken && left <= right) {
            right--;
        }
    }

    return right - left + 1;
}
```


# Upvote - Please
![image.png](./images/1.png)
