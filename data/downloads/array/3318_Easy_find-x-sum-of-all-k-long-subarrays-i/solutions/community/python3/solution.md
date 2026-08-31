# Python3 || 5 lines, nlargest, mapping  || T/S: 81% / 58%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5908239/](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5908239/)

---

Here's the intuition:
- This problem is really a series of problems, each on a *k*-length subarray of `nums`. 
- Thus, we can determine a function to find the sum for each such a subarray and then map it to each subarray to determine the answer.
```python3 []
class Solution:
    def findXSum(self, nums: List[int], k: int, x: int) -> List[int]:

        def do_sum (idx: int)-> int:

            ctr = Counter(nums[idx:idx + k])
            most_freq = nlargest(x, ctr, key = lambda y: (ctr[y], y))

            return sum(map(lambda y: y * ctr[y], most_freq))


        return map(do_sum,range(len(nums)+1 - k))
```
```cpp []
class Solution {
public:
    vector<int> findXSum(vector<int>& nums, int k, int x) {
        vector<int> result;

        auto do_sum = [&](int idx) -> int {
            unordered_map<int, int> ctr;

            for (int i = idx; i < idx + k; ++i) {
                ctr[nums[i]]++;}

            priority_queue<pair<int, int>> pq;

            for (auto& p : ctr) {
                pq.push({p.second, p.first}); }

            int sum = 0;
            for (int i = 0; i < x && !pq.empty(); ++i) {
                sum += pq.top().second * pq.top().first;
                pq.pop();}

            return sum;};

        for (int i = 0; i <= nums.size() - k; ++i) {
            result.push_back(do_sum(i));}

        return result;}
};
```
[https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/submissions/1421175528/](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/submissions/1421175528/)



I could be wrong, but I think that time complexity is *O*(*NKX*) and space complexity is *O*(*K*), in which *N* ~ `len(nums)`, *K* ~ `k`, and *X* ~ `x`.
