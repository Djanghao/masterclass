# TypeScript DP Solution (Longest Common Subsequence)

**Author:** macolby14
**Votes:** 2
**Link:** [https://leetcode.com/problems/delete-operation-for-two-strings/solutions/1196574/](https://leetcode.com/problems/delete-operation-for-two-strings/solutions/1196574/)

---

Runtime O(m * n) where m is length of word1 and n is length of word2
Space O(m * n)

```
function minDistance(word1: string, word2: string): number {
    //base condition of empty string is 0
    //compare every letter in two strings
    
    const l1=word1.length;
    const l2=word2.length;
    
    const dp: number[][] = new Array(l1+1).fill(0).map(()=>new Array(l2+1).fill(0));
    
    for(let i=1;i<=l1;i++){
        for(let j=1;j<=l2;j++){
            if(word1[i-1]===word2[j-1]){
                //if match, set to previous match for letter at both words
                dp[i][j]=dp[i-1][j-1]+1;
            }
            else{
				// if no match, set to best match of removing a letter from either word
                dp[i][j]=Math.max(dp[i][j-1],dp[i-1][j]);
            }
            
        }
    }

    const maxSubLen = dp[l1][l2];
    return l1+l2-2*maxSubLen;
};
```