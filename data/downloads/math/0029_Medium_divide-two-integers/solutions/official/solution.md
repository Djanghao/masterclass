# Official Solution

**Link:** [https://leetcode.com/problems/divide-two-integers/solution/](https://leetcode.com/problems/divide-two-integers/solution/)

---

[TOC]

## Solution

---

### Overview

Before we get started on the actual approaches, let's cover a few other important things.

Doing this question "properly", following *all* the rules given, makes this one of our most difficult medium-level questions.

**Don't panic, you don't need to know all the approaches**

We have provided a lot of different approaches to show how many different ways there are of solving this question. Approach 1 is a brute-force, and then Approaches 2 to 4 build on each other, and Approach 5 is similar, but approaches the thinking from a very different angle. If you only want to study the first 2 approaches, then that's fine. Approach 2 should be sufficient for an interview. However, we hope you enjoy learning about this question enough that you'll keep reading! :-)

**Make sure you read the question carefully**

This question was designed with fixed-sized integers in mind. Some languages, such as Python and JavaScript, only have arbitrary-precision integers (meaning they can go *huge*, probably as big as you'll ever need!). Depending on which programming languages you're familiar with, the requirements of this question might seem a little tedious and silly to you. We recommend using a language such as C, C++, or Java for it if you're familiar with them. Otherwise, you'll just need to be really careful and think very carefully about whether or not your algorithm would work in a 32-bit-signed-integer environment. Unfortunately, Leetcode doesn't currently enforce these requirements in languages such as Python, so it's up to you to determine whether or not your solution really is a "correct" one. Hint: Throw heaps of `assert` statements into your code.

Most of the upvoted posts on the discussion forum *aren't following the rules specified in the question*. Here are some of the problems I've seen:

- The use of `long` in Java or `long long` in C++ is *not allowed*, because the question states that we're working in an environment where we only have integers within the range $$[−2^{31},  2^{31} − 1]$$.
- The use of `abs` in Python (and other arbitrary-precision integer languages) needs to be considered carefully, because $$abs(-2^{31}) = 2^{31}$$, *which is **outside** the allowed range by 1*.
- While you might be tempted to use multiplication and division for a few "simple" tasks, this is unnecessary. Here are some alternatives:
  - Instead of `a = a * -1` for making numbers negative, use `a = -a`.
  - Instead of using `a / 2` for dividing by `2`, use the right shift operator; `a >> 1`.
  - Instead of using `a * 2` for doubling, use `a = a + a`, `a += a`, or even the left shift operator; `a << 1`.

Additionally, we strongly advise against allowing overflows to happen *at all*. For some compilers/interpreters/languages, `INT_MAX + 1 ≡ INT_MIN`. For others, `INT_MAX + 1 ≡ INT_MAX`. And for others again, it is `undefined` or ***crash***. Some people on the discussion forum have written code that actually relies on specific overflow behaviour for correctness. While this can be quite "clever", it's not portable at all. For code like that to be shippable, you'd need to be *certain* of the behaviour of the specific system it is to run on, and that no future system upgrade would change the behaviour. If it works on your machine, but not on Leetcode's machine, it's *incorrect code*.

In this article, we'll be looking at a few techniques that can solve the problem elegantly and are portable.

**In what cases will the *final result* be out of range?**

We're told the following about overflow in the problem description:

> For the purpose of this problem, assume that your function returns $$2^{31} − 1$$ when the division result overflows.

So, keeping in mind that our integer range is $$[−2^{31},  2^{31} − 1]$$, in what cases could we have an end result *outside* of this range?

Well, when we do `a / b = c`, where `a` and `b` are both *positive integers*, we know that `c ≤ a`. In other words, the answer (`c`) cannot end up bigger than the thing we divided (the dividend, `a`).

Something similar happens even when one or both of them are negative. In that case, `abs(a) ≤ abs(c)`. Another way of thinking about it is that `c` will *always* be closer to zero than `a` is (or, they could also be equal).

Therefore, for `a` and `b` within the range $$[−2^{31} + 1,  2^{31} − 1]$$, the result `a / b` will be closer to zero, so has to be fine.

However, notice we left $$-2^{31}$$ out of the above range. This is because there's a special case of $$-2^{31} / -1$$, which has an answer of $$2^{31}$$. But $$2^{31}$$ is outside of the integer range! So instead we return $$2^{31}-1$$ for this case (which is in range).

Most algorithms for this question simply check for the case $$-2^{31} / -1$$ at the start, returning $$2^{31} - 1$$ if they detect it. This is a sensible approach.

</br>

---

### Approach 1: Repeated Subtraction

**Intuition**

*This approach won't pass the large test cases. However, we'll use it as a starting point, and to introduce a key idea we'll be using for all the approaches—doing **all** intermediate working with negative numbers.*

Think about what it means to divide two integers. In order to divide, say, `15` by `5`, we ask how many times we can put `5` into `15`. The simplest way of doing this is to subtract `5` from `15` repeatedly until we can no longer do so.

```
15 - 5 = 10
10 - 5 = 5
 5 - 5  = 0
```

Because we were able to do `3` subtractions, we know the answer to `15 / 5` is `3`.

As another example, consider dividing `20` by `3`.

```
20 - 3 = 17
17 - 3 = 14
14 - 3 = 11
11 - 3 = 8
 8 - 3 = 5
 5 - 3 = 2
```

We had to stop when we got to `2`, because `3` is bigger than `2`. So, because we were able to do `6` subtractions, we know the answer to `20 / 3` is `6`.

In the example above, we call `20` the `dividend` and `3` the `divisor` (`2` is the *remainder*, which we ignore for this question). The result of dividing the `dividend` by the `divisor` is the number of times we could subtract the `divisor` from the `dividend`. A commonly used name for this result is the `quotient`.

Therefore, our first algorithm will simply subtract the `divisor` from the `dividend` repeatedly until doing so would push it below `0`. It will keep count of the number of these subtractions done, so that it can return it at the end.

*Assuming that both the dividend and divisor are positive*, here is a code snippet for this process.

```java
public int divide(int dividend, int divisor) {
    int quotient = 0;
    while (dividend - divisor >= 0) {
        quotient++;
        dividend -= divisor;
    }
    return quotient;
}
```

This doesn't work if one, or both, of the `dividend` or `divisor` are negative—the dividend will head *away* from zero! Trying to generalise this code to handle all four of the possible sign combinations is problematic, because some are repeated addition instead of subtraction, and some have a `<= 0` continuation case instead of `>= 0`.

A logical solution here is to simply convert any negative inputs to positives, and then put a negative sign back on at the end if needed. Recall that `positive * negative = negative`, and `negative * negative = positive`. In other words, if there was exactly one negative sign in the inputs, the final result is negative. Otherwise, it's positive.

For example:

```
 60 /  10 =  6
-60 /  10 = -6
 60 / -10 = -6
-60 / -10 =  6
```

We'll avoid using `abs` (it causes overflows, that we'll talk more about soon). So for now, let's just use some conditionals so that we can count the negative signs at the same time as making the numbers positive. At the end, we'll then need to put the sign back on if needed.

