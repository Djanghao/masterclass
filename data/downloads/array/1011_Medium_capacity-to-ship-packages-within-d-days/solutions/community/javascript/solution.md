# Detailed Explanation, TS/JS, Bin Search

**Author:** npc_420_test
**Votes:** 9
**Link:** [https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/1667051/](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/1667051/)

---

```
/*
Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.

there is always an answer that allows the packages to be shipped... 

if we have a capacity = sum(weights) we can ship them all in one day. 
but, we cannot have a capacity less than the max value in the array. this gives us the range for answers of 

min = max value in arr, max = sum of values in the array

now, we note that range is strictly increasing with increments of 1 so for the example

1,1,1,4

range of answers is [4, 5, 6, 7]

now, we can binary search that array and find the smallest number in that array where the answer
satisfies the constraing that all packages can be shipped in n days
*/

const daysNeeded = (weights, capacity): number => {
    // start with 0 bc we have not loaded anything on our ship yet
    let currentShipWeight = 0
    
    // we know we need at least one day
    let numberOfDays = 1
    
    for (let weight of weights) {
        // we load the current package onto the ship
        currentShipWeight += weight
        
        // if our weight exceeds our capacity we need
        // to come back another day. So, add a day &
        // reset our current ship weight to the current weight
        // so it is included in the next day's shipment
        if (currentShipWeight > capacity) {
            currentShipWeight = weight
            numberOfDays += 1    
        }
        
    }
    
    return numberOfDays
}

function shipWithinDays(weights: number[], days: number): number {
    let maxValue = -Infinity
    let sumOfWeights = 0
    
    // find the max value and total sum of the weights
    for (let weight of weights) {
        maxValue = Math.max(maxValue, weight)
        sumOfWeights += weight
    }
    
    // for readability, we change var name to represent lowest possible answer
    let minAnswer = maxValue
    
    // for readability, we change var name to represent max possible answer
    let maxAnswer = sumOfWeights
    
	// think of it this way [minAnswer, minAnswer + 1, ..., maxAnswer - 1, maxAnswer]
	// even though we haven't built this array in memory we are iterating over its values
	// this array represents all possible capacities that could result in a valid answer
    while(minAnswer < maxAnswer) {
		// we take the middle value of the array I just described
        const candidateCapacity = Math.floor((minAnswer + maxAnswer) / 2)
        
        // we can ship within the number of days with the current candidate capacity. 
        // Now we just need to make sure this is the lowest possible capacity 
        // so we update our maxAnswer to be equal to this answer
        if (daysNeeded(weights, candidateCapacity) <= days) {
            maxAnswer = candidateCapacity
        }
        
        // if we need more days than we are allowed this can't possibly be our answer
        // so we will have to increase our minimum answer 
        if (daysNeeded(weights, candidateCapacity) > days) {
            minAnswer = candidateCapacity + 1
        }
    }
    
    // awesome, our minAnswer is our minimum possible answer so we return it
    return minAnswer
};
```