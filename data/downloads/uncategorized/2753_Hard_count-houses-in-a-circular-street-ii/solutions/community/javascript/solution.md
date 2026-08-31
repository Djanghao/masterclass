# Javascript - Loop

**Author:** faustaleonardo
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-houses-in-a-circular-street-ii/solutions/4183961/](https://leetcode.com/problems/count-houses-in-a-circular-street-ii/solutions/4183961/)

---

# Code
```
/**
 * Definition for a street.
 * class Street {
 *     @param {number[]} doors
 *     constructor(doors);
 *
 *     @return {void}
 *     closeDoor();
 *
 *     @return {boolean}
 *     isDoorOpen();
 *
 *     @return {void}
 *     moveRight();
 * }
 */
/**
 * @param {Street} street
 * @param {number} k
 * @return {number}
 */
var houseCount = function (street, k) {
  let idx = 0;
  let ans = 0;
  let hasSeenFirstOpen = false;
  let firstOpen = 0;

  while (idx <= firstOpen + k) {
    if (street.isDoorOpen()) {
      ans = idx - firstOpen;
      if (!hasSeenFirstOpen) {
        hasSeenFirstOpen = true;
        firstOpen = idx;
      } else {
        street.closeDoor();
      }
    }
    street.moveRight();
    idx++;
  }

  return ans;
};
```