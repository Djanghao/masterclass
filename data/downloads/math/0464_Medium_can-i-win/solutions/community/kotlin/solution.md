# Kotlin 100% O(N * 2^N) explained with comments

**Author:** lgsmitty
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-i-win/solutions/2638466/](https://leetcode.com/problems/can-i-win/solutions/2638466/)

---

Task: 2 players pick up numbers from a set of {`1`, ... ,`maxValue`} in turns and each number can be used only once. First player who reaches the state where total sum of all picked numbers by both players is equal or bigger then `target` wins. Can 1st player (the one makes first turn) win if both play optimally?

Let's simulate the game and record already played/visited states of the game. Initial state is when first player is to make a move, target value is initial target value and no numbers were used before. As a result of that state can be described with 3 numbers: 
1. Who is doing next turn
2. Left target sum 
3. Unused numbers 

Turn can be value `0` or `1`  depending on whether it is a 1st or 2nd player move. Left target sum is a number. Unused numbers can be bitmask since in total there are at most 20 numbers. This mask can fit into `Int` type. 

1. Do we need all 3 values to encode the state of the game? Can we make use of only bitmask? -Yes!
2. How? -Everything can be derived only from bits in bitmask in the following way. Let's take a look any bitmask. For simplicity, that random bitmask will be called current bitmask.
2.1 At the beginning, all bits set to `1` to indicate that all numbers can be used. Number of different bits in initial bitmask and current bitmask will indicate how many times turns were made. We can know who should be doing next step based on current bitmask.  
2.2 Bits which are set to `0` in current bitmask indicate that those values were subtracted against initial target. Based on that we can get what is the sum of number to pick till the end of a game.

As a result of observations above, current bitmask uniquely identifies state of a game. 
Since there are at most `20` integers to be used there are at most `2^20` states of the game with each state indicating whether current user can win or not. Arrays of this size can be used instead of HashMap to memorize/record already played games. 

```
class Solution {
	fun canIWin(maxChoosableInteger: Int, desiredTotal: Int): Boolean {
		// target is already reached before start of the game
		if (desiredTotal == 0) return true

		// if summing up all the numbers desired total cannot be reached
		// it means that nobody can win including first player
		if ((1 + maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal) return false

		// holds memorized/recorded state of the game base on bit mask of numbers available at the start of it
		// bit is set to `1` when number was not picked before
		val recordedCanIWin = arrayOfNulls<Boolean?>(1 shl maxChoosableInteger)

		// revPow2[2^(x)] = x + 1
		// used for easier/faster conversion of value of power of 2 to the value of power
		val revPow2 = IntArray(1 shl maxChoosableInteger).apply {
			for (q in 0 until maxChoosableInteger) {
				set(1 shl q, q + 1)
			}
		}

		fun canIWin(left: Int, mask: Int): Boolean {
			// Were here before? Then returned recorded result
			val recorded = recordedCanIWin[mask]
			if (recorded != null) return recorded

			var curMask = mask
			while (curMask > 0) {
				// 1. curMask - 1 -> removes the smallest bit set to `1` from the number and converting smaller `0` bits to `1`
				// 2. curMask and (curMask - 1) -> since AND bit operation leaves `1` bits only if those present in both numbers
				// and due to the fact that in (curMask - 1) the smallest bit set to `1` was removed and smaller `0`s set to `1`
				// we are getting a number with the smallest bit set to `1` in `curMask` removed
				// 3. (curMask and (curMask - 1)) xor curMask -> since XOR sets to `1` bits which differ and
				// in `curMask and (curMask - 1)` the smallest bit set to `1` was removed, we are getting value with
				// the smallest bit set to `1` in `curMask` while other bits were set to `0`
				val pow2Value = (curMask and (curMask - 1)) xor curMask
				// value of power of 2 converted to value of power + 1
				val pow2 = revPow2[pow2Value]

				// equal or exceeding current value or starting from new state opponent cannot win in any case
				if (pow2 >= left || !canIWin(left - pow2, mask xor pow2Value)) {
					// current player can win!
					recordedCanIWin[mask] = true
					return true
				}

				// removing the smallest bit set to `1`
				curMask = curMask and (curMask - 1)
			}

			// no picks resulted in loose for the opponent -> we are loosing
			recordedCanIWin[mask] = false
			return false
		}

		return canIWin(desiredTotal, (1 shl maxChoosableInteger) - 1)
	}
}
```