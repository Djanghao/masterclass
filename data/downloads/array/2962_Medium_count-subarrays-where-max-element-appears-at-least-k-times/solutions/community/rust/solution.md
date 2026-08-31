# ✅ sliding window + math in java | c | python | javascript | php | go | ruby | rust | racket

**Author:** codeninja8
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4942046/](https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4942046/)

---

# Intuition
Use sliding window algorithm
Find the count of subarrays where `max` less than `k`. Subtract from the total amount of subarrays.

Total amount of subarrays can be calculated by `(n * (n + 1)) / 2` or `1 + 2 + ... + n`

# Approach
1. find `max`
2. using sliding window find subarrays where `count < k`
3. add `left` position to the result on each step

Why `res += left` ?

Let's say we calculate total amount of the subarrays
`total = 1 + 2 + ... + n`

so we add `right` position on each step `total += right + 1`
``` java
// ...
for (int right = 0; right < nums.length; right++) {
    if (nums[right] == maxVal) count++;
    // ...
    total += right + 1;
    totalLessThanK += right - left + 1;
}

return total - totalLessThanK;
```

when we need to calculate `totalLessThanK  = 1 + 2 + ... + n` it's the same but we should add the length of the current sliding windows. it is `totalLessThanK += right - left + 1`.

Next we need to `res = total - totalLessThanK` or `res += right + 1 - (right - left + 1)`
simplify
`res += right + 1 - right + left - 1`
therefore
`res += left`

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
``` java []
class Solution {
    public long countSubarrays(int[] nums, int k) {
        int maxVal = 0;

        for (int val : nums) {
            maxVal = Math.max(maxVal, val);
        }

        int left = 0;
        int count = 0;
        long res = 0;
        for (int val : nums) {
            if (val == maxVal) {
                count++;
            }

            while (count >= k) {
                if (nums[left++] == maxVal) {
                    count--;
                } 
            }

            res += left;
        }

        return res;
    }
}
```
``` c []
long long countSubarrays(int* nums, int numsSize, int k) {
    int maxVal = 0;
    for (int i = 0; i < numsSize; i++) {
        if (maxVal < nums[i]) {
            maxVal = nums[i];
        }
    }

    int count = 0;
    long res = 0;
    int left = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == maxVal) {
            count++;
        }

        while (count >= k) {
            if (nums[left++] == maxVal) {
                count--;
            }
        }

        res += left;
    }

    return res;
}
```
``` python []
class Solution(object):
    def countSubarrays(self, nums, k):
        maxVal = max(nums)
        count = left = res = 0

        for val in nums:
            if val == maxVal:
                count += 1
            while count >= k:
                if nums[left] == maxVal:
                    count -= 1
                left += 1

            res += left
        return res
```
``` javascript []
var countSubarrays = function(nums, k) {
    const maxVal = Math.max(...nums);

    var res = 0;
    var count = 0;
    var left = 0;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == maxVal) {
            count++;
        }

        while (count >= k) {
            if (nums[left++] == maxVal) {
                count--;
            }
        }

        res += left;
    }

    return res;
};
```
``` php []
class Solution {
    function countSubarrays($nums, $k) {
        $max = max($nums);

        $left = 0;
        $res = 0;
        $count = 0;

        foreach ($nums as $val) {
            if ($val == $max) {
                $count++;
            }

            while ($count >= $k) {
                if ($nums[$left++] == $max) {
                    $count--;
                }
            }

            $res += $left;
        }

        return $res;
    }
}
```
``` golang []
func countSubarrays(nums []int, k int) int64 {
    max := 0
    var left int64 = 0
    var res int64 = 0
    count := 0

    for _, val := range nums {
        if max < val {
            max = val;
        }
    }

    for _, val := range nums {
        if val == max {
            count++
        }

        for count >= k {
            if (nums[left] == max) {
                count--
            } 
            left++
        }

        res += left
    }

    return res
}
```
``` ruby []
def count_subarrays(nums, k)
    max = nums.max
    left = res = count = 0

    nums.each do |val|
        count += 1 if val == max
        while count >= k
            count -= 1 if nums[left] == max
            left += 1
        end
        res += left
    end

    res
end
```
``` rust []
impl Solution {
    pub fn count_subarrays(nums: Vec<i32>, k: i32) -> i64 {
        let max = *nums.iter().max().unwrap();

        let mut left = 0;
        let mut count = 0;
        let mut res : i64 = 0;

        for val in nums.iter() {
            if *val == max {
                count += 1;
            }

            while count >= k {
                if (nums[left] == max) {
                    count -= 1;
                }
                left += 1;
            }

            res += left as i64;
        }

        return res;
    }
}
```
``` racket []
(define (find-left left maxVal count vec k)
  (if (>= count k)
      (if (eq? (vector-ref vec left) maxVal)
          (find-left (add1 left) maxVal (sub1 count) vec k)
          (find-left (add1 left) maxVal count vec k))
      left))
      

(define (count-subarrays nums k)
  (let ([maxVal (foldl max 0 nums)]
        [vec (list->vector nums)])
    (let while ([left 0]
                [nums nums]
                [count 0])
      (if (null? nums)
          left
          (if (eq? (car nums) maxVal)
              (+ left (while (find-left left maxVal (add1 count) vec k) (cdr nums) (if (>= (add1 count) k) (sub1 k) (add1 count))))
              (+ left (while (find-left left maxVal count vec k) (cdr nums) count)))))))
```

Good luck \uD83D\uDC4D
