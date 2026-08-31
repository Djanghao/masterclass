# Go and Javascript easy solution

**Author:** Azizjon003
**Votes:** 1
**Link:** [https://leetcode.com/problems/divisor-game/solutions/3460297/](https://leetcode.com/problems/divisor-game/solutions/3460297/)

---

# Complexity
- Time complexity:100%G

- Space complexity:97%


# Code
```
/**
 * Title: Divisor Game
 * Description: Alice and Bob take turns playing a game, with Alice starting first.
 * Author: Azizjon Aliqulov
 * Date: 27/04/2023
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    return n%2==0?true:false
};
```
# Go(lang)
```
func divisorGame(n int) bool {
    if(n%2==0){
        return true
    }
    return false
}
```