# Neither Minimum nor Maximum | O(n) | Easy

**Author:** sourasb
**Votes:** 2
**Link:** [https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/3623798/](https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/3623798/)

---

## Time Complexity : O(n)
## Space Complexity : O(1)

```java []
class Solution {
    public int findNonMinOrMax(int[] nums) {
        if(nums.length<=2) return -1;
        int min = Arrays.stream(nums).min().getAsInt();
        int max = Arrays.stream(nums).max().getAsInt();
        for (int num : nums) {
            if (num != min && num != max) {
                return num;
            }
        }
        return -1;
    }
}
```
```cpp []
class Solution {
public:
    int findNonMinOrMax(vector<int>& nums) {
        if (nums.size() <= 2) return -1;
        int min_num = *std::min_element(nums.begin(), nums.end());
        int max_num = *std::max_element(nums.begin(), nums.end());
        for (int num : nums) {
            if (num != min_num && num != max_num) {
                return num;
            }
        }
        return -1;
    }
};
```
```python []
class Solution:
    def findNonMinOrMax(self, nums: List[int]) -> int:
        if len(nums) <= 2:
            return -1
        min_num = min(nums)
        max_num = max(nums)
        for num in nums:
            if num != min_num and num != max_num:
                return num
        return -1
```
```golang []
func findNonMinOrMax(nums []int) int {
    if len(nums) <= 2 {
		return -1
	}
	min_num := math.MaxInt64
	max_num := math.MinInt64
	for _, num := range nums {
		if num < min_num {
			min_num = num
		}
		if num > max_num {
			max_num = num
		}
	}
	for _, num := range nums {
		if num != min_num && num != max_num {
			return num
		}
	}
	return -1
}
```
```scala []
object Solution {
    def findNonMinOrMax(nums: Array[Int]): Int = {
        if (nums.length <= 2) return -1
        val min_num = nums.min
        val max_num = nums.max
        for (num <- nums) {
            if (num != min_num && num != max_num) {
                return num
            }
        }
        return -1
    }
}
```
