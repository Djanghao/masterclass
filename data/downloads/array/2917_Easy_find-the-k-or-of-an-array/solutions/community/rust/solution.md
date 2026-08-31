# Bit twiddling

**Author:** Claytdog
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4277596/](https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4277596/)

---

# Intuition
Since `nums.len() <= 50`, and `k <= 50`, the highest number of occurences of a single bit across all numbers is 50, which needs only 6 bits to represent. The trick is to track the count of multiple bit positions in the same `u64`.

# Approach
The maximum count of a single bit across all numbers is 50, since there are no more than 50 numbers. This requires 6 bits to represent. We pack 9 of these bit sums into a single `u64`, representing the sums as groups of 6 contiguous bits, with one extra bit of padding between adjacent groups. After computing these 9 bit sums, we have to determine which are greater of equal to `k`. The simplest way to do this is to add `64 - k` to each bit sum. Then, if any bit sum is `>= 64`, it was originally `>= k`, and we can quickly determine if a bit sum is `>= 64` by checking if the 7th bit of the bit sum (originally the padding between groups) is a `1` (since the bit sum will be `<= 127`). Then, if we isolate those 9 7th bits with a bitmask, we can move them back into the proper position with some bit twiddling tricks.

```txt
0 .. 6 7...13 14.. 20 21.. 27 28...34 35...41 42...48 49...55 56...62
+-----+------+-------+-------+-------+-------+-------+-------+-------+
|     |      |       |       |       |       |       |       |       |
+-----+------+-------+-------+-------+-------+-------+-------+-------+
     /       \\
   /          \\
 /             \\
+---------------+
| _ _ _ _ _ _ _ |
+---------------+
  ^
  lowest bit position of this bit sum
```

Since 9 bit sums fit in a single `u64`, we need 4 `u64`s to track the 32 bits of an `i32`. Each of these 4 sums will be initialized to 0. Then, for each `i32` of the input vector, we will isolate 9 bits per sum, and spread the bits out to the lowest bit positions of the 9 bit sums (pictured in the ASCII art above).

An example of spreading (it works analogously for the second and third group of 9 bits and last group of 5 bits of the original number):

```rust
// Number:
0b10011001_01001110_01011011_10010111
// Isolate the first 9 bits:
0b00000000_00000000_00000001_10010111
                           ^ ^^^^^^^^
// Extend the number to a `u64`:
0b00000000_00000000_00000000_00000000_00000000_00000000_00000001_10010111
                                                               ^ ^^^^^^^^
// Spread the 9 isolated bits to the lowest bit position of their
// corresponding bit sum:
0b00000001_00000010_00000000_00000000_00010000_00000000_01000000_10000001
         ^       ^       ^       ^       ^       ^       ^       ^      ^
```

These spread numbers are all added together separately for each of the 4 groups of bits (0-8, 9-17, 18-26, 27-31). Then, we need to determine which sums are `>= k`. The trick is to add `64 - k` to each of the bit sums, then if any bit sum has a `1` in the highest bit position, the original sum in that slot was `>= k`.

An example of adding `64 - k` to each bit sum:

```rust
// Let k = 5
// Assume this is the bit sums computed (arrows point to the lowest
// position of each bit sum)
0b00000101_00000110_00110100_00000000_00010000_10000000_11000011_10000001
         ^       ^       ^       ^       ^       ^       ^       ^      ^
// Construct a number with `64 - k` (59, i.e. 0b0111011) in each bit
// sum's position:
0b00111011_01110110_11101101_11011011_10110111_01101110_11011101_10111011
         ^       ^       ^       ^       ^       ^       ^       ^      ^
// Add these two numbers together (*'s mark the 7th bit of each bit
// sum):
0b01000000_01111101_00100001_11011011_11000111_11101111_10100001_00111100
   *     ^ *     ^*      ^*      ^*      ^*      ^*      ^*      ^*     ^
// Isolate only the 7th bit of each bit sum:
0b01000000_00000001_00000000_00000000_00000000_00000000_00100000_00000000
   *       *      *       *       *       *       *       *       *      
// Compress the 7th bits into the first 9 bits of a `u32`:
0b00000000_00000000_00000001_01000010
                           * ********
```

Then, it is just a matter of patching together the four bitmasks produced by the above algorithm for each of the four separate sums.

# Code
```rust
impl Solution {
  /// Spreads a number with bits in positions 0..9 (the rest 0) to a
  /// u64 with those bits in every 7th position (0, 7, 14, ...)
  fn spread(num: u32) -> u64 {
    let num = num as u64;
    let num = num * 0x0000_0010_0004_0001;
    let num = num & 0x0000_1c00_00e0_0007;
    let num = num * 0x1041;
    let num = num & 0x0102_0408_1020_4081;
    num
  }

  /// Adds `cnt + mask`, then moves every 7th bit starting from the
  /// 7th bit (i.e. 6, 13, 20, ...) to the first 9 bits of a `u32`.
  fn compress(cnt: u64, mask: u64) -> u32 {
    let cnt = ((cnt + mask) >> 6) & 0x0102_0408_1020_4081;
    let cnt = (cnt | (cnt >> 6) | (cnt >> 12)) & 0x0000_1c00_00e0_0007;
    let cnt = (cnt | (cnt >> 18) | (cnt >> 36)) & 0x1ff;
    cnt as u32
  }

  pub fn find_k_or(nums: Vec<i32>, k: i32) -> i32 {
    let mask = (0x40 - k as u64) * 0x0102_0408_1020_4081;
    let [a, b, c, d] = nums
      .iter()
      .map(|&idx| idx as u32)
      .fold([0u64; 4], |cnts, num| {
        [
          cnts[0] + Self::spread(num & 0x1ff),
          cnts[1] + Self::spread((num >> 9) & 0x1ff),
          cnts[2] + Self::spread((num >> 18) & 0x1ff),
          cnts[3] + Self::spread((num >> 27) & 0x1ff),
        ]
      });
    (Self::compress(a, mask)
      + (Self::compress(b, mask) << 9)
      + (Self::compress(c, mask) << 18)
      + (Self::compress(d, mask) << 27)) as i32
  }
}

```