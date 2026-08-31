# Clear solution - Java, Kotlin

**Author:** drVains
**Votes:** 5
**Link:** [https://leetcode.com/problems/koko-eating-bananas/solutions/4759469/](https://leetcode.com/problems/koko-eating-bananas/solutions/4759469/)

---

# Complexity
- Time complexity:
$$O(n log m)$$ , where n is the number of piles and m is the range of possible speeds (from total bananas/h to the largest pile). Each iteration of the binary search (logm) requires checking all piles (n).

- Space complexity:
$$O(1)$$

# Code
``` java []
class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int left = 1, right = 0;

        for (int pile : piles) { 
            right = Math.max(right, pile);
        }

        while (left < right) {
            int mid = left + (right - left) / 2;
            if (isPossible(piles, h, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }

    private boolean isPossible(int[] piles, int h, int speed) {
        int hoursNeeded = 0;
        for (int pile : piles) {
            hoursNeeded += Math.ceil((double) pile / speed);
        }
        return hoursNeeded <= h;
    }
}
```
``` kotlin []
class Solution {
    fun minEatingSpeed(piles: IntArray, h: Int): Int {
        var left = piles.sum() / h
        var right = piles.maxOrNull()!!
        do {
            val mid = (left + right) / 2
            if (isPosible(piles, h, mid)) {
                right = mid
            } else {
                left = mid + 1
            }
        } while (left < right)
        
        return left
    }

    fun isPosible (piles: IntArray, h: Int, speed:Int): Boolean {
        var currentH = 0.0
        piles.forEach { el -> 
            currentH += Math.ceil(el.toDouble() / speed)
        }
        return currentH <= h
    }
}
```