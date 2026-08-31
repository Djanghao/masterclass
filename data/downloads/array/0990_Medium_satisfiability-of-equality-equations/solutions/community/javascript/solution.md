# Javascript Union Find Solution with explanation O(n)

**Author:** 0618
**Votes:** 7
**Link:** [https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/266183/](https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/266183/)

---

We iterate the `equations` twice, the first time is to union the elements and build the map, so we only care about the "==". The Second time is to check if there's any confliction, so we only need to take care of "!=".

```js
var equationsPossible = function(equations) {
    let parent = new Map();
    const find = a => {
        parent.set(a, parent.get(a) || a);
        return parent.get(a) === a ? a : find(parent.get(a));
    }
    
    equations.forEach(([a,s,,b]) => {
        if(s === "="){
            find(a);
            find(b);
            parent.set(find(a), find(b));
        }
    })
    
    for(let [a,s,,b] of equations){
        if(s === "!"){
            if(find(a) === find(b)) return false;
        }
    }
    
    return true;
};
```