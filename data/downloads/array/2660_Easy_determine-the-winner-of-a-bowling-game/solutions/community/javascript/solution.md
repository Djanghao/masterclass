# Easy loop solution with 100% Memory

**Author:** smd_94
**Votes:** 3
**Link:** [https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/4309454/](https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/4309454/)

---



# Code
```
/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    let p1Total = 0;
    let p2Total = 0;

    for(let i=0; i<player1.length; i++){
        if(player1[i-1] === 10 || player1[i-2] === 10) {
            p1Total += (2*player1[i]);
        } else {
            p1Total += player1[i];
        }

        if(player2[i-1] === 10 || player2[i-2] === 10) {
            p2Total += (2*player2[i]);
        } else {
            p2Total += player2[i];
        }
        
        
    }

    if(p1Total === p2Total) return 0;
    return (p1Total < p2Total) ? 2 : 1;

};
```