```java
public int divide(int dividend, int divisor) {
    // Count the number of negatives + convert parameters to positives.
    int negatives = 0;
    if (dividend < 0) {
        negatives++;
        dividend = -dividend;
    }
    if (divisor < 0) {
        negatives++;
        divisor = -divisor;
    }

    // Count the number of subtractions.
    int subtractions = 0;
    while (dividend - divisor >= 0) {
        subtractions++;
        dividend -= divisor;
    }

    // Convert back to negative if needed.
    if (negatives == 1) {
        subtractions = -subtractions;
    }

    return subtractions;
}
```

However, there are still a couple of issues here.

Firstly, we haven't handled the `-2147483648 / -1` case. Like we said in the Overview section, this case is best handled as a special case at the start of the algorithm.

```java
if (dividend == -2147483648 && divisor == -1) {
    return 2147483647;
}
```

The second issue doesn't happen in Java, but it will happen with the same algorithm in `C`—an integer overflow. In Java, the math happens to combine perfectly with Java's overflow behaviour to give the correct answers. Because our goal for this solution article is to develop portable algorithms that work with any compiler/interpreter/language, we still want to fix this (and will need this same idea for our other approaches anyway). Specifically, the potentially problematic code is on these lines:

```java
dividend = -dividend;
```

and

