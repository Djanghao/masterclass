# Kotlin || O(n) time || O(1) space

**Author:** yezhizhen
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/solutions/2137399/](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/solutions/2137399/)

---

```
    fun minOperations(nums: IntArray, x: Int): Int {
        //find longest subarray sum to total_sum - x
        var target = nums.sum() - x; var sum = 0
        var l = 0; var ans = -1;
        for(r in 0 until nums.size)
        {
            sum += nums[r]
            while(l <= r && sum > target) //move left pointer
                sum -= nums[l++];
            if(target == sum)
                ans = max(ans, r - l + 1)
        }
        return if(ans == - 1) -1 else nums.size - ans
    }
```