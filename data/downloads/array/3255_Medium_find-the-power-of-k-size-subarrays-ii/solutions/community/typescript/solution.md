# DP approach, O(n), easy to understand, beats 100%

**Author:** java-is-best-lang
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/5662037/](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/5662037/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- The largest element is put into the result array only when the previous k elements are consecutive and ascending, so we can use DP to count how many of the previous elements are consecutive and asecending.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Use DP to count how many of the previous elements are consecutive and ascending for each element, and store them in an array.
2. Starting from `dp[k - 1]`, check to see if the number of previous consecutive and ascending elements is at least than `k`.
    - If so, add the last element of the sequence to the array.
    - If not, add `-1` to the array.
3. Return the array.
# Complexity
- Time complexity: O(n) because we iterate through the array twice.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n) because we store an integer for each value in the `dp` array.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int[] resultsArray(int[] nums, int k) {
        int[] res = new int[nums.length - k + 1];
        int[] dp = new int[nums.length];
        dp[0] = 1;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == nums[i - 1] + 1) {
                dp[i] = dp[i - 1] + 1;
            } else {
                dp[i] = 1;
            }
        }
        for (int i = 0; i < nums.length - k + 1; i++) {
            if (dp[i + k - 1] >= k) {
                res[i] = nums[i + k - 1];
            } else {
                res[i] = -1;
            }
        }
        return res;
    }
}
```
```cpp []
class Solution {
public:
    vector<int> resultsArray(vector<int>& nums, int k) {
        vector<int> res(nums.size() - k + 1);
        vector<int> dp(nums.size());
        dp[0] = 1;
        for (size_t i = 1; i < nums.size(); ++i) {
            if (nums[i] == nums[i - 1] + 1) {
                dp[i] = dp[i - 1] + 1;
            } else {
                dp[i] = 1;
            }
        }
        for (size_t i = 0; i < nums.size() - k + 1; ++i) {
            if (dp[i + k - 1] >= k) {
                res[i] = nums[i + k - 1];
            } else {
                res[i] = -1;
            }
        }
        return res;
    }
};
```
```python []
class Solution(object):
    def resultsArray(self, nums, k):
        res = [0] * (len(nums) - k + 1)
        dp = [0] * len(nums)
        dp[0] = 1
        for i in range(1, len(nums)):
            if nums[i] == nums[i - 1] + 1:
                dp[i] = dp[i - 1] + 1
            else:
                dp[i] = 1
        for i in range(len(nums) - k + 1):
            if dp[i + k - 1] >= k:
                res[i] = nums[i + k - 1]
            else:
                res[i] = -1
        return res
```
```python3 []
class Solution:
    def resultsArray(self, nums: List[int], k: int) -> List[int]:
        res = [0] * (len(nums) - k + 1)
        dp = [0] * len(nums)
        dp[0] = 1
        for i in range(1, len(nums)):
            if nums[i] == nums[i - 1] + 1:
                dp[i] = dp[i - 1] + 1
            else:
                dp[i] = 1
        for i in range(len(nums) - k + 1):
            if dp[i + k - 1] >= k:
                res[i] = nums[i + k - 1]
            else:
                res[i] = -1
        return res
