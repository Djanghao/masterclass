# Official Solution

**Link:** [https://leetcode.com/problems/construct-target-array-with-multiple-sums/solution/](https://leetcode.com/problems/construct-target-array-with-multiple-sums/solution/)

---

[TOC]

## Solution

### Approach 1: Working Backward

**Intuition**

Let $$n$$ be the *length of the target array*.

Firstly, we know that if $$n = 1$$, then the sum of the array is always `1`, and therefore it is impossible for it to ever change from `[1]`. This means that the only target array with $$n = 1$$ that is possible to solve is `[1]` itself. Any others, for example, `[2]`, `[12]`, and `[18329832]` must be impossible. Depending on how you code your algorithm, you might or might not have to deal with this *edge case* explicitly.  

Now, how about when $$n ≥ 2$$?

A natural place to start might be to begin with an array of length $$n$$, containing all `1`s, and to attempt to get to the target array.

Let's have a go at doing that. Say our target array is `[13, 7, 1, 43]`.

We would start with an array of `[1, 1, 1, 1]`. At each step, we compute the sum of all elements in the array, and choose one of the numbers to replace with the sum, as per the problem statement.

For example, for the first step, the options we have are `[4, 1, 1, 1]`, `[1, 4, 1, 1]`, `[1, 1, 4, 1]`, and `[1, 1, 1, 4]`.

For each of these, we then have two options: replacing the `4` with a `7 ` (`1 + 1 + 1 + 4 = 7`) or replacing a `1` with a `7`. 

For example, the next possible steps for `[4, 1, 1, 1]` are `[7, 1, 1, 1]`, `[7, 4, 1, 1]`, `[7, 1, 4, 1]` and `[7, 1, 1, 4]`. 

As you can probably see, this branches out really, really fast.

![The exponential explosion of working forwards.](../Figures/1354/exponential_explosion.png)

It's not obvious which path might lead us to the target array.

How about the strategy of trying to get each number one-by-one, starting with the smallest? For example, when we had `[1, 7, 1, 1]`, perhaps we could say that two slots are correct, and we just need to get the other two without changing the two that are correct?

The only option now is to replace one of the others with `10` (`1 + 7 + 1 + 1 = 10`). That gives us `[10, 7, 1, 1]`.

But what happens next? `10 + 7 + 1 + 1 = 19`. This is higher than `13`.

It is now impossible to get a `13`. The sums are *strictly increasing* (as long as $$n  ≥ 2$$), i.e. each step's sum will always be larger than the last. Therefore, we definitely won't get the target array following this approach. The reason we know it's *strictly increasing* is because at each step, we're always making one number *larger*.

You may now be tempted to conclude that the target `[13, 7, 1, 43]` is *impossible* to reach. However, this is not the case. Here's the way that you can construct it!

```
[1,  1, 1, 1]
[4,  1, 1, 1]
[4,  7, 1, 1]
[13, 7, 1, 1]
[13, 7, 1, 22]
[13, 7, 1, 43]
```

As a side note (not needed for interviews, but aimed at the math lovers here), I'm not aware of a *greedy* approach that could go from the array of `1`s **up to** the target. It seems any such approach would be intractable. However, I haven't been able to *prove* this, so it's very possible there is indeed a way. If you know of one, please do let us know in the comments because I really am curious!

*We will, therefore, need a better strategy!*

If trying to calculate the result working forward doesn't work, sometimes working backward does. Let's have a go at working backward, i.e. going from `[13, 7, 1, 43]` to `[1, 1, 1, 1]`. 

Let's think carefully about what number had to be put into the target array *last*. Could it have, for example, possibly been `13`? If it was indeed the `13`, then our previous array went from `[x, 7, 1, 43]` to `[13, 7, 1, 43]`. We would then just need to figure out what `x` is, which should be simple, as we know `13 = x + 7 + 1 + 43`. Rearranging, we get `x = 13 - 7 - 1 - 43`. Therefore, `x = -38`. 

This can't be right though! We know that the array *always* contains positive numbers only (refer back to where we determined that the sums for each step are strictly increasing). Therefore, it could not have been `13`.

In fact, the only valid possibility is that the last was the largest number: `43`. Otherwise, `43` would have to be part of the sum, forcing the resulting sum to be greater than`43` (assuming $$n ≥ 2$$).

So now that we know it has to have been the `43`, we know that `43 = 13 + 7 + 1 + x`. Therefore, `x = 22`.

So we have `[13, 7, 1, 22] → [13, 7, 1, 43]` (look at the list a bit above, this is indeed the last transition!)

Seeing as we know we can go from `[13, 7, 1, 22]` directly to the target, and because there is only one valid way of going up to the target (recall that we *had* to change the largest), we now only need to consider how we can get from `[1, 1, 1, 1]` up to `[13, 7, 1, 22]`. In other words, we can now treat `[13, 7, 1, 22]` as the *target*.

And therefore, we can repeat the same process again! Here is an animation of that.

!?!../Documents/1354_valid_case_animation.json:960,180!?!

Something quite interesting we can infer here is that the steps to get from an array of `1`s to a target *has to be unique*. In other words, there is only *one* way to get to the target (as there's only one way of changing the largest each step).

Therefore, we can conclude that *the target array is reachable (from an array of `1`s) **if and only if** this unique chain can be derived by working backward.*

If a target array is not reachable, then the above approach has to *not* reduce it to an array of `1`s. So, what would it do?

As long as $$n ≥ 2$$, it can't get stuck in an infinite loop. We know this because the sums *strictly increase*. That only leaves the possibility of it going to numbers *below* `1`.

So our algorithm should check at each step that the array is *valid*, i.e. contains only numbers that are greater than or equal to `1`.

For reference, here is an animation of a target that is *not* possible to construct.

!?!../Documents/1354_invalid_case_animation.json:960,180!?!

**Algorithm**

A key thing to recognise is that order doesn't matter. In other words, if we know that `[13, 7, 1, 43]` has a solution, then we also know that `[43, 13, 7, 1]` has a solution.

Therefore, the problem reduces to converting all of the input numbers to `1`. Because at each step we always needed to replace the maximum, we should use a data structure that allows us to efficiently find the maximum after each change. Hopefully you've realised that the perfect data structure for the job is a `max-heap`!

We need to keep track of the current sum. This can be done by calculating the sum at the start, and then updating it as we change values (push and pop from heap).

Then, while the top of the `max-heap` is greater than 1, we "solve for x" (see intuition above), and then replace the maximum with `x`, as long as that `x` is not negative. If it is less than 1, then we return `false`. Once the max is equal to 1, this means everything else has to be 1 too, and so we can return `true`.

<iframe src="https://leetcode.com/playground/dALf4nCC/shared" frameBorder="0" width="100%" height="497" name="dALf4nCC"></iframe>

**Complexity Analysis**

Let $$n$$ be the length of the target array. Let $$k$$ be the *maximum* of the target array.

- Time Complexity : $$O(n + k \, \log \, n)$$.

    Making the initial heap is $$O(n)$$. 

    Then, each heap operation (add and remove) is $$O(\log \, n)$$. 

    The $$k$$ comes from the cost of reducing the largest item. In the worst case, it is massive. For example, consider a target of `[1, 1_000_000_000]`. One step of the algorithm will reduce it to `[1, 999_999_999]`. And the next is `[1, 999_999_998]`. You probably see where this is going. 

    Because we don't know whether $$n$$ or $$k \, \log \, n$$ is larger, we add them.

    While for this problem, we're told the maximum possible value in the array is `1,000,000,000`, we don't consider these limits for big-oh notation. Because the time taken varies with the maximum number, we consider this time complexity to be [**pseudo-polynomial**](https://en.wikipedia.org/wiki/Pseudo-polynomial_time). For the `[1, 1_000_000_000]` case, it is unworkably slow on any typical computer. 

- Space Complexity : $$O(n)$$.

    The heap requires $$O(n)$$ extra space. There are always $$n$$ or $$n-1$$ items on the heap at any one time.

    $$O(1)$$ space would be possible, by converting the target array directly into a heap. The Python code does this, although the line we used to make the target array negative is "technically" $$O(n)$$ (some Python interpreters might delete and replace this with an $$O(1)$$ operation behind the scenes). If space was a big issue (it isn't generally), then it's useful to know that these optimizations are at least *possible*.
    
The fact that this algorithm is **pseudo-polynomial**, and has to cope with large $$n$$ values, and extremely large $$k$$ values is a big limitation. Luckily there are a few tweaks we can make to the algorithm that will make it **polynomial**.

</br>

---

### Approach 2: Working Backward with Optimizations

**Intuition**

If you got Approach 1 working, but failed on large test cases, you're still doing really well to have gotten that far. A lot of people find these final optimizations really difficult, so always remember during interviews that your performance is *compared to other candidates*. This is one of the harder "hard" questions, especially for those with a limited background in mathematics.

Recall that the worst case is where the largest number is substantially larger than the sum of the rest. For example, `[1, 5, 998]`. In these cases, we are repeatedly subtracting from the largest number and putting it back in. A good way to see what we need to do is to just compute the next few transitions for this target.

```
[1, 4, 998]
→ [1, 4, 993]
→ [1, 4, 988]
→ [1, 4, 983]
```

See the pattern? Each time, the largest number is being reduced by `5`. Where does the `5` come from? It is the sum of the other numbers.

Remembering that this number will be the top of the heap until it is smaller than the next largest (i.e. the `4`), we can see that this is going to continue until it is *less than `5`*. From the pattern we can see that eventually it gets to `[1, 4, 8]`, and finally `[1, 4, 3]`. 

Subtracting `5` from `998` repeatedly, until it is below `5`, is modular arithmetic. Effectively, all we've done is `998 % 5 = 3`, following a *really* inefficient process!

Generalising a bit, the `998` was the current heap maximum, and `5` was the sum of the rest (obtained in code with `total_sum - largest`).

So, instead of doing the following line:

```python
x = largest - (total_sum - largest)
```

We should do:

```python
x = largest % (total_sum - largest)
```

This solves the problem, although it might not be at all obvious why. The key ideas are:

1. That `largest` is always at least half of total_sum. 
2. That `largest` is always replaced with a value at most half of itself.

Effectively, we are always removing at least $$\frac{1}{4}$$ of the total sum in the array. 

To simplify the explanation, we'll define `rest = total_sum - largest`. i.e. it is simply the sum of the array, excluding the largest.

To prove the first point, we know that `largest` is always bigger than `rest`, because if it wasn't, `x` would go negative (and therefore we would immediately return `false` and exist.). This can be seen from the formula above. 

```
x = largest - (total_sum - largest)
→ 
x = largest - rest
```

To prove the second point, we need to think carefully what the following is doing:

```
x = largest % (total_sum - largest)
→ 
x = largest % rest
```

Because `largest > rest`, we know that `x` is at most `largest - rest`. i.e. the modulus will cause `rest` to be subtracted at least once.

If `rest` is at least half the size of `largest`, then this will clearly chop `largest` in half.

If instead `rest` is less than half the size of `largest`, then `largest % rest` must be less than half of `largest`.

Removing $$\frac{1}{4}$$ each time is logarithmic.

One edge case we need to be cautious of is where `rest` is `1`. When we take numbers modulo `1`, they always become `0`. The only case this can occur is where $$n = 2$$. In fact though, we know that this case is always doable, because `largest` is simply decremented by `1` repeatedly until it reaches `1` itself.


**Algorithm**

<iframe src="https://leetcode.com/playground/8dwMXxsU/shared" frameBorder="0" width="100%" height="500" name="8dwMXxsU"></iframe>

**Complexity Analysis**

- Time Complexity : $$O(n + \log \, k \cdot \log \, n)$$.

    Creating a heap is $$O(n)$$. 
    
    At each step, we were removing at least $$\frac{1}{4}$$ of the total sum. The original total sum is $$2 \cdot k$$, because $$k$$ is the largest element, and we know that if the algorithm continues, then the rest can't add up to more than $$k$$. So, we need to take $$O(\log \, k)$$ steps to reduce the array down. Each of these steps is the cost of a heap add and remove, i.e. $$O(\log \, n)$$. In total, this is $$O(\log \, k \cdot \log \, n)$$.

- Space Complexity : $$O(n)$$.

    Same as above.

</br>