```java
divisor = -divisor;
```

If `dividend = -2147483648`, then converting it to a positive number will behave differently depending on the language/compiler/interpreter you're using. This is because the positive form (`2147483648`) is outside of the 32-bit signed integer range.

Treating this as an edge case is impractical—it affects billions of cases. We'll need a better way.

> The key observation to make is that the problems are occurring because there are more negative signed 32-bit integers than there are positive signed 32-bit integers. Each positive signed 32-bit integer has a corresponding negative signed 32-bit integer. However, the same is not true for negative signed 32-bit integers. The smallest one, `-2147483648`, is alone. It is this number that causes the problems.

The best solution is to work with negative, instead of positive, numbers. This is allows us to use the largest possible range of numbers, and it covers all the ones we need.

At the start of the algorithm, we'll instead convert both inputs to *negative*. Then, we'll need to modify the loop so that it *subtracts* the negative divisor from the negative dividend. At the end, we'll need to convert the result back to a positive if the number of negative signs in the input was not 1.

The code for this is our complete approach 1, and can be found in the code box below.

**Algorithm**

Remember that we're converting the inputs to *negative* numbers. This is because we don't want separate code for all the possible combinations of positive/negative divisor and dividend. We converted them to negative instead of positive because the range of valid negative numbers is bigger, and therefore overflows can be cleanly avoided.

The looping condition is `while (dividend - divisor <= 0)` because the difference is moving towards zero from the *negative* side. Therefore, we want to continue while it is still under it. Once it goes over, we know we're done.

<iframe src="https://leetcode.com/playground/dFX3Zzjq/shared" frameBorder="0" width="100%" height="500" name="dFX3Zzjq"></iframe>

**Complexity Analysis**

Let $$n$$ be the absolute value of $$dividend$$.

- Time Complexity : $$O(n)$$.

    Consider the worst case where the divisor is $$1$$. For any dividend $$n$$, we'll need to subtract $$1$$ a total of $$n$$ times to get to $$0$$. Therefore, the time complexity is $$O(n)$$ in the worst case.

- Space Complexity : $$O(1)$$.

    We only use a fixed number of integer variables, so the space complexity is $$O(1)$$.

Seeing as $$n$$ can be up to $$2^{31}$$, this algorithm is **too slow** on the largest test cases. We'll need to do better!

</br>

---

### Approach 2: Repeated Exponential Searches

**Intuition**

Linear Search is too slow because at each step, we only subtract one copy of the divisor from the dividend. A better way would be to try and subtract multiple copies of the divisor each time.

One way of quickly increasing numbers, without using multiplication, is to double them repeatedly. So let's try doubling the divisor until it no longer fits into the dividend.

It'll be easiest to understand with an example, so let's say we have a dividend of `93706` and a divisor of `157`. We'll now just see what happens when we repeatedly double `157` until it's bigger than `93706`.

```
157
314
628
1256
2512
5024
10048
20096
40192
80384
160768 # Too big
```

From this, we know that we can fit `80384` into `93706`, and that `80384` must be a multiple of `157`. But how many copies of `157` is this?

Well, each time we double a number we also double the amount of copies of the original number. So because we doubled `157` nine times, we must have had `2⁹` copies of `157`. Indeed, `2⁹ · 157 = 80384`. Yay!

But, we still have some left over—in fact we have `93706 - 80384 = 13322` left over! That's still a *lot* of copies of `157` we haven't counted! So what could we do about this? Well, if we work out how many times `157` fits into `13322`, we could just add that to `512` to get our result.

