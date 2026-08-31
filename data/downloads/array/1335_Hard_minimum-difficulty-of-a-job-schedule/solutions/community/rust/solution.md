# ✅ [Python/Rust] bottom-up and top-down DP solutions (with detailed comments)

**Author:** iablokov
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/2711423/](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/2711423/)

---

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**

**Python.** This [**solution**](https://leetcode.com/submissions/detail/823720463/) employs a top-down recursive DP approach. It demonstrated **1157 ms runtime (80.04%)** and used **15.4 MB memory (22.15%)**. Time complexity is: **O(n\\*n\\*d)**. Space complexity is: **O(n\\*d)**. 
```
class Solution:
    def minDifficulty(self, job_diff: list[int], d: int) -> int:
        
        # this helper function performs a DP-based exploration
        # of possible combinations (with activated cache);
        # it returns schedule difficulty for the sublist 'job_diff[i:]'
        # with the allowed number of subdivisions that equals 'd'
        @functools.cache
        def dp(i: int, d: int) -> int:

            # [1] branches with more than 'd' divisions are not
            #     allowed, thus, penalized with infinite score
            if d < 0 : return inf
                        
            this_day_diff = 0
            schedule_diff = inf
            last_idx = min(n-d+1,n)
            
            # [2] this problem allows splitting the calculations
            #     into two parts:
            #     - difficulty for this day
            #     - cumulative difficulty for all next days
            #     we search for min across all 'this+next' combinations
            for ii in range(i, last_idx):
                this_day_diff  = max(this_day_diff, job_diff[ii])
                next_days_diff = dp(ii+1, d-1) if ii + 1 < len(job_diff) else 0
                schedule_diff  = min(schedule_diff, this_day_diff + next_days_diff)
            
            return schedule_diff
        
        n = len(job_diff)
        
        # [a] trivial case
        if d > len(job_diff): return -1
        
        # [b] typical case
        return  dp(0, d)

```

**Rust.** This [**solution**](https://leetcode.com/submissions/detail/823925102/) employs a bottom-up iterative DP approach. It demonstrated **6 ms runtime (100.00%)** and used **2.1 MB memory (92.86%)**. Time complexity is: **O(n\\*n\\*d)**. Space complexity is: **O(n\\*d)**. 
```
impl Solution 
{
    pub fn min_difficulty(job_diff: Vec<i32>, days: i32) -> i32 
    {
        let jobs = job_diff.len() as usize;
        let days = days as usize;

        // [1] trivial case
        if days > jobs { return -1; }

        // [2] as a collection of state variables for bottom-up DP, we
        //     use a matrix where for each job and for each day we compute
        //     the minimal possible schedule difficulty that is attainable
        //     when considering all following days (yes, we iterate in 
        //     reverse order, thus, reproducing in some sense the logic
        //     of the Python top-down solution above) 
        let mut schedule_diff = vec![vec![i32::MAX;days+1];jobs+1];
        schedule_diff[jobs][days] = 0;
        
        // [3] iteratively update DP state starting from the last day  
        //     and last job till we reach first day and first job;
        //     when considering some day, we have to keep track of 
        //     indices such that there is always room for at least one
        //     job in each of preceding and following days;
        for d in (0..days).rev()
        {
            let last_idx = jobs - days + d;
            for j in (d..=last_idx).rev()
            {
                let mut this_day_diff = 0;
                for i in (j..=last_idx)
                {
                    this_day_diff = this_day_diff.max(job_diff[i]);
                    if schedule_diff[i+1][d+1] < i32::MAX
                    {
                        // [4] magic happens here: for each day 'd' and each job 'j', we test
                        //     whether the cumulative difficulty for jobs [j,i] on day 'd' 
                        //     together with jobs [i+1,n) on days [d+1,days) is less than
                        //     the currently attained value for some other 'i'
                        schedule_diff[j][d] = schedule_diff[j][d].min(this_day_diff + schedule_diff[i+1][d+1]);
                    }
                }
            }
        }

        // [5] in the end, the minimal attainable schedule difficulty
        //     will be stored as the DP state for day=0 and job=0
        return schedule_diff[0][0];
    }
}
```