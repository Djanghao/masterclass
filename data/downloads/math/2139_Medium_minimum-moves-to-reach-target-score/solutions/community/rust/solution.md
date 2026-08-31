# [RUST} Greedy & Bitwise ops solutions

**Author:** keep_of_kalessin
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/2079625/](https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/2079625/)

---


### Simulation/Greedy

```rust
pub fn min_moves(target: i32, max_doubles: i32) -> i32 {
    let mut doubles = max_doubles;
    let mut num = target;
    let mut steps = 0;

    // Check for `doubles` in order to avoid unnecessary looping if the 
    // number is big, but we cannot perform more `double` operations
    while num > 1 && doubles > 0 {
        if num & 1 != 0 {
            num -= 1;
        } else {
            num /= 2;
            doubles -= 1;
        }

        steps += 1;
    }

    // Fast path if `doubles` is zero
    if num > 1 {
        steps += num - 1;
    }

    steps
}
```

### Constant time solution using bitwise operations

```rust
pub fn min_moves(target: i32, max_doubles: i32) -> i32 {
    // This is the number of division operations that we are allowed to do.
    // The maximum number of possible divisions is the number of bits to the 
    // right of the most significant 1 bit:
    // * 0000_0001 => 0 divisions (no bits to the right of the 1 MSB)
    // * 0000_1000 => 3 divisions
    // * 1000_0000 => 7 divisions
    // * 1010_1010 => 7 divisions
    let divisions = max_doubles.min((i32::BITS - 1 - target.leading_zeros()) as i32);

    // The difference is pretty obvious - it's the same as in the 
    // naive solution. Once we can no longer do divisions, we just 
    // subtract one from the value (because we start from ONE to TARGET), 
    // and this is the number of subtractions that we would need to do
    // in case we were looping in the naive solution
    let difference = (target >> divisions) - 1;

    // So far so good, but how many subtractions we need to perform in between 
    // the divisions (not in general, only in between the divisions). Example: 
    // * 18/2 => 9-1 => 8/2 => 4/2 => 2/2 => 1 
    // So in this case we need to do 1 subtraction. 
    //
    // This too can be computed using bitwise operations, by computing a mask 
    // of 1 bits that covers the bits that will be "divided":
    // Number: ..10101
    // Mask:   ..00111
    // Result: ..00101
    // Thus we end up with 2 one bits set. We would need to switch them to 0
    // in order to continue with the divisions, and the only way to do is 
    // via subtracting 1
    let mask = (1 << divisions) - 1;
    let subtractions = (target & mask).count_ones() as i32;

    // The result is the sum of the number of division operations, 
    // plus the number of subtraction operations in between the divisions,
    // plus the number of subtractions that would need to be performed
    // on the remaining value
    divisions + subtractions + difference
}
```
