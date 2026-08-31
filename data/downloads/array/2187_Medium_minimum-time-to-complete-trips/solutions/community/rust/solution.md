# [JavaScript || Rust] Easy to understand solution

**Author:** emmakuen
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/3266698/](https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/3266698/)

---

## JavaScript Solution
```javascript
/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function (time, totalTrips) {
  let maxTime = Math.min.apply(null, time) * totalTrips;
  let minTime = 1;

  while (minTime < maxTime) {
    const midTime = Math.floor((minTime + maxTime) / 2);
    let trips = 0;
    for (const tripTime of time) {
      trips += Math.floor(midTime / tripTime);
    }

    trips < totalTrips ? (minTime = midTime + 1) : (maxTime = midTime);
  }

  return minTime;
};

```

## Rust Solution

```rust
impl Solution {
    pub fn minimum_time(time: Vec<i32>, total_trips: i32) -> i64 {
        let total_trips = total_trips as i64;
        let mut max_time = time.iter().min().unwrap().clone() as i64 * total_trips;
        let mut min_time = 1 as i64;

        while min_time < max_time {
            let mid_time = (min_time + max_time) / 2;
            let trips = time.iter().fold(0, |subtotal, trip_time| {
                subtotal + mid_time / trip_time.clone() as i64
            });

            if trips < total_trips {
                min_time = mid_time + 1;
            } else {
                max_time = mid_time;
            }
        }

        min_time
    }
}
```