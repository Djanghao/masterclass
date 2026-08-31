# Javascript Best/Simplest Solution

**Author:** NarenderTyagi
**Votes:** 4
**Link:** [https://leetcode.com/problems/race-car/solutions/990897/](https://leetcode.com/problems/race-car/solutions/990897/)

---

```
var racecar = function(t) {
    let arr = [{m: 0, p: 0, v: 1}];
	let best = Infinity;
	while(arr.length){
        let {m, p, v} = arr.pop();
        if (p == t) best = Math.min(best, m);
		if( m >= best) continue;
        arr.push({m: m+1, p: p+v, v: 2*v});
        if ((p+v>t && v>0) || (p+v<t && v<0)) arr.push({m: m+1, p, v: -1*v/Math.abs(v)});
    }  
	return best;
};
```