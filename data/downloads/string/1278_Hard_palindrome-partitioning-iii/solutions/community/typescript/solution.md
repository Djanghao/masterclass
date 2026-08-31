# Typescript/Javascript : Recursive and Memoization with Time Complexity and approach

**Author:** amitbiswas1992
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iii/solutions/2796096/](https://leetcode.com/problems/palindrome-partitioning-iii/solutions/2796096/)

---

# Intuition
For each index of string s and diff value range of [0..k], we dont need to recompute. So here we can use memoization.

# Approach
DP : Recursion + Memoization

# Complexity
- Time complexity:
 $$O((n^2) * k)$$

- Space complexity:
$$O(n*k)$$

# Code
```
function palindromePartition(s: string, k: number): number {

    let dp: number[][] = Array(s.length).fill(-1).map( x => Array(k+1).fill(-1))

    return dfs(s,0,s.length-1,k,dp)
};

function dfs(s: string,index: number,end: number,count: number,dp: number[][]): number{

    if(index==end+1){
        if(count==0) return 0
        else return Infinity
    }

    if(index>end+1 || count < 0) return Infinity
       
    if(dp[index][count]!=-1) return dp[index][count]


    let min = Infinity

    for(let i=index;i<=end;i++){
        
        let length = palindromeDiff(s,index,i) + dfs(s,i+1,end,count-1,dp)
        min = Math.min(min,length)


    }


    return dp[index][count]=min

}

function palindromeDiff(s: string,left: number,right: number): number{
    let count = 0
    while(left<right){
        if(s[left]!=s[right]){
            count += 1

        }

        left++
        right--
    }

    return count
}
```