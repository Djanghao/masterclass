# Kotlin | freq+binary search

**Author:** SamoylenkoDmitry
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/solutions/5507255/](https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/solutions/5507255/)

---

### Join me on Telegram

https://t.me/leetcode_daily_unstoppable


Each pair has:
* diff, let's count them in a frequency array
* diff1 between minimum and k
* diff1 between 0 and maximum
When we considering some target `diff` we compare it with each pair `diff1` and `diff2`, and if they are less than diff, we should change both values:
```j
k=20
a = 5, b = 16, target diff = 18
```
we can change a to 0, then we have diff1=16-0=16
or b to 20, then we have diff2=20-5=15
both diff1 and diff2 less than 18, so we have to change both a and b

Now, how to quickly check all of the possible diffs:
we save each pair's max(diff1, diff2), and sort those values.
Now, if we have a target diff, we just find how many pair's maxD's are bigger than target diff - they will gave additional swap.

```j

  // 1 1 1 1 0 0 0 5 4 3 19 17 16 15 15 15 19 19 19 19    k=0..20      18  15
  // 1                                              19 18 20-1=19, 19  0   1
  //   1                                         19    18 20-1=19, 19  0   1
  //     1                                    19       18 20-1=19, 19  0   1
  //       1                               19          18 20-1=19, 19  0   1
  //         0                          15             15 20-0=20, 15  1   0
  //           0                     15                15 20-0=20, 15  1   0
  //             0                15                   15 20-0=20, 15  1   0
  //               5           16                      11 20-5=15, 16  2   1
  //                 4      17                         13 20-4=16, 17  2   1
  //                   3 19                            16 20-3=17, 19  1   1
  //                                                                   9   7

```

```kotlin

    fun minChanges(nums: IntArray, k: Int): Int {
      val freq = IntArray(k+1)
      val maxDs = mutableListOf<Int>()
      for (i in 0..<nums.size / 2) {
        val a = nums[i]; val b = nums[nums.lastIndex - i]
        freq[abs(a - b)]++; maxDs += max(k - min(a, b), max(a, b))
      }
      maxDs.sort()
      var min = Int.MAX_VALUE;
      for (d in 0..k) {
        val rest = nums.size / 2 - freq[d]
        var lo = 0; var hi = maxDs.lastIndex
        while (lo <= hi) {
          val mid = lo + (hi - lo) / 2
          if (maxDs[mid] < d) lo = mid + 1 else hi = mid - 1
        }
        min = min(min, rest + lo)
      }
      return min
    }

```