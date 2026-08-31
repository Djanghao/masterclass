# [typescript] Find first open door, consider it last house, save at each closing door after that

**Author:** sushiljainam
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-houses-in-a-circular-street-ii/solutions/3740626/](https://leetcode.com/problems/count-houses-in-a-circular-street-ii/solutions/3740626/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Find first open door, consider it last house, save count of all dooes at each closing door after that

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a street.
 * class Street {
 *     constructor(doors: number[]);
 *     public closeDoor(): void;
 *     public isDoorOpen(): boolean;
 *     public moveRight(): void;
 * }
 */
function houseCount(street: Street | null, k: number): number {
    let fd = 0, fo = false
    for (let i = 0; i < 2 * k;) {
        if (street?.isDoorOpen()) {
            if (!fo) {
                fo = true
            } else {
                street?.closeDoor()
                fd = i
            }
        }
        if (fo) i++
        street?.moveRight()
    }
    return fd
};
/**
helpful test cases -
[1,1,1,1]
10
[1,1,1,1,1,1,1]
10
[1,0,1,1,0]
5
[0,1]
10
[0,0,1]
10
[0,0,0,1]
10
[1,0,0,0]
10
[1,0,0,0,0]
10
 */
```