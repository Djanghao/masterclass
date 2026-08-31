# Backtracking | Python / JS Solution

**Author:** TFDLeeter
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3706111/](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3706111/)

---

Hello **Tenno Leetcoders**, 

For this problem, we are given `n` buildings numbered from `0` to `n-1`, and each building has a certain number of employees. With a list of employees transfer requests, where each request is represented as an employee's request to transfer from building `from i` to building `to i`. Since, all building are already full, the `net change` in employee transfers should be `0` for each building to make this request achieveable. Thus, we need to `find the maximum number of achieveable requests`

### Explanation

To solve this problem, we will need to consider all possible combinations of requests and explore the difference choices as we keep track of the net change in transfer for each building. Therefore, we can use `backtracking` to help us explore all possibilities. 

Using backtracking approach, we are able to explore all possible combinations of requests as we include or exclude each request for each backtracking step. By backtracking and keep track of the net change being made in the transfers, we ensure that we only consider combinations that have a `0` net change transferring to each building. 

#### steps

- Define backtracking method that takes in three parameters:

    1) curr: represents the index of the current request being made
    
    2) count: keep track of the number of requests included in the current combinations
    
    3) transfers: a list which stores the net changes transferring from building
    
### backtrack()

- This method base case is all requests has been processed:

    - If the net change in transfer is 0 for all buildings, we return the count. 
    
    - Otherwise, return 0

- For each building transfer, we need to worry from and to transfers as we include or exclude the current requests:

    1) To include the transfer being made from the current building can be denoted as `requests[curr][0]`
    
        - Since, we are transfering from one building to the next, we need to decrement the transfer count for this current building. This will be denoted as `transfers[requests[curr][0]] -= 1`
     
    2)  To include, the transfer being made to the current building can be denoted as `requests[curr][1]`
    
        - Since, we are transfering to a building, we need to increment the transfer count for this current building destinations. This will be denoted as `transfers[requests[curr][1]] += 1`
    
    3) To process the next included requests, we make a recursvie call to our `backtrack` method and increment current index and count by `1` 
    
    4) After we tried the included combinations, we undo the previous transfers by restoring the transfers count
    
    5) To exclude, we will only need to make another recursive call using `backtrack` method to process the next requests without the need to modify the transfer counts
    
    
    6) Once we found our included and excluded values, we return the maximum cout obtained from our recursives calls for our current requests
    
To start the backtracking process we call `backtrack(0,0, transfers)` 


# Code

**Python**

```
class Solution:
    def maximumRequests(self, n: int, requests: List[List[int]]) -> int:
        transfers = [0] * n
        def backtrack(curr, count, transfers):
            if curr == len(requests):
                if all(t == 0 for t in transfers): return count
                else: return 0
                
            transfers[requests[curr][0]] -= 1
            transfers[requests[curr][1]] += 1
            
            count_included = backtrack(curr + 1, count + 1, transfers)

            transfers[requests[curr][0]] += 1
            transfers[requests[curr][1]] -= 1

            count_excluded = backtrack(curr + 1, count, transfers)

            return max(count_included, count_excluded)
        
        return backtrack(0,0, transfers)
```

**JavaScript**
```
/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function(n, requests) {
    const transfers = Array(n).fill(0)

    const backtrack = (curr, count, transfers) => {
        if(curr === requests.length){
            if(transfers.every(t => t === 0)) return count
            else return 0
        }

        transfers[requests[curr][0]] -= 1
        transfers[requests[curr][1]] += 1

        const countIncluded = backtrack(curr + 1, count + 1, transfers)

        transfers[requests[curr][0]] += 1
        transfers[requests[curr][1]] -= 1

        const countExcluded = backtrack(curr + 1, count , transfers)

        return Math.max(countIncluded, countExcluded)         
    }
    return backtrack(0,0, transfers)
};
```

### Time Complexity: O(2*n)
### Space Complexity: O(n+m)

 
***Warframe's Darvo wants you to upvote this post  \uD83D\uDE4F\uD83C\uDFFB \u2764\uFE0F\u200D\uD83D\uDD25***

![image](./images/0.gif)