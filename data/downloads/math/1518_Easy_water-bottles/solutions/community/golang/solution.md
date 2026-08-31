# 🔥 🔥 🔥 Easy to understand | Very Simple Explanation 🔥 🔥 🔥

**Author:** bhanu_bhakta
**Votes:** 78
**Link:** [https://leetcode.com/problems/water-bottles/solutions/5431403/](https://leetcode.com/problems/water-bottles/solutions/5431403/)

---

Detailed video explanation [here](https://www.youtube.com/watch?v=5MoUE5Gdngg)


# Intuition
- Drink all the water bottles and continuously exchange the `numExchange` number of empty bottles with full water bottle until you have `numExchange` empty bottle left.

# Approach
**Initial Drinking:**

- Start with a given number of full water bottles (numBottles) and drink them all.

**Exchanging Bottles:**

- Each empty bottle can be exchanged for a new full bottle based on the exchange rate (numExchange).

**Loop of Drinking and Exchanging:**

- Continuously drink and exchange bottles while you have enough empty bottles to make an exchange.

**Tracking Total Consumption:**

- Keep a running total of all the bottles drunk and update the count of empty bottles after each exchange.
Termination:

- Stop the process when you no longer have enough empty bottles to exchange for a new full bottle.


# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```Python []
class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        totalBottles = numBottles

        while numBottles >= numExchange:
            totalBottles += numBottles // numExchange
            numBottles = numBottles // numExchange + numBottles % numExchange

        return totalBottles

```
```C++ []
class Solution {
public:
    int numWaterBottles(int numBottles, int numExchange) {
        int totalBottles = numBottles;

        while (numBottles >= numExchange) {
            totalBottles += numBottles / numExchange;
            numBottles = (numBottles / numExchange) + (numBottles % numExchange);
        }

        return totalBottles;
    }
};
```
```Java []
class Solution {
    public int numWaterBottles(int numBottles, int numExchange) {
        int totalBottles = numBottles;

        while (numBottles >= numExchange) {
            totalBottles += numBottles / numExchange;
            numBottles = (numBottles / numExchange) + (numBottles % numExchange);
        }

        return totalBottles;
    }
}
```
```Javascript []
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let totalBottles = numBottles;

    while (numBottles >= numExchange) {
        totalBottles += Math.floor(numBottles / numExchange);
        numBottles = Math.floor(numBottles / numExchange) + (numBottles % numExchange);
    }

    return totalBottles;
};
```
```Go []
func numWaterBottles(numBottles int, numExchange int) int {
	totalBottles := numBottles

	for numBottles >= numExchange {
		totalBottles += numBottles / numExchange
		numBottles = (numBottles / numExchange) + (numBottles % numExchange)
	}

	return totalBottles
}
```
```Kotlin []
class Solution {
    fun numWaterBottles(numBottles: Int, numExchange: Int): Int {
        var totalBottles = numBottles
        var currentBottles = numBottles

        while (currentBottles >= numExchange) {
            totalBottles += currentBottles / numExchange
            currentBottles = (currentBottles / numExchange) + (currentBottles % numExchange)
        }

        return totalBottles
    }
}
```

If you like the solution, **please upvote**

![upvote.webp](./images/0.webp)

