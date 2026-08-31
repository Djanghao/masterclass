# simple intuitive sort and count, a minumum effort solution heheh

**Author:** sdvorchin
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/4699463/](https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/4699463/)

---

# Intuition
Use some math intuition (or try several stategies to pass the test cases) to realize that the optimal order to complete tasks is starting with the tasks that have the highest difference of `minimum[i] - actual[i]`. Then just straigh up calculate how much energy you need to complete them in that order.

# Approach
Sort the tasks. Initialize current energy and the minimum starting amount to the `minimum[0]` or 0. Iterate through tasks. If at any point you don't have enough energy to start, add the needed amount to your current energy and the minimum starting amount. If after completing a task you have negative energy, restore it and also add the restore cost to the minimum starting amount.

# Complexity
- Time complexity:
$$O(n* log(n))$$

- Space complexity:
$$O(1)$$

# Code
```
/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function(tasks) {
    tasks.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]));
    console.log(tasks);
    let ans = tasks[0][1];
    let cur = ans;
    for (let task of tasks) {
        const add1 = Math.max(0, task[1] - cur);
        cur += add1;
        ans += add1;

        cur -= task[0];
        const add2 = Math.max(0, -cur);
        cur += add2;
        ans += add2;
    }
    return ans;
};
```