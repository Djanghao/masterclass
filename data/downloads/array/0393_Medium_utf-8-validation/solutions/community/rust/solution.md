# Rust | Functional State Machine | With Comments

**Author:** wallicent
**Votes:** 3
**Link:** [https://leetcode.com/problems/utf-8-validation/solutions/2570191/](https://leetcode.com/problems/utf-8-validation/solutions/2570191/)

---

I use a functional state machine approach to scan the input. I map the input bytes to their number of leading bits set (`leading_ones`) and use `scan` to hold the state `(ok, n)`, where `ok` is true if the state machine is in a valid state, and `n` is the number of "tail bytes" with leading b10, i.e. one leading bit set, that we expect. The output of `scan` is wether `data` is valid UTF-8 if it would end at the current byte, i.e. if we are not expecting any tail bytes. Going through the match arms:

1. If the state machine is in an invalid state, we signal that we are done by yielding `None`. We get here if the previous byte hit the sixth match arm, and we have signalled that it is bad UTF-8.
2. The state machine is in a valid state, we expect a header byte (`n == 0`), and the header byte has no leading bits set. This is a one-byte character, so we don't expect any tail bytes, and up until the current byte, we have valid UTF-8.
3. The state machine is in a valid state, we expect a header byte (`n == 0`), and the current byte is a header byte with 2, 3 or 4 leading bits set. We expect 1, 2 and 3 tail bytes, respectively, and we don't have valid UTF-8 if input would end here.
4. The state machine is in a valid state, we expect one tail byte, and the current byte is a tail byte (one leading bit set). We do not expect any more tail bytes, and we have valid UTF-8 if input would end here.
5. The state machine is in a valid state, we expect more than one tail byte, and the current byte is a tail byte (one leading bit set). We decrement the number of tail bytes that we expect. We do not have valid UTF-8 if input would end here.
6. Anything else violates the rules of valid UTF-8 input. We signal that the input is invalid.

```
impl Solution {
    pub fn valid_utf8(data: Vec<i32>) -> bool {
        data.into_iter().map(|i| (i as u8).leading_ones()).scan((true, 0), |(ok, n), lo| 
            match (*ok, *n, lo) {
                (false, _, _) => None,
                (_, 0, 0) => Some(true),
                (_, 0, 2 | 3 | 4) => { *n = lo - 1; Some(false) },
                (_, 1, 1) => { *n = 0; Some(true) },
                (_, _, 1) => { *n -= 1; Some(false) },
                _ => {*ok = false; Some(false)},
            }
        ).last().unwrap()
    }
}
```

I also made a less compact but more readable implementation of the state machine:

```
#[derive(Clone, Copy, PartialEq)]
enum State {
    ExpectingHeader,
    ExpectingOne,
    ExpectingTwo,
    ExpectingThree,
    Error,
    Invalid,
}

impl Solution {
    pub fn valid_utf8(data: Vec<i32>) -> bool {
        data.into_iter().map(|i| (i as u8).leading_ones()).scan(State::ExpectingHeader, |state, lo| {
            *state = match (*state, lo) {
                (State::ExpectingHeader, 0) => State::ExpectingHeader,
                (State::ExpectingHeader, 2) => State::ExpectingOne,
                (State::ExpectingHeader, 3) => State::ExpectingTwo,
                (State::ExpectingHeader, 4) => State::ExpectingThree,
                (State::ExpectingOne, 1) => State::ExpectingHeader,
                (State::ExpectingTwo, 1) => State::ExpectingOne,
                (State::ExpectingThree, 1) => State::ExpectingTwo,
                (State::Error, _) => State::Invalid,
                _ => State::Error,

            };
            if *state == State::Invalid { None } else { Some(*state) }
        }).map(|state| state == State::ExpectingHeader).last().unwrap_or(true)
    }
}
```