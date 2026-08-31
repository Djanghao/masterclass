# Beats 100% of users on memory and time. Recursive approach

**Author:** Cesc99
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/4988433/](https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/4988433/)

---

# Intuition

Beats 100% of users on memory and time. Recursive approach

# Code
```
function numberOfRounds(loginTime: string, logoutTime: string): number {
    let totalRound = 0;
    let [loginTimeHour, loginTimeMinute] = loginTime.split(":").map(Number);
    let [logoutTimeHour, logoutTimeMinute] = logoutTime.split(":").map(Number);
    
    // Adjusting logout time if it's earlier than login time
    if (logoutTimeHour < loginTimeHour || (logoutTimeHour === loginTimeHour && logoutTimeMinute < loginTimeMinute)) {
        logoutTimeHour += 24;
    }
    
    const recursiveCountRounds = (currentTimeHour: number, currentTimeMinute: number): void => {
        let nextRoundMinute = (Math.floor(currentTimeMinute / 15) + 1) * 15;
        let nextRoundHour = currentTimeHour + Math.floor(nextRoundMinute / 60);
        nextRoundMinute %= 60;
        
        if (nextRoundHour > logoutTimeHour || (nextRoundHour === logoutTimeHour && nextRoundMinute > logoutTimeMinute)) {
            return;
        }
        
        if (currentTimeMinute % 15 === 0 && (nextRoundHour < logoutTimeHour || (nextRoundHour === logoutTimeHour && nextRoundMinute <= logoutTimeMinute))) {
            totalRound += 1;
        }
        
        recursiveCountRounds(nextRoundHour, nextRoundMinute);
    }
    
    recursiveCountRounds(loginTimeHour, loginTimeMinute);
    
    return totalRound;
}
```