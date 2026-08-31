# Kotlin | Straight-forward, explained | two algorithms

**Author:** JaninBV
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-total-reward-using-operations-i/solutions/5286694/](https://leetcode.com/problems/maximum-total-reward-using-operations-i/solutions/5286694/)

---

This is an interesting problem!  I started with a brute-force, recursive approach.  It put the values into a HashSet, converted it into an array, and then sorted it.  Then, in the recursion, kept a running total, adding the new reward if it was greater than the total, and also skipped adding it.  It worked, but it got time limit exceeded:

```
    var max = 0
    var keys = Array<Int>(0) { 0 }
	
    fun maxTotalReward(rewardValues: IntArray): Int {
    
        var values = HashSet<Int>()
        for (n in rewardValues) {
            values.add(n)
        }
        var keys = values.toTypedArray<Int>()
        keys.sort()
        this.keys = keys
        
        tryNext(0, 0)
        return max
  }
  
  fun tryNext(ndx: Int, total: Int) {
        if (ndx == keys.size) {
            if (total > max) {
                max = total
            }
            return
        }
        var newNdx = ndx
        if (keys[ndx] > total) {
            tryNext(ndx + 1, total + keys[ndx])
            tryNext(ndx + 1, total)
        } else {
            var newNdx = ndx + 1
            while (newNdx <= keys.lastIndex && keys[newNdx] <= total) {
                newNdx++
            }
            tryNext(newNdx, total)
        }
  }
```

So, a more efficient solution was needed.  In my endeavors to get a passing solution, I realized if the rewardValues array only had one item, that is the max reward achievable.  So I added that simple case.

I decided to try DP.  It was probably way more efficient, but didn't get the right answer, even on the 2nd example.  I realized that going for the max value wasn't necessarily goint to give the right answer.  

So, instead, I tried a back-tracking approach. This method creates all values that can possibly be generated.  I also decided to eliminate duplicate values to save time, so I created a HashSet, values.   After sorting rewardValues, I did a for-loop on the values.  If that value is already in values, skip it.  Instead of keeping a running total, I then added the current reward to all values in that are smaller than that reward, and added it to values.  (Values isn't sorted, so that is one way to improve this algorithm!)  I had to create a separate HashSet to add those new values to since a for-loop doesn't like its values changing.  So I put the newly computed values into newValues, and then added all of them to the values HashSet.  Finally, I added the reward itself.  Each time a new value is added to Values, it checks if it is greater than max.  (If values were sorted, you could simply take the last one at the end...)

In the end, this is obviously not the fastest solution, but it covers all the bases, fast enough to pass!

```
 if (rewardValues.size == 1) {
       return rewardValues[0]
 }

 rewardValues.sort()

 var values = HashSet<Int>()
 values.add(rewardValues[0])
 var max = rewardValues[0]
 var ndx : Int
 var set : Boolean
 var newValues = HashSet<Int>()
 for (x in 1..rewardValues.lastIndex) {
 	 newValues.clear()
 	 for (n in values) {
		 if (rewardValues[x] > n) {
			 newValues.add(rewardValues[x] + n)
			 if (rewardValues[x] + n > max) {
				 max = rewardValues[x] + n
			 }
		}
   }
   values.addAll(newValues)
   values.add(rewardValues[x])
	if (rewardValues[x] > max) {
		  max = rewardValues[x]
	  }
 }
 return max
```

Thank you for reading!  Please upvote if you found this helpful.