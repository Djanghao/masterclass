# [Javascript] Interval DP

**Author:** George_Chrysochoou
**Votes:** 3
**Link:** [https://leetcode.com/problems/the-score-of-students-solving-math-expression/solutions/1488096/](https://leetcode.com/problems/the-score-of-students-solving-math-expression/solutions/1488096/)

---

**Intuition**
The answer for the interval [i,j] can be calculated based on an operarator at some position k where i<k<j, and its value is 
value(i,k-1) operand[k] value(k+1,j). We are essentially taking the left and right answers, and combining them. However there are multiple potential answers for an interval [i,j], therefore we need to consider every possible combination between the 2 halves. 

**Code**
```
var scoreOfStudents = function(s, answers) {
    let correct=s.split('+').reduce((a,c)=>a+c.split('*').reduce((b,d)=>b*d,1),0),
        n=s.length,dp=[...Array(n)].map(d=>[...Array(n)])
    let dfs=(i=0,j=n-1)=>{
        if(dp[i][j]!==undefined)
            return dp[i][j]
        if(i===j)
            return dp[i][j]=[Number(s[i])]
        let ans=new Set()
        for(let k=i+1;k<=j-1;k+=2)
            for(let a1 of dfs(i,k-1))
                for(let a2 of dfs(k+1,j))
                    if(s[k]==='*')
                        ans.add(Number(a1)*Number(a2))
                    else
                        ans.add(Number(a1)+Number(a2))
        return dp[i][j]=Array.from(ans).filter(d=>d<=1000)
    }
    dfs()
    dp[0][n-1]=new Set(dp[0][n-1])
    return answers.reduce( (a,c)=> a+ (c===correct?5:(dp[0][n-1].has(c)?2:0)) ,0)
};
```