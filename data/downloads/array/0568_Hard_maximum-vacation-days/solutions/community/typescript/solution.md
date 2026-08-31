# 1-D Dynamic Programming: Forward filling [Accepted]

**Author:** AnDeVerin
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-vacation-days/solutions/5463046/](https://leetcode.com/problems/maximum-vacation-days/solutions/5463046/)

---

Filling the dp array from top to bottom
```
       city
       |  0 |  1 |  2
w    \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013
e    0 |  1 |  6 |  3
e    1 |  9 |  6 |  9
k    2 | 10 | 12 | 12

```

# Code
```
function maxVacationDays(flights: number[][], days: number[][]): number {
  
  // Week 0. Holds vacation days for each city if there exist a connecting flight from city 0.
  let week = flights[0].map((_, i) =>
    i === 0 || flights[0][i] ? days[i][0] : -Infinity
  );

  // calculate next week
  for (let w = 1; w < days[0].length; w++) {
    let nextWeek: number[] = [];

    // for each 'to' city in week
    for (let to = 0; to < flights[0].length; to++) {
      let current = -Infinity;
      
      // calculate max along 'from' options
      for (let from = 0; from < flights[0].length; from++) {
        if (from === to || flights[from][to]) { // stay or can fly
          current = Math.max(current, week[from] + days[to][w]);
        }
      }
      nextWeek.push(current);
    }
    week = nextWeek;
  }

  return Math.max(...week);    
};
```