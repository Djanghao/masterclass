# ✅Back Track🔥 || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 157
**Link:** [https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3706092/](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3706092/)

---

# Intuition:

The Intuition is to use backtracking approach to explore all possible combinations of taking or not taking transfer requests. It maintains a count of transfer requests and checks if the requests are balanced for each building. The maximum count of transfer requests that satisfies the balanced request condition is returned as the result.

# Explanation:

1. The `maximumRequests` function takes an integer `n` representing the number of buildings and a 2D vector `requests` containing the transfer requests.
2. The function initializes a vector `indegree` of size `n` to keep track of the difference between incoming and outgoing requests for each building. Initially, all values are set to 0.
3. The function then calls the `helper` function with the starting index as 0, the `requests` vector, the `indegree` vector, `n`, and a count variable set to 0.
4. The `helper` function is the main backtracking function. It takes the current `start` index, the `requests` vector, the `indegree` vector, `n`, and the current `count` of transfer requests.
5. If the `start` index is equal to the size of the `requests` vector, it means we have processed all transfer requests. In this case, the function checks if all buildings have balanced requests (i.e., `indegree` values are all 0). If so, it updates the `ans` variable with the maximum count of transfer requests.
6. If the `start` index is not equal to the size of the `requests` vector, the function has two choices: take or not take the current transfer request.
7. If we take the current transfer request, we reduce the `indegree` value of the source building (`requests[start][0]`) by 1 and increase the `indegree` value of the destination building (`requests[start][1]`) by 1. Then, we recursively call the `helper` function with the updated `start` index, `requests`, `indegree`, `n`, and the incremented `count` by 1.
8. After the recursive call, we revert the changes made in step 7 by increasing the `indegree` value of the source building and decreasing the `indegree` value of the destination building. This step represents the "not-take" choice. We then recursively call the `helper` function with the updated `start` index, `requests`, `indegree`, `n`, and the same `count` value.
9. The `helper` function explores all possible combinations of taking or not taking transfer requests, tracking the maximum count of transfer requests (`ans`) that satisfies the balanced request condition.
10. Finally, the `maximumRequests` function returns the maximum count of transfer requests stored in the `ans` variable.

# Complexity:
**Time complexity:** $$ O(2^M * N) $$
**Space complexity:** $$ O(N + M) $$
N is the number of buildings, and M is the number of requests.

# Code
```C++ []
class Solution {
public:
    int ans = 0;

    void helper(int start, vector<vector<int>>& requests, vector<int>& indegree, int n, int count) {
        if (start == requests.size()) {
            for (int i = 0; i < n; i++) {
                if (indegree[i] != 0) {
                    return;
                }
            }
            ans = max(ans, count);
            return;
        }

        // Take 
        indegree[requests[start][0]]--;
        indegree[requests[start][1]]++;
        helper(start + 1,requests, indegree, n, count + 1);

        // Not-take
        indegree[requests[start][0]]++;
        indegree[requests[start][1]]--;
        helper(start + 1,requests, indegree, n, count);
    }
    
    int maximumRequests(int n, vector<vector<int>>& requests) {
        vector<int> indegree(n, 0);
        helper(0, requests, indegree, n, 0);
        return ans;
    }
};
```
```Java []
class Solution {
    public int maximumRequests(int n, int[][] requests) {
        int[] indegree = new int[n];
        return helper(0, requests, indegree, n, 0);
    }

    public int helper(int start, int[][] requests, int[] indegree, int n, int count) {
        if (start == requests.length) {
            for (int i = 0; i < n; i++) {
                if (indegree[i] != 0) {
                    return 0;
                }
            }
            return count;
        }

        // Take 
        indegree[requests[start][0]]--;
        indegree[requests[start][1]]++;
        int take = helper(start + 1, requests, indegree, n, count + 1);

        // Not-take
        indegree[requests[start][0]]++;
        indegree[requests[start][1]]--;
        int notTake = helper(start + 1, requests, indegree, n, count);

        return Math.max(take, notTake);
    }
}
```
```Python []
class Solution:
    def __init__(self):
        self.ans = 0

    def helper(self, start, requests, indegree, n, count):
        if start == len(requests):
            for i in range(n):
                if indegree[i] != 0:
                    return
            self.ans = max(self.ans, count)
            return

        # Take 
        indegree[requests[start][0]] -= 1
        indegree[requests[start][1]] += 1
        self.helper(start + 1, requests, indegree, n, count + 1)

        # Not-take
        indegree[requests[start][0]] += 1
        indegree[requests[start][1]] -= 1
        self.helper(start + 1, requests, indegree, n, count)

    def maximumRequests(self, n, requests):
        indegree = [0] * n
        self.helper(0, requests, indegree, n, 0)
        return self.ans
```

![CUTE_CAT.png](./images/0.png)


**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**