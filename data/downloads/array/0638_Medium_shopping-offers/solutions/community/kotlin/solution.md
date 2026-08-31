# Beat 100% Memory || Beats 100% Runtime || DP || Kotlin

**Author:** twinwal
**Votes:** 0
**Link:** [https://leetcode.com/problems/shopping-offers/solutions/6122597/](https://leetcode.com/problems/shopping-offers/solutions/6122597/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
import kotlin.math.min

class Solution {
    fun shoppingOffers(price: List<Int>, special: List<List<Int>>, needs: List<Int>): Int {
        val mapNeed = needs.fold(HashMap<Int, Int>()) { acc, num ->
            acc[num] = acc.getOrDefault(num, 0) + 1
            acc
        }
        return enumerate(price, special, needs, 0)
    }

    //1,2,3,4
    fun enumerate(price: List<Int>, special: List<List<Int>>, needs: List<Int>, index: Int): Int {
        if (index == special.size) {
            return needs.foldIndexed(0) { index1, acc1, num1 ->
                acc1 + num1 * price[index1]
            }
        }
        val withoutOffer = enumerate(price, special, needs, index + 1)
        var withOffer = Int.MAX_VALUE

        val currentOffer = special[index]
        val isOfferValid = isOfferValid(needs, currentOffer)
        if (isOfferValid) {
            val newNeed = needs.mapIndexed { index1, it -> it - currentOffer[index1] }
            withOffer = currentOffer[currentOffer.lastIndex] + enumerate(price, special, newNeed, index)
        }
        return min(withOffer, withoutOffer)
    }

    fun isOfferValid(needs: List<Int>, offer: List<Int>): Boolean {
        var isValid = true
        for (i in 0..needs.lastIndex) {
            if (needs[i] < offer[i]) {
                isValid = false
                break
            }
        }
        return isValid
    }
}
```