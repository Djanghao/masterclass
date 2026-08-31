# Typescript || HashTable || Array

**Author:** webdot
**Votes:** 6
**Link:** [https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/solutions/4029045/](https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/solutions/4029045/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For each group, we want to keep adding indexes with corresponding group sizes until the group size's length is equal to the group size. Once this is true, push the current group to result and remove that group from hashtable.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function groupThePeople(groupSizes: number[]): number[][] {
    const result: number[][] = [];
    const groupSizesTable: Record<number, number[]> = {};

    for (let i = 0; i < groupSizes.length; i++) {
        const group: number = groupSizes[i]; 
        if(groupSizesTable[group] === undefined) groupSizesTable[group] = [];

        groupSizesTable[group].push(i);

        if(groupSizesTable[group].length === group) {
            result.push(groupSizesTable[group]);
            delete groupSizesTable[group];
        }
    }

    return result;
};
```