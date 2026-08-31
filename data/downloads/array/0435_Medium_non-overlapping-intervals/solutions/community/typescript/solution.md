# TypeScript Solution based on Editorial

**Author:** jswang00037
**Votes:** 2
**Link:** [https://leetcode.com/problems/non-overlapping-intervals/solutions/3785422/](https://leetcode.com/problems/non-overlapping-intervals/solutions/3785422/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Sort the `intervals` by `end` with ascending order. 
- Log the end time of last interval. 
    - If there is an event which `start` is before it, we should remove it to prevent overlapping. 
    - Otherwise, update the last interval by `end` of next interval. 

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize the reuslt `res` as `0` and `end` of last event `lastEnd` as `-Infinity`. 
2. Sort the `intervals` by `end` with ascending order. 
3. For each `interval` of `intervals`, 
    3-1. If `start` is greater or equal to `lastEnd`, update the `lastEnd` as `end`. 
    3-2. Otherwise, increase `res` by 1. 
4. Return `res`. 

# Complexity
Let $$n$$ be the length of `intervals`. 
- Time complexity: $$O(n \\cdot \\log n)$$
    - Sort `intervals`: $$O(n \\cdot \\log n)$$
    - Loop `intervals`: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function eraseOverlapIntervals(intervals: number[][]): number {
    let res = 0;
    intervals.sort((x, y)=>x[1] - y[1]);
    let lastEnd = -Infinity;

    for(const interval of intervals){
        const start = interval[0];
        const end = interval[1];

        if(start>=lastEnd){
            lastEnd = end;
        }else{
            res += 1;
        }
    }

    return res;
};
```