# C# Solution for Maximum Profit In Job Scheduling Problem

**Author:** Aman_Raj_Sinha
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/4516365/](https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/4516365/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem aims to maximize the profit by selecting non-overlapping jobs. Sorting the jobs by their end times allows us to iteratively consider jobs in ascending order of their end times and choose the most profitable sequence without overlap.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Job Representation: Create a Job class to hold the start time, end time, and profit of each job.
2.	Sort by End Times: Store job details in a List<Job> and sort them based on end times.
3.	Dynamic Programming: Utilize an array dp to track the maximum profit achievable at each job index.
4.	Iterate through Jobs: Loop through the sorted jobs and compute the maximum profit considering non-overlapping jobs.
	\u2022	For each job, compute the maximum profit by either considering the current job or the previously calculated maximum profit.
	\u2022	Check for non-overlapping conditions and update the maximum profit accordingly.
5.	Return Maximum Profit: Return dp[n], which holds the maximum profit achievable considering all jobs.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Constructing the Job objects takes O(n) time.
\u2022	Sorting the jobs based on end times using List.Sort takes O(n log n) time.
\u2022	The dynamic programming loop has two nested loops, resulting in O(n^2) iterations.
\u2022	Overall, the time complexity is dominated by the sorting step, making it O(n log n) due to the sorting of jobs.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	The jobs list holds the job details, which takes O(n) space.
\u2022	The dp array takes O(n) space to store the maximum profits at each index.
\u2022	Additional space for the Job class and other variables is negligible compared to the input size.
\u2022	Thus, the space complexity is O(n).

# Code
```
public class Solution {
    public int JobScheduling(int[] startTime, int[] endTime, int[] profit) {
        int n = startTime.Length;
        List<Job> jobs = new List<Job>();
        
        for (int i = 0; i < n; i++) {
            jobs.Add(new Job(startTime[i], endTime[i], profit[i]));
        }
        
        jobs.Sort((x, y) => x.EndTime.CompareTo(y.EndTime));
        
        int[] dp = new int[n + 1];
        
        for (int i = 1; i <= n; i++) {
            dp[i] = Math.Max(dp[i - 1], jobs[i - 1].Profit);
            for (int j = i - 1; j > 0; j--) {
                if (jobs[i - 1].StartTime >= jobs[j - 1].EndTime) {
                    dp[i] = Math.Max(dp[i], dp[j] + jobs[i - 1].Profit);
                    break;
                }
            }
        }
        
        return dp[n];
    }
}public class Job {
    public int StartTime;
    public int EndTime;
    public int Profit;
    
    public Job(int start, int end, int prof) {
        StartTime = start;
        EndTime = end;
        Profit = prof;
    }
}
```