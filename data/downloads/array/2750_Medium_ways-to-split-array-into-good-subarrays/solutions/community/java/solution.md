# [Java/Python 3] Sliding Window w/ analysis.

**Author:** rock
**Votes:** 17
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/3679119/](https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/3679119/)

---

Let us study the first example given in the problem: 
Input: nums = `[0,1,0,0,1]`
Output: `3`
Explanation: There are `3` ways to split nums into good subarrays:
- [0,1] [0,0,1]
- [0,1,0] [0,1]
- [0,1,0,0] [1]
 
 
1. Traverse the input array, before encountering first `1`, there is NO good subarray at all. Therefore, we initialize the `cnt` as `0`;
2. After finding the first `1`, we at least can have `1` good subarray and hence we change `cnt` from `0` to `1`;
3. Then the sliding window starts: the previous `1` as lower bound, `lo`, exclusively, next `1` as upper bound, `hi`, inclusively (we can refer to the above example for more details.); for each sliding window, we multiply its width, `hi - lo`, to `cnt`;
4. Repeat step 3 till the end of the input, and the result modulo `1_000_000_007` is the solution.
 

```java
    public int numberOfGoodSubarraySplits(int[] nums) {
        long cnt = 0;
        for (int lo = -1, hi = 0; hi < nums.length; ++hi) {
            if (nums[hi] == 1) {
                if (cnt == 0) {
                    cnt = 1;
                }else {
                    cnt *= hi - lo;
                    cnt %= 1_000_000_007;
                }
                lo = hi;
            }
        }
        return (int)cnt;
    }
```

```python
    def numberOfGoodSubarraySplits(self, nums: List[int]) -> int:
        cnt = 0
        lo = -1
        for hi, b in enumerate(nums):
            if b == 1:
                if cnt == 0:
                    cnt = 1
                else:
                    cnt *= hi - lo
                    cnt %= 10 ** 9 + 7
                lo = hi
        return cnt
```
**Analysis:**

Time: `O(n)`, space: `O(1)`, where `n = nums.length`.

----


Please
# Upvote

if the post is helpful for you.