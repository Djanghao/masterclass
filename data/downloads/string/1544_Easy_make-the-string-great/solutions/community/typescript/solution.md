# Best Approach💯

**Author:** adwxith
**Votes:** 6
**Link:** [https://leetcode.com/problems/make-the-string-great/solutions/4977002/](https://leetcode.com/problems/make-the-string-great/solutions/4977002/)

---

# Please consider upvoting if the solution  was useful\uD83E\uDEE1

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
function makeGood(s: string): string {
    
    const stack=[]
    for(let i=0;i<s.length;i++){
        const prev= stack[stack.length-1]
        const cur=s[i]
        
        if(prev && prev!==cur && prev.toUpperCase()==cur.toUpperCase()){
            stack.pop()
            
        }else{
            stack.push(cur)
        }
    }

    return stack.join('')
};
```