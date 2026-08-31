# Scala | 4 counts | space O(1), time O(n) | No Queue | No extra loops

**Author:** SunnyBay6
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/solutions/1584887/](https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/solutions/1584887/)

---


```
object Solution {
	// The idea is to have a window of size dist and count the '0' & '1' in it
	// When we face '0' it decrease '1' count is possible
	// When we face '1' it decrease '0' count if possible
    def catchMaximumAmountofPeople(team: Array[Int], dist: Int): Int = {
        var res = 0
        val counts = new Array[Int](2)
        var countsSkip = new Array[Int](2) // we need this because some of '1' & '0' was eleminated by each other
        for (i <- team.indices) {
			// Take care of the element that is being removed on the left window's border
            if ( i - dist - 1 >= 0) 
                if ( countsSkip(team(i-dist-1)) > 0) 
                    countsSkip(team(i-dist-1)) -= 1
                else if ( counts(team(i-dist-1)) > 0) 
                    counts(team(i-dist-1)) -= 1
			// Take care of the element that is being added on the right window's border
            if (counts(1 - team(i)) > 0) {
                countsSkip(team(i)) += 1
                countsSkip(1 - team(i)) += 1
                counts(1 - team(i)) -= 1
                res += 1
            } else {
                counts(team(i)) += 1
            }
        }
        res
    }
}
```