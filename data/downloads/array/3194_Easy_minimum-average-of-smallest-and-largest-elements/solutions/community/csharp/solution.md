# Solution By Dare2Solve | Detailed Solution

**Author:** Dare2Solve
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5356780/](https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5356780/)

---

```Explanation []
authorslog.vercel.app/blog/DtWuGdyF0r
```

# Code

```cpp []
class Solution {
public:
    double minimumAverage(std::vector<int>& nums) {
        int res = 100;
        sort(nums.begin(), nums.end());
        for (int i = 0; i < nums.size() / 2; ++i) {
            res = min(res, nums[i] + nums[nums.size() - i - 1]);
        }
        return res / 2.0;
    }
};
```

```python []
class Solution:
    def minimumAverage(self, nums: List[int]) -> float:
        nums.sort()
        res = 100
        for i in range(len(nums) // 2):
            res = min(res, nums[i] + nums[len(nums) - i - 1])
        return res / 2
```

```java []
class Solution {
    public double minimumAverage(int[] nums) {
        double res = 100;
        Arrays.sort(nums);
        for (int i = 0; i < nums.length / 2; ++i) {
            res = Math.min(res, nums[i] + nums[nums.length - i - 1]);
        }
        return res / 2;
    }
}
```

```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
  var res = 100;
  nums.sort((a, b) => a - b);
  for (var i = 0; i < nums.length >> 1; ++i) {
    res = Math.min(res, nums[i] + nums[nums.length - i - 1]);
  }
  return res / 2;
};
```

```golang []
func minimumAverage(nums []int) float64 {
    sort.Ints(nums)
    res := 100.0
    for i := 0; i < len(nums)/2; i++ {
        res = math.Min(res, float64(nums[i]+nums[len(nums)-i-1]))
    }
    return res / 2
}
```

```csharp []
public class Solution {
    public double MinimumAverage(int[] nums) {
        double res = 100;
        Array.Sort(nums);
        for (int i = 0; i < nums.Length / 2; ++i) {
            res = Math.Min(res, nums[i] + nums[nums.Length - i - 1]);
        }
        return res / 2;
    }
}
```