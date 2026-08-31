# C++ || Recursive || Iterative || Self Explanatory

**Author:** rajat_gupta_
**Votes:** 8
**Link:** [https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/1175583/](https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/1175583/)

---

**1.**
```
class Solution {
public:
    int sumBase(int n, int k) {
        int sum=0;
        while(n!=0) sum+=n%k,n=n/k;
        return sum;
    }
};
```
**2.**
```
class Solution {
public:
    int sumBase(int n, int k) {
        if(n==0) return 0;
        return n%k+sumBase(n/k,k);
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
