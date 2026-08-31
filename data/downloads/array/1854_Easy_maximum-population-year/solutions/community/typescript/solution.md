# Beats 100% of solutions

**Author:** camfeghali
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-population-year/solutions/5100171/](https://leetcode.com/problems/maximum-population-year/solutions/5100171/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maximumPopulation(logs: number[][]): number {
    
    let births = Array.from({length: 100}).fill(0);
    let deaths = Array.from({length: 100}).fill(0);


    for(let i=0; i < logs.length; i++) {
        births[logs[i][0] - 1950] = births[logs[i][0] - 1950] as number + 1;
    }
    for(let i=0; i < logs.length; i++) {
        deaths[logs[i][1] - 1950] = deaths[logs[i][1] - 1950] as number + 1;
    }
    
    let maxAlive = 0;
    let runningAlive = 0;
    let earliest = 2050;

    for(let i=0; i < births.length; i++) {
        let diff = births[i] as number - (deaths[i] as number);
        runningAlive = runningAlive + diff;
        
        if(runningAlive > maxAlive) {
            maxAlive = runningAlive;
            earliest = Math.min(1950 + i);
        }
    }

    return earliest
};
```