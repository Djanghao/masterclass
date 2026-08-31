# ✔️ [JavaScript] BINARY SEARCH ツ, Explained

**Author:** artod
**Votes:** 68
**Link:** [https://leetcode.com/problems/koko-eating-bananas/solutions/1703427/](https://leetcode.com/problems/koko-eating-bananas/solutions/1703427/)

---

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**

By the condition, Koko does not pass to another pile when she eats all bananas earlier. So it makes no sense to eat faster than the maximum number of bananas in a pile. From that, you can see that we know the max and min speed: `min=1 banana/h` and `max = max(piles)`. Thus, this is a good candidate for the Binary Search. We search the speed in the range `1...(max number in piles array)`.

How do we estimate a chosen speed? We create a helper function that calculates the time needed to eat all bananas at a given speed. Formula is just sum `ceil(number_of_bananas_in_pile/speed)` for every pile. We have to round to the top value since Koko does not pass to another pile even she finishes earlier.

Time: **O(NlogM)** - BS plus scan in the helper. `N` - number of piles, `M` - max number of bananas in a pile.
Space: **O(1)** - nothing stored

Runtime: 88 ms, faster than **84.26%** of JavaScript online submissions for Koko Eating Bananas.
Memory Usage: 42.5 MB, less than **58.88%** of JavaScript online submissions for Koko Eating Bananas.

```
const minEatingSpeed = (piles, h) => {
    let min = 1,
        max = Math.max(...piles),
        best = max

    const time = speed => piles.reduce((sum, pile) => sum + Math.ceil(pile/speed), 0)

    while (min <= max) {
        const mid = Math.floor((min + max) / 2)
		
        if (time(mid) <= h) {
            best = mid
            max = mid - 1
        } else
            min = mid + 1
    }

    return best
}
```

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**