# ✅9 lines of short and simple code | step by step explanation

**Author:** SumitPokhriyal
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/3766524/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/3766524/)

---

# Intuition
The problem requires finding the maximum total value that can be obtained by attending events, given a list of events with their start and end times and their respective values. Each event can be attended for its entire duration.

# Approach
One way to solve this problem is to use a recursive approach with memoization. We can define a recursive function max that takes three parameters: i (the current index of the event), k (the remaining number of events that can be attended), and prev (the previous end time of the last attended event).

We start by sorting the events array based on their start times in ascending order. This allows us to process the events in a chronological order.

In each recursive call, we have two choices: either attend the current event or skip it. If we attend the current event, we calculate the value that can be obtained by adding the value of the current event (events[i][2]) to the maximum value that can be obtained from attending the remaining events with k - 1 events and updating prev to the end time of the current event (events[i][1]).

If we skip the current event, we calculate the maximum value that can be obtained from attending the remaining events with k events and keeping prev unchanged.

We memoize the results of subproblems using an object obj to avoid redundant calculations. The memoization is based on the current index i, the remaining number of events k, and the previous end time prev.

After the recursive calls, we return the maximum value obtained from attending the events starting from index 0, with k events and a previous end time of 0.

# Complexity
- Time complexity: The time complexity of this approach is O(n * k), where n is the number of events and k is the remaining number of events that can be attended. We have to consider all possible combinations of events.
- Space complexity: The space complexity is O(n * k) as we use memoization to store the results of subproblems.

# Code
```
function maxValue(events: number[][], k: number): number {
    events.sort((a, b) => a[0] - b[0]);
    let n = events.length, obj = {}
    const max = (i:number, k:number, prev:number): number => {
        if(i === n || k === 0)return 0;
        let str = `${i}-${k}-${prev}`
        if( obj[str] )return obj[str];
        if(prev >= events[i][0])return obj[str] = max(i + 1, k, prev);
        return obj[str] = Math.max(events[i][2] + max(i + 1, k - 1, events[i][1]), max(i + 1, k, prev))
    }
    return max(0 , k , 0)
};
```