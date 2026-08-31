# Easy Solution | Beats 100% | with explanation

**Author:** kmuhammadjon
**Votes:** 1
**Link:** [https://leetcode.com/problems/water-bottles-ii/solutions/5046436/](https://leetcode.com/problems/water-bottles-ii/solutions/5046436/)

---


# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maxBottlesDrunk(numBottles int, numExchange int) int {
    // before iteration set full bottles as empty
    emptyBottles := numBottles
    numberOfBottlesDrank := numBottles
    numBottles = 0
    // if there is enough bottles to exchange iteration continue
    for emptyBottles >= numExchange{
        // exchange bottles on by one while incrementing numExchange
        for emptyBottles >= numExchange{
            numBottles++
            emptyBottles -= numExchange
            numExchange++
        }
        // and drinking them again
        numberOfBottlesDrank += numBottles
        emptyBottles += numBottles
        numBottles = 0
    }
    return numberOfBottlesDrank
}
```