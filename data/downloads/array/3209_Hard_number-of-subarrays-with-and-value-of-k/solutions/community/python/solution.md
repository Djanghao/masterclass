# Sliding Window with Hash Map

**Author:** votrubac
**Votes:** 38
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/solutions/5428840/](https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/solutions/5428840/)

---

The AND value of a subarray is non-increasing. There are several problems that use this fact.

> This is the recent problem, but LeetCode changed the description from AND to OR after the contest:
> [3171. Find Subarray With Bitwise AND Closest to K](https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/discuss/5243278/Pruning-less-Fastest-~100-ms)

For an element `i`, we track AND values (and their count) of subarrays `[j..i]` using a hash map.
 - If the value drops below `k`, we clear the hash map.

Note that we won't have more than `31` values in the hash map. This is because the number of bits in values is decreasing. 

> Example: if the first element is `63` (`111111`), and `k = 7` (`000111`), we can have up to 4 values:
> 1. `111111`
> 2. `011111`, or `101111`, or `110111`.
> 3. `001111`, or `010111`, or `001111`.
> 4. `000111`.

**Complexity Analysis**
- Time: O(n); for each element, we perform up to 31 operations.
- Memory: O(1); we store up to 31 element.

**Python**
```python
class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        cnt, res = Counter(), 0
        for n in nums:
            cnt1 = Counter()
            if k & n == k:
                cnt[n] += 1
                for v, count in cnt.items():
                    cnt1[v & n] += count
                res += cnt1[k]
            cnt = cnt1
        return res    
```

**C++**
```cpp
long long countSubarrays(vector<int>& nums, int k) {
    unordered_map<int, int> cnt;
    long long res = 0;
    for (int n : nums) {
        unordered_map<int, int> cnt1;
        if ((k & n) == k) {
            cnt1[n] = 1;
            for (auto [v, count] : cnt)
                cnt1[v & n] += count;
            res += cnt1[k];
        }
        swap(cnt, cnt1);
    }
    return res;
} 
```