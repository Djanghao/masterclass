# ✅ [Python/Rust/C++] simple idea, fast solution (with detailed comments)

**Author:** iablokov
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/2721499/](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/2721499/)

---

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
**** 
**Comment.** The idea behind the solution is simple. Each time we encounter an in-range number, we should first check that both *minK* and *maxK* are present in the current contiguous sequence of in-range numbers (i.e., since the last out-of-range number), then add all intervals that incorporate at least one *minK* and at least one *maxK*.
**** 
**Python.** This [**solution**](https://leetcode.com/submissions/detail/825824488/) employs smart counting of subarrays. It demonstrated **922 ms runtime (92.88%)** and used **28.7 MB memory (54.56%)**. Time complexity is linear: **O(N)**. Space complexity is constant: **O(1)**.
```
class Solution:
    def countSubarrays(self, nums: List[int], minK: int, maxK: int) -> int:
        
        # [1] storage for indices of the last encountered
        #     types of numbers (minK, maxK and out-of-range)
        last_out = -1
        last_min = -1
        last_max = -1
        
        count = 0
        
        for i,n in enumerate(nums):
            
            if minK <= n <= maxK: 
                if n == minK : last_min = i
                if n == maxK : last_max = i
                # [2] magic happens here: if on current iteration the
                #     number 'n' falls in a given range, then we:
                #     - first, ensure that both minK and maxK have been
                #       seen after the last ouf-range-number;
                #     - second, we add all intervals that start right after
                #       the last out-of-range number and incorporate
				#       at least one minK and at least one maxK
                count += max(min(last_min, last_max) - last_out, 0)
            else:
                last_out = i
            
        return count
```
**** 
**Rust.** This [**solution**](https://leetcode.com/submissions/detail/825817964/) employs smart counting of subarrays. It demonstrated **12 ms runtime (100.00%)** and used **3.5 MB memory (30.00%)**. Time complexity is linear: **O(N)**. Space complexity is constant: **O(1)**.
```
impl Solution 
{
    pub fn count_subarrays(nums: Vec<i32>, min_k: i32, max_k: i32) -> i64 
    {
        // [1] storage for indices of the last encountered
        //     types of numbers (min_k, max_k and out-of-range)
        let mut last_out : i64 = -1;
        let mut last_min : i64 = -1;
        let mut last_max : i64 = -1;

        let mut count    : i64 = 0;

        for (i,n) in nums.into_iter().enumerate()
        {
            if min_k <= n && n <= max_k
            {
                if n == min_k { last_min = i as i64; }
                if n == max_k { last_max = i as i64; }

                // [2] magic happens here: if on current iteration the
                //     number 'n' falls in a given range, then we:
                //     - first, ensure that both min_k and max_k have been
                //       seen after the last ouf-range-number;
                //     - second, we add all intervals that start right after
                //       the last out-of-range number and incorporate 
				//       at least one min_k and at least one max_k
                count += 0i64.max(last_min.min(last_max) - last_out);
            }
            else { last_out = i as i64; }
        }

        return count;
    }
}
```
**** 
**\u0421++.** This [**solution**](https://leetcode.com/submissions/detail/825826930/) employs smart counting of subarrays. It demonstrated **72 ms runtime (100.0%)** and used **70.2 MB memory (91.02%)**. Time complexity is linear: **O(N)**. Space complexity is constant: **O(1)**.
```
#include <algorithm>

class Solution 
{
public:
    long long countSubarrays(vector<int>& nums, int minK, int maxK) 
    {
        // [1] storage for indices of the last encountered
        //     types of numbers (minK, maxK and out-of-range)
        long long last_out = -1;
        long long last_min = -1;
        long long last_max = -1;
        
        long long count    = 0;
        
        for (int i = 0; i < nums.size(); i++)
        {
            if (minK <= nums[i] && nums[i] <= maxK)
            {
                if (nums[i] == minK) last_min = i;
                if (nums[i] == maxK) last_max = i;

                // [2] magic happens here: if on current iteration the
                //     number 'n' falls in a given range, then we:
                //     - first, ensure that both minK and maxK have been
                //       seen after the last ouf-range-number;
                //     - second, we add all intervals that start right
                //       the last out-of-range number and incorporate 
				//       at least one minK and at least one maxK
                count += max(0LL, min(last_min, last_max) - last_out);
            }
            else last_out = i;
        }

        return count;
    }
};
```
