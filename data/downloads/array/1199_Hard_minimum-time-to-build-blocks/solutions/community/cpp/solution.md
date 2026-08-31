# [C++] Binary Search with Sorting Approach

**Author:** jonybounce
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-build-blocks/solutions/4011599/](https://leetcode.com/problems/minimum-time-to-build-blocks/solutions/4011599/)

---

# Intuition
If we assume one random answer "mid" (minimum time to complete), we can check if that random number "mid" is valid or not

Sort the array so that the longest time that requires to complete a build will be put on highest priority

Start at time "t" = 0, if (the time t + time to complete longest task + time to split) is smaller than the random "mid", we can safely split all the workers we have; otherwise, slowly put each worker to perform the longest task until we safely split the rest of worker. Repeat it until we can decide the random "mid" is valid or not.

# Approach
Using Binary Search with Sorting Approach

# Complexity
- Time complexity: O(N logN)

- Space complexity: O(1)

# Code

```
class Solution {
public:
    int minBuildTime(vector<int>& blocks, int split) {
        int sz = blocks.size();
        sort(blocks.begin(), blocks.end(), [&](int a, int b) { return a > b; });

        auto check = [&](int val) -> bool {
            int i = 0;
            int worker = 1;
            int time = 0;

            while(worker && ((i + worker) < sz)) {
                while(worker && ((time + blocks[i] + split) > val)) i++, worker--;
                time += split;
                worker *= 2;
            }

            return ((i + worker) >= sz) && (time + blocks[i] <= val);
        };

        int lo = 0;
        int hi = INT_MAX;

        while(lo < hi) {
            int mid = (lo + hi) >> 1;

            if(check(mid)) hi = mid;
            else lo = mid + 1;
        }

        return lo;
    }
};
```