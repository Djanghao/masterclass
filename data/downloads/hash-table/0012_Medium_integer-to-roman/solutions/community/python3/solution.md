# ✔️ Python's Simple and Easy to Understand Solution | 99% Faster 🔥

**Author:** pniraj657
**Votes:** 298
**Link:** [https://leetcode.com/problems/integer-to-roman/solutions/2724200/](https://leetcode.com/problems/integer-to-roman/solutions/2724200/)

---

**\uD83D\uDD3C IF YOU FIND THIS POST HELPFUL PLEASE UPVOTE \uD83D\uDC4D**

Visit this blog to learn Python tips and techniques and to find a Leetcode solution with an explanation:  https://www.python-techs.com/

**Solution:**
```
class Solution:
    def intToRoman(self, num: int) -> str:
        # Creating Dictionary for Lookup
        num_map = {
            1: "I",
            5: "V",    4: "IV",
            10: "X",   9: "IX",
            50: "L",   40: "XL",
            100: "C",  90: "XC",
            500: "D",  400: "CD",
            1000: "M", 900: "CM",
        }
        
        # Result Variable
        r = ''
        
        
        for n in [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]:
            # If n in list then add the roman value to result variable
            while n <= num:
                r += num_map[n]
                num-=n
        return r
```
**Thank you for reading! \uD83D\uDE04 Comment if you have any questions or feedback.**