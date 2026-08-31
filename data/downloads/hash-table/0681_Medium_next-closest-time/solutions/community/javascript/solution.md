# JavaScript Solution

**Author:** Deadication
**Votes:** 5
**Link:** [https://leetcode.com/problems/next-closest-time/solutions/984936/](https://leetcode.com/problems/next-closest-time/solutions/984936/)

---

```
var nextClosestTime = function(time) {
    const nums = time.replace(/:/, "").split("").sort((a, b) => a - b);
    
	// For the unit digit of minutes
    for (let i = 0; i < 4; i++) {
        const char = nums[i];
        const prevMins = parseInt(time.substring(3));
        const newMins = parseInt(time.charAt(3) + char);
        
        if (newMins < 60 && newMins > prevMins){
           return time.substring(0, 3) + time.charAt(3) + char; 
        } 
    }
     
	// For the tenths digit of minutes
    for (let i = 0; i < 4; i++) {
        const char = nums[i];
        const prevMins = parseInt(time.substring(3));
        const newMins = parseInt(char + time.charAt(4));
            
        if (newMins < 60 && newMins > prevMins) {
            return time.substring(0, 3) + char + nums[0];
        }
    }
    
	// For the unit digits of hours
    for (let i = 0; i < 4; i++) {
        const char = nums[i];
        const prevHours = parseInt(time.substring(0, 2));
        const newHours = parseInt(time.charAt(0) + char);
        
        if (newHours < 24 && newHours > prevHours)  {
            return time.charAt(0) + char + ":" + nums[0] + nums[0];
        }
    }
    
	// For the tenth digits of hours
    for (let i = 0; i < 4; i++) {
        const char = nums[i];
        const prevHours = parseInt(time.substring(0, 2));
        const newHours = parseInt(char + time.charAt(1));
        
        if (newHours < 24 && newHours > prevHours) {
            return char + nums[0] + ":" + nums[0] + nums[0]; 
        }
    }
    
    return nums[0] + nums[0] + ":" + nums[0] + nums[0];
};
```