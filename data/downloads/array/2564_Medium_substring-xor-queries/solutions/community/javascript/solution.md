# Javascript Easy solution 5 lines code

**Author:** sunnyr29811
**Votes:** 3
**Link:** [https://leetcode.com/problems/substring-xor-queries/solutions/3180686/](https://leetcode.com/problems/substring-xor-queries/solutions/3180686/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[][]}
 */
1. var substringXorQueries = function(s, queries) {
    
    var ans=[];
    for(let i=0;i<queries.length;i++)
        {
            var x=queries[i][0]^queries[i][1];
            var y=x.toString(2);
            var j=s.indexOf(y);
            if(j==-1)ans.push([j,j]);
            else ans.push([j,j+y.length-1]);
        }
    return ans;
};
```