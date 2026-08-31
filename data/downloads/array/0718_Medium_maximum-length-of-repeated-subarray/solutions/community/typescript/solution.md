# Variation of LCS , Tabulation O(m*n)

**Author:** aayush21
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/4055199/](https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/4055199/)

---

Take a fresh example of "abca" and "abxa"
```
    Inintialization
    "" a b c a
""  0  0 0 0 0
a   0
b   0
x   0
a   0


    "" a b c a
""  0  0 0 0 0
a   0  1 0 0 0
b   0  0 2 0 0 
x   0  0 0 0 0
a   0  0 0 0 1
```

Notice: If you wanna find out the answer for "a" "abc" you will find maximum from dp[0][0] to dp[1][3]. This is basically a variation of LCS. where you search for a substring if letters matches you add 1 to previously computed answer else you reset answer as zero

**TABULATION O(m*n)** 
```
function findLength(nums1: number[], nums2: number[]): number { 
    let m = nums1.length; 
    let n =  nums2.length
    
    //Create a new dp matrix
    const dp = new Array(m+1); 
    for(let i = 0; i < m+1; i++) 
        dp[i] = new Array(n+1)

    //we all know that if length of either string is zero LCSS is zero
    for(let i = 0; i < m+1; i++) { 
        for(let j = 0; j < n+1; j++) { 
            if(i === 0 || j === 0) 
              dp[i][j] = 0
            else 
              dp[i][j] = -1
        }
    } 

    for(let i = 1; i < m+1; i++) { 
        for(let j = 1; j < n+1; j++) { 
            //new substring found we will add 1 to previosuly computed answer 
            //on b we are then for "abca" "abxa" 
            //answer for "ab" "ab" would be answer at "a""a" + 1 
            if(nums1[i-1] === nums2[j-1])
                dp[i][j] = 1 + dp[i-1][j-1]
            //at c we are then for "abca""abxa" 
            //we need to start a new substring because substrings are continous
            else 
                dp[i][j] = 0  
        }
    } 

    //calculate the max substring length 
    let ans = 0; 
    for(let i = 0; i < m+1; i++) { 
        for(let j = 0; j < n+1; j++) 
           ans = Math.max(dp[i][j], ans)
    } 

    return ans
};
```