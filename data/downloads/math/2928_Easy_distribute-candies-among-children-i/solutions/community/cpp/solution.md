# Brute-force || Simple check for all combination possible

**Author:** kreakEmp
**Votes:** 11
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-i/solutions/4276638/](https://leetcode.com/problems/distribute-candies-among-children-i/solutions/4276638/)

---

More optimised solution to this problem : https://leetcode.com/problems/distribute-candies-among-children-ii/solutions/4277051/explained-in-detail-simple-and-easy-to-understand-solution/

# C++
```
int distributeCandies(int n, int limit) {
    int res = 0;
    for(int i = 0; i <= limit; ++i){
        for(int j = 0; j <= limit; ++j){
            for(int k = 0; k <= limit; ++k){
                if(i + j + k == n) { res++; }
            }
        }
    }
    return res;
}
```


# Java
```
public int distributeCandies(int n, int limit) {
    int res = 0;
    for(int i = 0; i <= limit; ++i){
        for(int j = 0; j <= limit; ++j){
            for(int k = 0; k <= limit; ++k){
                if(i + j + k == n) { res++; }
            }
        }
    }
    return res;
}
```

---


<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---