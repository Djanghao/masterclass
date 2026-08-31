# JavaScript Two Pointer Approach O(N log N + Q*(N + E))

**Author:** control_the_narrative
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-pairs-of-nodes/solutions/1097172/](https://leetcode.com/problems/count-pairs-of-nodes/solutions/1097172/)

---

Time Complexity: `O(N log N + Q*(N + E))`
`N`: length of `n`
`Q`: length of `queries`
`E`: length of `edges`
```javascript
var countPairs = function(n, edges, queries) {
    const degree = Array(n+1).fill(0)
    const edgesMap = new Map()
    const countMemo = new Map()
    const answer = []
    
    for(let [u, v] of edges) {
        degree[u]++
        degree[v]++
        const key = `${Math.min(u, v)}-${Math.max(u, v)}`;
        edgesMap.set(key, (edgesMap.get(key) || 0) + 1);
    }
    const sortedDegree = [...degree.slice(1)].sort((a, b) => a - b);  
    
    for(let num of queries) {
        let cnt;
        if(countMemo.has(num)) cnt = countMemo.get(num)
        else {
            cnt = calculateCount(num)
            countMemo.set(num, cnt);
        }
        answer.push(cnt)
    }
    
    function calculateCount(num) {
        let low = 0, high = sortedDegree.length-1, cnt = 0;
        
        while(low < high) {
            const sum  = sortedDegree[low] + sortedDegree[high];
            
            if(sum > num) {
                cnt += (high - low);
                high--;
            } else low++;
        }
        
        for(let [key, val] of edgesMap) {
            const [u, v] = key.split('-').map(Number);
            
            if(degree[u] + degree[v] > num) {
                const newSum = degree[u] + degree[v] - val
                if(newSum <= num) cnt--;
            }
        }
        return cnt;
    }
    return answer;
};
```