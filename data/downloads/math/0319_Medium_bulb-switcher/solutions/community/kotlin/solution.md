# [Kotlin] BEATS 100.00% SPEED MEMORY // APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 3
**Link:** [https://leetcode.com/problems/bulb-switcher/solutions/1945932/](https://leetcode.com/problems/bulb-switcher/solutions/1945932/)

---


	class Solution {

    fun bulbSwitch(n: Int): Int {
        return getSqrt(n)
    }

    private fun getSqrt(n: Int): Int {
        var l = 1L
        var r : Long = n.toLong()
        while (l <= r) {
            var mid = l + (r - l)/2
            if (mid * mid == n.toLong()) {
                return mid.toInt()
            } else if (mid * mid < n.toLong()) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return r.toInt()
    }
	}