# Elegant O(1) solution (no loop) in 10 languages with EXTREMELY detailed explanation

**Author:** steve7411
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-xor-product/solutions/6016522/](https://leetcode.com/problems/maximum-xor-product/solutions/6016522/)

---

# Intuition

The solution to this problem is really quite beautiful, but there are a few things we need to develop an intuition for before we can arrive there. The first thing that we should build an understanding of is how we can affect the values we're multiplying together given that the only thing we can do to change them is to perform **the same** bitwise XOR to both of them. But how can we exploit that?

---
 
#### Understanding XOR

Given that we have to come up with some value of `x` to XOR with both of the inputs `a` and `b`, are there any useful patterns that we can identify to help us?

Bitwise XOR works by going through each bit of both of its inputs and setting the corresponding bit in the output according to the following rules:

- When both of the corresponding bits in the inputs are `1`s, the bit in the output will be a `0`

- When both of the corresponding bits in the inputs are `0`s, the bit in the output will also be a `0`

- When one of the corresponding bits is `1` and the other is `0`, the bit in the output will be a `1`

Let's look at an example. If we write out the binary representations for `12 ^ 6 = 10`, where `^` is used to represent the bitwise XOR operator, we get the following:

$
\\begin{align}
    &1100\\\\
    \\underline{\\smash{^\\wedge}\\space}&\\underline{0110}\\\\
    &1010
\\end{align}
$

If you pay attention to the bits stacked on top of each other, notice that we only see a `1` in the result if the two bits directly above it are **different**. If they are the same, we get a `0`.

How can we use this to maximize the result of the multiplication? One goal we can establish early on is that, when possible, we should put as many `1` bits as we can into both numbers that we multiply together, since any bits that we set to `0` will make our numbers smaller (assuming only non-negative integers). Let's consider the possible cases:

The first two are straightforward:
- When the corresponging bits in `a` and `b` are both `1`s, we should try to keep them in the XOR results. To do that, we should put `0` bits in these positions when we encounter them so the `1`s from `a` and `b` will pass through unchanged to the multiplication.

- When the corresponging bits in `a` and `b` are both `0`s, we should pick `1` bits to XOR them with, because that will result in putting a `1` in both of the XOR results, increasing the final product.

The third and final case requires a little bit more consideration:
- When we encounter bits that are **different** in `a` and `b`, we can pick either a `1` or a `0` to XOR them with. If we pick a `0`, then nothing changes for that bit in the output, and whichever value originally had the `1` will end up with the `1` after the XOR. If we pick a `1` to XOR with, because `1 ^ 1 = 0` and `0 ^ 1 = 1` we will essentially be swapping the `1` between `a` and `b`. For example if `a = 0b11`, `b = 0b10`, and we pick `x = 0b01`, the results after the XORs will be `a ^ x = 0b10` and `b ^ x = 0b11`, so we conceptually moved the rightmost `1` bit from `a` to `b`.

We now know what to do whenever we encounter two matching bits in `a` and `b`, and we know we can pick only **one** of our two multiplication operands to have a `1` bit wherever the bits in `a` and `b` differ. But before we can decide which operand to send our non-matched `1` bits to, we'll need to build some intuition about how swapping bits in the operands will affect the result of the multiplication.

---

#### Swapping bits

How can the ability to conceptually swap bits between our inputs help us maximize the result of the multiplication? Let's try it out and see if we can identify any useful patterns. If we have two variables `c` and `d`, and we start with the values `c = 45` and `d = 0`, in their binary representations that would be `c = 0b101101` and `d = 0b000000`. And now if we perform the multiplication of `c * d`, we'll get `0`. But what if we move one of the `1` bits from `c` to `d`? Let's start by swapping the lowest `1` bit on the right between `c` and `d`, so we have `c = 0b101100` and `d = 0b000001`. That changes our multiplication to be `c * d = 0b101100 * 0b000001 = 44 * 1 = 44`. We increased the value of the product, which is a good start, but what happens if we move a different bit from `c` to `d`? What if we swap two bits? Three bits? Which combinations of bits should we swap from `c` to `d` to maximize the result of the multiplication? To help us explore what the possibilities are, we can write some code to help out.

The following code (only given in C#, but the full problem's solution is available in many languages at the end) will do these bit swaps for us automatically. In the code, there is a constant variable named `allBits` which is assigned an arbitrary value - it can be any number we want to experiment with, and it takes the place of the variable `c` in the example we discussed above. The code then takes all of the possible combinations of `1` bits from `allBits`, moves them into a new variable that takes the place of `d` in the example, and then it multiplies the two together so we can see the result. When it finishes, it will have printed out the results from every unique combination of `1` bits from `allBits` swapped and multiplied together. Since multiplication of integers is commutative, meaning that changing the order of the two numbers we multiply together does not affect the result, we will only try one possible ordering: if we do `a * b`, we don't also try `b * a`.

Don't worry too much about how the specific implementation of the swapping logic works, unless you're curious. Also, this version is written only for modern-ish x86 CPUs, so it won't work on ARM chips, for example. But you can paste it into [SharpLab.io](https://sharplab.io/#v2:EYLgxg9gTgpgtADwGwBYA0AXEUCuA7AHwAEAmARgFgAoIgBgAIiyA6AJXwwEsBbGZgSTwYonPAGdOYMcwAaADiQBuatSZJGZBgBUIAIVEBDKAE8AysNEBzABQ5RGenjT179ADYw8ASnoBeAHyOzDrmIng2ACQARLoA3h54AL5RXso0ZOpM2hAAIjBgPAZuoVa2rk4uQu6ePgFBIRbh1l7MAAoGACYAMjAAZhjWALIGGAAWzMMI1mTOCV6pKlSQ4g52VUVu+hhifvS0wJpkh4r0APSn9ADCowbhMPS8AITUAG5G9AjQw2IA1ru63E4JDaRg2ME2nAwAFEEMIDGABmsMBMDAgAGpFHAwZwbLZiHz+Qn0MhpV7vYCQy4QDi7az2LxI5hdCCWEjWXGQ/H0ADUxLSbyg9A6nEsnNp9OGYyZLM07LcEO2Pl5JLJgoADlAIB0ciKxb56HShF5JeNmZZZdMAKr0AA8NvoFIwVI4PgAVPQAUCQVAwQq8mqIBIBp8oN8fjj5Xj5jy+YtetADQKHgZfuKjSGwyduCm/v59bQTnA4Nnfj5YtR6JX6EmQ/9AcD2j75eCtv7A5DrGUjSXw/QOYq0lXq+88AZdv2dgA9D7QQdVpgATms0ViOjyBWzxUaNlHzmFosViXo7tXuXyhS3YRsIb3usPu1P64vJSao+PM6gzg1Wp1B/xiWcfZT30UcTBfHcDGcR1nSNAC9mAYDDDA7drBvB1KWpWCUjSRIgA=) to explore - just be sure that the **Results** dropdown at the top is set to *Run* in order to see the output. Feel free to change the value assigned to `allBits` on the seventh line. It's a 32-bit, unsigned (can't be negative) integer. See what happens! The results will be printed in descending order, so the largest possible product is always printed first.

```csharp
using System;
using System.Runtime.Intrinsics.X86;

static string ToBinaryString(uint n, int len) => n.ToString($"B{len}");
static string ToDecimalString(uint n, int len) => n.ToString().PadLeft(Math.Max(1, len));

const uint allBits = 0b101101; // Change me!
var xorMask = Bmi2.ParallelBitExtract(uint.MaxValue, allBits) >>> 1;

var bitCount = (int)uint.Log2(allBits) + 1;
var digits = (int)Math.Log10(allBits) + 1;
var prodDigits = (int)Math.Log10((1U << bitCount) * Bmi2.ParallelBitDeposit(xorMask, allBits)) + 1;

for (var mask = (int)xorMask; mask >= 0; --mask) {
    var xor = Bmi2.ParallelBitDeposit((uint)mask, allBits);
    var na = allBits ^ xor;
    Console.WriteLine($"{ToDecimalString(na, digits)} * {ToDecimalString(xor, digits)} = {ToDecimalString(na * xor, prodDigits)}, 0b{ToBinaryString(na, bitCount)}, 0b{ToBinaryString(xor, bitCount)}");
}
```

If we run the above code as-is, we'll see the following output:
```
32 * 13 = 416, 0b100000, 0b001101
33 * 12 = 396, 0b100001, 0b001100
36 *  9 = 324, 0b100100, 0b001001
37 *  8 = 296, 0b100101, 0b001000
40 *  5 = 200, 0b101000, 0b000101
41 *  4 = 164, 0b101001, 0b000100
44 *  1 =  44, 0b101100, 0b000001
45 *  0 =   0, 0b101101, 0b000000
```

On each line it printed the full equation for the multiplication, followed by the binary representation of the two input operands so that we can see which bits ended up where after swapping. For example, on the first line `0b100000` is the binary representation of `32`, and `0b001101` is `13`.

After experimenting with changing the value of `allBits` a few times, you might notice a pattern emerge in how the bits are distributed between the operands when the result of the multiplication is maximized: in every case, the only bit that is set in one of the operands is the **highest** `1` bit available from `allBits`, and every one of the remaining, less significant `1` bits from `allBits` are **all** moved to the other operand!

But **why** is that the case? Well, first let's think about what the bits in the binary representation of a number actually mean. Each bit, or binary digit, in the binary represents a multiplier to a power of `2`. For example, `43` in binary is `0b101011`. Starting from the **least significant** digit on the right, the bit's value is multiplied by $2^0$, the next bit to the left is multiplied by $2^1$, then $2^2$, etc. For `43` this gets us:
$$
\\begin{align}
	(1 \	imes 2^0) + (1 \	imes 2^1) + (0 \	imes 2^2) + (1 \	imes 2^3) + (0 \	imes 2^4) + (1 \	imes 2^5) &\\space=\\\\
	(1 \	imes 1) + (1 \	imes 2) + (0 \	imes 4) + (1 \	imes 8) + (0 \	imes 16) + (1 \	imes 32) &\\space=\\\\
	1 + 2 + 0 + 8 + 0 + 32 &\\space=\\space 43
\\end{align}
$$

The direct consequence of this is that, if we take a `1` bit from one of our inputs and swap it over to the other where there was previously a `0`, we're subtracting out the power of `2` represented by that bit from one number and adding it to the other number.

Putting these ideas together, let's think through a couple of bit swap decisions. Starting with the values `a = 5` and `b = 18`, which have the binary representations `a = 0b00101` and `b = 0b10010`, let's first look at the non-matching bit in the third **least significant** place (third bit from the right), where `a` has a `1` and `b` has a `0`. Using what we've learned about which bits to swap between operands in order to maximize the result multiplication, we can see that `b` currently has the highest valued `1` bit between the two numbers in the fifth least significant place all the way on the left. Because we already have the highest `1` bit in place in `b`, now we want to swap all the remaining, less significant `1` bits into `a`. That means we want to *keep* this particular `1` in `a`. If we had instead swapped it over to `b`, that would have given us `a = 0b00001` and `b = 0b10110`, resulting in $1 \	imes 22 = 22$, which is less than where we started with $5 \	imes 18 = 90$. If we instead decide to operate on the bits in the second **least significant** place, this time we have a `0` in `a` and a `1` in `b`. Swapping this `1` bit from `b` over to `a` results in $0b00111 * 0b10000 = 7 \	imes 16 = 112$, an increase!

The reason this holds is because, when we multiply two positive integers together, we can think of it as performing repeated additions. $5 \	imes 3$ is equivalent to adding `5` together `3` times, or $5 + 5 + 5$. And, because multiplication is commutative (as is addition), $5 \	imes 3$ is also equivalent to adding `3` together `5` times. When we keep the **highest valued** `1` bit in one number and then move one of the lesser `1` bits to the other, we're incresing the number of times that we add together the **largest** power of `2`.

Let's see what happens if we instead move our bit in the *opposite* direction, which *decreases* the number of times we add together our largest power of `2`. `3` in binary is `0b011`, which represents $1 \	imes 2^0 + 1 \	imes 2^1 + 0 \	imes 2^2 = 1 + 2 + 0$, and `5` in binary is `0b101`, which represents $1 \	imes 2^0 + 0 \	imes 2^1 + 1 \	imes 2^2 = 1 + 0 + 4$. If we express this multiplication instead as repeated additions, we get either:

$$
3 \	imes 5 = (1 + 2 + 0) + (1 + 2 + 0) + (1 + 2 + 0) + (1 + 2 + 0) + (1 + 2 + 0) = 15
$$
**OR**
$$
5 \	imes 3 = (1 + 0 + 4) + (1 + 0 + 4) + (1 + 0 + 4) = 15
$$

Now let's take the `1` bit in the second least significant place, right in the center of our 3-bit numbers, and swap it from the `3` over to the `5`. The bit in this place represents the value $2^1$, so when we move it over, we end up with $0b111 \	imes 0b001 = 7 \	imes 1$. Expressing this new multiplication as repeated additions we get:

$$
1 \	imes 7 = (1 + 0 + 0) + (1 + 0 + 0) + (1 + 0 + 0) + (1 + 0 + 0) + (1 + 0 + 0) + (1 + 0 + 0) + (1 + 0 + 0) = 7
$$
**OR**
$$
7 \	imes 1 = (1 + 2 + 4) = 7
$$

As you can see, when we took that bit representing `2` from our original `3` and moved it into the `5`, we **LOST** five additions of that `2` for a total of $5 \	imes 2 = 10$, and in exchange we got only an additional two additions of the remaining `1`, or $2 \	imes 1 = 2$. That results in a net change of $2 - 10 = -8$, which checks out as $15 - 7 = 8$, the exact amount that we lost in the final product!

Now we've nearly figured out *what* we need to do to maximize our product, but there's one more limitation imposed in the problem that we haven't dealt with yet: the value of `n`.

---

#### The limited bits dilemma

Unfortunately for us, the value we pick to XOR with `a` and `b` can't be just *any* value we want; it has to fall in the interval $[0, 2^n)$. Because we're operating on binary numbers, that $2^n$ is easy to imagine: its binary representation will always be all `0` bits except for a single, solitary `1`, and `n` tells us *which* position that `1` will be in. If `n` is `3`, then $2^n$ is `0b1000`. And if `n` is `6`, then $2^n$ is `0b1000000`. The value of `n` is simply the number of trailing `0` bits to the right of the `1`, and because our XOR value has to be *strictly less than* $2^n$, the practical implication for us is that the bits we are allowed to decide what to do with in `a` and `b` correspond to those trailing `0` bits, so the `n` least significant bits. Any bit in the $(n + 1)^{th}$ position or higher must necessarily remain unchanged by our XOR operations.

---

#### Edge cases

We saw earlier what we should do in the cases where the corresponding bits in `a` and `b` are the same, and we discovered a method for deciding which of the operands should get to keep the `1` when the bits are different. But there's a problem with that method that we haven't tackled yet, and it's exacerbated by the introduction of `n`: what do we do if the most significant `1` bits in both `a` and `b` are the same? Where do we swap the lesser bits to if neither `a` nor `b` is the clear winner?

We know from experimenting earlier that our pattern of which bits to swap seemed to work for any initial value we tried. But the code we experimented with assumed we could swap any bits we wanted to, and it ignored any matching-bit-scenarios entirely. Now that we're considering all of the problem's constraints, let's figure out what to do in the edge cases.

If we think about all the places where the bits in `a` and `b` differ, the **most significant** place that differs is the only bit we need to concern ourselves with in order to be able to determine which value is larger: whichever number has the `1` in that location is the greater value. If that place happens to be to the left of the $n^{th}$ bit, we aren't allowed to change it, and we can go on to swap all the lesser differing bits accordingly. But what if the most significant non-matching bit is in one of the `n` least significant bits that we *can* change with our XOR choice? That means we have to choose whether we want `a` or `b` to end up as the larger value after the XOR operations: whichever one we give this `1` bit to will be the larger value.

Let's say that we are given `a = 15`, `b = 9`, and `n = 3`. The binary representations are `a = 0b1111` and `b = 0b1001`. This puts us in the scenario where all the bits to the left of the $n^{th}$ position are matching. Let's pick the most significant position where we **can** perform the swap. In this case, that's the third least significant position where `a` has a `1` and `b` has a `0`. First, let's see what happens if we leave that `1` with `a`, ensuring that `a` continues to be greater than `b` after the XOR. After swapping the other non-matching bit in the second position over to `b`, we end up with `a = 0b1101` and `b = 0b1011`, or `a = 13` and `b = 11`.

Now what happens if we make the opposite choice and swap the `1` bit in the third position over to `b`, conceptually making `b` greater than `a` after the XOR? Well, following the same rules as before, we end up with `a = 11` and `b = 13`. Once again, because integer multiplication is commutative, it turns out that this decision leads us to exactly the same result! In both cases, after our XOR bit swapping, we ended up with $11 \	imes 13 = 143$. This makes intuitive sense, because in both cases we're potentially moving every single non-matching bit between `a` and `b`, and following the same rules to decide which bits to move.

The final case is a bit easier to think about, and that's when $a == b$. When this is true, there are no bits to swap at all, so we only have the easier cases where we turn on all the bits in `a` and `b` that are within the limit imposed by `n`, which we already have a plan to handle.

Now we finally know what to do in all cases for bits in the $n^{th}$ least significant places! If the corresponding bits match, we pick the opposite value for our XOR bit. And if the bits are different, if we *can* choose which number to be greater, we pick either `a` or `b` to become the greater value by setting the most significant, non-matching bit that we're allowed to change, and then following the rules we discovered previously for swapping any remaining, less significant bits. In the case that the most significant non-matching bit is outside of the bits we are allowed to swap due to the value of `n`, we move every swappable bit we can to the smaller of the two.

Knowing *what* we want to do, how can we efficiently accomplish it?
 
 ---
 
# Implementation

Based on all the cases we've considered where we're thinking about individual bit pairs between `a` and `b` and what to do when we encounter them, your first instinct might be to write a loop or recursive function and check the bits one by one to generate our XOR value. But considering the operations that computers are good at, there is a better way!

To start, let's once again consider the cases where we have matching bits in `a` and `b` that we are allowed to manipulate. Of these bits, we want to choose the opposite value bit to XOR it with so that we end up with `1` bits in both of the results. How can we get a `0` in every place where there's a `1`, and a `1` in every place where there's a `0`? That's exactly what the bitwise NOT operator does! The bitwise NOT operator is commonly, but not always, represented as the unary prefix operator `~` in programming languages, so that's what we'll use here. If we want to get the opposite values for bits from `a`, all we have to do is `~a`. And we can do the same for `b`. But how do we combine the two? Since we want the locations from `a` that originally matched with the corresponding bits in `b`, after we flip all the bits in both `a` *and* `b`, those same locations will all match. Then we can use a bitwise *AND* operation, denoted here using `&`, between `~a` and `~b` to get a result with `1` bits in all the locations where **both** `a` and `b` have `0` bits:

```
var xorBits = ~a & ~b;
```

Now that we have `1`s in all the places where both `a` and `b` have `0`s, we incidentally have `0`s in all the places where **either** `a` or `b` have a `1`. Now we need to add in some bits to handle all the swap cases where the bits in `a` and `b` differ. To do that, we'll need a way to get all the bit locations in `a` and `b` that don't match, and, as we discussed earlier, that's exactly what the XOR operator gets us. We'll make a new variable called `diff` to store `1` bits in each place that `a` and `b` differ:

```
var diff = a ^ b;
```

Now let's assume for a bit that $a \\gt b$, and the most significant `diff` bit is in a place we can't change due to the limitations imposed by `n`. That means, for all the places where the bits in `a` and `b` differ in their least significant `n` bits, and `a` is the number with the `1` set, we need to move those bits over to `b`. We can once again use a bitwise *AND* operation, this time between `a` and `diff`, to get all the `1` bits in exactly those places:

```
var aDiffBits = a & diff;
```

Now it's a simple matter of combining any `1` bits from `xorBits` with any `1` bits from `aDiffBits`. We can do that using a bitwise *OR* operation, represented here as the `|` operator:

```
xorBits = xorBits | aDiffBits;
```

Wait a minute! When we originally created `xorBits`, we assigned `1`s to all the positions where both `a` and `b` had `0`s, which means we specifically excluded any locations where `a` had a `1` and `b` had a `0`, or vice versa! So why are we excluding these `1` bits only to add them back in immediately after? Ok, let's rethink how we originally create `xorBits`. Still assuming for now that $a \\gt b$, we want `1` bits in each position from `a` where `a` has a `1` and `b` has a `0`, and we *also* want the locations from `a` and `b` that are both `0`. Let's think through a specific example to see if there's a more direct way to calculate this. Assuming we're given `a = 0b1110`, `b = 0b0100`, `n = 3` and `a` and `b` are 4-bit integers, let's work through the logic we set out so far:
This means `~a = 0b0001` and `~b = 0b1011`, so `xorBits = ~a & ~b = 0b0001`. Then we get `diff = a ^ b = 0b1010` as well as `aDiffBits = a & diff = 0b1010`. Finally, we update `xorBits` to `xorBits = xorBits | aDiffBits = 0b1011`. That value looks really familiar! `0b1011` is just the value of `~b`! That means we can remove the steps above that cancel each other out, leaving us with the following code:

```
var xorBits = ~b;
var diff = a ^ b; // We'll still need this in just a bit
```

Next, let's implement the role of `n` so we can see how far we've come. Remember that the value of `n` tells us exactly how many of the **least significant** bits we can set to `1`s in our XOR value. The easiest way for us to impose that limitation is to create a *mask* we can apply that won't allow any of the bits above the $n^{th}$ to be set. We can generate that mask using a bitwise *LEFT SHIFT*, expressed as `<<`, followed by a subtraction of `1`. If we shift `1` to the left `n` times, we'll get a binary representation of a `1` followed by `n` `0` bits. If we then subtract `1`, which has to go up the chain of the least significant `0` bits until it gets to the `1` and borrow from it all the way back down, we're left with a value that has `1` bits in every one of the `n` least significant places, and `0`s for all its other bits. This works for exactly the same reason that subtracting `1` from a power of `10` in decimal results in all `9` digits, like $1000 - 1 = 999$. Then all that's left is to use our new `mask` to filter out the high bits we're not allowed to set to be `1`s, which can be done with code like this:

```
var mask = (1 << n) - 1;
var xorBits = ~b & mask;
var diff = a ^ b;
```

This value for `xorBits` *already* covers the cases where the bits in `a` and `b` match, and, in the event that $a \\gt b$ because of high bits we can't affect, it **also already** handles places where the bits differ. It even correctly handles the case where $a == b$. We're already nearly there with only a few bitwise operations, but remember the remaining edge case we talked about earlier? What happens if the bit that controls whether `a` or `b` is larger **is** under our control? Let's work through one more example. Given `a = 0b110`, `b = 0b011`, and `n = 3`, what happens with our current code? Let's find out:

```
var mask = (1 << n) - 1; // results in 0b111
var xorBits = ~b & mask; // results in 0b100
```

Using that value of `xorBits`, we get `(a ^ xorBits) * (b ^ xorBits) = 0b010 * 0b111 = 2 * 7 = 14`, which is not the highest product we can make given these inputs (the highest is `18`). So how do we implement the solution to this problem? It turns out that all we need to do is flip the value of a *single* bit in `xorBits` - the value of the bit that corresponds to the highest non-matching bit between `a` and `b`. Flipping that bit will result in our XOR operation reversing the value it leaves the `1` in.

We already know that we can flip a single bit using an XOR operation, but how do we efficiently find out which bit is the highest `1` bit in `diff`? Well that depends on the programming language and even a little on your computer's specific hardware. Many languages offer an integer-specific $log_2$ function that is backed by hardware instructions on even vaguely modern CPUs. For example, on x86 and ARM there are the `LZCNT` and `CLZ` instructions, respectively, that tell you the leading zero count of a register-sized integer. That count can be used to directly tell us which bit is the highest `1` bit set if we know how many bits our integers use, which is 64-bits for most of the common languages/hardware that have integer primitives, but is notably **NOT** how Python's `int` or JavaScript's `Number` types work. Other languages might expose a bit length method directly that is efficiently implemented. It's important to note that any $log_2$ function that operates using hardware-backed 32 or 64-bit floating point numbers will not have the required precision for the larger inputs supplied in this problem, and we would get a rounding error big enough for us to be off by a bit if we relied on them. We could try to detect that case with a couple checks, but it's probably best to avoid those methods since they're much slower *and* not precise enough for this particular use case. You can see how to efficiently get the highest set bit position in quite a few languages in the code at the end, and once we get that information, we can create the necessary value to XOR our `xorBits` variable with that will flip the bit we need to. That will look something like the following:

```
var mask = (1 << n) - 1;
var xorBits = ~b & mask;
var diff = a ^ b;
var flipBit = 1 << iLog2(diff);
xorBits = xorBits ^ flipBit;
```

The final consideration is that we *just* broke a couple of cases that were previously handled corectly: the case where $a == b$, the case where the highest non-matching bit between `a` and `b` is outside of the bits we're allowed to modify, and we still haven't quite handled the case where $b \\gt a$. The first case we can solve by replacing the hard-coded `1` we're shifting into `flipBit`, and instead use a `1` when `a` and `b` are not equal, and a `0` when they are equal. The second case can be handled by applying our `mask` *after* the bit flip instead of before it. The third case can be fixed by inverting the bits of the smaller of `a` and `b` instead of always using `b`. That will get us to something similar to the following. This code assumes a language where a comparison operation returns a value that can be coerced into `1` for true and `0` for false, but you can see the specifics for various real languages in the full solution code at the end.

```
var mask = (1 << n) - 1;
var xorBits = ~min(a, b);
var diff = a ^ b;
var flipBit = (a != b) << iLog2(diff);
xorBits = (xorBits ^ flipBit) & mask;
```

This value for `xorBits` should now correctly handle every case we've come up with, including moving the swappable bits to the correct results, and ensuring that there are `1` bits in all the places where `a` and `b` match, without any explicit loops or even branches in our code! Most compilers and JITs that I'm familiar with will turn this particular `min(a, b)` into something like a compare and then `CMOVLE` instruction, which stands for "conditional move if less than". This avoids a *relatively* expensive, difficult-to-predict branch instruction that can potentially cause our CPU's pipelines to become sad. So the final pseudocode for the solution, including the multiply and modulo operation (represented here with `%`) will be:

```
var mask = (1 << n) - 1;
var xorBits = ~min(a, b);
var diff = a ^ b;
var flipBit = (a != b) << iLog2(diff);
xorBits = (xorBits ^ flipBit) & mask;
return (a ^ xorBits) * (b ^ xorBits) % 1000000007;
```

---

It took us a while, but I hope taking the time to develop the intuitions for not only how, but *why* this little bit of code handles so many different cases was helpful. It might have seemed difficult at first, but now we have a simple and efficient solution that we can really appreciate.

---

# Complexity
Both the time and space complexity for this one can be disagreed upon by reasonable people. We *generally* consider things like arithmetic or bitwise operators to be `O(1)` in both time and space complexity if they're implemented in hardware, even thought that isn't *strictly* true. So for the languages where we *are* using hardware-backed integer types, I would argue that this solution is `O(1)` in both time and space complexity. We didn't need any non-hardware loops or recursion in these languages.

On the other hand, in Python specifically or for other languages if we took our inputs in some arbitrarily large integer type like `BigInteger` or `BigInt`, if we ignore the constraints defined in the problem for the maximum size of the inputs and instead consider any possible non-negative values, the time complexity will be `O(log n)`, because behind the scenes, the arithmetic and bitwise operators have to loop over every digit in their internal representations, which generally means values stored in something like a $base\\space{2^{31}}$ representation. Those same operators are almost always implemented so that they allocate and initialize new values for every one of those operations, so our space complexity would also be logarithmic.

---

# Code
```python []
class Solution:
    def maximumXorProduct(self, a: int, b: int, n: int) -> int:
        mask, diff = (1 << n) - 1, a ^ b
        x = (~min(a, b) ^ (a != b) << (diff >> 1).bit_length()) & mask
        return (a ^ x) * (b ^ x) % 1_000_000_007
```
```csharp []
public class Solution {
    private const long MOD = 1_000_000_007L;
    
    public int MaximumXorProduct(long a, long b, int n) {
        var (mask, diff) = ((1L << n) - 1, a ^ b);
        var x = (~Math.Min(a, b) ^ (-diff >>> 63) << (int)long.Log2(diff)) & mask;
        return (int)((a ^ x) % MOD * ((b ^ x) % MOD) % MOD);
    }
}
```
```javascript []
/*
In JavaScript, we run into problems because the built in Number type truncates values to only
32 bits whenever a bitwise operator is used, even it they're smaller than Number.MAX_SAFE_INTEGER.
Since the values we are working with are up to 50 bits and we want to use bitwise operations,
we have to use BigInt to represent them

The wasm binary used below simply takes in an i64 (signed 64 bit integer, passed in from a BigInt value), 
asks for the leading zero count, then xors it with 63. This is equivalent to an integer-part log2 function
The wasm text format looks like this:

(module
  (func (export "l") (param i64) (result i64)
    local.get 0
    i64.clz
    i64.const 63
    i64.xor
  )
)


If you wanted to avoid the wasm, you could write a looping version operating on BigInt like the following,
and replace the call to log2_i64 with log2N:

const log2N = n => {
    let i = 0;
    for (; n; n >>= 1n, ++i);
    return BigInt(i - 1);
};
*/

const wasmBytes = new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,126,1,126,3,2,1,0,7,5,1,1,108,0,0,10,10,1,8,0,32,0,121,66,63,133,11,0,10,4,110,97,109,101,2,3,1,0,0]);
const wasmModule = new WebAssembly.Module(wasmBytes);
const { l: log2_i64 } = new WebAssembly.Instance(wasmModule, {}).exports;
const MOD = 1_000_000_007n;

const maximumXorProduct = (a, b, n) => {
    [a, b] = [BigInt(a), BigInt(b)];
    const mask = (1n << BigInt(n)) - 1n;
    const x = (~(a < b ? a : b) ^ BigInt(a != b) << log2_i64(a ^ b)) & mask;
    return Number((a ^ x) * (b ^ x) % MOD);
};
```
```cpp []
class Solution {
private:
    static const constexpr int64_t MOD = 1'000'000'007;

    static int32_t log2(uint64_t n) { return std::bit_width(n >> 1); }

public:
    int32_t maximumXorProduct(int64_t a, int64_t b, int32_t n) {
        const int64_t mask = (1ll << n) - 1, diff = a ^ b;
        const auto x = (~std::min(a, b) ^ std::bit_cast<uint64_t>(-diff) >> 63 << log2(std::bit_cast<uint64_t>(diff))) & mask;
        return static_cast<uint32_t>((a ^ x) % MOD * ((b ^ x) % MOD) % MOD);
    }
};
```
```java []
class Solution {
    private static final long MOD = 1_000_000_007L;

    public int maximumXorProduct(long a, long b, int n) {
        long mask = (1L << n) - 1, diff = a ^ b;
        var x = (~Math.min(a, b) ^ (-diff >>> 63) << (63 ^ Long.numberOfLeadingZeros(diff))) & mask;
        return (int)((a ^ x) % MOD * ((b ^ x) % MOD) % MOD);
    }
}
```
```kotlin []
class Solution {
    companion object {
        const val MOD: Long = 1_000_000_007L
    }

    fun maximumXorProduct(a: Long, b: Long, n: Int): Int {
        val (mask, diff) = ((1L shl n) - 1) to (a xor b)
        val x = (min(a, b).inv() xor ((-diff ushr 63) shl (63 xor diff.countLeadingZeroBits()))) and mask
        return ((a xor x) % MOD * ((b xor x) % MOD) % MOD).toInt()
    }
}
```
```rust []
impl Solution {
    const MOD: i64 = 1_000_000_007i64;

    fn log2(n: i64) -> i64 {
        if n > 0 { n.ilog2() as i64 } else { 0 }
    }

    pub fn maximum_xor_product(a: i64, b: i64, n: i32) -> i32 {
        let (mask, diff) = ((1i64 << n) - 1, a ^ b);
        let x = (!std::cmp::min(a, b) ^ ((a != b) as i64) << Self::log2(diff)) & mask;
        return ((a ^ x) % Self::MOD * ((b ^ x) % Self::MOD) % Self::MOD) as i32;
    }
}
```
```c []
const int64_t MOD = 1000000007;

int32_t ilog2(uint64_t n) { return n ? 63 ^ __builtin_clzll(n) : 0; }

int32_t maximumXorProduct(int64_t a, int64_t b, int32_t n) {
    const int64_t mask = (1ll << n) - 1, diff = a ^ b;
    const int64_t x = (~(a < b ? a : b) ^ (uint64_t)-diff >> 63 << ilog2(diff)) & mask;
    return (uint32_t)((a ^ x) % MOD * ((b ^ x) % MOD) % MOD);
}
```
```golang []
const MOD int64 = 1_000_000_007;

func maximumXorProduct(a int64, b int64, n int) int {
    mask, diff := (int64(1) << n) - 1, a ^ b
    x := (^min(a, b) ^ int64(uint64(-diff) >> 63) << bits.Len64(uint64(diff >> 1))) & mask
    return int((a ^ x) % MOD * ((b ^ x) % MOD) % MOD)
}
```
```swift []
class Solution {
    static let MOD = 1_000_000_007
    
    func maximumXorProduct(_ a: Int, _ b: Int, _ n: Int) -> Int {
        let (mask, diff) = ((1 << n) - 1, a ^ b)
        let x = (~min(a, b) ^ (a != b ? 1 : 0) << (63 ^ diff.leadingZeroBitCount)) & mask
        return Int((a ^ x) % Solution.MOD * ((b ^ x) % Solution.MOD) % Solution.MOD)
    }
}
```