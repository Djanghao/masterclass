# JavaScript | BFS | Easy to Understand

**Author:** pavelaleksin
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-genetic-mutation/solutions/2522450/](https://leetcode.com/problems/minimum-genetic-mutation/solutions/2522450/)

---

```
var minMutation = function(start, end, bank) {
    if (!bank.includes(end)) {
        return -1;
    }
    
    if (start === end) {
        return 0;
    }
    
    let queue = [[start, [start]]];
    let steps = 0;
    
    const getOneStepMutations = (current, visited) => {
        return bank.filter((mutation) => {
            if (visited.includes(mutation)) {
                return false;
            }
            
            let difference = 0;
            
            for (let i = 0; i < 8; i++) {
                if (current[i] !== mutation[i]) {
                    if (++difference > 1) {
                        return false;
                    }
                }
            }
            
            return difference === 1;
        });
    };
    
    while (queue.length > 0) {
        let next = [];
        
        for (const [current, visited] of queue) {
            const mutations = getOneStepMutations(current, visited);
            
            for (const mutation of mutations) {
                if (mutation === end) {
                    return steps + 1;
                }
                
                visited.push(mutation);
                next.push([mutation, visited]);
                visited.pop();
            }
        }
        
        queue = next;
        steps++;
    }
    
    return -1;
};
```