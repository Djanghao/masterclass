# Rust functional recursive memoization 100% 18ms 100% 2.1 MB

**Author:** UrzaMancer
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/3742973/](https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/3742973/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For each number, we want to find all eligible jumps and count them as we are considering them. Because jumps must move forward, this makes the problem suitable for recursive dynamic programming, where after each jump we can consider we are working with a new, smaller array.

The base case is that we are at the last index, so we can begin unwinding the recursion, starting the count from 0 at the end (it is 0 because we will be considering in essence how to jump from the last number to itself).

We want to filter out any later indices that number is outside the target difference, and we also only want to consider indices to the right of our cursor.

# Approach
<!-- Describe your approach to solving the problem. -->
As a good example of a straightforward dynamic programming problem, it's also useful to memoize. Indeed, the scale of the problem constraints indicates we will TLE if we don't build our memo.

We use Option<i32> rather than magic numbers 0 and -1 so that we can properly track whether we have set our jump_counts and found valid paths in our recursive calls.

We also use Option<Option<i32>> in our memo so we can use the same index as the input array, initializing all values to None, but perhaps later setting invalid paths / jump targets to Some(None).

We use filter_map() to filter out any ineligible jumps that will be greater than the target difference, and map the index, forgetting about the number. We use this resulting list of indices to make our recursive calls.

Finally, we use fold() with an initial value of None to track our max_jumps in our recursive calls

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2) as we have to iterate on the order of through combinations of the input size of the array n,
however, with memoization we bring this down to O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
If we didn't have TLE restriction, we would certainly stack overflow on large inputs. The stack for a recursive call on a large input can take up an enormous amount of space.

However, with memoization, we are now passing around the reference to the memo with our calls, and otherwise we only need to store O(n) with the memo itself.

# Code
```
use std::cmp;

impl Solution {
    pub fn maximum_jumps(nums: Vec<i32>, target: i32) -> i32 {
        let mut jump_memo: Vec<Option<Option<i32>>> = vec![None; nums.len()];
            //In our memoization, we are using an option of options to avoid repeating
            //calculations for which there is no valid path (e.g. recursive function
            //rightfully returns None). Those entries will be stored in the memo as
            //Some(None) so we can skip them after first calculation because
            //memo[index].is_none() will be False
        Self::recursive_max_jumps(&nums, 0, &target, &mut jump_memo).unwrap_or(-1)
            //unwrap_or(-1) gives us the i32 in the Option, or if there is no valid path,
            //we know we should return -1
    }

    fn recursive_max_jumps(nums: &Vec<i32>, first_index: usize, target: &i32, mut memo: &mut Vec<Option<Option<i32>>>) -> Option<i32> {
        //In our recursive function, we do not need to pass the last_index,
        //as that is not changing in this problem. In other problems, we might
        //pass last_index if we want to move it in a more general case
        if memo[first_index].is_none() {
            //If the outer option hasn't been set (this is different from Some(None)),
            //Perform the calculation and memoize it

            memo[first_index] = Some({
                let last_index: usize = nums.len() - 1;

                if first_index == last_index { Some(0) }
                else {
                        //if first_index is the last_index, return valid path
                        //Note we increment on each jump from the back to the front,
                        //so this is is where the count starts, from 0
                        Self::find_next_jump(&nums, first_index, &target, &mut memo)
                    }
            });
        }
        //There is no else needed: If there is a value, including Some(None), 
        //just return it here. Since we have already checked is_none(), unwrap() is safe
        //though there may be a more idiomatic way to write it
        memo[first_index].unwrap()
    }

    fn find_next_jump(nums: &Vec<i32>, cursor: usize, target: &i32, mut memo: &mut Vec<Option<Option<i32>>>) -> Option<i32> {
        let this_number: i32 = nums[cursor];

        nums.iter().enumerate().skip(cursor + 1)
            //We need both index and the number for our filter
            .filter_map(|(index, num)| {
                if (num - this_number).abs() <= *target { Some(index) }
                //For any eligible jumps, return the index (we no 
                //longer need the number itself)
                else { None }
                //filter out any numbers that are outside the target difference
            })
            .fold(None, |jump_count, cur_sor| {
                //Now we are operating only on candidate indices to which we can jump
                //We start our accumulator with max_jumps = None to indicate it's not set
                //We need to track jump_count through our recursive calls, which will
                //end up being max_jumps once the recursion winds back up
                if let Some(jumps) = Self::recursive_max_jumps(&nums, cur_sor, &target, &mut memo) {
                    // if the recursive call to the next index produces a valid path...
                    Some(
                        match jump_count {
                            Some(max_j) => cmp::max(jumps + 1, max_j),
                                //return as jump_count (accumulator), max of 
                                //jumps so far and current value of jump_count, or...
                            _ => jumps + 1,
                                //if jump_count still not set, return jumps so far to
                                //the fold accumulator
                        }
                    )
                } else { jump_count }
                // if no valid path, return jump_count unchanged to the accumulator...
                // This was my biggest logic error. If we find no path, we should not return none
                //or a max_jumps value. We are in the middle of recursion, so we can
                //just use the fold accumulator. If we find an invalid path in the middle
                //of the recursion, this will still track the max_jumps so far
        })
    }
}
```