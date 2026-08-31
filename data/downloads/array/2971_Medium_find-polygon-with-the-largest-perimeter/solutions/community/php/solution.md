# ✅ fastest 1ms explained java || javascript || Go || python || php 👍

**Author:** codeninja8
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/solutions/4731418/](https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/solutions/4731418/)

---

As you may see the standard solution (sort and find max) isn't the fastest.

The fastest solution is to find the perimeter without sorting.
The algorithm:
1. find the maximum element
2. calculate the `sum`
3. test `sum - max > max`
4. if it's true return the sum
5. otherwise, remove the max element from `nums` and repeat from 1

to remove an element in some languages, I just set it's value to -1. In some languages you can delete them directly from the array, but it's not always fast. You can also consider moving the max element to the end of array, thought.

The java code is a bit sloppy since I tried no to calculate the sum on each step. You can simply do `sum = sum - max`

```java []
class Solution {
    private int maxId(int[] nums) {
        int max = -1;
        int maxIdx = -1;
        for (int i = 0; i < nums.length; i++) {
            if (max < nums[i]) {
                maxIdx = i;
                max = nums[i];
            }
        }

        return maxIdx;
    }

    public long largestPerimeter(int[] nums) {
        if (nums.length < 3) {
            return -1;
        }

        long sum = 0;
        int max = -1;
        int maxIdx = -1;
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (max < nums[i]) {
                maxIdx = i;
                max = nums[i];
            }
        }

        if ((sum - max) > max) {
            return sum;
        }

        nums[maxIdx] = -1;

        for (int j = 2; j < nums.length; j++) {
            sum -= max;
            maxIdx = maxId(nums);
            max = nums[maxIdx];

            if ((sum - max) > max) {
                return sum;
            }
            nums[maxIdx] = -1;
        }

        return -1;
    }
}
```
```javascript []
function maxId(nums) {
    var maxIdx = -1;
    var max = -1;

    for (var i = 0; i < nums.length; i++) {
        if (max < nums[i]) {
            max = nums[i];
            maxIdx = i;
        }
    }

    return maxIdx;
}
var largestPerimeter = function(nums) {
    if (nums.length < 2) {
        return -1;
    }

    var maxIdx = -1;
    var max = -1;
    var sum = 0;

    for (var i = 0; i < nums.length; i++) {
        if (max < nums[i]) {
            max = nums[i];
            maxIdx = i;
        }
        sum += nums[i];
    }

    if (sum - max > max) {
        return sum;
    }

    nums[maxIdx] = -1;
    
    for (var i = 2; i < nums.length; i++) {
        sum -= max;
        maxIdx = maxId(nums);
        max = nums[maxIdx];

        if ((sum - max) > max) {
            return sum;
        }

        nums[maxIdx] = -1;
    }

    return -1;
};
```
```golang []
func maxId(nums []int) (int, int64) {
    var sum int64 = 0
    maxIdx := -1;
    max := -1;

    for i := 0; i < len(nums); i++ {
        if nums[i] != -1 {
            if max < nums[i] {
               max = nums[i]
               maxIdx = i
            }
            sum = sum + int64(nums[i])
        }
    }

    return maxIdx, sum
}

func largestPerimeter(nums []int) int64 {
    if len(nums) < 3 {
        return -1;
    }

    for i := 2; i < len(nums); i++ {
        maxIdx, sum := maxId(nums)
        if sum - int64(nums[maxIdx]) > int64(nums[maxIdx]) {
            return sum
        }

        nums[maxIdx] = -1
    }

    return -1;
}
```
```python []
class Solution(object):
    def largestPerimeter(self, nums):
        def maxId(nums):
            max = 0
            maxIdx = -1
            sum = 0

            for i in range(len(nums)):
                if nums[i] != -1:
                    if max < nums[i]:
                        max = nums[i]
                        maxIdx = i
                    sum += nums[i]
            return (maxIdx, sum, max)
        
        for i in range(2, len(nums)):
            maxIdx, sum, max = maxId(nums)

            if sum - max > max:
                return sum
            nums[maxIdx] = -1
        
        return -1
```
```php []
function maxId(&$nums) {
    $max = -1;
    $sum = 0;
    $maxIdx = -1;

    foreach ($nums as $key => $val) {
        if ($max < $val) {
            $max = $val;
            $maxIdx = $key;
        }
        $sum += $val;
    }

    return [$maxIdx, $sum, $max];
}

class Solution {
    function largestPerimeter($nums) {
        $count = count($nums);
        for ($i = 2; $i < $count; $i++) {
            [$maxIdx, $sum, $max] = maxId($nums);

            if ($sum - $max > $max) {
                return $sum;
            }

            unset($nums[$maxIdx]);
        }

        return -1;
    }
}
```

![Screenshot 2024-02-15 at 14.31.15.png](./images/0.png)

