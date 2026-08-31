# Javascript DFS solution

**Author:** 6117392
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-squareful-arrays/solutions/581900/](https://leetcode.com/problems/number-of-squareful-arrays/solutions/581900/)

---

```
const isSquarable = (a,b) => {
    const root = parseInt(Math.sqrt(a+b));
    return root*root === a+b;
}

const numSquarefulPerms = (A) => {
    let resultsCount = 0;
    let res = [];
    let used = {};
    
    A.sort((a,b) => a-b);
    const traverse = () => {
        if (res.length === A.length) {
            return resultsCount++;
        }
		
        let lastPushed;
        for (let i = 0; i<A.length; i++) {
            if (used[i] ||
                A[i] === lastPushed ||
                (res.length && !isSquarable(A[i], res[res.length-1]))) {
                continue;
            }
  
            used[i] = true;
            lastPushed = A[i];
            res.push(A[i]);
            traverse();
            res.pop();
            used[i] = false;
        }
    }
    traverse(0);

    return resultsCount;
};
```