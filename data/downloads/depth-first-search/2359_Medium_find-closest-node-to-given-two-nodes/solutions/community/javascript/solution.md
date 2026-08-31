# Javascript very very easy to understand solution with video explanation!

**Author:** rlawnsqja850
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/3095856/](https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/3095856/)

---

If you like my video and explanation, Subscribe please!!! Thank you!!

https://youtu.be/LOSK0BBRifo

# Code
```
/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
function closestMeetingNode (edges, node1, node2) {
    let map1 = {}
    let map2 = {}
    let count = 0;

    while(map1[node1] == undefined && node1 != -1){
        map1[node1] = count;
        count++
        node1 = edges[node1];
    }
    count = 0;
    while(map2[node2] == undefined && node2 != -1){
        map2[node2] = count;
        count++
        node2 = edges[node2]
    }
    let max = Infinity;
    let res = -1;

    for(let i =0; i<edges.length;i++){
        if(map1[i] == undefined || map2[i] == undefined) continue;
        let localMax = Math.max(map1[i],map2[i])
        if(localMax<max){
            max = localMax;
            res = i;
        }
    }

    return res;
}


```