# [JavaScript] DFS + Bitwise

**Author:** stevenkinouye
**Votes:** 4
**Link:** [https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/solutions/1268880/](https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/solutions/1268880/)

---

```javascript
 var earliestAndLatest = function(numPlayers, firstPlayer, secondPlayer) {
    let minRounds = Infinity;
    let maxRounds = 0;
    const dfs = (playersEliminated, numRounds) => {
        
        // find all the combinations for this round starting with the
        // current players that are eliminated.  We will move the 2 pointers
        // from opposite ends inwards until we find players that aren't eliminated
        // and then create new possible results of this current round.
        // Every loop in the while loop will correspond to a competition between player
        // i and j while roundResults will hold all possible round results.
        let roundResults = [playersEliminated];
        let i = 1;
        let j = numPlayers;
        while (true) {
            // find players that aren't eliminated
            while (playersEliminated & (1 << i)) i++;
            while (playersEliminated & (1 << j)) j--;
            // if we are at or past the same player, we can stop
            if (i >= j) break;
            // if during this round the first and second player are playing
            // against each other, we can record the results and stop searching.
            if (i === firstPlayer && j === secondPlayer) {
                minRounds = Math.min(minRounds, numRounds);
                maxRounds = Math.max(maxRounds, numRounds);
                return;
            } 
            
            // create new round results by eliminating player as long as it isn't
            // the first or second player.
            // roundResult | (1 << i)  means we eliminated player i (player i lost)
            const newRoundResults = [];
            if (j !== firstPlayer && j !== secondPlayer) {
                for (const roundResult of roundResults) {
                    newRoundResults.push(roundResult | (1 << j));
                }
            } 
            if (i !== firstPlayer && i !== secondPlayer){
                for (const roundResult of roundResults) {
                    newRoundResults.push(roundResult | (1 << i));
                }
            }
            // move the pointers inwards to find next matching players
            i++;
            j--;
            // save the new round results to round results
            roundResults = newRoundResults;
        }
        
        // if we have exhausted all round results return as the base case
        if (!roundResults.length) return;
        
        // add a round for the next round and try each result to see if it will
        // update the max and min number of rounds
        numRounds++;
        roundResults.forEach((roundResult) => dfs(roundResult, numRounds));
    }
    dfs(0,1)
    return [minRounds, maxRounds];
};
```