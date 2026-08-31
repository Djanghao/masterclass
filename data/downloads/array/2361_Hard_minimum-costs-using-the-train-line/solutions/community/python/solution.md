# Python Top-Down DP 100% on memory and speed

**Author:** cchoate09
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/2425275/](https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/2425275/)

---

```
class Solution:
    def minimumCosts(self, regular: List[int], express: List[int], expressCost: int) -> List[int]:
        n = len(regular)
        self.result = [float('inf')]*n
        @lru_cache(None)
        def dp(i, loc):
            if i == -1:
                return 0
            else:
                if loc:
                    option1 = regular[i] + dp(i-1, False)
                    option2 = express[i] + dp(i-1, True)
                else:
                    option1 = regular[i] + dp(i-1, False)
                    option2 = expressCost + express[i] + dp(i-1, True)
                if self.result[i] == float('inf'):
                    self.result[i] = min(option1, option2)
                return min(option1, option2)
            
        dp(n-1, False)
        return self.result
                    
 ```
 
Step 1 is to establish the length of the train stops, and then to set an array to record the result at each stop.
Step 2 is for Top-Down DP, having two input variables and two options. We either start at the local and can stay local and pay that cost, or switch to express and pay the express cost and express switching cost, or we can start at express and pay express or switch to local for free and pay that cost.

The first time you hit each one of the stops, you record in self.result the answer.

Then just return self.result.