# Boxes within boxes, best Xmas ever

**Author:** user6040Wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/4179785/](https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/4179785/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
What helped me think through this problem is how would I work this problem in the physical world.

# Approach
<!-- Describe your approach to solving the problem. -->
Open what boxes we have. Take everything.
1. Add to total candies
2. Add to keys on hand
3. Add more boxes to open

Then keep opening boxes until we only have nothing or locked boxes with no keys.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(N)$$ (I think....)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
We keep a list of keys which could be N. We keep a list of all the boxes between 3 lists, open, closed, notsorted. Which all those lists added together is N.
$$O(N)$$
# Code
```
class Solution {
    fun maxCandies(status: IntArray, candies: IntArray, keys: Array<IntArray>, containedBoxes: Array<IntArray>, initialBoxes: IntArray): Int {
        var openBoxesInHand = mutableListOf<Int>()
        var closedBoxesInHand = mutableListOf<Int>()
        var boxesNotSortedYet = mutableListOf<Int>()
        var keysInHand = mutableMapOf<Int, Int>() // is there value in second int?
        initialBoxes.forEach {
            boxesNotSortedYet.add(it)
        }

        var totalCandies = 0

        while(!boxesNotSortedYet.isEmpty() || !closedBoxesInHand.isEmpty()) {
            closedBoxesInHand.forEach {
                boxesNotSortedYet.add(it)
            }
            closedBoxesInHand.clear()
            boxesNotSortedYet.forEach {
                if (status[it] == 1) {
                    openBoxesInHand.add(it)
                } else {
                    if (keysInHand[it] == 1) {
                        openBoxesInHand.add(it)
                    } else {
                        closedBoxesInHand.add(it)
                    }
                }
            }
            boxesNotSortedYet.clear()
            if (openBoxesInHand.isEmpty()) {
                break
            }
            openBoxesInHand.forEach {
                totalCandies += candies[it]
                keys[it]?.forEach { key ->
                    keysInHand[key] = 1
                }
                containedBoxes[it]?.forEach { anotherBox ->
                    boxesNotSortedYet.add(anotherBox)
                }
            }
            openBoxesInHand.clear()
        }
        return totalCandies
    }
}
```