# Sort and Be Greedy

**Author:** WritInWater
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/5359902/](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/5359902/)

---

# Code
```
# @param {Integer[]} jobs
# @param {Integer[]} workers
# @return {Integer}
def minimum_time(jobs, workers)
    jobs.sort!
    workers.sort!

    min = 1
    jobs.each_with_index do |job, index|
        days = 1
        if(job % workers[index] == 0)
            days = job / workers[index]
        else
            days = (job / workers[index]) + 1
        end

        min = [min, days].max
    end

    return min
end
```