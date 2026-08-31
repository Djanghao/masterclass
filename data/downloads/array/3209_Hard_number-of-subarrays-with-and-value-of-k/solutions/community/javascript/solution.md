# Solution By Dare2Solve | Detailed Explanation | Clean Code

**Author:** Dare2Solve
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/solutions/5429360/](https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/solutions/5429360/)

---

```Explanation []
authorslog.vercel.app/blog/z2x9Upxx2f
```

# Code

```cpp []
class Solution {
public:
    long long countSubarrays(vector<int>& nums, int k) {
        unordered_map<int, long long> map;
        long long res = 0;

        for (int x : nums) {
            unordered_map<int, long long> map2;
            for (auto& [y, count] : map) {
                map2[y & x] += count;
            }
            map2[x] += 1;
            map = map2;
            res += map[k];
        }

        return res;
    }
};
```

```python []
class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        map = {}
        res = 0

        for x in nums:
            map2 = {}
            for y in map:
                map2[y & x] = map2.get(y & x, 0) + map[y]
            map2[x] = map2.get(x, 0) + 1
            map = map2
            res += map.get(k, 0)

        return res
```

```java []
class Solution {
    public long countSubarrays(int[] nums, int k) {
        Map<Integer, Long> map = new HashMap<>();
        long res = 0;

        for (int x : nums) {
            Map<Integer, Long> map2 = new HashMap<>();
            for (int y : map.keySet()) {
                map2.put(y & x, map2.getOrDefault(y & x, 0L) + map.get(y));
            }
            map2.put(x, map2.getOrDefault(x, 0L) + 1);
            map = map2;
            res += map.getOrDefault(k, 0L);
        }

        return res;
    }
}
```

```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    var map = {};
    var res = 0;

    for (var x of nums) {
        var map2 = {};
        for (var y in map) {
            map2[y & x] = (map2[y & x] || 0) + map[y];
        }
        map2[x] = (map2[x] || 0) + 1;
        map = map2;
        res += map[k] || 0;
    }

    return res;
};
```