# Easy to understand solution with explanation

**Author:** emmakuen
**Votes:** 7
**Link:** [https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3322670/](https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3322670/)

---

To solve this problem, we need to count the number of contiguous subarrays in the input array that consist entirely of the number 0. One way to do this is to use a sliding window approach, where we keep track of the length of the current subarray of contiguous 0s and add it to a total count whenever we encounter a new 0 in the input array.

Here is a simple step-by-step approach to solve this problem:
1. Initialize two variables: `count` to 0, which will hold the total number of subarrays filled with 0, and `subcount` to 0, which will hold the length of the current subarray of contiguous 0s.
2. Iterate over each element in the input array `nums`. For each element:
If the element is not equal to 0, it means the current subarray of contiguous 0s has ended. Reset `subcount` to 0.
3. If the element is equal to 0, increment `subcount` by 1. This means we have found a new subarray of contiguous 0s that ends at the current element.
4. Add `subcount` to `count`. This adds the number of subarrays filled with 0 that end at the current element to the total `count` of subarrays filled with 0.
5. Return `count` as the final answer.


## JavaScript Code
```javascript
var zeroFilledSubarray = function (nums) {
  // Initialize variables for counting zero-filled subarrays
  let count = 0; // Total count of zero-filled subarrays
  let subcount = 0; // Length of the current subarray of contiguous 0s

  // Iterate over each element in the input array
  for (const num of nums) {
    // If the current element is not zero, 
    // the current subarray of contiguous 0s has ended
    if (num !== 0) {
      // So, reset the length of the current subarray of contiguous 0s
      // and move on to the next element in the input array
      subcount = 0; 
      continue; 
    }

    // If the current element is zero, 
    // increment the length of the current subarray of contiguous 0s
    subcount++;

    // And add the length of the current subarray of contiguous 0s 
    // to the total count of zero-filled subarrays
    count += subcount;
  }

  // Return the total count of zero-filled subarrays in the input array
  return count;
};
```

## Rust Code
```rust
impl Solution {
    pub fn zero_filled_subarray(nums: Vec<i32>) -> i64 {
        let mut count = 0;
        let mut subcount = 0;

        for num in nums {
            if num != 0 {
                subcount = 0;
                continue;
            }

            subcount += 1;
            count += subcount;
        }

        count
    }
}
```

## Go Code
```go
func zeroFilledSubarray(nums []int) int64 {
	var count, subcount int64 = 0, 0

	for _, num := range nums {
		if num != 0 {
			subcount = 0
			continue
		}

		subcount += 1
		count += subcount
	}

	return count
}
```