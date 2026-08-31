# Official Solution

**Link:** [https://leetcode.com/problems/smallest-integer-divisible-by-k/solution/](https://leetcode.com/problems/smallest-integer-divisible-by-k/solution/)

---

[TOC]

## Solution

### Overview

It's an interesting problem that requires a little observation and insight. It's recommended to try a few numbers to find out some regular patterns. Below, we will discuss a simple approach to solve this problem.

---

### Approach: Checking Loop

**Intuition**

We need to do two things:

1. check if the required number `N` exists.
2. find out `length(N)`.

The second one is easy: we only need to keep multiplying `N` by 10 and adding 1 until `N%K==0`. However, since `N` might overflow, we need to use the remainder. The pseudo-code is as follows:

<pre>
remainder = 1
length_N = 1

while remainder%K != 0
    N = remainder*10 + 1
    remainder = N%K
    length_N += 1

return length_N
</pre>

Since the `remainder` and `N` have the same remainder of `K`, it is OK to use `remainder` instead of `N`.

Now, the only problem is how to check whether the required number `N` exists.

Notice that if `N` does not exist, this while loop will continue endlessly. However, the possible values of `remainder` are limited -- ranging from `0` to `K-1`. Therefore, if the while-loop continues forever, the `remainder` repeats. Also, if `remainder` repeats, then it gets into a loop. Hence, the while-loop is endless if and only if the `remainder` repeats.

In this case, we can check if the `remainder` repeats to check if the while-loop is endless:

<pre>
remainder = 1
length_N = 1

seen_remainders = set()

while remainder%K != 0
    N = remainder*10 + 1
    remainder = N%K
    length_N += 1

    if remainder in seen_remainders
        return -1
    else
        seen_remainders.add(remainder)

return length_N
</pre>

Now we have an algorithm that can solve the problem. 

Furthermore, we can improve this algorithm with [Pigeonhole Principle](https://en.wikipedia.org/wiki/Pigeonhole_principle). Recall that the number of possible values of `remainder` (ranging from `0` to `K-1`) is limited, and in fact, the number is `K`. As a result, if the while-loop continues more than `K` times, and hasn't stopped, then we can conclude that `remainder` repeats -- you can not have more than `K` different `remainder`.

Hence, if `N` exists, the while-loop must return `length_N` in the first `K` loops. Otherwise, it goes into an infinite loop.

Therefore, we can just run the while-loop `K` times, and return -1 if not stopped.


**Algorithm**

We just run the while-loop `K` times, check if the remainder is 0, and return -1 if not stopped.

> Note: After reading the Algorithm part, it is recommended to try writing the code on your own before reading the solution code.

<iframe src="https://leetcode.com/playground/QJucZJak/shared" frameBorder="0" width="100%" height="259" name="QJucZJak"></iframe>

There are a few interesting points worth pointing out in the code above:

1. We initialize `remainder` to 0, not 1, to keep code consistency because in the first loop the `remainder` changes to 1. You can also initialize it as 1, but it requires a little change in code.
2. We only run the loop `K` times at most, not `K+1`. This is because if it does not stop in the previous `K` loop, it will continue the `K+1`-th iteration, which must have repeated `remainder`. Therefore, it is not necessary to check the `K+1`-th iteration.

Also, note that `111...111` can never be divided by 2 or 5 because its last digit is never an even number or 5. You can just return -1 if you find that 2 or 5 is a factor of `K`.

**Complexity Analysis**

- Time Complexity: $\mathcal{O}(K)$ since we at most run the loop $$\mathcal{O}(K)$$ times.

- Space Complexity: $$\mathcal{O}(1)$$ since we only use three ints: `K`, `remainder`, and `length_N`.