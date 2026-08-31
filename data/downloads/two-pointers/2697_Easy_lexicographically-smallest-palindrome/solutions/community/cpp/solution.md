# Take min || Very simple and easy to understand solution

**Author:** kreakEmp
**Votes:** 13
**Link:** [https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/3546828/](https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/3546828/)

---

<b> Up vote if this solution helps</b>
# Approach
Take two iterator one from front and one from back.
Then take the min of s(front) & s(back) and set both s(front) and s(back) to the min value.
 
# Code
```
    string makeSmallestPalindrome(string s) {
        int front = 0, back = s.size()-1;
        while(front <= s.size()/2){
            s[front] = min(s[front], s[back]);
            s[back] = s[front];
            front++; back--;
        }
        return s;
    }
```

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted