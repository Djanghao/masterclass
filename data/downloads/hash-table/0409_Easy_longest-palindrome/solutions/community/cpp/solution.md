# C++ - Easiest Beginner Friendly Sol || O(n) time and O(128) = O(1) space

**Author:** singhabhinash
**Votes:** 347
**Link:** [https://leetcode.com/problems/longest-palindrome/solutions/3156147/](https://leetcode.com/problems/longest-palindrome/solutions/3156147/)

---

# Intuition of this Problem:
<!-- Describe your first thoughts on how to solve this problem. -->
**NOTE - PLEASE READ APPROACH FIRST THEN SEE THE CODE. YOU WILL DEFINITELY UNDERSTAND THE CODE LINE BY LINE AFTER SEEING THE APPROACH.**

# Approach for this Problem:
1. Initialize two variables, oddCount to store the number of characters with an odd count of occurrences and an unordered map ump to store the count of each character in the string.
2. Iterate through the string and for each character ch, increment the count of that character in the unordered map.
3. If the count of the current character ch is odd, increment oddCount. If the count is even, decrement oddCount.
4. If oddCount is greater than 1, return s.length() - oddCount + 1, which is the maximum length of a palindrome that can be formed by using all but one character with an odd count of occurrences.
5. If oddCount is not greater than 1, return s.length(), which is the length of the original string, as all characters can be used to form a palindrome.
<!-- Describe your approach to solving the problem. -->

# Humble Request:
- If my solution is helpful to you then please **UPVOTE** my solution, your **UPVOTE** motivates me to post such kind of solution.
- Please let me know in comments if there is need to do any improvement in my approach, code....anything.
- **Let's connect on** https://www.linkedin.com/in/abhinash-singh-1b851b188

![57jfh9.jpg](./images/0.jpeg)

# Code:
```C++ []
class Solution {
public:
    int longestPalindrome(string s) {
        int oddCount = 0;
        unordered_map<char, int> ump;
        for(char ch : s) {
            ump[ch]++;
            if (ump[ch] % 2 == 1)
                oddCount++;
            else    
                oddCount--;
        }
        if (oddCount > 1)
            return s.length() - oddCount + 1;
        return s.length();
    }
};
```
```Java []
class Solution {
    public int longestPalindrome(String s) {
        int oddCount = 0;
        Map<Character, Integer> map = new HashMap<>();
        for (char ch : s.toCharArray()) {
            map.put(ch, map.getOrDefault(ch, 0) + 1);
            if (map.get(ch) % 2 == 1)
                oddCount++;
            else
                oddCount--;
        }
        if (oddCount > 1)
            return s.length() - oddCount + 1;
        return s.length();
    }
}

```
```Python []
class Solution:
    def longestPalindrome(self, s: str) -> int:
        odd_count = 0
        d = {}
        for ch in s:
            if ch in d:
                d[ch] += 1
            else:
                d[ch] = 1
            if d[ch] % 2 == 1:
                odd_count += 1
            else:
                odd_count -= 1
        if odd_count > 1:
            return len(s) - odd_count + 1
        return len(s)

```

# Time Complexity and Space Complexity:
- Time complexity: **O(n)**, where n is the length of the string s. This is because we are iterating through the string only once.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(m)**, where m is the number of unique characters in the string. This is because we are using an unordered map to store the count of each character.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->