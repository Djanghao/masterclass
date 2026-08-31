# ✔💯 DAY 395  | 100% 0ms | [PYTHON/JAVA/C++] | EXPLAINED | Approach 🆙🆙🆙

**Author:** ManojKumarPatnaik
**Votes:** 8
**Link:** [https://leetcode.com/problems/lexicographically-smallest-beautiful-string/solutions/3469881/](https://leetcode.com/problems/lexicographically-smallest-beautiful-string/solutions/3469881/)

---

# Please Upvote as it really motivates me \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
# Intuition & Approach
<!-- Describe your approach to solving the problem. -->
 ##### \u2022	A string is beautiful if it consists of the first k letters of the English lowercase alphabet and does not contain any substring of length 2 or more which is a palindrome.
##### \u2022	We are given a beautiful string s of length n and a positive integer k, and we need to find the lexicographically smallest string of length n, which is larger than s and is beautiful. If there is no such string, we need to return an empty string.
##### \u2022	To find the lexicographically smallest string that is larger than s and is beautiful, we can start by incrementing the last character of s. If the resulting string is not beautiful, we need to make it beautiful by changing some characters.
##### \u2022	We can use a while loop to iterate over the characters of the string from right to left. At each step, we check if the current character violates the "beautiful" property. If it does, we increment it until it becomes valid.
##### \u2022	If we reach the beginning of the string and cannot find a "beautiful" string that is larger than s, we return an empty string.
##### \u2022	The main idea behind this approach is to increment the string in the lexicographically smallest way possible while maintaining the "beautiful" property. By starting from the end of the string and incrementing the last character first, we can ensure that we find the lexicographically smallest string that is larger than s.
##### \u2022	The time complexity of this approach is O(nk), where n is the length of the string and k is the size of the alphabet. This is because we may need to increment each character up to k times to make the string "beautiful". However, in practice, the number of iterations is likely to be much smaller than k, so the actual time complexity may be much lower.



```python []
def smallestBeautifulString(self, s: str, k: int) -> str:
    i, n = len(s) - 1, len(s)
    s = s[:i] + chr(ord(s[i]) + 1) # Increment the last character of the string
    while i >= 0 and i < n:
        if ord(s[i]) >= ord('a') + k: # If the character exceeds the limit, reset it to 'a' and move to the previous character
            s = s[:i] + 'a' + s[i + 1:]
            i -= 1
            if i >= 0:
                s = s[:i] + chr(ord(s[i]) + 1) + s[i + 1:] # Increment the previous character
            else:
                break # If there are no more characters, break out of the loop
        elif (i - 1 >= 0 and s[i] == s[i - 1]) or (i - 2 >= 0 and s[i] == s[i - 2]):
            s = s[:i] + chr(ord(s[i]) + 1) + s[i + 1:] # If the character violates the "beautiful" property, increment it
        else:
            i += 1 # Move to the next character
    if i == -1:
        s = "" # If the string cannot be made "beautiful", return an empty string
    return s
```
```java []
public StringBeautifulString(String s, int k) {
        int i = s.length() - 1, n = s.length();
        s = s.substring(0, i) + (char)(s.charAt(i) + 1); // Increment the last character of the string
        while (i >= 0 && i < n) {
            if (s.charAt(i) >= 'a' + k) { // If the character exceeds the limit, reset it to 'a' and move to the previous character
                s = s.substring(0, i) + 'a' + s.substring(i + 1);
                i -= 1;
                if (i >= 0) {
                    s = s.substring(0, i) + (char)(s.charAt(i) + 1) + s.substring(i + 1); // Increment the previous character
                } else {
                    break; // If there are no more characters, break out of the loop
                }
            } else if ((i - 1 >= 0 && s.charAt(i) == s.charAt(i - 1)) || (i - 2 >= 0 && s.charAt(i) == s.charAt(i - 2))) {
                s = s.substring(0, i) + (char)(s.charAt(i) + 1) + s.substring(i + 1); // If the character violates the "beautiful" property, increment it
            } else {
                i++; // Move to the next character
            }
        }
        if (i == -1) {
            s = ""; // If the string cannot be made "beautiful", return an empty string
        }
        return s;
    }
```
```c++ []
string smallestBeautifulString(string s, int k) {
        int i = s.length() - 1, n = s.length();
        s[i] += 1; // Increment the last character of the string
        while (i >= 0 && i < n) {
            if (s[i] >= 'a' + k) { // If the character exceeds the limit, reset it to 'a' and move to the previous character
                s[i] = 'a';
                i -= 1;
                if (i >= 0) {
                    s[i]++; // Increment the previous character
                } else {
                    break; // If there are no more characters, break out of the loop
                }
            } else if ((i - 1 >= 0 && s[i] == s[i - 1]) || (i - 2 >= 0 && s[i] == s[i - 2])) {
                s[i]++; // If the character violates the "beautiful" property, increment it
            } else {
                i++; // Move to the next character
            }
        }
        if (i == -1) {
            s = ""; // If the string cannot be made "beautiful", return an empty string
        }
        return s;
    }
```

Please Upvote as it really motivates me \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99


![BREUSELEE.webp](./images/0.webp)
![image.png](./images/1.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
