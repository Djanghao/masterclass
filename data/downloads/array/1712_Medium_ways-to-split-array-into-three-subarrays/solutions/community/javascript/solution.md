# Javascript | Prefix Sum & 3-Pointer Solution w/ Explanation | beats 100% / 100%

**Author:** sgallivan
**Votes:** 6
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/1002315/](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/1002315/)

---

_(**Edit**: Fixed an issue with the code and dealt with a simple edge case of all **0**'s leading to an easy triangular number answer.)_

***Idea:***

Rather than attempting to check all permutations, this seems like a classic case for a **sliding window** approach, with the difference being the need for **three pointers** to help keep track of the upper/lower bounds of the middle subarray. And since we're dealing with the sums of contiguous subarrays, it makes sense to **prefix sum** the given array rather than having to keep track of multiple other sum variables. The best result for the code below is **96ms / 48.9MB**.

` `
***Implementation:***

In this specific instance, as we'll be increasing each pointer by **1** each time, we could achieve much the same efficiency without a prefix sum, but since we need to iterate through **N** at the start in order to obtain the **max** sum of the array, there's no real reason not to.

We'll need to iterate through values of the left pointer **i** representing the end of the left subarray, and at each stop we'll calculate the remaining two pointers **j** and **k** representing the lower and upper bounds possible for the end of the middle subarray. Once the sum of the left subarray (**N[i]**) passes **max / 3**, there's no possibility for larger values of the mid and right subarrays, and we likewise need to allow room for both other subarrays, so we'll make those the end conditions of our **for** loop.

The first step will be to increment **j** until the sum of the middle subarray reaches that of the newly increased left subarray. Since we applied a prefix sum, the sum of the left subarray is simply **N[i]** and the sum of the middle subarray is **N[j] - N[i]**. That means that **N[j] - N[i] >= N[i]**, which can more efficienty written as **N[j] >= N[i] * 2**. In a **for** loop, that means we want to increment **j** while **N[j] < N[i] * 2**. We'll also need to make sure that both the middle and right subarrays have room, so **j > i** and **j < lim**.

Similar to the previous step, **k** will need to be incremented until the sum of the middle subarray (**N[k] - N[i]**) passes the sum of the right subarray (**max - N[k]**). (*This means that **k** will actually be pointing to one past the upper bound, but it will keep us from having to use **N[k+1]** here and will also allow for an easier calculation later.*) The equation **N[k] - N[i] > max - N[k]** can be rewritten as **N[k] > (max + N[i]) / 2**, which means that we'll increment **k** while **N[k] <= (max + N[i]) / 2**. Just like before, we'll need to make sure that enough room remains, so **k <= lim**.

And the end of each iteration of **i**, we'll also add to **ans** the number of possible permutations found, which is **k - j**. (*Had we forced **k** to be one less in order to accurately represent the upper bound, this equation would have ended up as **k - j + 1**, so it's a win/win.*)

After the iterations are through, we just need to return our **ans** with the modulo applied.

` `
***Code:***
```
var waysToSplit = function(N) {
    let len = N.length
    for (let i = 1; i < len; i++)
        N[i] += N[i - 1]
    let max = N[len - 1], ans = 0
    if (max === 0)
        return ((len - 2) * (len - 1) / 2) % 1000000007
    for (let i = 0, j = 1, k = 1; N[i] <= max / 3; i++) {
        let lo = N[i] * 2, hi = (max + N[i]) / 2
        while (j === i || N[j] < lo)
            j++
        while (N[k] <= hi)
            k++
        ans += k - j
    }
    return ans % 1000000007
};
```