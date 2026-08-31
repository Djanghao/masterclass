# JavaScript Solution - DP Top Down Approach With Memoization

**Author:** Deadication
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-build-house-of-cards/solutions/2110967/](https://leetcode.com/problems/number-of-ways-to-build-house-of-cards/solutions/2110967/)

---

```
var houseOfCards = function(n) {
    if (n <= 2) return n - 1;

    let remCards = n - 2;
    let noOfTentsWeCanConstruct = 1; // for the first tent, we only need 2 cards
 
	// all tents afterwards we need 3 cards
    noOfTentsWeCanConstruct += Math.floor(remCards / 3);
    
    const memo = new Map();
    
    return topDown(n, noOfTentsWeCanConstruct);
    
    
    function topDown(availCards, maxNoOfTentsWeCanConstruct) {
        const key = `${availCards}#${maxNoOfTentsWeCanConstruct}`;
        
        if (availCards === 0 || availCards === 2) return 1;
        if (memo.has(key)) return memo.get(key);
        
        availCards -= 2;
        
        let noOfWaysToBuildHouseOfCards = 0;
    
        let tentsBuilt = 1;
        
        while (availCards >= 3 && tentsBuilt < maxNoOfTentsWeCanConstruct) {
            availCards -= 3;
            tentsBuilt += 1;
            
            noOfWaysToBuildHouseOfCards += topDown(availCards, tentsBuilt - 1);
        }

        memo.set(key, noOfWaysToBuildHouseOfCards);
        return noOfWaysToBuildHouseOfCards;
    }

};
```