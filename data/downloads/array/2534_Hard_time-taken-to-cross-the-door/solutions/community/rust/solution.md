# Using queues and tuples to track state [Beats 100%]

**Author:** qtapostate
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/5523528/](https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/5523528/)

---

# Intuition
Queue on both sides, evaluate rules

# Approach
Create two queues to track the people on each side (entering and exiting). An enumerated iterator can be used to do this in a single pass. Enqueue the elements with push_back, implicitly handling the condition of lesser indicies crossing first.

Iterate through until: (a) there are no elements remaining in the `enter_queue` or `exit_queue`, nobody is "waiting" to enter, and nobody is "waiting" to exit. For each iteration:
1. If the next person has arrived (such that their arrival seconds is <= the current seconds): pop the next item from each queue and hold it the reference on `entering` or `exiting` respectively.
2. Pattern match over the values of `(entering, exiting)`, capturing the cases of "both", "entering-only", "exiting-only", and "neither". In the "neither" case, reset `last_direction`. Otherwise, set `last_direction` accordingly and clear out the reference to the person who was just processed.
3. Apply the rules accordingly, setting `crossed[index] = second`.


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
impl Solution {
    pub fn time_taken(arrival: Vec<i32>, state: Vec<i32>) -> Vec<i32> {
        let mut enter_queue = std::collections::VecDeque::new();
        let mut exit_queue = std::collections::VecDeque::new();

        let mut crossed = vec![-1; arrival.len()]; // result array

        // populate the queues on each side using a VecDeque to represent the lines
        for (i, e) in arrival.iter().enumerate() {
            match state[i] {
                0 => enter_queue.push_back((i, e)),
                1 => exit_queue.push_back((i, e)),
                _ => {}
            }
        }

        // debugging
        // println!("enter queue: {:?}", enter_queue);
        // println!("exit queue: {:?}", enter_queue);

        // track the reference of the person who is entering/exiting next ("on deck")
        let mut entering: Option<(usize, &i32)> = None;
        let mut exiting: Option<(usize, &i32)> = None;

        let mut second = 0;
        let mut last_direction = -1;

        // run loop until there are no queued people, and anybody waiting has crossed
        // this accounts for holding an already-popped reference in entering/exiting respectively
        while enter_queue.len() > 0 || exit_queue.len() > 0 || entering.is_some() || exiting.is_some() {

            // identify who is next to cross on each side

            if entering.is_none() && enter_queue.len() > 0 && *(enter_queue.front().unwrap()).1 <= second {
                entering = enter_queue.pop_front();
            }

            if exiting.is_none() && exit_queue.len() > 0 && *(exit_queue.front().unwrap()).1 <= second {
                exiting = exit_queue.pop_front();
            }

            // apply rules to evaluate who is next to cross through the door

            match (entering, exiting) {
                (Some(en), Some(ex)) => { // waiting to enter: YES, waiting to exit: YES
                    match last_direction {
                        0 => { // somebody used the door in prev second to enter
                            // prefer entering
                            crossed[en.0] = second;
                            last_direction = 0;
                            entering = None;
                        },
                        1 => { // somebody used the door in prev second to exit
                            // prefer exiting
                            crossed[ex.0] = second;
                            last_direction = 1;
                            exiting = None;
                        },
                        _ => { // nobody used the door in prev secod
                            // prefer exiting
                            crossed[ex.0] = second;
                            last_direction = 1;
                            exiting = None;
                        }
                    }
                },
                (Some(en), None) => { // waiting to enter: YES, waiting to exit: NO
                    crossed[en.0] = second;
                    last_direction = 0;
                    entering = None;
                },
                (None, Some(ex)) => { // waiting to enter: NO, waiting to exit: YES
                    crossed[ex.0] = second;
                    last_direction = 1;
                    exiting = None;
                },
                (None, None) => { // waiting to enter: NO, waiting to exit: NO
                    last_direction = -1;
                }
            }

            // debugging
            // println!(
            //     "second={}, direction={}, entering={:?}, enter_queue.length={}, exiting={:?}, exit_queue.length={}",
            //     second,
            //     last_direction,
            //     entering,
            //     enter_queue.len(),
            //     exiting,
            //     exit_queue.len()
            // );

            second += 1;
        }

        return crossed;
    }
}
```