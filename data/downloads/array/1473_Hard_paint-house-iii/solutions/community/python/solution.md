# Python | DP Memoization | Simple Solution

**Author:** akash3anup
**Votes:** 22
**Link:** [https://leetcode.com/problems/paint-house-iii/solutions/1794735/](https://leetcode.com/problems/paint-house-iii/solutions/1794735/)

---

## Logic:
1. This problem can be solved by using Dynamic Programming.
2. DP state variables:
	- house: current house index
	- prevPaint: paint of previous house
	- neighbourhood: total neighbourhood formed till current house.
3. neighborhoodCondition: If the prevPaint != currentPaint then it would increase the neighborhood by 1.
4. Recurrence relation:
	- If the paint of current house is 0 (i.e, already previously painted) then simply move to next house by updating the neighborhood if required
		- dp(house, prevPaint, neighbourhood) = dp(house+1, houses[house], neighbourhood+neighborhoodCondition)
	- Else paint the current house with the paint which will yeild the minimum cost :
		- dp(house, prevPaint, neighbourhood) = min(cost[currentPaint]+dp(house+1, currentPaint, neighbourhood+neighborhoodCondition)) for all number of paints(i.e, **n**)
5. Base case: If all the houses have been painted(i.e, **house == len(houses)**) then return,
	- Return 0 if neighborhood == target
	- Else return sys.maxsize


```
class Solution:
    def dp(self, houses, costs, target, house, prevPaint, neighborhood, lookup):
        if house == len(houses):
            return 0 if neighborhood == target else sys.maxsize
        key = (house, prevPaint, neighborhood)
        if key not in lookup:
            if houses[house] == 0:
                cost = sys.maxsize
                for j in range(len(costs[house])):
                    currentPaint = j+1
                    cost = min(cost, costs[house][j] + self.dp(houses, costs, target, house+1, currentPaint, neighborhood+int(currentPaint != prevPaint), lookup))
                lookup[key] = cost
            else:
                lookup[key] = self.dp(houses, costs, target, house+1, houses[house], neighborhood+int(houses[house] != prevPaint), lookup)
        return lookup[key]
    
    def minCost(self, houses: List[int], cost: List[List[int]], m: int, n: int, target: int) -> int:
        cost = self.dp(houses, cost, target, 0, 0, 0, {})
        return cost if cost != sys.maxsize else -1
```

***If you liked the above solution then please upvote!***