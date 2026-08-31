# 61 ms and 12.2 MB with Rust (Beats 100% for time and memory)

**Author:** user4075Ue
**Votes:** 0
**Link:** [https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/solutions/4274397/](https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/solutions/4274397/)

---

# Intuition
This problem can be solved by building a graph with verticies representing an i32 and edges representing adjacency. 

# Approach
One thing you will notice is that I use "with_capacity" for everything to pre-allocate memory. This means that each allocation only incurs, at worst, a single system call, which is important since those are becoming more expensive with time. Linux also has a habit of going and doing other stuff while it's inside of the kernel, which can make the problem even worse if this happens inside of a hot loop. Most languages will expose this functionality for at least their resizable array type (ArrayList for Java, std::vector for C++, Vector for Rust, etc). 

I build up a graph (as a table) and then find a node which only has one edge. From there, I traverse the edges in order to build my list. I use a hash table since an array risks having high memory usage with large ranges of values. Using a hash table, I can reduce that risk down to at worst 2n entries (I can't be bothered to look up the resizing policy for Rust's HashMap right now, but I'm fairly sure it's something at least as good as "stay below 50% full"). I can also only include space in each graph node for two edges, since that is given as a maximum in the problem. Once I have the table built, iterate through it to find an item with only one edge coming out of it, which is the start of my list. When walking the list, I keep track of both the current and previous vertex in order to make sure that no matter the order the edges were added I still continue to traverse in the correct direction. I do this with some slightly fancy application of pattern matching. 

# Complexity
- Time complexity:
Very roughly $$O(n)$$ if we assume hash table lookups and inserts to be $$O(1)$$, which isn't exactly the case for Rust's hash table implementation. The vector inserts are $$O(1)$$ because I allocate the memory ahead of time, which most people treat as constant (even though Linux still needs to zero all of the pages if you aren't re-using memory). 

- Space complexity:
Also roughly $$O(n)$$. 

# Some notes on what I would do differently in production code

By default, Rust uses SipHash. SipHash sacrifices performance for resilience to what is known as a "HashDOS" attack, where you target hash collisions to cause hash table inserts to always trigger the collision handling code, which is typically much slower than the normal fast path. However, on modern x86_64, AES is both better at this (it's a cryptographic hash), and has dedicated silicon for it, meaning that it can be MUCH faster. The "ahash" crate will provide you a hash map that uses AES as its hash function. 

This would also need to return a Result in case of invalid input which doesn't satisfy the constraints. Outside of all but the hottest codepaths (code that is called multiple millions of times per second), it pays to code defensively and assume that your code might be called by someone who didn't read your comment explaining the input constraints. This lets you return an error instead of crashing if that person gives you bad input. 

# Code
```
use std::collections::HashMap;

impl Solution {
    pub fn restore_array(adjacent_pairs: Vec<Vec<i32>>) -> Vec<i32> {
        let len = adjacent_pairs.len();

        let mut map = HashMap::<i32, [Option<i32>; 2]>::with_capacity(len + 1);

        // build table
        for pair in adjacent_pairs {
            let i = pair[0];
            let j = pair[1];

            let c_i = map.contains_key(&i);
            let c_j = map.contains_key(&j);

            if !c_i {
                map.insert(i, [Some(j), None]);
            } else {
                map.get_mut(&i).unwrap()[1] = Some(j);
            }

            if !c_j {
                map.insert(j, [Some(i), None]);
            } else {
                map.get_mut(&j).unwrap()[1] = Some(i);
            }
        }

        let (min, _) = map.iter().find(|(_, v)| v[1].is_none()).unwrap();

        let mut output = Vec::with_capacity(len + 1);
        
        let mut prev = *min;
        let mut cur = map[&prev][0].unwrap();

        output.push(prev);
        loop {
            output.push(cur);
            match map[&cur] {
                [None, None] | [None, Some(_)] => {
                    unreachable!();
                },
                // end
                [Some(_), None] => {
                    break;
                },
                [Some(x), Some(y)] if x == prev => {
                    prev = cur;
                    cur = y;
                },
                [Some(x), Some(y)] if y == prev => {
                    prev = cur;
                    cur = x;
                },
                [Some(x), Some(y)] => {
                    unreachable!();
                }
            }
        }

        return output;
    }
}
```