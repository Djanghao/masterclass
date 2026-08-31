# [TypeScript] PriorityQueue / Heap O(n*lgn) solution

**Author:** dizy
**Votes:** 0
**Link:** [https://leetcode.com/problems/employee-free-time/solutions/2292173/](https://leetcode.com/problems/employee-free-time/solutions/2292173/)

---

```
function employeeFreeTime(schedule: Interval[][]): Interval[] {
    let queue = new MinPriorityQueue();
    for (let [index, intervals] of schedule.entries()) {
        if (intervals.length === 0) {
            continue;
        }
        queue.enqueue(index, schedule[index][0].start + 1);
    }
    let lastAvailableFrom = -Infinity;
    let availableIntervals: Interval[] = [];
    while(!queue.isEmpty()) {
        let {element: earliestEmployeeIndex} = queue.dequeue();
        let interval = schedule[earliestEmployeeIndex].shift();
        if (lastAvailableFrom < interval.start && lastAvailableFrom !== -Infinity) {
            availableIntervals.push(new Interval(lastAvailableFrom, interval.start));
        }
        if (interval.end > lastAvailableFrom) {
            lastAvailableFrom = interval.end;
        }
        if (schedule[earliestEmployeeIndex].length > 0) {
            queue.enqueue(earliestEmployeeIndex, schedule[earliestEmployeeIndex][0].start + 1);
        }
    }
    return availableIntervals;
};
```