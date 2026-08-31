# JavaScript Solution - Sweep

**Author:** Deadication
**Votes:** 2
**Link:** [https://leetcode.com/problems/brightest-position-on-street/solutions/2007121/](https://leetcode.com/problems/brightest-position-on-street/solutions/2007121/)

---

```
var brightestPosition = function(lights) {
    const n = lights.length;
    const map = new Map();
    
    for (const [position, range] of lights) {
        const starting = position - range;
        const ending = position + range;
        
        // The starting and ending properties indicates the # of lights that are starting and ending at that position
        if (!map.has(starting)) map.set(starting, { starting: 0, ending: 0 });
        map.get(starting).starting++;
        
        if (!map.has(ending)) map.set(ending, { starting: 0, ending: 0 });
        map.get(ending).ending++;
    }
    
    const sorted = [...map].sort((a, b) => a[0] - b[0]);
    
    let maxLights = 0;
    let minIdx = -1e8;
    let totLights = 0;
    
    for (let i = 0; i < sorted.length; ++i) {
        const { starting, ending } = sorted[i][1];
        
        totLights += starting;
        
        if (totLights > maxLights) {
            maxLights = totLights;
            minIdx = sorted[i][0];
        }
        
        totLights -= ending;
    }
    
    return minIdx;
};
```