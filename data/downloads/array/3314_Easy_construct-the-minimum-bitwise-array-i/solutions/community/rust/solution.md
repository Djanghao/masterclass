# Clever Bitlogic with Rust

**Author:** ChrisPls
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/solutions/5944654/](https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/solutions/5944654/)

---

# Intuition
The core idea here is to use the "+ 1" to cascade carry bits and restore a the highest bit of the original number it can. 

# Approach

I've done my best to detail the workings in the code + debug logging.
First off, if `num` is even, there's no way to encode it as `x | (x + 1)`. 
- If `x` is even, then `x + 1` is odd and their `|` is odd.
- If `x` is odd, then `x + 1` is even and their `|` is odd.
Therefor, all even numbers are immediately encoded as `-1` aka "cannot be done".

Now we know that all other `num` values are odd, so they have one or more trailing ones in their binary representation:
```
num => binary          => tail
  3 => 0b0011          => 0b11
  5 => 0b0101          => 0b1
  7 => 0b0111          => 0b111  
911 => 0b11_1101_1111  => 0b01_1111
```

We want to abuse that chain, to get get `ans[i] + 1` to always be a bit that's set in `num`, so that the `|` works. We do this by taking each "tail" and shortening it by one. Now when that tail is incremented, it carries into the highest bit of that initial tail.

Using `num=7`:
- `7` in binary is `0b0111`
- The tail is `0b111`, and there's nothing after the tail
- We'll find the high bit of the tail by shifting right by 1 and incrementing to cause a carry:
    - `0b0111 >> 1 == 0b0011`
    - `0b0011 + 1 == 0b0100`
    - Which we see matches the `0b0111` tail we started with.
- Now subtract off this high bit from our original number.
- `7 - 0b0100 == 0b0111 - 0b0100 == 0b0011 == 3` 
- This is our answer for `7`: it should be encoded as `3`.
- We can confirm by redoing our `ans[i]` math:
    - `3 + 1 == 4, 3 | 4 == 0b0011 | 0b0100 == 0b0111 == 7`

The code does this concisely with:
```rust []
// p is from `nums`
let half_p: i32 = p >> 1;
return p - (1 << half_p.trailing_ones());
```

Note: If you don't use the full tail here, you get answers that work but they are not minimal! Using the full is necessary to get the smallest answer. On some observation, numbers with short enough tails don't make this distinction. (Try the above with `num=5`, for example.)

I recommend doing a few by hand and comparing the debug output in the code below to better understand what's happening. It's a very clever trick I saw in a different write up here, but without much explanation. I hope this adds more context. :)

# Complexity
- Time complexity: $$O(n)$$, a fixed number of bit ops (all $$O(1)$$) per num in `nums`.
    - Note: If you do not have access to a hardware "count trailing ones" intrinsic, then this complexity worsens. Most CPUs support this, but how it gets exposed into higher langauges varies.
    Worst case, you need to write a $$O(b)$$ loop where $$b$$ is the number of bits in your integer *value*. Since the problem bounds this to ~1000, $$b$$ is never more than 10.
- Space complexity: $$O(n)$$, a fixed amount of space per num in `nums`.

# Code
```rust []
impl Solution {
    pub fn min_bitwise_array(nums: Vec<i32>) -> Vec<i32> {
        nums.into_iter().map(min_bitwise).collect()
    }
}

fn min_bitwise(p: i32) -> i32 {
    if p % 2 == 0 {
        // (p | (p+1)) is always odd, so no even number can be expressed this way.
        -1
    } else {
        // The core idea here, is to find a run of 1s in the binary reprentation of 'p'.
        // We'll then subtract off the top 1 in that string from 'p'.
        // Any chain will give us a correct encoding, but we want the minimum value stored so that means the longest chain we can find.
        // Because we'll add 1 to this chain, we need it to be the longest chain of 1s from the least significant bit.
        //  Consider 991:
        //      991 = 0b01111011111
        //                    ^___^ is our chain.
        //  We want to subtract off the top of the chain, but one shorter so the +1 restores that upper bit. We'll use:
        //      991 >> 1 = 0b00111101111
        //  Now we count the lower ones (4 long), and know the value to subtract out of 'p':
        //      1 << 4
        //  This ultimately lets the (ans[i] + 1) logic turn back into that upper bit, and get OR'd into 'ans[i]' and restore 'p'!
        //
        // Fail a test to see detailed output:
        if cfg!(debug_assertions) {
            let x = "    ";
            let xx = "        ";
            let half_p = p >> 1;
            let hf_ct1 = half_p.trailing_ones();

            println!("min_bitwise({p}):");
            println!("{x}Consider:");
            println!("{x}    {p:>3} = 0b{p:011b}");
            println!("{x}          {} trailing ones", p.trailing_ones());

            println!("{x}Shift right once:");
            println!("{x}    {half_p:>3} = 0b{half_p:011b}");
            println!("{x}          {} trailing ones", hf_ct1);

            println!();
            println!("{xx}(1 << {hf_ct1}) = 0b{:011b}", 1 << hf_ct1);
            println!("{x}         {p:>3} = 0b{p:011b}");

            println!("{x}Then");
            println!("{xx}{p} - (1 << {hf_ct1}) == 0b{:011b}", p - (1 << hf_ct1));

            println!("{x}and to piece it back together:");
            println!("{xx}0b{0:011b} ({p} - (1 << {hf_ct1}))", p - (1 << hf_ct1));
            println!("{x}  + 0b{0:011b} ({0})", 1);
            println!("{x}  ----------");
            println!(
                "{xx}0b{0:011b} ({p} - (1 << {hf_ct1}) + 1)",
                p - (1 << hf_ct1) + 1
            );
            println!("{x}  | 0b{0:011b} ({0})", p);
            println!("{x}  ----------");
            let sum = (p - (1 << hf_ct1)) | (p - (1 << hf_ct1) + 1);
            println!("{x}    0b{0:011b} ({0})", sum);

            println!();
            println!();
        }

        let half_p = p >> 1;
        p - (1 << half_p.trailing_ones())
    }
}
```