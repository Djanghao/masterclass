# [Rust] 0ms, custom WormholeIter struct

**Author:** tiedyedvortex
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5460663/](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5460663/)

---

This is an adaptation of the "wormhole" approach by [lee215](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/383670/java-c-python-tenet-o-n-solution).

# Intuition
Imagine parentheses as portals which both transport you to the paired parenthesis, and then reverse your direction of travel.

So, if you have a string like `(i(love)u)`, we begin at index 0 moving forward. Index 0 is '(', so we portal to index 9, ')', reverse direction, and then take one step in that direction.

Now we are at index 8, so we output `u` and maintain travel direction, so we step to index 7. 

Index 7 is a parenthesis ')', so we portal to index 2, reverse direction so we're traveling forwards again, and step to index 3.

Index 3, 4, 5, 6 are just characters, so we add output `love` (so our total output is `ulove` so far).

Now we've made it back to index 7 again, which is again a portal, so we jump to index 2 and reverse direction, so now we're going backwards, and step one more time to index  1, output `i` (total `ulovei`), and then step to index 0.

Finally, we step from index 0 to index 9, reverse direction, and step forward to index 10. This is off the edge of the string, so we're done.

# Approach
Represent direction of travel with an enum; implement `std::ops::Not` for easy reversals.

Represent the state of travel as a custom iterator struct.

In the constructor `new`, we do a first pass and identify:
* The number of output characters
* Each pair of "portal" parentheses.
Initial state is index 0 moving forward.

When we step in the iterator, we may have to do multiple warps back-to-back, if the string is something like `((((x))))`. This could be handled with a recursive call to self.next(), but to avoid a stack overflow use a `while let Some` loop.

Since we how many non-paren characters are in the struct, we can implement `Iterator::size_hint` and `ExactSizeIterator`. This improves performance by allowing the output String to know exactly how many bytes to reserve.

Because our iterator produces `chars` and String is `FromIterator<char>`, we can just `collect` our iterator.

# Complexity
- Time complexity: O(n), we do two passes over the string.

- Space complexity: O(n) working, O(n) output. We reserve a Vec to keep track of warp locations, and output a new String with length of at most n.

# Code
```
impl Solution {
    pub fn reverse_parentheses(s: String) -> String {
        WormholeIter::new(&s).collect()
    }
}

#[derive(Debug, Clone, Copy)]
enum Direction {
    Forward,
    Backward,
}

impl std::ops::Not for Direction {
    type Output = Self;

    fn not(self) -> Self {
        match self {
            Self::Forward => Self::Backward,
            Self::Backward => Self::Forward,
        }
    }
}

struct WormholeIter<'a> {
    s: &'a [u8],
    index: usize,
    direction: Direction,
    remaining_len: usize,
    jump_to: Vec<Option<usize>>,
}

impl<'a> WormholeIter<'a> {
    fn new(s: &'a str) -> Self {
        let s = s.as_bytes();
        let mut open_i = Vec::new();
        let mut jump_to = Vec::with_capacity(s.len());
        let mut len = 0;
        for (i, &byte) in s.iter().enumerate() {
            if byte == b')' {
                let open = open_i.pop().expect("valid parenthesis sequence");
                jump_to[open] = Some(i);
                jump_to.push(Some(open));
                continue
            }
            if byte == b'(' {
                open_i.push(i);
            } else {
                len += 1;
            }

            jump_to.push(None);
        }
        Self {
            s,
            index: 0,
            direction: Direction::Forward,
            remaining_len: len,
            jump_to,
        }
    }

    fn step(&mut self) {
        match self.direction {
            Direction::Forward => {
                self.index += 1;
            }
            Direction::Backward => {
                self.index -= 1;
            }
        }
    }
}

impl<'a> Iterator for WormholeIter<'a> {
    type Item = char;

    fn next(&mut self) -> Option<Self::Item> {
        while let Some(jump_to) = self.jump_to.get(self.index).copied().flatten() {
            self.index = jump_to;
            self.direction = !self.direction;
            self.step();
        }
        let output = self.s.get(self.index).copied().map(char::from)?;
        self.remaining_len -= 1;
        self.step();
        Some(output)
    }

    fn size_hint(&self) -> (usize, Option<usize>) {
        (self.remaining_len, Some(self.remaining_len))
    }
}

impl<'a> ExactSizeIterator for WormholeIter<'a> {}
```