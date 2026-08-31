# [Rust] Offline Queries

**Author:** mortonjack
**Votes:** 1
**Link:** [https://leetcode.com/problems/closest-room/solutions/5029771/](https://leetcode.com/problems/closest-room/solutions/5029771/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
When approaching a problem of the form "Given this data, answer these queries", there are two natural ways to approach it. First, you could create a data structure (often a segment tree) which allows for efficient querying, amortising the cost of building the data structure across all of the queries. This works well in many cases, and its initially what I went with for this question, although sometimes the data structure can be complicated and error-prone, which is what I found here.

Another approach is **offline queries**. Rather than changing our representation of the data alone to answer arbitrary queries, we can recognise that *we already know all of the queries we will be performing*. By changing our representation of the queries, often as simple as sorting them, we can answer them in an ideal order, then re-order our answers back into the original order of the queries. 

Offline queries often leads to simpler and more efficient algorithms - a poorly built (aka self-implemented) data structure could maintain good time complexities, but struggle with real-world efficiency due to excessive heap allocations or cache misses. I find custom-data-structure based solutions more intuitive, but I think its worthwhile re-evaluating other alternatives when they come up. (Another common segtree alternative is a custom mergesort). 

# Approach
<!-- Describe your approach to solving the problem. -->
The first step is to sort the queries and rooms vectors by size. I've also converted them into custom structs, which are easier easier to understand and reduce memory indirection. I also initialise an empty set of available rooms. Note that we keep track of each query's initial index.

Now, the queries can be answered in order from the largest required size to the smallest. Every new query will accept all the rooms available to the previous query, plus some extra, so the first step is adding the newly available rooms to the set. Then, check the first room available before and after the preferred id, and check which one (if any) to take.

Afterwards, re-order the answer vector by the query indices to re-create the original query order, and return the vector.

# Complexity
Let `r = rooms.len()` and `q = queries.len()`.
- Time complexity: $$O(r \\log(r) + q\\log(q)+q*B\\log(r))$$
    - $$O(r \\log(r) + q\\log(q))$$ for sorting.
    - $$O(B\\log(r))$$ lookup time for each query.
    - Note that Rust's standard library uses a B Tree rather than a standard Binary Search Tree to represent an ordered set. This means lookups involve linear searching, more comparisons in exchange for better cache efficiency. Currently, `B = 6`.
- Space complexity: $$O(r + q)$$

# Code
```
use std::collections::BTreeSet;

struct Query {
    ideal: i32,
    size: i32,
    index: usize,
}

struct Room {
    id: i32,
    size: i32
}

impl Solution {
    pub fn closest_room(rooms: Vec<Vec<i32>>, queries: Vec<Vec<i32>>) -> Vec<i32> {
        let mut queries: Vec<Query> = queries
            .into_iter()
            .enumerate()
            .map(|(index, query)| Query { ideal: query[0], size: query[1], index })
            .collect();
        let mut rooms: Vec<Room> = rooms
            .into_iter()
            .map(|r| Room { id: r[0], size: r[1] })
            .collect();
        queries.sort_unstable_by_key(|query| query.size);
        rooms.sort_unstable_by_key(|room| room.size);
        let mut available_rooms = BTreeSet::new();

        let mut ans = queries.into_iter().rev().map(|query| {
            while let Some(room) = rooms.pop() {
                if room.size < query.size {
                    rooms.push(room);
                    break;
                } else {
                    available_rooms.insert(room.id);
                }
            }
            let lower = available_rooms.range(..query.ideal).next_back().copied();
            let upper = available_rooms.range(query.ideal..).next().copied();
            let room = match (lower, upper) {
                (None, None) => -1,
                (Some(x), None) => x,
                (None, Some(y)) => y,
                (Some(x), Some(y)) => 
                    if query.ideal - x > y - query.ideal { y } else { x },
            };
            (room, query.index)
        }).collect::<Vec<_>>();
        ans.sort_unstable_by_key(|(_, id)| *id);
        ans.into_iter().map(|(a, _)| a).collect()
    }
}
```