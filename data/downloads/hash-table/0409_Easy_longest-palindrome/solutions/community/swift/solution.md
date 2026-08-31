# 2 Easy Interview Approaches ✅ || using HashMap🔥 || without Hasmap💯 || All Language Solution💯

**Author:** naman_malik
**Votes:** 5
**Link:** [https://leetcode.com/problems/longest-palindrome/solutions/5255321/](https://leetcode.com/problems/longest-palindrome/solutions/5255321/)

---

![run time 4 june.png](./images/0.png)

# Approach - 1
<!-- Describe your approach to solving the problem. -->
Using map - to store the frequency of the characters

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
    Map store atmost 52 unique char 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int longestPalindrome(string s) {
        map<char,int>m;
        int cnt=0,one=0;
        for(int i=0; i<s.size(); i++)
        {
            m[s[i]]++;    //Stroe the frequency of characters
        }
        for(auto i:m)
        {
            if(i.second>1)
            cnt+=i.second/2*(2);  //Adding even frequency

            if(i.second%2)  //Adding odd frequency if exist
            one=1;
        }
        return cnt+one;
    }
};
```
```java []
public class Solution {
    public int longestPalindrome(String s) {
        Map<Character, Integer> m = new HashMap<>();
        int cnt = 0;
        int one = 0;

        // Store the frequency of characters
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            m.put(c, m.getOrDefault(c, 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : m.entrySet()) {
            int freq = entry.getValue();
            if (freq > 1)                 // Adding even frequency
                cnt += (freq / 2) * 2;
            
            if (freq % 2 == 1)                 // Adding odd frequency if it exists
                one = 1;    
        }
        
        return cnt + one;
    }
}
```
```Python []
class Solution:
    def longestPalindrome(self, s):
        m = {}
        cnt = 0
        one = 0

        # Store the frequency of characters
        for ch in s:
            if ch in m:
                m[ch] += 1
            else:
                m[ch] = 1

        for freq in m.values():
            if freq > 1:
                cnt += (freq // 2) * 2    # Adding even frequency

            if freq % 2 == 1:       # Adding odd frequency if it exists
                one = 1

        return cnt + one

```
```Python3 []
class Solution:
    def longestPalindrome(self, s: str) -> int:
        from collections import Counter

        m = Counter(s)
        cnt = 0
        one = 0

        for freq in m.values():
            if freq > 1:
                # Adding even frequency
                cnt += (freq // 2) * 2

            # Adding odd frequency if it exists
            if freq % 2 == 1:
                one = 1

        return cnt + one

```


# Approach - 2
<!-- Describe your approach to solving the problem. -->
Using BitMasking

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
    Map store atmost 52 unique char 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Python []
import collections
class Solution:
    def longestPalindrome(self, s):
        bits = 0

        result = 0
        for ch in s:
            bit = 1 << (ord(ch) - 65)
            if bits & bit:
                bits ^= bit
                result += 2
            else:
                bits |= bit

        if bits:
            result += 1

        return result

```

```C++ []
class Solution {
public:
    int longestPalindrome(const std::string &s) {
        std::vector<int> count(52, 0);  // 26 for lowercase + 26 for uppercase
        int result = 0;

        for (char ch : s) {
            if (ch >= 'a' && ch <= 'z') {
                count[ch - 'a']++;
            } else if (ch >= 'A' && ch <= 'Z') {
                count[ch - 'A' + 26]++;
            }
        }

        bool oddFound = false;
        for (int cnt : count) {
            if (cnt % 2 == 0) {
                result += cnt;
            } else {
                result += cnt - 1;
                oddFound = true;
            }
        }
        if (oddFound) {
            result += 1;
        }

        return result;
    }
};
```
```java []
public class Solution {
    public int longestPalindrome(String s) {
        long bits = 0;  // Use 64-bit long to handle both uppercase and lowercase letters
        int result = 0;

        for (char ch : s.toCharArray()) {
            long bit;
            if (ch >= 'a' && ch <= 'z') {
                bit = 1L << (ch - 'a');  // Lowercase letters
            } else if (ch >= 'A' && ch <= 'Z') {
                bit = 1L << (ch - 'A' + 26);  // Uppercase letters, offset by 26
            } else {
                continue;  // Ignore other characters
            }

            if ((bits & bit) != 0) {
                bits ^= bit;
                result += 2;
            } else {
                bits |= bit;
            }
        }

        if (bits != 0) {
            result += 1;
        }

        return result;
    }
}

```
![upvote cat3.png](./images/1.png)