```
```c []
int* resultsArray(int* nums, int numsSize, int k, int* returnSize) {
    *returnSize = numsSize - k + 1;
    int* res = (int*)malloc(*returnSize * sizeof(int));
    int* dp = (int*)malloc(numsSize * sizeof(int));
    dp[0] = 1;
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] == nums[i - 1] + 1) {
            dp[i] = dp[i - 1] + 1;
        } else {
            dp[i] = 1;
        }
    }
    for (int i = 0; i < *returnSize; i++) {
        if (dp[i + k - 1] >= k) {
            res[i] = nums[i + k - 1];
        } else {
            res[i] = -1;
        }
    }
    free(dp);
    return res;
}
```
```csharp []
public class Solution {
    public int[] ResultsArray(int[] nums, int k) {
        int[] res = new int[nums.Length - k + 1];
        int[] dp = new int[nums.Length];
        dp[0] = 1;
        for (int i = 1; i < nums.Length; i++) {
            if (nums[i] == nums[i - 1] + 1) {
                dp[i] = dp[i - 1] + 1;
            } else {
                dp[i] = 1;
            }
        }
        for (int i = 0; i < nums.Length - k + 1; i++) {
            if (dp[i + k - 1] >= k) {
                res[i] = nums[i + k - 1];
            } else {
                res[i] = -1;
            }
        }
        return res;
    }
}
```
```javascript []
var resultsArray = function(nums, k) {
    let res = new Array(nums.length - k + 1).fill(0);
    let dp = new Array(nums.length).fill(0);
    dp[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            dp[i] = dp[i - 1] + 1;
        } else {
            dp[i] = 1;
        }
    }
    for (let i = 0; i < nums.length - k + 1; i++) {
        if (dp[i + k - 1] >= k) {
            res[i] = nums[i + k - 1];
        } else {
            res[i] = -1;
        }
    }

    return res;
};
```
```typescript []
function resultsArray(nums: number[], k: number): number[] {
    let res: number[] = new Array(nums.length - k + 1).fill(0);
    let dp: number[] = new Array(nums.length).fill(0);
    dp[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            dp[i] = dp[i - 1] + 1;
        } else {
            dp[i] = 1;
        }
    }
    for (let i = 0; i < nums.length - k + 1; i++) {
        if (dp[i + k - 1] >= k) {
            res[i] = nums[i + k - 1];
        } else {
            res[i] = -1;
        }
    }
    return res;
}
```
```php []
class Solution {
    function resultsArray($nums, $k) {
        $res = array_fill(0, count($nums) - $k + 1, 0);
        $dp = array_fill(0, count($nums), 0);
        $dp[0] = 1;
        for ($i = 1; $i < count($nums); $i++) {
            if ($nums[$i] == $nums[$i - 1] + 1) {
                $dp[$i] = $dp[$i - 1] + 1;
            } else {
                $dp[$i] = 1;
            }
        }
        for ($i = 0; $i < count($nums) - $k + 1; $i++) {
            if ($dp[$i + $k - 1] >= $k) {
                $res[$i] = $nums[$i + $k - 1];
            } else {
                $res[$i] = -1;
            }
        }
        return $res;
    }
}
```
```kotlin []
class Solution {
    fun resultsArray(nums: IntArray, k: Int): IntArray {
        val res = IntArray(nums.size - k + 1)
        val dp = IntArray(nums.size)
        dp[0] = 1
        for (i in 1 until nums.size) {
            if (nums[i] == nums[i - 1] + 1) {
                dp[i] = dp[i - 1] + 1
            } else {
                dp[i] = 1
            }
        }
        for (i in 0 until nums.size - k + 1) {
            if (dp[i + k - 1] >= k) {
                res[i] = nums[i + k - 1]
            } else {
                res[i] = -1
            }
        }
        return res
    }
}
```
```dart []
class Solution {
  List<int> resultsArray(List<int> nums, int k) {
    List<int> res = List.filled(nums.length - k + 1, 0);
    List<int> dp = List.filled(nums.length, 0);
    dp[0] = 1;
    for (int i = 1; i < nums.length; i++) {
      if (nums[i] == nums[i - 1] + 1) {
        dp[i] = dp[i - 1] + 1;
      } else {
        dp[i] = 1;
      }
    }
    for (int i = 0; i < nums.length - k + 1; i++) {
      if (dp[i + k - 1] >= k) {
        res[i] = nums[i + k - 1];
      } else {
        res[i] = -1;
      }
    }
    return res;
  }
}
```
```go []
func resultsArray(nums []int, k int) []int {
    res := make([]int, len(nums)-k+1)
    dp := make([]int, len(nums))
    dp[0] = 1
    for i := 1; i < len(nums); i++ {
        if nums[i] == nums[i-1]+1 {
            dp[i] = dp[i-1] + 1
        } else {
            dp[i] = 1
        }
    }
    for i := 0; i < len(nums)-k+1; i++ {
        if dp[i+k-1] >= k {
            res[i] = nums[i+k-1]
        } else {
            res[i] = -1
        }
    }
    return res
}
```
```ruby []
def results_array(nums, k)
  res = Array.new(nums.length - k + 1, 0)
  dp = Array.new(nums.length, 0)
  dp[0] = 1
  (1...nums.length).each do |i|
    if nums[i] == nums[i - 1] + 1
      dp[i] = dp[i - 1] + 1
    else
      dp[i] = 1
    end
  end
  (0...(nums.length - k + 1)).each do |i|
    if dp[i + k - 1] >= k
      res[i] = nums[i + k - 1]
    else
      res[i] = -1
    end
  end
  res
end
```
```scala []
object Solution {
    def resultsArray(nums: Array[Int], k: Int): Array[Int] = {
        val res = Array.fill(nums.length - k + 1)(0)
        val dp = Array.fill(nums.length)(0)
        dp(0) = 1
        for (i <- 1 until nums.length) {
            if (nums(i) == nums(i - 1) + 1) {
                dp(i) = dp(i - 1) + 1
            } else {
                dp(i) = 1
            }
        }
        for (i <- 0 until nums.length - k + 1) {
            if (dp(i + k - 1) >= k) {
                res(i) = nums(i + k - 1)
            } else {
                res(i) = -1
            }
        }
        res
    }
}
```
```rust []
impl Solution {
    pub fn results_array(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let mut res = vec![0; nums.len() - k as usize + 1];
        let mut dp = vec![0; nums.len()];
        dp[0] = 1;
        for i in 1..nums.len() {
            if nums[i] == nums[i - 1] + 1 {
                dp[i] = dp[i - 1] + 1;
            } else {
                dp[i] = 1;
            }
        }
        for i in 0..(nums.len() - k as usize + 1) {
            if dp[i + k as usize - 1] >= k {
                res[i] = nums[i + k as usize - 1];
            } else {
                res[i] = -1;
            }
        }
        res
    }
}
```
