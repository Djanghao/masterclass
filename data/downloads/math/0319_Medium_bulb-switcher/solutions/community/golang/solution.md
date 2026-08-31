# Golang math solution with explanation and images

**Author:** nathannaveen
**Votes:** 4
**Link:** [https://leetcode.com/problems/bulb-switcher/solutions/1541982/](https://leetcode.com/problems/bulb-switcher/solutions/1541982/)

---

Note: If you don't understand this problem, think of it as something similar to *Seive of Eratosthenes*.

At first I didn't understand how to go about this problem, so I drew it out. I made a graph that might be easier to understand than my drawing:

![](https://i.imgur.com/MZP1ibF.png)

* In this graph the numbers represent what round we are on (Y-axis = what round we are on).
* And the bulbs represent each bulb (X-axis = what bulb we are on).
* The yellow dots represent the bulb being on.
* While the empty boxes in the graph represent the bulb being off.

If we do this for many different `n` we can see a pattern:

![](https://i.imgur.com/GcFJxKr.png)


* In each of the example I only show the end result to save space.
* The numbers are to show the round, and bulb number.
* The yellow dots represent the bulbs that are on
* I went through a much more excessive messy list of examples, but have shortened it for this this solution.

**The Explanation:**

If you notice, the only bulbs that end up on are the squares because squares are the only numbers that have an odd number of non-repeating divisors. 

* The divisors of `36` are `1, 6, 6, 36`, and the non-repeating divisors are `1, 6, 36`.
* The divisors of `9` are `1, 3, 3, 9`, and the non-repeating divisors are `1, 3, 9`.
* The divisors of `12` (Not a square) are `1, 3, 4, 12`.
* The divisors of `26` (Not a square) are `1, 2, 13, 26`.
* The divisors of `13` (Not a square) are `1, 13`.

As you can see, the primes have an odd number of non-repeating divisors, while non-primes have an even number of non-repeating divisors. 

Since squares have an odd number of non-repeating divisors, they will toggle an odd number of times and end up lit up.

* `1` toggles at `1` and is always lit up.
* `4` is first toggled at `1`, then `2`, and then `4`.
* `9` is first toggled at `1`, then `3`, and then `9` again.
* `16` is first toggled at `1`, then `2`, `4`, `8`, and `16`.

***

If you don't understand how we are toggling `1`, it is based on the problem statement:

> There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb.

When they say, "You first turn on all the bulbs," they mean to toggle on all the bulbs from the first round.

``` go
func bulbSwitch(n int) int {
    return int(math.Sqrt(float64(n)))
}
```