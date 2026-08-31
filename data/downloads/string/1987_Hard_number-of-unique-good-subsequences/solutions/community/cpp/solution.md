# ✅ C++ Simple DP Solution with comments | Easy to understand

**Author:** gaurav31200
**Votes:** 15
**Link:** [https://leetcode.com/problems/number-of-unique-good-subsequences/solutions/2280838/](https://leetcode.com/problems/number-of-unique-good-subsequences/solutions/2280838/)

---

**INTUTION** - Every leading 1 can generate 1 + prev binary strings either ending with 0 or 1.
Every 0 can generate prev binary strings ending with 0 and 1.

```
Let's take an example, 1101                              endWithOnes     endWithZeroes
index 0(1) -> only 1 can be generated.                         1               0
index 1(1) -> 1,11 can be generated.                           2               0
index 2(0) -> 1,11 and 10,110 can be generated                 2               2
index 3(1) -> 1,11,111,101,1101 and 10,110                     5               2
```
**Ans=** (endWithOnes)**5** + (endWithZeroes)**2** + (for 0 itself)**1** = **8**





**C++ Code:**
```
int numberOfUniqueGoodSubsequences(string binary) {
        bool hasZero = false;
        int endWithZeroes=0,endWithOnes=0,mod=1e9+7;
        
        for(auto b:binary){
            if(b=='1'){
                endWithOnes = (endWithOnes + endWithZeroes + 1)%mod;
            }else{
                hasZero=true;
                endWithZeroes = (endWithOnes + endWithZeroes)%mod;
            }
        }
        
        return (endWithOnes + endWithZeroes + hasZero)%mod;
    }
```
**Please Upvote if you like the explaination : )**