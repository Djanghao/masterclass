# ✅ Beats 100% - Explained with [ Video ] - Straight Forward - Simplest Approach

**Author:** millenium103
**Votes:** 37
**Link:** [https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4266545/](https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4266545/)

---

![Screenshot 2023-11-09 060033.png](./images/0.png)

# YouTube Video Explanation:

[https://youtu.be/dhKH_yMOn-o](https://youtu.be/dhKH_yMOn-o)

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Current Subscribers: 198*
*Subscribe Goal: 250 Subscribers*

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is about counting the number of homogenous substrings within the given string `s`. A substring is homogenous if all its characters are the same. To count these homogenous substrings efficiently, we can iterate through the string, and when we encounter a character different from the previous one, we calculate and add the number of homogenous substrings up to that point. Finally, we return the result modulo 10^9 + 7 to handle large numbers.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a variable `res` to store the result.
2. Convert the input string `s` into a character array for easy access.
3. Initialize a variable `start` to 0, which marks the start of a potential homogenous substring.
4. Iterate through the character array.
5. When a different character is encountered (`c[i] != c[start]`), calculate the number of homogenous substrings and add it to `res`. We do this by subtracting the start index from the current index (`i - start`) and adding the count to `res`. Then, update the `start` to the current index.
6. Continue this process until you reach the end of the string.
7. Calculate and add the number of homogenous substrings for the last homogenous substring.
8. Return the result `res` modulo 10^9 + 7.

# Complexity
- Time Complexity: O(n), where n is the length of the input string `s`. We iterate through the string once.
- Space Complexity: O(1), as we use a constant amount of extra space for variables.
- The result is returned modulo 10^9 + 7 to handle large numbers.

This code efficiently counts homogenous substrings within the string `s`.

# Code
### Java
```
class Solution {
    public int countHomogenous(String s) {
        long res  = 0;
        char[] c = s.toCharArray();
        int start =0;
        for(int i=0;i<c.length;i++)
        {
            if(c[i]!=c[start])
            {
                int appear = i-start;
                while(appear>0)
                {
                    res+=appear;
                    appear-=1;
                }
                start=i;
            }
        }

        int appear = c.length-start;
        while(appear>0)
        {
            res+=appear;
            appear-=1;
        }

        return (int)(res%(Math.pow(10,9)+7));
    }
}
```
### C++
```
class Solution {
public:
    int countHomogenous(string s) {
        long long res = 0;
        int start = 0;
        
        for (int i = 0; i < s.size(); i++) {
            if (s[i] != s[start]) {
                int appear = i - start;
                while (appear > 0) {
                    res += appear;
                    appear--;
                }
                start = i;
            }
        }

        int appear = s.size() - start;
        while (appear > 0) {
            res += appear;
            appear--;
        }

        return static_cast<int>(res % (1000000007)); // Modulo 10^9+7
    }
};

```
### Python
```
class Solution(object):
    def countHomogenous(self, s):
        res = 0
        start = 0
        
        for i in range(len(s)):
            if s[i] != s[start]:
                appear = i - start
                while appear > 0:
                    res += appear
                    appear -= 1
                start = i
        
        appear = len(s) - start
        while appear > 0:
            res += appear
            appear -= 1
        
        return int(res % (10**9 + 7))
```
### JavaScript
```
var countHomogenous = function(s) {
    let res = 0;
    let start = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[start]) {
            let appear = i - start;
            while (appear > 0) {
                res += appear;
                appear -= 1;
            }
            start = i;
        }
    }

    let appear = s.length - start;
    while (appear > 0) {
        res += appear;
        appear -= 1;
    }

    return res % (Math.pow(10, 9) + 7);
};
```
---
![upvote1.jpeg](./images/1.jpeg)