How can we work out how many times `157` fits into `13322`? Well, we just repeat the same process, adding to the result as we go, until there's nothing left for `157` to fit into.

If we do this, we'll find that `157 · 2⁶ = 10048` is the highest power that fits into `13322`, leaving us with `13322 - 10048 = 3274` and a quotient so far of `2⁶ + 2⁹ = 576` (if you noticed that `10048` looks very familiar, well done. We'll be looking at this in approach 3).

We repeat this process until the dividend is less than `157`.

Here is the algorithm in code (for this example we're pretending the numbers are positive, and we're ignoring the "overflow" case. In the actual code, we use negatives numbers to prevent the overflow).

```java
int quotient = 0;
/* Once the divisor is bigger than the current dividend,
 * we can't fit any more copies of the divisor into it. */
while (dividend >= divisor) {
    /* Now that we're in the loop, we know it'll fit at least once as
     * divivend >= divisor */
    int powerOfTwo = 1;
    int value = divisor;
    /* Check if double the current value is too big. If not, continue doubling.
     * If it is too big, stop doubling and continue with the next step */
    while (value + value < dividend) {
        value += value;
        powerOfTwo += powerOfTwo;
    }
    // We have been able to subtract divisor another powerOfTwo times.
    quotient += powerOfTwo;
    // Remove value so far so that we can continue the process with remainder.
    dividend -= value;
}

return quotient;
```

