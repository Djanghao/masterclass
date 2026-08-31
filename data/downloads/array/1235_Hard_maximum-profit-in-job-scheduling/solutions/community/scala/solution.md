# [Scala] DP Solution

**Author:** aspen1382020
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/2848732/](https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/2848732/)

---

```
import java.util.TreeMap;


object Solution {
    def jobScheduling(startTime: Array[Int], endTime: Array[Int], profit: Array[Int]): Int = {
        var n = startTime.length;
        var jobs = Array.fill(n)(Array.fill(3)(0));
        for (i<-Range(0,n,1)) {
            jobs(i) = Array(startTime(i), endTime(i), profit(i));
        }
        jobs=jobs.sortBy(x=>x(1));
        var dp = new TreeMap[Int,Int]();
        dp.put(0, 0);
        for ( job <- jobs) {
            var cur = dp.floorEntry(job(0)).getValue() + job(2);
            if (cur > dp.lastEntry().getValue())
                dp.put(job(1), cur);
        }
        return dp.lastEntry().getValue();
    }
}

//Scala \u4F7F\u7528TreeMap\u89E3\u51B3
```