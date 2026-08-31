# [Javascript] Recursion w/ Memoization

**Author:** anna-hcj
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-vacation-days/solutions/1660680/](https://leetcode.com/problems/maximum-vacation-days/solutions/1660680/)

---

Recursion w/ Memoization

Starting from city 0, use recursion and memoization to try all the possible paths.
At each city, we can either 
* stay at the current city
*  fly to another city (cities we are connected to) 

recursion with memoization can be a better option than iterative dynamic programming because 
dynamic programming tries out all paths regardless of whether they are actually reachable from city 0 in the first place,
whereas recursion only tries paths that are actually reachable.

Time Complexity: O(n^2 * k) 180ms
Space Complexity: O(nk) 43.6MB

```
var maxVacationDays = function(flights, days) {
  let n = flights.length, k = days[0].length;
  let memo = Array(n);
  for (var i = 0; i < n; i++) memo[i] = Array(k);
  return recurse(0, 0);
  
  function recurse(city, week) {
    if (week === k) return 0;
    if (memo[city][week] !== undefined) return memo[city][week];
    let maxVacation = days[city][week] + recurse(city, week + 1);
    for (var i = 0; i < n; i++) {
      if (flights[city][i]) {
        maxVacation = Math.max(maxVacation, days[i][week] + recurse(i, week + 1));
      }
    }
    memo[city][week] = maxVacation;
    return maxVacation;
  }
};
```