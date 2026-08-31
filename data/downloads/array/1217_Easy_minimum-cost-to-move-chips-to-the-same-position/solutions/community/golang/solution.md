# Two Golang solutions both faster than 100% with explanation

**Author:** nathannaveen
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/1194574/](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/1194574/)

---

[1217. Minimum Cost to Move Chips to The Same Position](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/)

The core idea of these two solutions is the same, but the implementation is different.

The way to reduce the cost is to use the fact that we don't have to pay when we move a coin by two. We can continue moving the coin for no fee until we reach the position where we have to place the coin, or we reach the position that is one away from the position we want to place it in, and we have to do `cost++`.

So if you have noticed, we can pay no cost if the coin starts on an odd and the position we want to land it on is odd, or if the coin starts on an even and the position we want to land it on is an even.

So the main idea of these solutions is:

* if `position[i] % 2 == 0`, if so we can add one to the odd counter because the odd counter counts the cost you have to pay if you have to move it to an odd position
* We can do the same thing with the even counter except opposite (Like we do `position[i] % 2 == 1` instead of `position[i] % 2 == 0`).
* Then we find the minimum of the even and odd counter because we want the minimum cost.

We add to the odd and even count in the first solution just as explained.

The second solution has only one counter that is for both even and odd. If the current position is even then we add one to the `oddOrEven` counter, and if position is odd we subtract `1` from `oddOrEven`. If `oddOrEven > 0` we can return the minimum cost by returning `(len(position) - oddOrEven) / 2` else we can return the minimum cost by returning `(len(position) + oddOrEven) / 2`.

**The first code:**

``` go
func minCostToMoveChips(position []int) int {
	odd, even := 0, 0

	for _, currentPosition := range position {
		if currentPosition % 2 == 0 {
			odd++
		} else {
			even++
		}
	}
	if even < odd {
		return even
	}
	return odd
}
```

**The second code:**

``` go
func minCostToMoveChips(position []int) int {
	oddOrEven := 0

	for _, currentPosition := range position {
		if currentPosition % 2 == 0 {
			oddOrEven++
		} else {
			oddOrEven--
		}
	}
	if oddOrEven > 0 {
		return (len(position) - oddOrEven) / 2
	}
	return (len(position) + oddOrEven) / 2
}
```