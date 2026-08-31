# Gray Code || Rust || Fast and easy solution || Beats 100% in both time and space complexity

**Author:** krischal111
**Votes:** 2
**Link:** [https://leetcode.com/problems/gray-code/solutions/3151508/](https://leetcode.com/problems/gray-code/solutions/3151508/)

---

# Intuition
I knew there was some technique to calculate gray code from the binary number. I had learnt that in the first semester in the subject Digital Logic class. So wanted to convert that technique to bitwise operations.

# Approach
Essentially, what you need to do is, you have to XOR the first bit with the next bit, and do it sequencially till the end. The very first bit is copied as it is, and all the subsequent bits is computed from the XOR operation between adjacent bits, till the end.

Let us understand from the example below:
101110011:
```
1   0   1   1   1   0   0   1   1
|\\  |\\  |\\  |\\  |\\  |\\  |\\  |\\  |
| \\ | \\ | \\ | \\ | \\ | \\ | \\ | \\ |
|  \\|  \\|  \\|  \\|  \\|  \\|  \\|  \\|
1   1   1   0   0   1   0   1   0
```
So, all you need to do is iterate from 0 to 2^n and convert all the numbers into gray code.

Now, 2^n can be done very cheaply using ` 1 << n`, and the operation shown above can be achieved by the bitwise operation `n ^ (n >> 1)`.

We can see that from following:
```
Remember, second binary number is the first binary number right shifted once.
 1  0  1  1  1  0  0  1  1
^0  1  0  1  1  1  0  0  1
-|--|--|--|--|--|--|--|--|-
 1  1  1  0  0  1  0  1  0
```

From that, we can just use the iterator, map each element to it's equivalent gray code, and collect it to a vector.

# Complexity
- Time complexity:
Time complexity would be $$O(2^n)$$, since we have to create 2^n elements in output, which is created one by one.

- Space complexity:
Space complexity would also be $$O(2^n)$$, for the same reason as time complexity (we have to create vector list containint 2^n elements.)

# Code
The code is as simple as it looks:
It iterates from 0 to 2^n, converts each one to equivalent gray code, and collects it to a vector.
```
impl Solution {
    pub fn gray_code(n: i32) -> Vec<i32> {
        (0..(1<<n)).map(into_gray).collect()
    }
}
#[inline]
fn into_gray(n : i32) -> i32 {
    n ^ (n >> 1)
}
```