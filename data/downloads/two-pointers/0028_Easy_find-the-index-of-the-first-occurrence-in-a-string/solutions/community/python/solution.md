# Beats 100% With this easy Solution in Java || Python || C++ || C# 🔥🔥😊

**Author:** sagarsindhu36
**Votes:** 228
**Link:** [https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/4749634/](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/4749634/)

---

![Screenshot 2024-02-19 101339.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The function is trying to find the index of the first occurrence of the `needle` string within the `haystack` string. If the `needle` is not found in the `haystack`, it returns -1.

# Approach
<!-- Describe your approach to solving the problem. -->

1. Use a loop to iterate through the `haystack` string. The loop starts at index `i = 0` and goes up to `i = haystack.length() - needle.length()`. This is done to ensure that there are enough characters left in the `haystack` for the needle to fit.

2. Within the loop, check substrings of length equal to the length of the `needle` starting from the current index `i` up to `i + needle.length()`. If any of these substrings matches the `needle`, return the current index `i`.

3. If the loop completes without finding a match, return -1.

# Complexity
- Time complexity: O(n * m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: ***O(1)***
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int strStr(String haystack, String needle) {
        for(int i = 0, j = needle.length(); j<=haystack.length(); i++,j++){
            if(haystack.substring(i,j).equals(needle)){
                return i;
            }
        }
        return -1;
    }
}
```
```python []
class Solution:
    def strStr(self, haystack, needle):
        for i in range(len(haystack) - len(needle) + 1):
            if haystack[i:i+len(needle)] == needle:
                return i
        return -1
```
```C++ []
class Solution {
public:
    int strStr(std::string haystack, std::string needle) {
        for (int i = 0; i <= haystack.length() - needle.length(); ++i) {
            if (haystack.substr(i, needle.length()) == needle) {
                return i;
            }
        }
        return -1;
    }
};
```
```C# []
public class Solution {
    public int StrStr(string haystack, string needle) {
        for (int i = 0; i <= haystack.Length - needle.Length; ++i) {
            if (haystack.Substring(i, needle.Length) == needle) {
                return i;
            }
        }
        return -1;
    }
}
```

![Angry.jpg](./images/1.jpeg)
