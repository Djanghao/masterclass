# Backtracking | C++ | Python | Golang

**Author:** codeart7
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3707594/](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3707594/)

---

# Code
```C++ []
class Solution {
public:
    int maximumRequests(int n, vector<vector<int>>& requests) {
        int answer = 0;
        vector<int> indegree(n, 0);

        function<void(int, int)> maxRequest = [&](int index, int count) {
            if (index == requests.size()) {
                for (int i = 0; i < n; i++) {
                    if (indegree[i]) {
                        return;
                    }
                }
                answer = max(answer, count);
                return;
            }

            indegree[requests[index][0]]--;
            indegree[requests[index][1]]++;

            maxRequest(index + 1, count + 1);

            indegree[requests[index][0]]++;
            indegree[requests[index][1]]--;

            maxRequest(index + 1, count);
        };

        maxRequest(0, 0);

        return answer;
    }
};
```
```Python []
class Solution:
    def maximumRequests(self, n: int, requests: List[List[int]]) -> int:
        answer = 0
        indegree = [0 for _ in range(n)]

        def maxRequest(index, count):
            if(index == len(requests)):
                for i in range(n):
                    if(indegree[i]):
                        return
                nonlocal answer
                answer = max(answer, count)
                return

            indegree[requests[index][0]] -= 1
            indegree[requests[index][1]] += 1

            maxRequest(index + 1, count + 1)

            indegree[requests[index][0]] += 1
            indegree[requests[index][1]] -= 1

            maxRequest(index + 1, count)

        maxRequest(0, 0)

        return answer
```
```Go []
func maximumRequests(n int, requests [][]int) int {
    answer := 0
    indegree := make([]int, n)

    var maxRequest func(int, int)

    maxRequest = func (index, count int) {
        if(index == len(requests)) {
            for i := 0; i < n; i++ {
                if(indegree[i] != 0) {
                    return;
                }
            }

            if(count > answer) {
                answer = count
            }
            return
        }

        indegree[requests[index][0]] --;
        indegree[requests[index][1]] ++;

        maxRequest(index + 1, count + 1)

        indegree[requests[index][0]] ++;
        indegree[requests[index][1]] --;

        maxRequest(index + 1, count)
    }

    maxRequest(0, 0)

    return answer
}
```