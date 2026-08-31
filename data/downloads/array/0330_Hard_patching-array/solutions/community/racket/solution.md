# ✅ Quick solution explained (really explained)

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/patching-array/solutions/5323899/](https://leetcode.com/problems/patching-array/solutions/5323899/)

---

# Intuition
We could write a simulation using `Set` and `backtracking`, but we would get a *Memory Limit Exceeded* error. What a disappointment. \uD83D\uDE2B So, we need a solution that does not store all the combinations in memory.

Here are the key considerations:

1. The array is already sorted.
2. By adding a value to a consecutive sequence, we will double its size. In other words, if we have `[1, 2, 3]`, adding 4 to it gives us `[1, 2, 3, 4, 5, 6, 7]`. The new length is 2 * len(nums) + 1.
3. Doubling a consecutive sequence results in another consecutive sequence.
4. Doubling the consecutive sequence will overwrite all subsequent non-consecutive parts of the array, so we do not need to consider them in our solution.

You can calculate the combinations with the next code to make sure I don't deceive you:
``` python
def combinations(nums):
    res = set()
    def backtrack(start, acc):
        if acc > 0:
            res.add(acc)
        for i in range(start, len(nums)):
            backtrack(i + 1, acc + nums[i])
        
    backtrack(0, 0)
    return res

combinations([1, 2, 3])
```

The result is `{1, 2, 3, 4, 5, 6}`


So, let's say again: in a sequence `[1, 3, 4]`, we need to add `2` to form a consecutive sequence, which will be doubled to `[1, 3, **2**, 4, 1 + 2, 3 + 2, 4 + 2] = [1, 2, 3, 4, 5, 6]`. (`1 + 2` gives us `3`, but 3 is already present because we keep only unique numbers.)


# Approach
Our goal is to build a consecutive sequence. We will track the missing number and double the consecutive sequence as needed.

Algorithm:
1. Initiate `missing` with 1. It is our starting point.
2. Check if `missing` is present in the current sequence. If not, move it forward by adding `nums[i]`. (The consecutive sequence is doubled, which is why we add `nums[i]`.)
3. If we find a gap or `nums` ends, it means we need a patch. We will double the `missing` and increment `count`.


# Complexity
- Time complexity:
$$O(N)$$

- Space complexity:
$$O(1)$$

# Code
``` java []
class Solution {
    public int minPatches(int[] nums, int n) {
        long missing = 1;
        int count = 0;
        int i = 0;
        while (missing <= n) {
            if (i < nums.length && nums[i] <= missing) {
                missing += nums[i];
                i++;
            } else {
                missing += missing;
                count++;
            }
        }

        return count;
    }
}
```
``` c []
int minPatches(int* nums, int numsSize, int n) {
    long missing = 1;
    int count = 0;
    int i = 0;

    while (missing <= n) {
        if (i < numsSize && nums[i] <= missing) {
            missing += nums[i++];
        } else {
            missing += missing;
            count++;
        }
    }

    return count;
}
```
``` cpp []
class Solution {
public:
    int minPatches(vector<int>& nums, int n) {
        long missing = 1;
        int i = 0;
        int count = 0;
        while (missing <= n) {
            if (i < nums.size() && nums[i] <= missing) {
                missing += nums[i++];
            } else {
                missing += missing;
                count++;
            }
        }

        return count;
    }
};
```
``` python []
class Solution(object):
    def minPatches(self, nums, n):
        missing = 1
        count = 0
        i = 0
        while missing <= n:
            if i < len(nums) and nums[i] <= missing:
                missing += nums[i]
                i += 1
            else:
                count += 1
                missing += missing
        return count
```
``` javascript []
var minPatches = function(nums, n) {
    var missing = 1;
    var count = 0;
    var i = 0;

    while (missing <= n) {
        if (i < nums.length && nums[i] <= missing) {
            missing += nums[i++];
        } else {
            missing += missing;
            count++;
        }
    }

    return count;
};
```
``` php []
class Solution {
    function minPatches($nums, $n) {
        $missing = 1;
        $count = 0;
        $i = 0;
        while ($missing <= $n) {
            if ($i < count($nums) && $nums[$i] <= $missing) {
                $missing += $nums[$i++];
            } else {
                $missing += $missing;
                $count++;
            }
        }

        return $count;
    }
}
```
``` golang []
func minPatches(nums []int, n int) int {
    missing := 1
    i := 0
    count := 0

    for missing <= n {
        if i < len(nums) && nums[i] <= missing {
            missing += nums[i]
            i += 1
        } else {
            missing += missing
            count += 1
        }
    }

    return count
}
```
``` ruby []
def min_patches(nums, n)
    missing = 1
    count = 0
    i = 0

    while missing <= n
        if i < nums.length && nums[i] <= missing
            missing += nums[i]
            i += 1
        else
            missing += missing
            count += 1
        end
    end

    return count
end
```
``` rust []
impl Solution {
    pub fn min_patches(nums: Vec<i32>, n: i32) -> i32 {
        let mut count = 0;
        let mut missing : i64 = 1;
        let mut i = 0;

        while missing <= n as i64 {
            if i < nums.len() && nums[i] as i64 <= missing {
                missing += nums[i] as i64;
                i += 1;
            } else {
                missing += missing;
                count += 1;
            }
        }

        return count
    }
}
```
``` racket []
(define (min-patches nums n)
    (let loop ([missing 1]
               [count 0]
               [nums nums])
        (cond [(> missing n) count]
              [(and (not (null? nums)) (<= (car nums) missing)) (loop (+ missing (car nums)) count (cdr nums))]
              [else (loop (+ missing missing) (add1 count) nums)])))
```

If you found this helpful, please give it a thumbs up! \uD83D\uDC4D
