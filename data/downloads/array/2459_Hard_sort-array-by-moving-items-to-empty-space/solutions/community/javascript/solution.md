# JavaScript Solution Greedy O(N)

**Author:** ektegjetost
**Votes:** 2
**Link:** [https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space/solutions/2768837/](https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space/solutions/2768837/)

---

The idea is that there are groups of numbers forming cycles by pointing to each others indices.

0 may be apart of one of these groups to start, and we can sort that group by swapping the correct number into position where 0 currently is.

After a group is sorted, swap 0 into the next group by swapping its position with any out-of-position number, then sort that group.

Continue until all groups are sorted

```javascript
// input
[9,8,0,5,7,3,4,6,1,2]

// first try with 1 indexed numbers
// swap the number at 0's index until you can't anymore
[9,8,0,5,7,3,4,6,1,2]
[9,8,-,5,7,3,4,6,1,0]
[0,8,-,5,7,3,4,6,1,-] // group [2, 9] done

// now swap 0 into any group
// with an out-of-position number
// and do it again
[8,0,-,5,7,3,4,6,1,-]
[8,-,-,5,7,3,4,6,0,-]
[0,-,-,5,7,3,4,6,-,-] // [1, 8] done

[5,-,-,0,7,3,4,6,-,-]
[5,-,-,-,7,0,4,6,-,-]
[0,-,-,-,7,-,4,6,-,-] // [3, 5]

[0,-,-,-,7,-,4,6,-,-]
[7,-,-,-,0,-,4,6,-,-]
[7,-,-,-,-,-,0,6,-,-]
[7,-,-,-,-,-,-,0,-,-]
[0,-,-,-,-,-,-,-,-,-] // [4, 6, 7]

// do the same thing with 0-indexed numbers
...

// see which one is better
```


```javascript
var sortArray = function(nums) {
  const countZeroIndexed = getCountMoves(nums, 1);
  const countOneIndexed = getCountMoves(nums, 0);
  
  return Math.min(countZeroIndexed, countOneIndexed);
};

const getCountMoves = (nums, offset) => {
  // if we're 0-indexed, then move all numbers to the left by 1
  // and put 0 at the end
  const zero = offset === 1 ? nums.length - 1 : 0;
  const adjusted = nums.map((num) => num === 0 ? zero : num - offset);
  
  // lookup table so we can swap the correct number
  // into 0's current position
  const positions = adjusted.map(() => zero);
  for (let i = 0; i < positions.length; i += 1) positions[adjusted[i]] = i;
  
  let moves = 0;
  
  const sortGroup = () => {
    while (positions[zero] !== zero) {
      const next = positions[zero];
      const nextPosition = positions[next];
      adjusted[next] = next;
      adjusted[nextPosition] = zero;
      positions[zero] = nextPosition;
      moves += 1;
    }
  }
  
  sortGroup();
  
  for (let i = 0; i < adjusted.length; i += 1) {
    if (adjusted[i] === i) continue;
    moves += 1;
    adjusted[zero] = adjusted[i];
    positions[adjusted[i]] = zero;
    adjusted[i] = zero;
    positions[zero] = i;
    sortGroup()
  }
  
  return moves;
}
```