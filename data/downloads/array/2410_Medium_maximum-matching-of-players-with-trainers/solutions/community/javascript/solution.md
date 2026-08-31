# JavaScript ✅ Sort

**Author:** ThakurBallary
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/2588038/](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/2588038/)

---

```
/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);
    
    let i = 0;
    for (let j = 0; j < trainers.length; j++) {
        if (players[i] <= trainers[j]) {
            i++;
        }
    }
    
    return i;
};
```