# [RUST] BFS

**Author:** keep_of_kalessin
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/1827883/](https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/1827883/)

---

* Keep track of whether we are coming from a forward/backward jump
* The maximum forward position is unlimited. This will lead to a never
  terminating BFS. Thus, how to limit it ?

```rust
use std::collections::hash_map::Entry;
use std::collections::HashMap;

const START_POS: i32 = 0;
const NO_PATH_FOUND: i32 = -1;

pub fn minimum_jumps(forbidden: Vec<i32>, f: i32, b: i32, dst: i32) -> i32 {
    // TODO: Do we need to relax this limit ? Or can we restrict it further ?
    let max_forward = forbidden.iter().copied().max().unwrap_or(0) + f + b + dst;

    // There is no difference between the visited and the forbidden nodes,
    // so put them in one place in order to reduce the number of checks in
    // the code
    //
    // A value of "true" means that we have visited this node with the ability
    // to jump both backwards and forwards. A value of "false" means that we
    // visited the node only with the ability to jump "forward", thus we may need
    // to revisit it again in case we become able to jump back from it.
    let mut visited = HashMap::new();
    for pos in forbidden.into_iter() {
        visited.insert(pos, true);
    }
    visited.insert(START_POS, true);

    let mut queue = vec![];
    let mut neighbours = vec![];

    let mut dist = 0;
    queue.push((START_POS, true));

    while !queue.is_empty() {
        while let Some((pos, can_jump_back)) = queue.pop() {
            if pos == dst {
                return dist;
            }

            let forward = pos + f;
            if forward < max_forward {
                let push = match visited.entry(forward) {
                    // if it was visited with a "can_jump_back == false, we have to enqueue it again
                    Entry::Occupied(mut e) => !e.insert(true),
                    Entry::Vacant(e) => *e.insert(true),
                };

                if push {
                    neighbours.push((forward, true));
                }
            }

            let backward = pos - b;
            if can_jump_back && backward > 0 {
                let push = match visited.entry(backward) {
                    // we have already processed the backward jump
                    Entry::Occupied(_) => false,
                    Entry::Vacant(e) => !*e.insert(false),
                };

                if push {
                    neighbours.push((backward, false));
                }
            }
        }

        std::mem::swap(&mut queue, &mut neighbours);
        dist += 1;
    }

    NO_PATH_FOUND
}
```