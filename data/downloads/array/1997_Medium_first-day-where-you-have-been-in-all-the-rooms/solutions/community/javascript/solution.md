# JavaScript solution with Explanation

**Author:** songzme
**Votes:** 5
**Link:** [https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/solutions/1447152/](https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/solutions/1447152/)

---

This is split into 2 parts. First is a code that will work theoretically, but will fail the space allocation because `BigInt` takes up too much space. Then 2nd part is full solution that is accepted, but it has alot of extra code to deal with `BigInt`.

This code shows the algorithm (theoretical)
```javascript
const firstDayBeenInAllRooms = function (arr) {
  let sum = 0n;
  const prefixes = new Array(arr.length);

  let i = 0;
  let count = 0;
  while (i !== arr.length - 1) {
    const e = arr[i];
    if (e === i) {
      sum += 2n;
    } else {
      const days = sum - (prefixes[e - 1] || 0n);
      sum += days + 2n;
    }
    prefixes[i] = sum;
    i += 1;
  }
  return Number(sum % 1000000007n);
};
```

Note, I use numbers like `0n`, `2n` etc. The `n` turns the number into a `BigInt`.

The above solution is essentially a prefix sum. In the `prefixes` array, each `prefixes[i]` contains the number of days to get to room `i`.

Example: `[0,0,2,3,3,3,6,7]`

Prefixes array will look like:

```
[ 2, 6, 8, 10, 14, 22, 24, <empty>]

/* Here's how the prefixes are derived. Sum represents total number of days passed.

* prefixes[0]: i is 0, and the value is 0. We are staying in same room, so its just 2. Sum is 2
* prefixes[1]: i is 1, and we stay in room 1, then stay in room 0 twice, then room 1 again (4). Sum is 6
* prefixes[2]: i is 2, and the value is 2. We are staying in same room, so its just 2. Sum is 8
* prefixes[3]: i is 3, and the value is 3. We are staying in same room, so its just 2. Sum is 10
* prefixes[4]: i is 4, and we stay in room 4, then start journey from room 3 again and then stay in room 4. Sum is 14
* prefixes[5]: i is 5, and we stay in room 5, then start journey from room 3 again and then stay in room 5. (14 - prefixes[3-1] + 2) gives us 8. Sum is 22
* prefixes[6]: i is 6, and the value is 6. We are staying in same room, so its just 2. Sum is 24 
* i is 7, we return the sum (24 days)
*/
```


This code handles the mod operations to pass all test cases.
```javascript
const firstDayBeenInAllRooms = function (arr) {
  let sum = 0;

  let i = 0;
  let count = 0;
  while (i !== arr.length - 1) {
    const e = arr[i];
    if (e === i) {
      sum += 2;
    } else {
      const days = sum - (arr[e - 1] || 0);
      sum += days + 2;
    }
    arr[i] = sum % 1000000007;
    sum = sum % 1000000007;
    i += 1;
  }
  sum = sum % 1000000007;
  while (sum < 0) {
    sum += 1000000007;
  }
  return sum;
};
```