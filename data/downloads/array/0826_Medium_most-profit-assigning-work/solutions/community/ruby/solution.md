# Double Sort and Two Pointer. Lots of comments. Beats 100%

**Author:** Chris1337
**Votes:** 2
**Link:** [https://leetcode.com/problems/most-profit-assigning-work/solutions/4738105/](https://leetcode.com/problems/most-profit-assigning-work/solutions/4738105/)

---


- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {Integer[]} difficulty
# @param {Integer[]} profit
# @param {Integer[]} worker
# @return {Integer}
def max_profit_assignment(difficulty, profit, worker)
    # Sort workers
    worker.sort_by!{|a| -a}
    max_diff = worker[0]

    # Create diff profit array where we pair difficulty with profit.
    diff_profit = []
    i = 0
    while i < difficulty.size
        if max_diff >= difficulty[i]
            diff_profit << [difficulty[i], profit[i]]
        end
        i += 1
    end

    # Sort by highest profit.
    diff_profit.sort_by!{|a| -a[1]}

    # n^2 time complexity
    # We reduce this by using a pointer to account for when a worker
    # runs into a job which is of higher difficulty than what the worker 
    # can profit. When this happens we increase a pointer(diff_profit_i)
    # so when the next worker is assigned a job, it starts from the same position
    # in diff_profit as the last worker. This removes the traversal of going through jobs
    # which are too hard for the worker and saves a ton of time.
    profit = 0
    diff_profit_i = 0
    worker.each do |worker_diff|
        diff_profit[diff_profit_i..-1].each do |job|
            if job[0] <= worker_diff
                profit += job[1]
                break
            else
                diff_profit_i += 1
            end 
        end
    end

    profit
end
```