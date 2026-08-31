# Sort

**Author:** heiseshandian
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4895201/](https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4895201/)

---

# 2910. Minimum Number of Groups to Create a Valid Assignment

## Intuition

This algorithm is designed to calculate the minimum number of groups needed to assign tasks (represented by `balls`) effectively, where each group can be considered as a scheduling interval. The challenge is to do this while accommodating constraints that might resemble cooldown periods or task dependencies.

## Approach

The approach leverages a frequency mapping technique followed by sorting and a clever grouping strategy to ensure that all tasks can be assigned while respecting any implicit constraints suggested by the problem statement.

1. **Frequency Mapping**: The first step involves creating a mapping (`repeatTimes`) that records the frequency of each task. This is crucial for understanding the distribution of tasks and planning their assignment efficiently.
2. **Sorting Frequencies**: Once the frequencies are mapped, they are sorted in ascending order. This sorting is essential for addressing tasks with lower frequencies first, potentially optimizing the overall grouping strategy.
3. **Grouping Strategy**: The core logic of the algorithm calculates the minimum number of groups required for each task frequency. It does this by determining how many times a task can be repeated within a group, considering an implicit constraint (`min + 1`) that likely represents a separation or cooldown requirement.
4. **Adjustment Loop**: If the calculation overestimates the number of required groups (indicated by `rest > t`), the algorithm adjusts the `min` value downwards and restarts the calculation. This iterative process ensures the minimum number of groups is found without overestimating.

## Complexity

- **Time Complexity**: O(N log N) - The dominant factor here is the sorting of task frequencies, where N represents the number of unique tasks. While the iterative calculation adds complexity, it does not exceed O(N log N) in the worst case.
- **Space Complexity**: O(N) - This complexity arises from the storage needed for the `repeatTimes` map and the `times` array, both of which store information related to the number of unique tasks.

# Code
```
function minGroupsForValidAssignment(balls: number[]): number {
    const repeatTimes: Record<number, number> = {};
    balls.forEach((v) => {
        repeatTimes[v] = (repeatTimes[v] || 0) + 1;
    });

    const times = Object.values(repeatTimes).sort((a, b) => a - b);
    const len = times.length;
    let min = times[0];
    let i = 0;
    let count = 0;
    while (i < len) {
        const cur = times[i];
        const t = Math.ceil(cur / (min + 1));
        const rest = t * (min + 1) - cur;

        if (rest > t) {
            min--;
            i = 0;
            count = 0;
            continue;
        }

        count += t;
        i++;
    }

    return count;
}
```