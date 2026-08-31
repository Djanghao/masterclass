# Rust | Sliding Window+State Machine, O(n)

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/3650321/](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/3650321/)

---

# Approach

Sliding window. Ensure the substring within the window contains at most 2 distinct characters.

If a new character would introduce a third distinct character, slide the front of the window until the limit is enforced.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$ if the string is consumed during iteration.
Due to limitations of how `String`'s implemented in Rust, this is not yet possible. Instead, a worst case complexity of $O(n)$ can be achieved.

# Code
```
use std::collections::VecDeque;

// The Turing machine
pub enum States {
    Entry,

    One {
        token: char,

        tape: VecDeque<char>,
    }, // substring contains 1 distinct character
    Two {
        token_far: char,
        token_near: char,
        cutoff: usize,

        tape: VecDeque<char>,
    }, // substring contains 2 distinct characters
}

impl States {
    pub fn next(self, token_in: char) -> (Self, usize) {
        match self {
            Self::Entry => (Self::One {
                    token: token_in,
                    tape: VecDeque::from([token_in]),
                }, 1),
            Self::One { token, mut tape } => {
                tape.push_back(token_in);

                let token_out = tape.len();
                let self_next = if token_in == token {
                    // substring still contain only
                    // 1 distinct character after appending
                    Self::One { token, tape }
                } else {
                    // substring contains
                    // 2 distinct character after appending
                    Self::Two {
                        token_far: token,
                        token_near: token_in,
                        cutoff: token_out - 1,
                        tape,
                    }
                };

                (self_next, token_out)
            },
            Self::Two { token_far, token_near, cutoff, mut tape } => {
                tape.push_back(token_in);

                if token_in == token_near { // append only
                    let token_out = tape.len();
                    return (Self::Two {
                        token_far, token_near,
                        cutoff, tape,
                    }, token_out);
                }
                
                if token_in != token_far { // drain deque first
                    tape.drain(..cutoff);
                }

                let token_out = tape.len();
                (Self::Two {
                    token_far: token_near, // swap token_near and token_far
                    token_near: token_in,
                    cutoff: token_out - 1,
                    tape,
                }, token_out)
            },
        }
    }
}

impl Solution {
    pub fn length_of_longest_substring_two_distinct(s: String) -> i32 {
        let mut state = States::Entry;

        let mut out = usize::MIN;
        for c in s.chars() {
            let (next_state, token) = state.next(c);
            out = out.max(token);
            state = next_state;
        }

        out as i32
    }
}
```