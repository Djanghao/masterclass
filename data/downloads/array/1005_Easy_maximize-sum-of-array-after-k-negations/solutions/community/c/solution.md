# C++ solution

**Author:** OleksaM
**Votes:** 37
**Link:** [https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/696962/](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/696962/)

---

```
class Solution {
public:
    int largestSumAfterKNegations(vector<int>& A, int K) {
        priority_queue<int, vector<int>, greater<int>> pq(A.begin(), A.end());
        while (K--) {
            int x = pq.top();
            pq.pop();

            pq.push(-1 * x);
        }
        int res = 0;
        while (!pq.empty()) {
            res += pq.top();
            pq.pop();
        }
        return res;
    }
};
```
