# Well explained intuitive solution

**Author:** Balaji_SV
**Votes:** 6
**Link:** [https://leetcode.com/problems/best-sightseeing-pair/solutions/2293650/](https://leetcode.com/problems/best-sightseeing-pair/solutions/2293650/)

---

```
/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    // Given formula is values[i] + values[j] + i - j;
    // Break it as values[i] + i + values[j] - j;
    
    // take the first element of the pair with the formula values[i] + i for i = 0
    let firstElementInPair = values[0] + 0;
    
    // final result;
    let resultPairValue = 0;
    
    for(let i = 1; i < values.length; i++) {
        
        // values[i] + i is computed in firstElementInPair.
        
        // Compute secondElementInPair with the formula Values[j] - j for our current i;
        const secondElementInPair = values[i] - i;
        
        // calculate the pairValue with the formula values[i] + i (FirstElementInPair) + values[j] - j (SecondElementInPair);
        const currentPairValue = firstElementInPair + secondElementInPair;
        
        // keep the best pair found so far.
        resultPairValue = Math.max(resultPairValue, currentPairValue);
        
        // update firstElementInPair, if any other better element is found
        firstElementInPair = Math.max(firstElementInPair, values[i] + i);
    }
    return resultPairValue;
};
```