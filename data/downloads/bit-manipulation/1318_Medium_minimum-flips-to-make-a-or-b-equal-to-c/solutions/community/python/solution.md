# ✅ C++ ✅ Java ✅ Python Solution 🔥Beats 100%🔥|| 0ms Run time ✅

**Author:** ayushkr01
**Votes:** 36
**Link:** [https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/3606667/](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/3606667/)

---

- Linkedin Profile (https://linkedin.com/in/ayush-kumar-a276a124a)
//-------------> \uD83D\uDC7B Pls Upvote if it is helpful for You \uD83D\uDC7B <-----------------//

# Complexity
- Space complexity: ---> O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# C++ Code
```class Solution {
public:
    int minFlips(int a, int b, int c) {
        int ans=0;
        while(a||b||c){
            int x1=a&1;
            int x2=b&1;
            int x3=c&1;
            if((x1|x2)!=x3){
                if(x1&x2)   ans+=2;
                else ans+=1;
            }
            a=a>>1;
            b=b>>1;
            c=c>>1;
        }
        return ans;
    }
};
```
# Python Code
```class Solution:
    def minFlips(self, a, b, c):
        ans = 0
        while a or b or c:
            x1 = a & 1
            x2 = b & 1
            x3 = c & 1
            if (x1 | x2) != x3:
                if x1 & x2:
                    ans += 2
                else:
                    ans += 1
            a = a >> 1
            b = b >> 1
            c = c >> 1
        return ans

```
# Java Code 
```
class Solution {
    public int minFlips(int a, int b, int c) {
        int ans = 0;
        while (a != 0 || b != 0 || c != 0) {
            int x1 = a & 1;
            int x2 = b & 1;
            int x3 = c & 1;
            if ((x1 | x2) != x3) {
                if ((x1 & x2) == 1)
                    ans += 2;
                else
                    ans += 1;
            }
            a = a >> 1;
            b = b >> 1;
            c = c >> 1;
        }
        return ans;
    }
}

```
\uD83D\uDC7B IF YOU LIKE THE SOLUTION THEN PLEASE UPVOTE MY SOLUTION BECAUSE IT GIVES ME MOTIVATION TO REGULARLY POST THE SOLUTION\uD83D\uDC7B*

![image.png](./images/0.png)