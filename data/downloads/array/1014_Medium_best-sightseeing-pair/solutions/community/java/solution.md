# [Java] One pass | Easy to understand solution

**Author:** nainy
**Votes:** 48
**Link:** [https://leetcode.com/problems/best-sightseeing-pair/solutions/539238/](https://leetcode.com/problems/best-sightseeing-pair/solutions/539238/)

---

Divide the score into 2 parts - ```A[i]+i``` and ```A[j]-j```. For each ```j``` value, we will check if the sum of maximum  ```A[i]+i``` value found so far and current ```A[j]-j``` is greater than the ```res```.
```
class Solution {
    public int maxScoreSightseeingPair(int[] A) {
		//Intitialize previously seen value of A[i] + i
        int prev_max = A[0]+0;
		//Initialize the value of first pair
        int res = A[0] + A[1] - 1;
        for(int j = 1; j < A.length; j++){
			//update res if a higher value of prev_max+A[j]-j is found
            res = Math.max(prev_max + A[j] - j, res);
			//Update prev_max
            prev_max = Math.max(A[j] + j, prev_max);
        }
        return res;
    }
}

```