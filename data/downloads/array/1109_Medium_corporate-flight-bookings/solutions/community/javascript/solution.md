# JavaScript Solution

**Author:** Deadication
**Votes:** 3
**Link:** [https://leetcode.com/problems/corporate-flight-bookings/solutions/1361989/](https://leetcode.com/problems/corporate-flight-bookings/solutions/1361989/)

---

```
var corpFlightBookings = function(bookings, n) {
    const count = new Array(n + 1).fill(0);
    
    for (const [start, end, seats] of bookings) {
        count[start] += seats;
        count[end + 1] -= seats;
    }
    
    const res = [];
    let sum = 0;
    
    for (let i = 1; i <= n; i++) {
        sum += count[i];
        res.push(sum);
    }
    
    return res;
};
```