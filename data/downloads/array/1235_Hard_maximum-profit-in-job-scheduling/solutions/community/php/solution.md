# let's make it easy 100% beat in php & 99% beat Python & Go too

**Author:** ajayjadeja
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/4514860/](https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/4514860/)

---



# Code python3
```
class Solution(object):
    def jobScheduling(self, startTime, endTime, profit):
        # Combine start time, end time, and profit into a single list of tuples
        jobs = sorted(zip(startTime, endTime, profit), key=lambda v: v[1])

        # Initialize DP Array
        dp = [(0, 0)]  # (endTime, profit)

        # Iterate and Update DP
        for start, end, prof in jobs:
            # Use bisect_right instead of custom binary search function
            i = bisect_right(dp, (start, float('inf')))
            if dp[i - 1][1] + prof > dp[-1][1]:
                dp.append((end, dp[i - 1][1] + prof))

        # return the result
        return dp[-1][1]

```
# Code PHP
```
class Solution {

    /**
     * @param Integer[] $startTime
     * @param Integer[] $endTime
     * @param Integer[] $profit
     * @return Integer
     */
    function jobScheduling($startTime, $endTime, $profit) {
        $jobs = array_map(null, $startTime, $endTime, $profit);
        usort($jobs, function ($a, $b) {
            return $a[1] - $b[1];
        });
         $dp = [[0, 0]];

        foreach ($jobs as $job) {
            list($start, $end, $prof) = $job;
            $i = $this->bisec($dp, $start);
            $newProfit = $dp[$i - 1][1] + $prof;
            if ($newProfit > $dp[count($dp) - 1][1]) {
                $dp[] = [$end, $newProfit];
            }
        }
        return $dp[count($dp) - 1][1];
    }
    function bisec($arr, $target) {
        $low = 0;
        $high = count($arr);

        while ($low < $high) {
            $mid = ($low + $high) / 2;
            if ($arr[$mid][0] > $target) {
                $high = $mid;
            } else {
                $low = $mid + 1;
            }
        }

        return $low;
    }
}
```
# code Go
```
func jobScheduling(startTime []int, endTime []int, profit []int) int {
	n := len(startTime)
	jobs := make([][]int, n)
	for i := 0; i < n; i++ {
		jobs[i] = []int{startTime[i], endTime[i], profit[i]}
	}
	sort.Slice(jobs, func(i, j int) bool {
		return jobs[i][1] < jobs[j][1]
	})

	dp := [][]int{{0, 0}}

	for _, job := range jobs {
		start, end, prof := job[0], job[1], job[2]
		i := bisec(dp, start)
		newProfit := dp[i-1][1] + prof
		if newProfit > dp[len(dp)-1][1] {
			dp = append(dp, []int{end, newProfit})
		}
	}
	return dp[len(dp)-1][1]
}

func bisec(arr [][]int, target int) int {
	low, high := 0, len(arr)

	for low < high {
		mid := (low + high) / 2
		if arr[mid][0] > target {
			high = mid
		} else {
			low = mid + 1
		}
	}

	return low
}
```