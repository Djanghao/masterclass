# [JavaScript] Simple Solution, Time O(N) and Space O(1)

**Author:** ysongh
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/533595/](https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/533595/)

---

Time Complexity: O(N)
Space Complexity: O(1)

```
var numTimesAllBlue = function(light) {
    let total = 0;
    let target = 0;
    let moments = 0;
    
    for(let i = 0; i < light.length; i++){
        total += light[i];      // add up all the bulbs number
        target += i + 1;        // add up the index of each array plus 1
        
        if(total === target) moments++;
    }    
    
    return moments;
};
```