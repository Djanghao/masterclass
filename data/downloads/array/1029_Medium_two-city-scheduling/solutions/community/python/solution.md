# Python | Beats 95% | Greedy & DP Solutions With Explanation

**Author:** akash3anup
**Votes:** 32
**Link:** [https://leetcode.com/problems/two-city-scheduling/solutions/1881674/](https://leetcode.com/problems/two-city-scheduling/solutions/1881674/)

---

## Solution 1 (Greedy)
```
class Solution:
    def twoCitySchedCost(self, costs: List[List[int]]) -> int:
        # If all the people travels to the cityA then total cost:
        totalA = 0
        for costA, _ in costs:
            totalA += costA
        
        # If all the people wish to travel to cityB instead of cityA then the difference in cost would be:
        difference = [costB-costA for costA, costB in costs]
        
        """
            Since in both the cities the number of people travelling should be equal and their total cost should be minimum,
            So if we move half of the people from cityA to cityB having minimum difference among all the people then the total cost would be the minimum.
        """
        # Total cost of people travelling to cityB instead of cityA having minimum difference:
        totalB = sum(sorted(difference)[:len(costs)//2])
		
		# Total cost of travelling for both the cities
        return totalA + totalB
```

## Solution 2 (DP)
```
class Solution:
    def dp(self, costs, i, a, b, lookup):
        # Base Case1: Both the cities have equal number of people. So return 0 as there ain't any people left to travel.
        if (a == len(costs) // 2) and (b == len(costs) // 2):
            return 0
        # Base Case2: If both the cities doesn't have all the people or if any city has more than half of total number of people. Return sys.maxsize as it is not a valid scenario as per the problem
        if (i == len(costs)) or (a > len(costs) // 2) or (b > len(costs) // 2):
            return sys.maxsize
        # Memoization
        key = (i, a, b)
        if key not in lookup:
            """
                Recurrence Relation:
                    A person could either travel to cityA or cityB.
                    If he travels to cityA then it's cost for cityA would be considered and the number of people in cityA would be increased by 1
                    Else he travels to cityB then it's cost for cityB would be considered and the number of people in cityB would be increased by 1
                    
                    We need to get the minimum cost by applying the above logic to all the people.
            """
            lookup[key] = min(costs[i][0] + self.dp(costs, i+1, a+1, b, lookup), costs[i][1] + self.dp(costs, i+1, a, b+1, lookup))
        return lookup[key]
    
    def twoCitySchedCost(self, costs: List[List[int]]) -> int:
        return self.dp(costs, 0, 0, 0, {})
```

***If you liked the above solution then please upvote!***