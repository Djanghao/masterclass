# Beats 100%. Easy solution with hash map. O(n)

**Author:** Shreedev
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/5929600/](https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/5929600/)

---

# Intuition
The actual challenge in this question is to distribute the number of tasks as the multiple of 3 or 2 (3 is prefered to make the number of rounds minimum)

# Approach
I used the Hash map approach to get the count of each task levels.
The distribution was according to the hints provided.

# Complexity
- Time complexity:
$$O(n)$$ as we iterate throughout the array once

- Space complexity:
$$O(n)$$ as use a map to store the count

# Code
```typescript []
function minimumRounds(tasks: number[]): number {
    let count = {}
    //getting the counts of each difficulty level
    for(let task of tasks) {
        if(count[task]) count[task]++
        else count[task] = 1;
    }

    let rounds = 0;

    //handling the failure case and counting the rounds
    for(let key in count) {
        if(count[key] <= 1) {
            return -1
        } else if(count[key] % 3 === 0) {
            rounds += count[key] / 3;
        } else {
            rounds += Math.floor(count[key] / 3) + 1
        }
    }

    return rounds
};
```