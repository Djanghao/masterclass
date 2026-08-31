# Typescript | Javascript, 92% memory less

**Author:** tohasan
**Votes:** 1
**Link:** [https://leetcode.com/problems/slowest-key/solutions/2733598/](https://leetcode.com/problems/slowest-key/solutions/2733598/)

---

```
function slowestKey(releaseTimes: number[], keysPressed: string): string {
    let maxKey = keysPressed[0];
    let maxDuration = releaseTimes[0];
    
    for (let i = 1; i < keysPressed.length; i++) {
        const key = keysPressed[i];
        const duration = releaseTimes[i] - releaseTimes[i - 1];
        
        if (maxDuration < duration || maxDuration === duration && maxKey < key) {
            maxDuration = duration;
            maxKey = key;
        }
    }
    
    return maxKey;
}
```

<img alt="submission" src="https://assets.leetcode.com/users/images/100e33b9-4d3b-4c8a-b104-56932b94ddec_1666474131.2110178.png" width="600px"/>