This algorithm is known as exponential search and is commonly used for searching sorted spaces of unknown size for the first value that past a particular condition. It it a lot like binary search, having the same time complexity of $$O(\log \, n)$$. I believe this is why this question is tagged as binary search (there is technically a way of using binary search, but it is a lot more complicated and gives no real efficiency gain, and so we won't be talking about it in this article.)

Here's an animation of using this algorithm to do `divide(93706, 157)`.

!?!../Documents/29_animation_1.json:700,200!?!

**Algorithm**

In Approach 1, we used negative numbers due to their larger range avoiding overflow problems. We do the same here.

Again, some of the conditions might initially seem like they're around the wrong way. Think carefully about them, and remember that we're *working entirely with negative numbers*.

<iframe src="https://leetcode.com/playground/KuHNntfu/shared" frameBorder="0" width="100%" height="500" name="KuHNntfu"></iframe>

**Complexity Analysis**

Let $$n$$ be the absolute value of $$dividend$$.

- Time Complexity : $$O(\log^2 \, n)$$.

    We started by performing an exponential *search* to find the biggest number that fits into the current dividend. This search took $$O(\log \, n)$$ operations.

    After doing this *search*, we updated the dividend by subtracting the number we found. In the worst case, we were left with a dividend slightly less than half of the previous dividend (if it was more than half, then we couldn't have found the maximum number that fit in by doubling!).

    So how many of these searches did we need to do? Well, with the dividend *at least* halving after each one, there couldn't have been more than $$O(\log \, n)$$ of them.

    So combined together, in the worst case, we have $$O(\log \, n)$$ searches with each search taking $$O(\log \, n)$$ time. This gives us $$O((\log \, n) \cdot (\log \, n)) = O(\log^2 \, n)$$ as our total time complexity.

- Space Complexity : $$O(1)$$.

    Because only a constant number of single-value variables are used, the space complexity is $$O(1)$$.

</br>

---

### Approach 3: Adding Powers of Two

**Intuition**

In the previous approach, we did repeated exponential searches for the largest value that would fit into the current dividend.

However, notice that each time we do a search, we repeatedly go through the same doubles to find the largest. For example, consider the first and second step of our previous example: `divide(93706, 157)`.

On the first step we did this:

```
157
314
628
1256
2512
5024
10048
20096
40192
80384
160768 # Too big
```

This left us with a difference of `93706 - 80384 = 13322`.

On the second step we repeated this process again with `13322`:

```
157
314
628
1256
2512
5024
10048
20096 # Too big
```

Notice that we've just recomputed the first seven terms of the doubles *again!*

Instead of doing this, we should find a way so that we can compute the sequence just once and then use the results from this to compute our quotient.

In order to do this, we need to notice one more property about the difference. That property is that the difference will *always* be less than the previous doubling of the divisor that fits into it. Why? Well, if it were equal, or bigger, than the largest doubling, then we must've stopped doubling too soon. So, the difference is always less than the biggest doubling.

So to use these properties, we'll put all the "doubles" of `157` into a List. Then we'll iterate backwards over the list taking all the numbers that will fit into the dividend. Here's an animation of the algorithm.

!?!../Documents/29_animation_2.json:960,300!?!

Here is the algorithm in code (like before, we're showing this example with positive inputs and pretending overflow doesn't exist, as our focus right now is on the approach and not the implementation. We'll do it correctly in the actual code of course!).

```java
List<Integer> doubles = new ArrayList<>();
List<Integer> powersOfTwo = new ArrayList<>();

int powerOfTwo = 1;

/* Nothing too exciting here, we're just making a list of doubles of 1 and
 * the divisor. This is pretty much the same as Approach 2, except we're
 * actually storing the values this time. */
while (divisor <= dividend) {
    powersOfTwo.add(powerOfTwo);
    doubles.add(divisor);
    powerOfTwo += powerOfTwo;
    divisor += divisor;
}

int quotient = 0;
/* Go from largest double to smallest, checking if the current double fits.
 * into the remainder of the dividend */
for (int i = doubles.size() - 1; i >= 0; i--) {
    if (doubles[i] <= dividend) {
        // If it does fit, add the current powerOfTwo to the quotient.
        quotient += powersOfTwo.get(i);
        // Update dividend to take into account the bit we've now removed.
        dividend -= doubles.get(i);
    }
}
```

We also saved the powers of two, as we need to know which corresponded with each multiple of `157`.

**Algorithm**

Again, we work with negative numbers to elegantly avoid overflow issues.

Hopefully you're getting the hang of the conditionals that have to work with negative, instead of positive, numbers!

<iframe src="https://leetcode.com/playground/NBJKQt3D/shared" frameBorder="0" width="100%" height="500" name="NBJKQt3D"></iframe>

**Complexity Analysis**

Let $$n$$ be the absolute value of $$dividend$$.

- Time Complexity : $$O(\log \, n)$$.

    We take $$O(\log \, n)$$ time in the first loop to create our list of doubles (and powers of two).

    For the second loop, because there's $$O(\log \, n)$$ items in the list of doubles, it only takes  $$O(\log \, n)$$time for this loop as well.

    Combined, our total time complexity is just $$O(\log \, n + \log \, n) = O(\log \, n)$$.

- Space Complexity :  $$O(\log \, n)$$.

    The length of the list of doubles of the divisor is proportional to $$O(\log \, n)$$ so our space complexity is $$O(\log \, n)$$.

This approach is interesting in that the time complexity is lower than the previous one, but it requires a bit of space. Trading off space for time is very common practice.

However, as we'll see in the next approach, we can modify the algorithm so that we don't need $$O(\log \, n)$$ space at all!

</br>

---

### Approach 4: Adding Powers of Two with Bit-Shifting

**Intuition**

In Approach 3 we put doubles of the divisor, and powers of two into lists. This was so that we could easily refer back to them.

However, we don't need to save them—we can simply find the largest double, along with it's corresponding power of two, and then generate the rest by dividing by two repeatedly. *But we can't divide by two, that breaks the rules...*, you might be thinking. The solution is to use the **right-shift** bitwise operator!

```java
int a = 1020;
a = a >> 1;
System.out.println(a);
// Prints 510.
```

One potential pitfall with the right-shift operator is using it on negative *odd* numbers. Two's complement makes the result one-off what you would expect/ probably wanted. This happens in *all* the programming languages we've checked, although there could be a few that behave differently.

```java
int a = -1020;
a = a >> 1;
System.out.println(a);
// Prints -510. Great!
int b = -1021;
b = b >> 1;
System.out.println(b);
// Prints -511. Ugghh.
```

The solution is to add 1 before doing the bit-shift *on a negative number*. This way, it'll be "correct" regardless of whether the number was odd or even.

```java
int a = -1020;
a = (a + 1) >> 1;
System.out.println(a);
// Prints -510. Great!
int b = -1021;
b = (b + 1) >> 1;
System.out.println(b);
// Prints -510. Yay!
```

The reason we brought this up is because it's a pitfall you might encounter with your own code, and potentially be driven crazy by, if you have limited experience working with bitwise operators. It turns out we can completely ignore the issue for the algorithm we've got here, as we know the numbers we're right shifting happen to *always be even*. This is because of the way they were generated.

Here is the algorithm, again using only positive numbers (like before, check the next section to see the actual implementations).

```java
 /* In the first loop, we simply find the largest double of divisor. This is
  * very similar to the start of what we did in Approach 2. */
int highestDouble = divisor;
int highestPowerOfTwo = 1;
while (highestDouble + highestDouble <= dividend) {
    highestPowerOfTwo += highestPowerOfTwo;
    highestDouble += highestDouble;
}

/* In the second loop, we work out which powers of two fit in, by
 * halving highestDouble and highestPowerOfTwo repeatedly. */
int quotient = 0;
while (divisor <= dividend) {
    if (dividend >= highestDouble) {
        quotient += highestPowerOfTwo;
        dividend += highestDouble;
    }
    highestPowerOfTwo >>= 1;
    highestDouble >>= 1;
}

return quotient;
```

**Algorithm**

Again, this algorithm works with negative numbers.

<iframe src="https://leetcode.com/playground/5GiUZYnv/shared" frameBorder="0" width="100%" height="500" name="5GiUZYnv"></iframe>


**Complexity Analysis**

Let $$n$$ be the absolute value of $$dividend$$.

- Time Complexity : $$O(\log \, n)$$.

    Same as Approach 3, except instead of looping over a generated array, we simply perform an $$O(1)$$ halving operation to get the next values we need.

- Space Complexity : $$O(1)$$.

    We only use a fixed number of integer variables, so the space complexity is $$O(1)$$.

</br>

---

### Approach 5: Binary Long Division

**Intuition**

The previous approaches are all fine for an interview. We provide this approach as an alternate way of thinking about the problem, that some people might relate better to.

Anyway, another way we could divide two integers is to consider how we do division in math.

One of the common ways, which you may or may not have learned in school, is called long division.

Like the previous two approaches, long division works by find a large multiple of the divisor which fits into the dividend. Then it subtracts this from the dividend and repeats the process.

***Long Division in Base-10***

*If you're familiar with long division feel free to skip this next bit.*

Let's go through an example of long division. We'll start with a divisor of `379` and dividend of `872703948`. To perform division, we go through each digit looking at whether or not `379` fits into the right-most digits we've looked at so far.

Let's start with the first digit:

![Division of 872703948 by 379 where the first digit of result is unknown](../Figures/29/long_division_base_10_first_digit_unknown.png)

Clearly `379` does not fit into `8`, so we put a `0` and continue to the next digit.

![Division of 872703948 by 379 where the second digit of result is unknown](../Figures/29/long_division_base_10_second_digit_unknown.png)

Same thing again, `379` doesn't fit into `87`, so we put a `0` and continue to the next digit.

![Division of 872703948 by 379 where the third digit of result is unknown](../Figures/29/long_division_base_10_third_digit_unknown.png)

Finally we find `379` *does* fit into `872` (because `379` ≤ `872`, it must fit in). Because it fits in two times we put the digit `2` onto our result. Don't worry about the multiplication we just referred to, we have a solution for that shortly!

![Division of 872703948 by 379 where the third digit of result is 2](../Figures/29/long_division_base_10_third_digit_known.png)

At this point, you might wonder why we divide to see how many times `379` goes into `872`. This is because what it actually means is how many times `379000000` goes into `872703948`. It goes in `2` times. Okay, let's continue on.

However `379000000` doesn't go into `872703948` exactly `2` times; `379000000 * 2 = 758000000`.

`758000000` is quite a bit short of `872703948`. In fact, there's still `872703948 - 758000000 = 114703948` left over.

We now need to find how many times `379` goes into `114703948`.

![Division of 872703948 by 379 with first difference](../Figures/29/long_division_base_10_first_difference.png)

Now we simply repeat the process again with the difference. Let's start with the first digit again.

![Division of 872703948 by 379 with first difference and showing trying to divide 379 into 1](../Figures/29/long_division_base_10_first_difference_digit_1.png)

Like before, `379` doesn't fit into `1`. Repeating this again, we'll see that it doesn't go into `11` or `114` either. In fact, it's impossible for it to fit until the digit after the one where we placed our `2`. This shouldn't be too surprising—if it did fit into the first three digits, we should've had a `3` (or higher) instead of a `2`.

As such, we can simply continue the process from the digit position after the `2`. Doing so, we discover that `379` goes into `1147` a total of `3` times. Let's add that to our result.

(Remember this means `37900000` goes into `114703948` at most `3` times).

![Division of 872703948 by 379 with first difference and 4th result digit](../Figures/29/long_division_base_10_first_difference_digit_4.png)

We continue to repeat this process. Eventually, we'll run out of digits and wind up with our final result.

![Complete long division of 872703948 by 379](../Figures/29/long_division_base_10_complete.png)

With this final result, we now know that `379` goes into `114703948` a total of `2302648` times.

***Long Division in Base-2***

One of the problems with using base-10 division for this problem is that in order to perform the algorithm, we'd need to be able to add the necessary `0`s onto the end of the divisor. Given that we aren't allowed to use multiplication, this would prove to be a bit of a challenge!

Additionally, the current divisor could fit into the current dividend up to `10` times. Again, without multiplication, this is a bit annoying to calculate.

There are ways we can hack around these problems, but a far better way is to simply do the division in base-2 so that we can use bitwise operators.

In base-2, division works exactly the same way. However, because there are only two digits (`1` and `0`), we can simply check if the divisor-padded-with-zeroes is greater than the current dividend, and then if it is, add a `0` digit to the quotient, otherwise add a `1` digit.

Here's an animation showing base-2 long division.

!?!../Documents/29_animation_3.json:960,540!?!

**Algorithm**

Like other approaches we use negative numbers so that the maximum possible range of numbers is available to us.

We can no longer assume the divisor, that we're right shifting, is always an *even* number. Therefore, we need to add 1 before doing the right shift. Otherwise, it could be off by 1: `(divisor + 1) >> 1;`.

Not all programming languages support *left* shifting with negative numbers. In those that do, we need to be really careful with overflows.

<iframe src="https://leetcode.com/playground/7GtfwBMS/shared" frameBorder="0" width="100%" height="500" name="7GtfwBMS"></iframe>

**Complexity Analysis**

Let $$n$$ be the absolute value of $$dividend$$.

- Time Complexity : $$O(\log \, n)$$.

    As we loop over the bits of our dividend, performing an $$O(1)$$ operation each time, the time complexity is just the number of bits of the dividend: $$O(\log \, n)$$.

- Space Complexity : $$O(1)$$.

    We only use a fixed number of int variables, so the space complexity is $$O(1)$$.

</br>

---

### Final Words

This question is quite difficult, and is one many people fear getting in an interview. If you get a question like this though, don't panic, but instead just work through it step-by-step.

A good strategy for this particular question could be to first develop your algorithm to work with *positive integers*. In fact, you might like to even assume that the inputs could only possibly be positive integers. This removes a **lot** of the code at the start of the algorithm (remember how about half of most of the approaches was literally just generalising all the numbers to negatives?!).

Once you feel you have your approach working with positive integers, think about how you could adapt it to work with any integer inputs, and then to avoid overflow issues.

</br>