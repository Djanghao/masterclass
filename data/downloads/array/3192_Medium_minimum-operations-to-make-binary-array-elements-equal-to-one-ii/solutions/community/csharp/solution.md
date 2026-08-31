# Solution By Dare2Solve | Detailed Explanation | O(n)

**Author:** Dare2Solve
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/solutions/5353542/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/solutions/5353542/)

---

``` Explanation []
authorslog.vercel.app/blog/Up4xbTmWPR
```

# Code

```C++ []
class Solution {
public:
    int minOperations(vector<int>& nums) {
        bool flag = true;
        int res = 0;
        int n = nums.size();
        for (int i = 0; i < n; ++i) {
            if ((nums[i] != 0) != flag) {
                flag = !flag;
                ++res;
            }
        }
        return res;
    }
};
```

```Python []
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        flag = True
        res = 0
        n = len(nums)
        for i in range(n):
            if (nums[i] != 0) != flag:
                flag = not flag
                res += 1
        return res
```

```Java []
public class Solution {
    public int minOperations(List<Integer> nums) {
        boolean flag = true;
        int res = 0;
        int n = nums.size();
        for (int i = 0; i < n; ++i) {
            if ((nums.get(i) != 0) != flag) {
                flag = !flag;
                ++res;
            }
        }
        return res;
    }
}
```

```JavaScript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  var flag = true;
  var res = 0;
  var n = nums.length;
  for (var i = 0; i < n; ++i) {
    if (nums[i] ^ flag) {
      flag = !flag;
      ++res;
    }
  }
  return res;
};
```

```Go []
func minOperations(nums []int) int {
	flag := true
	res := 0
	n := len(nums)
	for i := 0; i < n; i++ {
		if (nums[i] != 0) != flag {
			flag = !flag
			res++
		}
	}
	return res
}
```

```csharp []
public class Solution {
    public int MinOperations(List<int> nums) {
        bool flag = true;
        int res = 0;
        int n = nums.Count;
        for (int i = 0; i < n; ++i) {
            if ((nums[i] != 0) != flag) {
                flag = !flag;
                ++res;
            }
        }
        return res;
    }
}
```