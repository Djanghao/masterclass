# Day -2 Solution with easy approach 🤩🤩🤩🤩

**Author:** 710sejal
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3706508/](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3706508/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To determine the maximum number of achievable requests, we need to find a combination of requests where the net change in employee transfers is zero for each building. This means that for each building, the number of employees leaving must be equal to the number of employees moving in. We can solve this problem by trying all possible combinations of requests and counting the maximum number of achievable requests.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Define a helper function, helper, which takes the following parameters: start (current request index), req (requests array), indegree (array to track the net change in employee transfers for each building), n (number of buildings), and count (the current count of achievable requests).
2. In the helper function:
    - Base case: If start is equal to the length of req, we have processed all requests. We need to check if the net change in employee transfers for each building is zero. Iterate through indegree and if any element is not equal to zero, return 0 (as it means the requests combination is not valid). Otherwise, return count as the maximum number of achievable requests.
    - Take the current request: Decrement the indegree of the source building (req[start][0]) and increment the indegree of the destination building (req[start][1]).
    - Recursively call the helper function with the next request (start + 1), updated indegree, and incremented count.
    - Undo the changes made in the previous step: Increment the indegree of the source building and decrement the indegree of the destination building.
    - Recursively call the helper function without taking the current request (start + 1), using the original indegree and the same count.
    - Return the maximum value between the results obtained from taking and not taking the current request (Math.max(take, notTake)).

3. In the maximumRequests function, initialize the indegree array with zeros and call the helper function with initial parameters.
4. Return the maximum number of achievable requests obtained from the helper function.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this algorithm is O(2^R * N), where R is the number of requests and N is the number of buildings. Since we try all possible combinations of requests, there are 2^R combinations, and for each combination, we iterate through N buildings to check the net change in employee transfers.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(N) for the indegree array.

# Code
## Dart
```
class Solution {
  int maximumRequests(int n, List<List<int>> requests) {
    var indegree = List<int>.filled(n,0);
    return helper(0, requests, indegree, n, 0);
  }

  int helper(int start,List<List<int>> req,List<int> indegree,int n, int count){
    if(start == req.length){
      for(int i=0;i<n;i++){
        if(indegree[i] != 0){
          return 0;
        }
      }
      return count;
    }

    indegree[req[start][0]]--;
    indegree[req[start][1]]++;
    int take = helper(start + 1, req, indegree, n, count + 1);

    indegree[req[start][0]]++;
    indegree[req[start][1]]--;
    int notTake = helper(start + 1, req, indegree, n, count);

    return take > notTake ? take : notTake;

  }

}
```
## TypeScript
```
function maximumRequests(n: number, requests: number[][]): number {
      const indegree = new Array(n).fill(0);
    return helper(0, requests, indegree, n, 0);
};

function helper(start, req, indegree, n, count) {
    if (start === req.length) {
       for (let i = 0; i < n; i++) {
         if (indegree[i] !== 0) {
           return 0;
         }
       }
    return count;
    }

    indegree[req[start][0]]--;
    indegree[req[start][1]]++;
    const take = helper(start + 1, req, indegree, n, count + 1);
  
    indegree[req[start][0]]++;
    indegree[req[start][1]]--;
    const notTake = helper(start + 1, req, indegree, n, count);
  
    return Math.max(take, notTake);
}
```

![Bill Murray Upvote](./images/0.gif&ehk=Qe7MtFmTQXVAHWoIuDgOlA4AyT6k7nm%2f%2fr6nmKwavns%3d&risl=&pid=ImgRaw&r=0)

