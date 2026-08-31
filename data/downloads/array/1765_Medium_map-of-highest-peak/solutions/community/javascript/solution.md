# JS solution 100% time 100% space

**Author:** soley
**Votes:** 2
**Link:** [https://leetcode.com/problems/map-of-highest-peak/solutions/1095891/](https://leetcode.com/problems/map-of-highest-peak/solutions/1095891/)

---

```
var highestPeak = function(w) {
    const m = w.length
    const n = w[0].length
    let q = []
    for(let mi=0; mi<m; mi++){
        for(let ni=0; ni<n; ni++){
            if(w[mi][ni]) q.push([mi, ni])
        }
    }
    
    const pos = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    function getCells([mi, ni]){
        return pos.map(([ud,lr])=>[mi+ud, ni+lr])
            .filter(([mj, nj])=>(mj>=0 && mj<m && nj>=0 && nj<n) && !w[mj][nj])
    }
    
    const h = Array(m).fill(0).map(()=>Array(n).fill(0))
    
    let i = 0 // reduce time for q.shift
    while(i<q.length){
        const cell = q[i++]
        const cells = getCells(cell)
        const newHeight = h[cell[0]][cell[1]]+1 // reduce time for array lookup
        cells
            .filter(([mj, nj])=>!h[mj][nj])
            .forEach(c=>{
                h[c[0]][c[1]]=newHeight
                q.push(c)
        })
    }
    
    return h
    
};
```