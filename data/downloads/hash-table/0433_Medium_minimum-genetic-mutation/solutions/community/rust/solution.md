# Rust | BFS but No Hash Set, No Heap Allocation | With Comments

**Author:** wallicent
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-genetic-mutation/solutions/2769939/](https://leetcode.com/problems/minimum-genetic-mutation/solutions/2769939/)

---

Even if BFS is clearly the way to go here, I had a slightly different take on it than the official and posted solutions. Please post a comment if you find anything objectionable with this reasoning (other comments and upvotes are of course very welcome too for feedback ;) ) . If you loop through all the possible mutations of an 8-nucleotide strand, you have 32 variants to try (assuming you try also with the current nucleotide, which all posted solutions seem to do). In the worst case for a BFS round with the given constraints, you have 9 items in the queue => 32 * 9 = 288 variants to try. With the three nested for loops and the `find` in the official solution, it sums up to a worst-case of 9 * 4 * 8 * 10 = 2880 string comparisons for a round. Then many of the solutions (including the official) do heap allocations to construct new strings with the mutated variants, which is also costly, and do lookups with all those variants in a hash set over visited mutations. Hash sets do have O(1) lookup time complexity, but you have to do the actual hashing, and real-world performance is much worse than arrays for small datasets.

So with that in mind, I opted for a solution where I avoided a hash set. Instead, I go through the unvisited items in the (very small) bank to see if we can find any item with a distance of one nucleotide from the current strand. Removal from the bank is done by swapping an item to the end of the array and popping it (O(1), thanks to BigMih for the suggestion to use `swap_remove` instead of doing it with `swap` and `pop`). And with this technique, we don't do any heap allocations for new strings - we just move the string instances that we get as input from the bank to the queue. In the worst case for a round, we have 5 items in the queue and 5 items left in the bank => 25 comparisons.

```rust
use std::collections::VecDeque;
use std::iter::once;

impl Solution {
    pub fn min_mutation(start: String, end: String, mut bank: Vec<String>) -> i32 {
        let dist = |a: &String, b: &String| a.bytes().zip(b.bytes()).filter(|(c, d)| !c.eq(d)).count();
        let mut mutations = 0;
        let mut q = once(start).collect::<VecDeque<_>>();
        while !q.is_empty() {
            for _ in 0..q.len() {
                let curr = q.pop_front().unwrap();
                if curr == end {
                    return mutations;
                }
                let mut i = 0;
                while i < bank.len() {
                    if dist(&curr, &bank[i]) == 1 {
                        q.push_back(bank.swap_remove(i));
                    } else {
                        i += 1;
                    }
                }
            }
            mutations += 1;
        }
        -1
    }
}
```

Can we do anything to make strand comparison cheaper? How about this idea - a nuclotide corresponds to two bits of information. With 8 nucleotides, we can encode that as a single 16-bit word. So we encode `start`, `end` and the `bank` (This is essentially hashing, but with a 1-to-1 hashing function. And we do it at most 12 times, not thousands of times as with the hash set solution), and get much cheaper comparisons. To detect if two encodings have a distance of one, we can use single-opcode operations (`^`, `>>`, `trailing_zeros`) to determine that very cheaply.

```rust
use std::collections::VecDeque;
use std::iter::once;

impl Solution {
    pub fn min_mutation(start: String, end: String, bank: Vec<String>) -> i32 {
        let encode = |s: String| s.bytes().fold(0u16, |enc, b| (enc << 2) | match b { b'A' => 0, b'C' => 1, b'T' => 2, _ => 3});
        let dist_one = |a: u16, b: u16| match ((a ^ b).trailing_zeros(), (a ^ b) >> (a ^ b).trailing_zeros()) { 
            (t, s) if t % 2 == 1 && s == 1 => true,
            (t, s) if t % 2 == 0 && s < 4 => true,
            _ => false,
        };
        let mut bank = bank.into_iter().map(encode).collect::<Vec<_>>();
        let (start, end) = (encode(start), encode(end));
        let mut mutations = 0;
        let mut q = once(start).collect::<VecDeque<_>>();
        while !q.is_empty() {
            for _ in 0..q.len() {
                let curr = q.pop_front().unwrap();
                if curr == end {
                    return mutations;
                }
                let mut i = 0;
                while i < bank.len() {
                    if dist_one(curr, bank[i]) {
                        q.push_back(bank.swap_remove(i));
                    } else {
                        i += 1;
                    }
                }
            }
            mutations += 1;
        }
        -1
    }
}
```

Can we do even better by eliminating the heap allocations that we have to do for the encoded `bank` and for `q`? Yes, we can! We encode the bank to an array, and we make a simple circular buffer for the queue, both statically allocated on the stack.

```rust
const MAX_BANK_LEN: usize = 10;

impl Solution {
    pub fn min_mutation(start: String, end: String, bank: Vec<String>) -> i32 {
        let encode = |s: String| s.bytes().fold(0u16, |enc, b| (enc << 2) | match b { b'A' => 0, b'C' => 1, b'T' => 2, _ => 3});
        let dist_one = |a: u16, b: u16| match ((a ^ b).trailing_zeros(), (a ^ b) >> (a ^ b).trailing_zeros()) { 
            (t, s) if t % 2 == 1 && s == 1 => true,
            (t, s) if t % 2 == 0 && s < 4 => true,
            _ => false,
        };

        let mut n = bank.len();
        let mut bnk = [0; MAX_BANK_LEN];
        bank.into_iter().map(encode).zip(bnk.iter_mut()).for_each(|(src, dst)| *dst = src);

        let end = encode(end);

        let (mut cb, mut cb_i, mut cb_len) = ([0; MAX_BANK_LEN], 0, 1);
        cb[0] = encode(start);

        let mut mutations = 0;
        while cb_len != 0 {
            for _ in 0..cb_len {
                if cb[cb_i] == end {
                    return mutations;
                }
                let mut i = 0;
                while i < n {
                    if dist_one(cb[cb_i], bnk[i]) {
                        cb[(cb_i + cb_len) % MAX_BANK_LEN] = bnk[i];
                        cb_len += 1;
                        bnk.swap(i, n-1);
                        n -= 1;
                    } else {
                        i += 1;
                    }
                }
                cb_i = (cb_i + 1) % MAX_BANK_LEN;
                cb_len -= 1;
            }
            mutations += 1;
        }
        -1
    }
}
```
