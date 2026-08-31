# O(N), O(1) simple solution with clear explanation, single for loop

**Author:** naruto_1994
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/4307907/](https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/4307907/)

---

# Intuition
At first glance and read of the question we would like to calculate the travel time taken by each truck and the time taken by them to process their respective waste and once we sum it we would have our answer.

# Approach
Things to observe, that were kind of hidden in the problem description, before reading the solution ( drew the inferences from the examples shared):
- If a truck does not collect waste their travel time is 0
- If a character ```G|| M || P``` occurs ```n``` number of times in the ```garbage``` string then it will take ```n * 1``` amount of time to process it
- No distance has to be travelled by a truck for picking up garbage at house at index 0
- Garbage truck only has to travel till the house their respective waste is present i.e. if only house at 0 index has metal waste then the metal pickup truck will only travel till house 0, no need to travel to other houses.

Because of all the above points, the solution reduces down to finding 
- Total processing time of the wastes at each house
- Maximum time taken by a truck to travel to the last house they need to pick waste from

We tackle the same by finding a cumulative time taken to reach at a particular house by a truck and assign the same to a truck if their waste is present in a house
And for the waste processing time add the length of the string at index ```i``` of ```garbage```


# Complexity
- Time complexity:
We are using two loops, one to traverse each of the houses```(N)``` and one to traverse all the type of waste present at a house ```(K)```
So the time complexity becomes $$O(N*K)$$, but since ```K``` is given an additional contstraint of ```1 <= K <= 10``` this reduces down to $$O(N)$$

- Space complexity:
Since we are only using 4 variables the space complexity comes down to $$O(1)$$

# Code
```
func garbageCollection(garbage []string, travel []int) int {
    collectionTime := 0
    gTravelTime := 0
    pTravelTime := 0
    mTravelTime := 0
    currCum := 0 // to track cumulative travel time for a truck that has to collect garbage from a house

    for i, gCollect := range garbage {
        if i != 0 {
            currCum += travel[i-1] 
        }
        collectionTime += len(gCollect) // each unit takes 1 minute to process
        for j := 0 ; j < len(gCollect); j++ {
            if gCollect[j] == 'M' {
                mTravelTime = currCum
            } else if gCollect[j] == 'P' {
                pTravelTime = currCum
            } else if gCollect[j] == 'G' {
                gTravelTime = currCum
            }
        }
    }

    return collectionTime + gTravelTime + pTravelTime + mTravelTime
}
```