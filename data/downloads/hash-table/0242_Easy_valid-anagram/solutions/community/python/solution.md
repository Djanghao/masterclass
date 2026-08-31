# 🔥Easy Solutions in Java 📝, Python 🐍, JavaScript 🖥️and C++ 🧐Look at once 💻

**Author:** Vikas-Pathak-123
**Votes:** 611
**Link:** [https://leetcode.com/problems/valid-anagram/solutions/3261552/](https://leetcode.com/problems/valid-anagram/solutions/3261552/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve the anagram problem, we can count the frequency of each letter in both strings and compare them. If the frequencies of all letters are the same in both strings, then the two strings are anagrams of each other.

# Approach
We can use an integer array `freq` of length 26 to keep track of the frequency of each letter in the two strings. We first check if the length of both strings is the same. If not, we return false because anagrams must have the same length. We loop through each character in both strings and increment the frequency of the corresponding letter in `s` and decrement the frequency of the corresponding letter in `t`.
Finally, we loop through the `freq` array and check if all requencies are zero. If not, we return false. If all frequencies are zero, we return true because both strings are anagrams of each other.

# Complexity
- Time complexity: $$O(n)$$, where n is the length of the strings. We need to loop through each character in both strings once to count the frequency of each letter, and then loop through the `freq` array once to check if all frequencies are zero.

- Space complexity: $$O(1)$$, because the size of the `freq` array is fixed at 26, which is a constant value. Therefore, the space required to store the `freq` array does not depend on the length of the strings.



<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```
# Code
``` java []
class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        
        int[] freq = new int[26];
        for (int i = 0; i < s.length(); i++) {
            freq[s.charAt(i) - 'a']++;
            freq[t.charAt(i) - 'a']--;
        }
        
        for (int i = 0; i < freq.length; i++) {
            if (freq[i] != 0) {
                return false;
            }
        }
        
        return true;
    }
}

```
``` Python []
class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if len(s) != len(t):
            return False
        
        freq = [0] * 26
        for i in range(len(s)):
            freq[ord(s[i]) - ord('a')] += 1
            freq[ord(t[i]) - ord('a')] -= 1
        
        for i in range(len(freq)):
            if freq[i] != 0:
                return False
        
        return True

```
``` C++ []
class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) {
            return false;
        }
        
        vector<int> freq(26, 0);
        for (int i = 0; i < s.length(); i++) {
            freq[s[i] - 'a']++;
            freq[t[i] - 'a']--;
        }
        
        for (int i = 0; i < freq.size(); i++) {
            if (freq[i] != 0) {
                return false;
            }
        }
        
        return true;
    }
};
```
``` JavaScript []
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    var freq = new Array(26).fill(0);
    for (var i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    
    for (var i = 0; i < freq.length; i++) {
        if (freq[i] !== 0) {
            return false;
        }
    }
    
    return true;
};

```

# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```