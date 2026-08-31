# JavaScript with HashMap

**Author:** gululu1992
**Votes:** 6
**Link:** [https://leetcode.com/problems/design-a-leaderboard/solutions/868356/](https://leetcode.com/problems/design-a-leaderboard/solutions/868356/)

---

```
var Leaderboard = function() {
    this.map = new Map();
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    if (this.map.has(playerId)) {
        const val = this.map.get(playerId);
        score = val + score;
    } 
    
    this.map.set(playerId, score);
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    const arr = Array.from(this.map.values()).sort((a, b) => b - a);

    let sum = 0;
    let idx = 0;
    
    while (K--) {
        sum += arr[idx++];
    }
    
    return sum;
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    this.map.delete(playerId);
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */
```