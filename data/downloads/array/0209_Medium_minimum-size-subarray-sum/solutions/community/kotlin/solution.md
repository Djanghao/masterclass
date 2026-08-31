# Simple Solution | Beginner friendly| Easy to Understand| cJava |Python 3 | C++ | Koylin | Javascript

**Author:** antovincent
**Votes:** 14
**Link:** [https://leetcode.com/problems/minimum-size-subarray-sum/solutions/3725068/](https://leetcode.com/problems/minimum-size-subarray-sum/solutions/3725068/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Uses a two-pointer approach to find the minimum subarray length whose sum is greater than or equal to the target value. The two pointers, l and r, represent the left and right boundaries of the subarray, respectively.

# Approach
<!-- Describe your approach to solving the problem. -->
- Initialize l, r, res (result), and s (current sum) to appropriate initial values.
- Iterate through the array nums using the right pointer r.
- Update the current sum s by adding the element at r to it.
- Check if the current sum s is greater than or equal to the target value. If true, proceed to the next steps. Otherwise, continue to the next iteration.
- Enter a while loop to shrink the subarray from the left side. Subtract the element at l from the current sum s and increment l by 1. This step is done to find the minimum length subarray.
- Update the result res by taking the minimum between its current value and the length of the subarray from l to r plus 1 (adding 1 because the indices are 0-based).
- Repeat steps 5 and 6 until the current sum s is less than the target value.
- After the loop ends, check if the result res is still equal to its initial value, Integer.MAX_VALUE. If true, it means no subarray was found with a sum greater than or equal to the target value, so return 0.
- Return the minimum length of the subarray found.

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```java []
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int l=0,r=0,res=Integer.MAX_VALUE,s=0;
        for(r=0;r<nums.length;r++){
              s+=nums[r];
              while(s>=target){
                  s-=nums[l];
                  res = Math.min(res,r-l+1);
                  l++;
              }
        }
        if(res==Integer.MAX_VALUE)
        return 0;
        return res;
    }
}
```
```C++ []
class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
         int l = 0, r = 0, res = std::numeric_limits<int>::max(), s = 0;
        for (r = 0; r < nums.size(); r++) {
            s += nums[r];
            while (s >= target) {
                s -= nums[l];
                res = std::min(res, r - l + 1);
                l++;
            }
        }
        if (res == std::numeric_limits<int>::max())
            return 0;
        return res;
    }
};
```
```python3 []

class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        l = 0
        res = float('inf')
        s = 0
        
        for r in range(len(nums)):
            s += nums[r]
            
            while s >= target:
                res = min(res, r - l + 1)
                s -= nums[l]
                l += 1
        
        return res if res != float('inf') else 0
```
```Javascript []
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let l = 0;
    let res = Infinity;
    let s = 0;

    for (let r = 0; r < nums.length; r++) {
        s += nums[r];

        while (s >= target) {
            res = Math.min(res, r - l + 1);
            s -= nums[l];
            l++;
        }
    }

    return res !== Infinity ? res : 0;
};
```
```Kotlin []
class Solution {
    fun minSubArrayLen(target: Int, nums: IntArray): Int {
         var l = 0
        var res = Int.MAX_VALUE
        var s = 0

        for (r in nums.indices) {
            s += nums[r]

            while (s >= target) {
                res = minOf(res, r - l + 1)
                s -= nums[l]
                l++
            }
        }

        return if (res != Int.MAX_VALUE) res else 0
    }
}
```
```C# []
public class Solution {
    public int MinSubArrayLen(int target, int[] nums) {
        int l = 0;
        int res = int.MaxValue;
        int s = 0;

        for (int r = 0; r < nums.Length; r++) {
            s += nums[r];

            while (s >= target) {
                res = Math.Min(res, r - l + 1);
                s -= nums[l];
                l++;
            }
        }

        return res != int.MaxValue ? res : 0;
    }
}
```
```php []
class Solution {

    /**
     * @param Integer $target
     * @param Integer[] $nums
     * @return Integer
     */
    function minSubArrayLen($target, $nums) {
        $l = 0;
        $res = PHP_INT_MAX;
        $s = 0;

        for ($r = 0; $r < count($nums); $r++) {
            $s += $nums[$r];

            while ($s >= $target) {
                $res = min($res, $r - $l + 1);
                $s -= $nums[$l];
                $l++;
            }
        }

        return $res != PHP_INT_MAX ? $res : 0;
    }
}
```
```c []
int minSubArrayLen(int target, int* nums, int numsSize) {
    int l = 0, r = 0, res = INT_MAX, s = 0;
    for (r = 0; r < numsSize; r++) {
        s += nums[r];
        while (s >= target) {
            s -= nums[l];
            res = (res < r - l + 1) ? res : r - l + 1;
            l++;
        }
    }
    if (res == INT_MAX)
        return 0;
    return res;
}
```
```TypeScript []
function minSubArrayLen(target: number, nums: number[]): number {
 let l = 0;
    let res = Infinity;
    let s = 0;

    for (let r = 0; r < nums.length; r++) {
        s += nums[r];

        while (s >= target) {
            res = Math.min(res, r - l + 1);
            s -= nums[l];
            l++;
        }
    }

    return res !== Infinity ? res : 0;
};

```

