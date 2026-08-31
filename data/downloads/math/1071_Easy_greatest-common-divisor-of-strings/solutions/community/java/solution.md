# 🚀Super Easy Solution🚀||🔥Fully Explained🔥|| C++ || Python3 || Java

**Author:** Naman_Ag
**Votes:** 1038
**Link:** [https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3124997/](https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3124997/)

---

# Consider\uD83D\uDC4D
```
                    Please Upvote If You Find It Helpful
```
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
    First we check if str1 + str2 == str2 + str1
    If it is equal than if find the longest common substring.
    Otherwise we return "".
# Approach
<!-- Describe your approach to solving the problem. -->
    Suppose str1 = "ABCABC" and str2 = "ABC"
    str1 + str2 = ABCABCABC
    str2 + str1 = ABCABCABC
    str1 + str2 == str2 + str1
    return str.substr(0, gcd(size(str1), gcd(size(str2))))
    where gcd(3, 6) = 3
    So, answer is "ABC"

    Also str1 = "LEET", str2 = "CODE"
    str1 + str2 = "LEETCODE"
    str2 + str1 = "CODELEET"
    So, return ""
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    string gcdOfStrings(string str1, string str2) {
        // Check if concatenated strings are equal or not, if not return ""
        if(str1 + str2 != str2 + str1)
            return "";
        // If strings are equal than return the substring from 0 to gcd of size(str1), size(str2)
        return str1.substr(0, gcd(str1.size(), str2.size()));
    }
};
```
```python []
class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        # Check if concatenated strings are equal or not, if not return ""
        if str1 + str2 != str2 + str1:
            return ""
        # If strings are equal than return the substring from 0 to gcd of size(str1), size(str2)
        from math import gcd
        return str1[:gcd(len(str1), len(str2))]

```
```Java []
class Solution {
    public String gcdOfStrings(String str1, String str2) {
        // Check if concatenated strings are equal or not, if not return ""
        if (!(str1 + str2).equals(str2 + str1))
            return "";
        // If strings are equal than return the substring from 0 to gcd of size(str1), size(str2)
        int gcd = gcd(str1.length(), str2.length());
        return str1.substring(0, gcd);
    }

    private int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }
}

```
```
                            Give a \uD83D\uDC4D. It motivates me alot
```
Let's Connect On [Linkedin](https://www.linkedin.com/in/naman-agarwal-0551aa1aa/)