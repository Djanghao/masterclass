# [1094. Car Pooling](https://leetcode.com/problems/car-pooling/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 4772 | 120 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`sorting`](https://leetcode.com/tag/sorting), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue), [`simulation`](https://leetcode.com/tag/simulation), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `google`, `facebook`, `amazon`, `microsoft`, `goldman-sachs`, `paytm`, `bloomberg`, `flipkart`, `lyft`

## Description

There is a car with `capacity` empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).

You are given the integer `capacity` and an array `trips` where `trips[i] = [numPassengers_i, from_i, to_i]` indicates that the `i^th` trip has `numPassengers_i` passengers and the locations to pick them up and drop them off are `from_i` and `to_i` respectively. The locations are given as the number of kilometers due east from the car's initial location.

Return `true`* if it is possible to pick up and drop off all passengers for all the given trips, or *`false`* otherwise*.

 

**Example 1:**

```

Input: trips = [[2,1,5],[3,3,7]], capacity = 4
Output: false

```

**Example 2:**

```

Input: trips = [[2,1,5],[3,3,7]], capacity = 5
Output: true

```

 

**Constraints:**

	- `1 <= trips.length <= 1000`

	- `trips[i].length == 3`

	- `1 <= numPassengers_i <= 100`

	- `0 <= from_i < to_i <= 1000`

	- `1 <= capacity <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/car-pooling/) | [Solutions](https://leetcode.com/problems/car-pooling/)
