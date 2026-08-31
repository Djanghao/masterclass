# Easy Typescript Solution using Hashmap and Set with Full Explanation

**Author:** chetannada
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-the-users-active-minutes/solutions/5651103/](https://leetcode.com/problems/finding-the-users-active-minutes/solutions/5651103/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$ where n is the number of logs in the input array. This is because we iterate through each log in the input array once to populate the map and then iterate through the values in the map to update the result array.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ because we are storing the unique time values for each user in a map, which can potentially have n entries in the worst case scenario where each user has a unique set of time values. Additionally, the result array has a length of k, which is a constant value.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function findingUsersActiveMinutes(logs: number[][], k: number): number[] {

    // initialize map to store unique frequency of time in logs[i]
    const map = new Map<number, Set<number>>();

    // run for of loop for logs
    for (let userLog of logs) {

        // if map has id of logs
        if (map.has(userLog[0])) {

            // add time in map
            map.get(userLog[0]).add(userLog[1]);
        } else {

            // else set id and unique time in map
            map.set(userLog[0], new Set<number>([userLog[1]]))
        }
    }

    // initialize new array of k length and fill with 0
    const result = new Array(k).fill(0);

    // convert map into array
    const values = [...map.values()]

    // run for loop from index 0 to length of values
    for (let i = 0; i < values.length; i++) {

        // find length of values[i] and then subtract with 1 and update that answer index in result with 1
        result[values[i].size - 1] += 1;

    }

    // return result
    return result;
};
```