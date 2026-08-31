# JS | map | O(N^2)

**Author:** pathania
**Votes:** 0
**Link:** [https://leetcode.com/problems/button-with-longest-push-time/solutions/6150348/](https://leetcode.com/problems/button-with-longest-push-time/solutions/6150348/)

---

```
 /**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function(events) {
 var max = events[0][1];
    var mp = new Map();
    mp.set(events[0][0],events[0][1]);
    for(let i=1;i<events.length;i++){
        if(mp.has(events[i][0])){
            var max = mp.get(events[i][0]);
            mp.set(events[i][0],Math.max(max,events[i][1]-events[i-1][1]));
        }else{
            mp.set(events[i][0],events[i][1]-events[i-1][1]);
        }
       
    }
    var mpp = Array.from(mp).sort((a,b)=>a[1]-b[1]);
    var startindex = mpp[mpp.length-1][0];
    var longesttime = mpp[mpp.length-1][1];
    for(let k=mpp.length-1;k>0;k--){
        if(longesttime<mpp[k-1][1]){
            longesttime = mpp[k-1][1];
            startindex = mpp[k-1][0];
        }else if(longesttime==mpp[k-1][1] && mpp[k-1][0]<startindex){
            longesttime = mpp[k-1][1];
            startindex = mpp[k-1][0];
        }
    }
    return startindex;
};
```