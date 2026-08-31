# Swift | DFS and DP solutions

**Author:** VladimirTheLeet
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/solutions/5111714/](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/solutions/5111714/)

---

# Approach 1. DFS with pruning

## Without memoization
```
class Solution {
    func minSessions(_ tasks: [Int], _ sessionTime: Int) -> Int
    {
        let n = tasks.count
        // By sorting in descending order (larger tasks show up first), the algorithm
        // is able to fill up the sessions faster. Therefore, there are less total
        // possibilities explored (more pruning of the search space)
        let tasks = tasks.sorted(by: >)
        var sessions: [Int] = []
        var result = n // the default result of creating a sesssion for each task

        func solve(_ taskIndex: Int)
        {
            // Solution is no better than the best result so far, disregard it
            if sessions.count >= result { return }

            // We have checked all tasks. Due to previous line,
            // the current solution is known to be better than the previous found
            if taskIndex == n { result = sessions.count; return }

            // Try to place the current task into an existing session
            for i in 0..<sessions.count where sessions[i] + tasks[taskIndex] <= sessionTime
            {
                sessions[i] += tasks[taskIndex]
                solve(taskIndex + 1)
                sessions[i] -= tasks[taskIndex]
            }

            // Explore the variant of creating a new session for the current task
            sessions.append(tasks[taskIndex])
            solve(taskIndex + 1)
            sessions.removeLast()
        }
        solve(0)
        return result
    }
}
```

## With memoization

```
class Solution {
    func minSessions(_ tasks: [Int], _ sessionTime: Int) -> Int
    {
        let n = tasks.count
        // By sorting in descending order (larger tasks show up first), the algorithm
        // is able to fill up the sessions faster. Therefore, there are less total
        // possibilities explored (more pruning of the search space)
        let tasks = tasks.sorted(by: >)
        var sessions: [Int] = []
        var result = n // the default result of creating a sesssion for each task

        var memo: Set<[Int]> = []

        func solve(_ taskIndex: Int)
        {
            // Solution is no better than the best result so far, disregard it
            if sessions.count >= result { return }

            // We have checked all tasks. Due to previous line,
            // the current solution is known to be better than the previous found
            if taskIndex == n { result = sessions.count; return }

            // if such solution is already checked, skip it, otherwise add to memo
            let memoKey = sessions.sorted() + [taskIndex]
            if !memo.insert(memoKey).inserted { return }

            // Try to place the current task into an existing session
            for i in 0..<sessions.count where sessions[i] + tasks[taskIndex] <= sessionTime
            {
                sessions[i] += tasks[taskIndex]
                solve(taskIndex + 1)
                sessions[i] -= tasks[taskIndex]
            }

            // Explore the variant of creating a new session for the current task
            sessions.append(tasks[taskIndex])
            solve(taskIndex + 1)
            sessions.removeLast()
        }
        solve(0)
        return result
    }
}
```

# Approach 2. DP with bitmask
## Recursive
```
class Solution {
    func minSessions(_ tasks: [Int], _ sessionTime: Int) -> Int
    {
        let n = tasks.count
        var memo = Array(repeating: (-1, -1), count: 1 << n)

        // returns (the minimum count of sessions needed, remaining time in current session)
        // to finish all the tasks represent by mask
        // (where i-th bit == 1 means tasks[i] need to proceed)
        func dp(_ mask: Int) -> (sessionCount: Int, remainingTime: Int)
        {
            if mask == 0 { return (0, 0) }
            if memo[mask] != (-1, -1) { return memo[mask] }

            var (res, resTime) = (n, 0)
            for i in 0..<n where (mask >> i) & 1 == 1 // for all tasks that need to be done
            {
                let newMask = ~(1 << i) & mask // clear i-th bit of mask
                var (sessionCount, remainingTime) = dp(newMask)
                if tasks[i] <= remainingTime { // use current session
                    remainingTime -= tasks[i]
                }
                else { // create new session
                    remainingTime = sessionTime - tasks[i]
                    sessionCount += 1
                }
                // if the obtained values are better than result, update the result
                if sessionCount < res || (sessionCount == res && remainingTime > resTime) {
                    (res, resTime) = (sessionCount, remainingTime)
                }
            }
            memo[mask] = (res, resTime)
            return (res, resTime)
        }
        
        let fullMask = (1 << n) - 1 // mask with all tasks set to 1
        return dp(fullMask).sessionCount
    }
}
```

## Iterative
```
class Solution {
    func minSessions(_ tasks: [Int], _ sessionTime: Int) -> Int
    {
        let n = tasks.count        
        let fullMask = (1 << n) - 1 // mask with all tasks set to 1
        var dp: [(sessionCount: Int, remainingTime: Int)] = Array(repeating: (0, 0), count: 1 << n)

        for mask in 1...fullMask
        {
            var (res, resTime) = (n, 0)
            for i in 0..<n where (mask >> i) & 1 == 1 // for all tasks that need to be done
            {
                let newMask = ~(1 << i) & mask // clear i-th bit of mask
                var (sessionCount, remainingTime) = dp[newMask]
                if tasks[i] <= remainingTime { // use current session
                    remainingTime -= tasks[i]
                }
                else { // create new session
                    remainingTime = sessionTime - tasks[i]
                    sessionCount += 1
                }

                // if the obtained values are better than result, update the result
                if sessionCount < res || (sessionCount == res && remainingTime > resTime) {
                    (res, resTime) = (sessionCount, remainingTime)
                }
            }
            dp[mask] = (res, resTime)
        }
        
        return dp[fullMask].sessionCount 
    }
}
```