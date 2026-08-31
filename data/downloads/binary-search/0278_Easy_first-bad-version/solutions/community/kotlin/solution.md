# Kotlin: O(logn) time and O(1) space

**Author:** kotlinvim
**Votes:** 4
**Link:** [https://leetcode.com/problems/first-bad-version/solutions/919971/](https://leetcode.com/problems/first-bad-version/solutions/919971/)

---


    override fun firstBadVersion(n: Int) : Int {
        // [a, b)
        var l: Long = 1
        var r: Long = n.toLong() + 1
        
		// lower_boundry()
        while (l < r) {
            val m = l + (r - l) / 2

            if (isBadVersion(m.toInt()))
                r = m
            else
                l = m + 1
        }

        return l.toInt()
	}
