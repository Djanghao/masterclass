# Beginner Friendly solutions From Recursive memoization to iterative | JS | Easy | O(n)

**Author:** dollysingh
**Votes:** 11
**Link:** [https://leetcode.com/problems/solving-questions-with-brainpower/solutions/1696021/](https://leetcode.com/problems/solving-questions-with-brainpower/solutions/1696021/)

---

Take help from Diagram given here: https://leetcode.com/problems/solving-questions-with-brainpower/discuss/1694329/Recursion-greater-DP-or-fully-explained-with-amazing-visualization-or-C%2B%2B

**Approach 1: Recursive Memoization**

```
var mostPoints = function(questions) {
    let totalQuestions = questions.length;
    
    let map = new Map();
    
    const helper = (index) => {
        if(map.has(index))
            return map.get(index);
        
        if(index >= totalQuestions) {
            return 0;
        }  
        
        let solve = questions[index][0] + helper(index + questions[index][1] + 1);
        
        let skip = helper(index + 1);
        
        let res = Math.max(solve, skip);
        
        map.set(index, res);
        
        return res;
    }
    
    return helper(0);
	
```

**Approach 2: Iterative**

```

var mostPoints = function(questions) {
    let totalQuestions = questions.length;
	
	let dp = new Array(totalQuestions).fill(0);
    
    for(let i = totalQuestions - 1; i >= 0; i--) {
        let point = questions[i][0];
        let power = questions[i][1];
        
        let solve = point + (dp[i + power + 1] || 0);
        let skip = (dp[i + 1] || 0);
        
        dp[i] = Math.max(solve, skip);
    }
    
    return dp[0];
}
```