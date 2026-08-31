# Solution By Dare2Solve | Detailed Explanation | O(n)

**Author:** Dare2Solve
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/5354004/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/5354004/)

---

```Explanation []
authorslog.vercel.app/blog/cfZuEWvXV1
```

# Code

```cpp []
class Solution {
public:
    int minOperations(vector<int>& nums) {
        int res = 0;
        int n = nums.size();

        for (int i = 0; i < n - 2; ++i) {
            if (nums[i] == 0) {
                nums[i] = 1;
                nums[i + 1] = nums[i + 1] ? 0 : 1;
                nums[i + 2] = nums[i + 2] ? 0 : 1;
                ++res;
            }
        }

        return nums[n - 1] && nums[n - 2] ? res : -1;
    }
};
```

```Python []
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        res = 0
        n = len(nums)

        for i in range(n - 2):
            if nums[i] == 0:
                nums[i] = 1
                nums[i + 1] = 0 if nums[i + 1] == 1 else 1
                nums[i + 2] = 0 if nums[i + 2] == 1 else 1
                res += 1

        return res if nums[n - 1] == 1 and nums[n - 2] == 1 else -1
```

```Java []
class Solution {
    public int minOperations(int[] nums) {
        int res = 0;
        int n = nums.length;

        for (int i = 0; i < n - 2; ++i) {
            if (nums[i] == 0) {
                nums[i] = 1;
                nums[i + 1] = nums[i + 1] == 1 ? 0 : 1;
                nums[i + 2] = nums[i + 2] == 1 ? 0 : 1;
                ++res;
            }
        }

        return nums[n - 1] == 1 && nums[n - 2] == 1 ? res : -1;
    }
}
```

```JavaScript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  var res = 0;
  var n = nums.length;
  for (var i = 0; i < n - 2; ++i) {
    if (nums[i] === 0) {
      nums[i] = 1;
      nums[i + 1] = nums[i + 1] ? 0 : 1;
      nums[i + 2] = nums[i + 2] ? 0 : 1;
      ++res;
    }
  }
  return nums[n - 1] && nums[n - 2] ? res : -1;
};
```

```Go []
func minOperations(nums []int) int {
    res := 0
    n := len(nums)
    for i := 0; i < n-2; i++ {
        if nums[i] == 0 {
            nums[i] = 1
            if nums[i+1] == 1 {
                nums[i+1] = 0
            } else {
                nums[i+1] = 1
            }
            if nums[i+2] == 1 {
                nums[i+2] = 0
            } else {
                nums[i+2] = 1
            }
            res++
        }
    }
    if nums[n-1] == 1 && nums[n-2] == 1 {
        return res
    } else {
        return -1
    }
}
```

```csharp []
public class Solution {
    public int MinOperations(int[] nums) {
        int res = 0;
        int n = nums.Length;

        for (int i = 0; i < n - 2; ++i) {
            if (nums[i] == 0) {
                nums[i] = 1;
                nums[i + 1] = nums[i + 1] == 1 ? 0 : 1;
                nums[i + 2] = nums[i + 2] == 1 ? 0 : 1;
                ++res;
            }
        }

        return nums[n - 1] == 1 && nums[n - 2] == 1 ? res : -1;
    }
}
```