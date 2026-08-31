# JavaScript Brute-Force all the combinations

**Author:** 0618
**Votes:** 3
**Link:** [https://leetcode.com/problems/campus-bikes-ii/solutions/303678/](https://leetcode.com/problems/campus-bikes-ii/solutions/303678/)

---

```
var assignBikes = function(workers, bikes) {
    let min = Infinity;
    let used = {};
    let combine = (dis = 0, idx = 0) => {
        if(idx === workers.length){

            min = Math.min(min, dis);
            return;
        }

        for(let i=0; i<bikes.length; i++){
            if(!used[i]){
                used[i] = true;
                let newdis = Math.abs(bikes[i][0] - workers[idx][0]) + Math.abs(bikes[i][1] - workers[idx][1])
            
                combine(dis + newdis, idx+1);
                used[i] = false;
            }
            
        }

    }
    combine();
    return min;
};
```