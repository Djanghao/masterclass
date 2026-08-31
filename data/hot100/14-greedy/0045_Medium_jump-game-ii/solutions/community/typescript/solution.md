# Jump Game II  | ⌨️ Typescript + ✌️Go + ⚙️ Rust | 📝 Commented | ⏱ O(n)

**Author:** mwmerz
**Votes:** 7
**Link:** [https://leetcode.com/problems/jump-game-ii/solutions/3161935/](https://leetcode.com/problems/jump-game-ii/solutions/3161935/)

---

# Intuition
* at first i considered trying to track the distance required similar to the "2 sums problem", by creating a map to hold needed distances.
* a simpler approach is to greedily take the max distance, iterate through each number without assuming it is current position.

# Approach
* track jumps, max distance, and current position.
* loop through all numbers until last
* each loop, check the maximum distance from that position
* if a loop iteration coincides with the current position, add a jump, and move the max distance
* return all jumps

# Complexity
- Time complexity:
    - $$O(n)$$ - where `n` is the length of the `nums` array.

- Space complexity:
    - $$O(1)$$ - the input does not need to be stored. All other values are constant.

# Code
### Typescript
```typescript
function jump(nums: number[]): number {
  // set variable for jump count, max distance, and current position
  let jumps = 0;
  let maxDistance = 0;
  let curPos = 0;

  // loop through elements except for last.
  for (let i = 0; i < nums.length - 1; i++) {
    // greedy - set jumpable distance to whatever is larger, current 
    // destination or current position plus jump
    maxDistance = Math.max(maxDistance, i + nums[i]);

    // if we're at the current position, increment jumps
    // the current position is the maxDistance.
    if (i === curPos) {
      jumps++;
      curPos = maxDistance;
    }
  }

  // return how many jumps.
  return jumps;
}

```

### Go
```go
func jump(nums []int) int {
	// set variables
	jumps := 0
	maxDistance := 0
	currentPos := 0

	// loop through all items, except the last.
	for i := 0; i < len(nums)-1; i++ {
		// look for what is greater, current reach or new reachable.
		maxDistance = int(math.Max(float64(maxDistance), float64(nums[i]+i)))

		// if this iteration is the current step
		if currentPos == i {

			// increment jumps, set current position to maxDistance.
			jumps++
			currentPos = maxDistance
		}
	}

	// return total jumps
	return jumps
}
```

### Rust
```rust
pub fn jump(nums: Vec<i32>) -> i32 {
    // set variables
    let mut jumps = 0;
    let mut max_distance = 0;
    let mut current_pos = 0;

    // loop over nums array until end reached.
    for i in 0..nums.len() {
        if i == nums.len() - 1 {
            break;
        }

        // check which is further, current reach or new reachable
        max_distance = cmp::max(max_distance, nums[i] + i as i32);

        // if this iteration is the current step.
        if current_pos == i as i32 {
            // increment jump count.
            jumps += 1;

            // set current position to the max jump
            current_pos = max_distance;
        }
    }

    // return jumps
    jumps
}
```