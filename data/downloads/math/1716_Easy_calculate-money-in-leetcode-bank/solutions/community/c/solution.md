# [faster than 100.00%][commented][JAVA][CPP][C++]

**Author:** rajat_gupta_
**Votes:** 70
**Link:** [https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/1009171/](https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/1009171/)

---

**[CPP]**
```
class Solution {
public:
    int totalMoney(int n) {
        int m=n/7;  //(no.of full weeks)
        // first week  1 2 3 4 5 6 7 (sum is 28 i.e. 7*(i+3) if i=1)
        // second week  2 3 4 5 6 7 8 (sum is 35 i.e. 7*(i+3) if i=2)
        //.... so on
        int res=0; //for result
        //calculating full weeks
        for(int i=1;i<=m;i++){
            res+=7*(i+3);
        }
        //calculating left days
        for(int i=7*m;i<n;i++){
            res+=++m;
        }
        return res;
    }
};
```
**[JAVA]**
```
class Solution {
    public int totalMoney(int n) {
        int m=n/7;  //(no.of full weeks)
        // first week  1 2 3 4 5 6 7 (sum is 28 i.e. 7*(i+3) if i=1)
        // second week  2 3 4 5 6 7 8 (sum is 35 i.e. 7*(i+3) if i=2)
        //.... so on
        int res=0; //for result
        //calculating full weeks
        for(int i=1;i<=m;i++){
            res+=7*(i+3);
        }
        //calculating left days
        for(int i=7*m;i<n;i++){
            res+=++m;
        }
        return res;
    }
}
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
