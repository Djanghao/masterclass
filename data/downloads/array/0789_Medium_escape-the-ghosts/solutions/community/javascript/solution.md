# JavaScript Solution

**Author:** Deadication
**Votes:** 1
**Link:** [https://leetcode.com/problems/escape-the-ghosts/solutions/1507434/](https://leetcode.com/problems/escape-the-ghosts/solutions/1507434/)

---

```
var escapeGhosts = function(ghosts, target) {
    const [tarX, tarY] = target;
    const playerDist = Math.abs(tarX) + Math.abs(tarY);
    
    for (let i = 0; i < ghosts.length; i++) {
        const [ghostX, ghostY] = ghosts[i];
        const ghostDist = Math.abs(ghostX - tarX) + Math.abs(ghostY - tarY);
        
        if (ghostDist <= playerDist) return false;
    }
    
    return true;
};
```