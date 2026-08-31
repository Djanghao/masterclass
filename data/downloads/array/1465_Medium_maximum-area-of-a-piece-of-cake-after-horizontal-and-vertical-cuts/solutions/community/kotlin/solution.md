# Kotlin | sort | concise code with explanation

**Author:** AntonMinko
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/2226266/](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/2226266/)

---

The idea is to find the largest distance between horizontal cuts and the largest distance between the vertical cuts. The solution is to multiply these two max values.
The input cut arrays are not ordered. The idea is to order the array values and use the `windowed` function that will generate pairs of two consecutive cuts to find the distance between cuts.
Before sorting the input array, I added the `0` and `h|w` "cuts" to include the piece from the beginning of the cake (`0`) to the first cut, and the piece from the last cut to the end of the cake (`h` or `w` value for horizontal and vertical cuts respectively).

```
private fun maxDistance(cuts: IntArray, edge: Int): Int = 
    (cuts + listOf(0, edge))
        .sorted()
        .windowed(2, 1)
        .map { pair -> pair[1] - pair[0] }
        .max()!!

private fun modulo(num: Long) = (num % 1_000_000_007).toInt()

fun maxArea(h: Int, w: Int, horizontalCuts: IntArray, verticalCuts: IntArray) =
    modulo(1L * maxDistance(horizontalCuts, h) * maxDistance(verticalCuts, w))
```