# 💡JavaScript Solution w/ Explanation

**Author:** AminiCK
**Votes:** 16
**Link:** [https://leetcode.com/problems/prison-cells-after-n-days/solutions/444975/](https://leetcode.com/problems/prison-cells-after-n-days/solutions/444975/)

---

### The idea
1. Convert array to string for easier look up
2. A `nextDay` function returns the next arrangement
3. Keep a hashtable of history arrangements, if a new arrangement is seen in the history, that means we have found a cycle
4. Use `%` to calculate how many extra moves do we still need after the cycle point
``` javascript
var prisonAfterNDays = function(cells, N) {
    let nextDay = function(cells) {
        let newPrison = "";
        for (let i=0;i<cells.length;i++) {
            if (cells[i-1]==cells[i+1]) newPrison+='1';
            else newPrison+='0';
        }
        return newPrison;
    }
    let prison = [...cells].join('');
    let history = [];
    while (N--) {
        prison = nextDay(prison);
        let lookUp = history.indexOf(prison); // cycle found, get the cycle position
        if (lookUp!=-1) {
            let mod = N%(history.length - lookUp); // check how many extra moves after the cycle
            return history[lookUp + mod].split('');
        }
        history.push(prison);
    }
    return prison.split('');
};
```