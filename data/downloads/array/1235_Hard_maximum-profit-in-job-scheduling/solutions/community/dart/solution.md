# Easy way to solve Hard problem using Dart. This ans beat 50% answers.

**Author:** somyanaiwal023
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/4516018/](https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/4516018/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
- **Create an array of jobs:** Each job is represented by its `start time, end time, and profit`.
- **Sort the jobs:** Sort the jobs by their end times. This step ensures that we can efficiently find non-overlapping jobs.
- **Dynamic Programming:** Create a `dp` array where `dp[i]` represents the maximum profit that can be earned by the end of the `i-th` job.
- **Binary Search:** For each job, use binary search to find the latest non-overlapping job. If such a job is found, consider its profit along with the current job's profit to update the `dp` array.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int jobScheduling(List<int> startTime, List<int> endTime, List<int> profit) {
    // Step 1: Create jobs array and sort it based on end times
    List<Job> jobs = List.generate(startTime.length,
        (index) => Job(startTime[index], endTime[index], profit[index]));
    jobs.sort((a, b) => a.end.compareTo(b.end));

    // Step 2: Initialize dp array
    List<int> dp = List.filled(jobs.length, 0);
    dp[0] = jobs[0].profit;

    for (int i = 1; i < jobs.length; i++) {
      int currentProfit = jobs[i].profit;
      int index = binarySearch(jobs, i);

      if (index != -1) {
        currentProfit += dp[index];
      }

      dp[i] = currentProfit > dp[i - 1] ? currentProfit : dp[i - 1];
    }

    return dp.last;
  }

  int binarySearch(List<Job> jobs, int currentIndex) {
    int low = 0;
    int high = currentIndex - 1;

    while (low <= high) {
      int mid = (low + high) ~/ 2;
      if (jobs[mid].end <= jobs[currentIndex].start) {
        if (jobs[mid + 1].end <= jobs[currentIndex].start) {
          low = mid + 1;
        } else {
          return mid;
        }
      } else {
        high = mid - 1;
      }
    }
    return -1;
  }
}

class Job {
  int start;
  int end;
  int profit;

  Job(this.start, this.end, this.profit);
}

```