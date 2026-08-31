# Easy Approach || Sliding Window || Time Complexity: O(nlogn) || Every language

**Author:** Aryan_Tiwari_
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/6138317/](https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/6138317/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This of each number as a seperate window of size `[n - k, n + k]`.

We are able to sort the array because if multiple numbers are same then their order doesn't matter.

Can you tell me the difference between `[3, 3, 3]` and `[3, 3, 3]`?

If no, then you understand the problem.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```Java []
class Solution {
    public int maximumBeauty(int[] nums, int k) {
        Arrays.sort(nums);

        int res = 0, curr = 0;

        int left = 0;
        for (int right = 0; right < nums.length; right ++){
            while (nums[left] + k < nums[right] - k){
                curr --;
                left ++;
            }
            curr ++;
            res = Math.max(res, curr);
        }

        return res;
    }
}
```
```python3 []
class Solution:
    def maximumBeauty(self, nums: List[int], k: int) -> int:
        # Since they can be made the same number, so their order remains same
        # Time Complexity: O(nlogn)
        # Space Complexity: O(1)
        nums.sort()

        res, curr = 0, 0

        left = 0
        for right in range(len(nums)):
            while nums[left] + k < nums[right] - k:
                left += 1
                curr -= 1
            curr += 1
            res = max(res, curr)
        
        return res
```
```JavaScript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
    // Otherwise JS compaires as Strings
    nums.sort((a, b) => a - b);

    let res = 0, curr = 0;

    let left = 0;
    for (let right = 0; right < nums.length; right ++){
        while (nums[left] + k < nums[right] - k){
            curr --;
            left ++;
        }
        curr ++;
        res = Math.max(res, curr);
    }

    return res;
};
```
```C []
int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int maximumBeauty(int* nums, int numsSize, int k) {
    // Since they can be made the same number, so their order remains same
    // Time Complexity: O(nlogn)
    // Space Complexity: O(1)
    qsort(nums, numsSize, sizeof(int), compare);

    int res = 0, curr = 0;
    int left = 0, right;

    for (right = 0; right < numsSize; right++) {
        while (nums[left] + k < nums[right] - k) {
            left++;
            curr--;
        }
        curr++;
        if (curr > res) res = curr;
    }

    return res;
}
```
```C++ []
class Solution {
public:
    int maximumBeauty(vector<int>& nums, int k) {
        // Since they can be made the same number, so their order remains same
        // Time Complexity: O(nlogn)
        // Space Complexity: O(1)
        sort(nums.begin(), nums.end());

        int res = 0, curr = 0;
        int left = 0, right = 0;

        for (right = 0; right < nums.size(); right++) {
            while (nums[left] + k < nums[right] - k) {
                left++;
                curr--;
            }
            curr++;
            res = max(res, curr);
        }

        return res;
    }
};
```
```PHP []
class Solution {
    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function maximumBeauty($nums, $k) {
        sort($nums);

        $res = 0;
        $curr = 0;

        $left = 0;

        for ($right = 0; $right < count($nums); $right ++) {
            while ($nums[$left] + $k < $nums[$right] - $k) {
                $left ++;
                $curr --;
            }
            $curr ++;
            $res = max($res, $curr);
        }

        return $res;
    }
}
```
```Kotlin []
class Solution {
    fun maximumBeauty(nums: IntArray, k: Int): Int {
        // Since they can be made the same number, so their order remains same
        // Time Complexity: O(nlogn)
        // Space Complexity: O(1)
        nums.sort()

        var res = 0; var curr = 0

        var left = 0

        for (right in nums.indices) {
            while (nums[left] + k < nums[right] - k) {
                left ++
                curr --
            }
            curr ++
            res = maxOf(res, curr)
        }

        return res
    }
}
```