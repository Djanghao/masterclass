# Easy Video Solution 🔥 || How to 🤔 in Interview || Conditional Statements

**Author:** ayushnemmaniwar12
**Votes:** 21
**Link:** [https://leetcode.com/problems/valid-word/solutions/5113672/](https://leetcode.com/problems/valid-word/solutions/5113672/)

---

***If you like the solution Please Upvote and subscribe to my youtube channel***

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dry Run few examples and note your observations clearly



***Easy Video Explanation***

https://youtu.be/kGZC8Ee62kc




# Code

```C++ []
class Solution {
public:
    bool isValid(string s) {
        int n = s.size();
        if(n<3)
            return false;
        int v = 0, c =0 ;
        for(auto i:s) {
            if(isalpha(i)) {
                if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u')
                    v++;
                else if(i=='A' || i=='E' || i=='I' || i=='O' || i=='U')
                    v++;
                else
                    c++;
            }
            if(! (isalpha(i) || isdigit(i)))
                return 0;
        }
        if(v>=1 && c>=1)
            return 1;
        return 0;
    }
};
```
```python []
class Solution:
    def isValid(self, s):
        if len(s) < 3:
            return False
        
        vowels = 0
        consonants = 0
        
        for c in s:
            if c.isalpha():
                if c.lower() in 'aeiou':
                    vowels += 1
                else:
                    consonants += 1
            elif not c.isdigit():
                return False  # Invalid character if not a letter or digit
        
        return vowels >= 1 and consonants >= 1

```
```Java []
public class Solution {
    public boolean isValid(String s) {
        int n = s.length();
        if (n < 3) {
            return false;
        }

        int vowels = 0;
        int consonants = 0;

        for (char c : s.toCharArray()) {
            if (Character.isLetter(c)) {
                // Check for vowels (case-insensitive)
                if ("aeiouAEIOU".indexOf(c) != -1) {
                    vowels++;
                } else {
                    consonants++;
                }
            } else if (!Character.isDigit(c)) {
                return false; // Invalid character if not a letter or digit
            }
        }

        return vowels >= 1 && consonants >= 1;
    }
}

```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00