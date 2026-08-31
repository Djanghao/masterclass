# 📍 MICROSOFT 😱 SDE-1 Interview Optimized Soln.

**Author:** AdityaBhate
**Votes:** 16
**Link:** [https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/2343590/](https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/2343590/)

---

# **Approach-1 : Using Math logic O(logn)** 
```
class Solution {                //O(logn)
public:
    bool hasAlternatingBits(int n) {
        long x=1;                     // 1 = 1
        while(x<=n){                  // 2 = 10
            if(x==n)                  // 5 = 101
                return true;          //10 = 1010
            else if(x%2==0)           //21 = 10101
                x=2*x+1;              //42 = 101010
            else                      //85 = 1010101
                x=2*x;
        }
        return false;
    }
};
```
# **Approach-2 : Using Bit-Manipulation O(N)**
```
class Solution {
public:
    bool hasAlternatingBits(int n) {
        int flag1,flag2;
        while(n){
            flag1=n&1;
            if(flag1==flag2)
                return 0;
            n=n>>1;
            flag2=flag1;
        }
        return 1;
    }
};
```
# **Please Upvote if it helps !  \uD83D\uDE4F**