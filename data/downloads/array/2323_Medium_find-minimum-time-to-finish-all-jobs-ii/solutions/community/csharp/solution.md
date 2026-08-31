# Two pointers with sorting

**Author:** remedydev
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/5449706/](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/5449706/)

---

# Approach
Finish the shortest job with least amount of workers

# Complexity
- Time complexity:
$$O(nLogn)$$

- Space complexity:
$$O(1)$$

# Code
```
public class Solution {
    public int MinimumTime(int[] jobs, int[] workers) {
        Array.Sort(jobs);
        Array.Sort(workers);

        int i=0,j=0,ans=0;
        while(i<jobs.Length && j<workers.Length){
            int daysNeeded=(int)Math.Ceiling((double)jobs[j]/workers[i]); // if we have a leftover hours we round it to the whole day
            ans=Math.Max(ans,daysNeeded);
            i++;j++; 
        }
        return ans;
    }
}
```