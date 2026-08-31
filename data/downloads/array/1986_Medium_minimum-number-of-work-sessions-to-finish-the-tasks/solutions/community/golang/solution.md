# Golang subset traversal problem

**Author:** FranklinWen
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/solutions/2937235/](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/solutions/2937235/)

---

# Intuition
\u8FD9\u79CD\u5C5E\u4E8E\u904D\u5386\u5B50\u96C6\u7684\u95EE\u9898 \u6709\u56FA\u5B9A\u7684\u89E3\u6CD5
# Complexity
- Time complexity: O(3^n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(2^n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func minSessions(tasks []int, sessionTime int) int {
    /* \u904D\u5386\u5B50\u96C6\u7C7B\u578B\u95EE\u9898 state: 00100011 \u8868\u793Atask 2 6 7 \u88AB\u9009\u53D6
       dp[state]: Minimum Number of Work Sessions to Finish the state Tasks
       dp[state] = min(dp[state], dp[subset] + dp[state-subset])
       Time Complexity\uFF1A O(3^n) \u4EFB\u4F55\u4E00\u4E2Atask\u53EA\u6709\u53EF\u80FD\u5B58\u57283\u79CD\u72B6\u6001\uFF1A
       1.\u5728state\u91CC\u9762 \u4E5F\u5728subset\u91CC  11
       2.\u5728state\u91CC\u9762 \u4E0D\u5728subset\u91CC  10
       3.\u4E0D\u5728state\u91CC \u4E0D\u5728subset\u91CC  00
    */
    num := len(tasks)
    dp := make([]int, 1 << num)
    for i := range dp {
        dp[i] = 15
    }
    // initialization \u6240\u6709\u53EF\u4EE5\u4E00\u4E2AsessionTime\u91CC\u5B8C\u6210\u7684sub tasks
    for state := 0; state < (1 << num); state++ {
        sumTime := 0
        for i := 0; i < num; i++ {
            if (state >> i) & 1 == 1 {
                sumTime += tasks[i]
            }
        }
        if sumTime <= sessionTime {
            dp[state] = 1
        }
    }
    /* \u8F6C\u79FB\u65B9\u7A0B substate\u6BCF\u6B21\u51CF1\uFF0C\u7136\u540E\u548Cstate\u53D6\u5171\u6709\u7684tasks\uFF0C
       \u56E0\u4E3A\u662F\u5728state\u91CC\u9762\u53D6substate\uFF0C state - substate\u5C31\u662F\u5269\u4E0B\u6CA1\u53D6\u7684task
       eg\uFF1A state\uFF1A10010011  substate\uFF1A10000001 \u5269\u4F59\u6CA1\u53D6\u7684\u5C31\u662F 00010010
    */
    for state := 0; state < (1 << num); state++ {
        for substate := state; substate > 0; substate = (substate - 1) & state {
            dp[state] = min(dp[state], dp[state-substate] + dp[substate])
        }
    }
    return dp[(1<<num)-1]
}

func min(i, j int) int {
    if i < j {
        return i
    }
    return j
}
```