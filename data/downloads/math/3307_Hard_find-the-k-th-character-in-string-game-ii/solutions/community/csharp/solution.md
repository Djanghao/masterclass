# Simple O(ln(n)) calculate number of shifts

**Author:** dmytro4322
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solutions/5903418/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solutions/5903418/)

---

# Approach
Calculate maximum smaller than k power of 2 - *maxSmallerPow2*
*diff = k - maxSmallerPow2*
Kth character is calculated based on character number *diff*
It's the same or shift of character number *diff*. 
Calculate number of shifts and apply it to 'a'


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


# Code
```csharp []
public class Solution {
    public char KthCharacter(long k, int[] operations) {
        int index, countOfShifts = 0;
        double log2, floor;

        while (k > 1) {
            log2 = Math.Log2(k);
		    floor = Math.Floor(log2);
		    index = (int)floor;
		
		    if (log2 == floor){
			    index--;
		    }
		
            long maxSmallerPow2 = (long)Math.Pow(2.0, index);
		    k -= maxSmallerPow2;
            countOfShifts += operations[index];
        }
        
        countOfShifts %= 26;
        return (char)('a' + countOfShifts);
    }
}
```