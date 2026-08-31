# Longest Well-Performing Interval || JAVASCRIPT || Solution by Bharadwaj

**Author:** Manu-Bharadwaj-BN
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-well-performing-interval/solutions/4449696/](https://leetcode.com/problems/longest-well-performing-interval/solutions/4449696/)

---

# Approach
Sliding Window

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(n)

# Code
```
var longestWPI = function(hours) {
    let arr = hours.map(hour => {
        if(hour > 8){
            return 1;
        } else {
            return -1;
        }
    });
    let ans = 0;
    for(let i=0; i<arr.length; i++){
        let sum = 0;
        for(let j=i; j<arr.length; j++){
            sum += arr[j];
            if(sum > 0){
                ans = Math.max(ans, j-i+1);
            }
        }
    }
    return ans;
};
```