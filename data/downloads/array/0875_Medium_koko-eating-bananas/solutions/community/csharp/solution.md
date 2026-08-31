# C# easy and understanding solution

**Author:** TabrizGulmammadov
**Votes:** 5
**Link:** [https://leetcode.com/problems/koko-eating-bananas/solutions/3034457/](https://leetcode.com/problems/koko-eating-bananas/solutions/3034457/)

---

# Approach
Firstly, we find and define as right border the maximum one of piles and implement binary search method. In each step, we find middle point and sum hours for eating bananas with rounding to up. If hours will be negative (due explicit conversion from double into int) we break loop.

# Complexity
- Time complexity: O(log(max(P)) * k). In here, max(P) is maximumum of piles, k is the count of piles.

- Space complexity: O(1)

# Code
```
public class Solution {
    public int MinEatingSpeed(int[] piles, int h) {
        int left = 1,
            right = piles.Max();
        int result = right;

        while(left <= right) {
            int middle = left + (right - left) / 2;

            int hours = 0;
            foreach(int pile in piles) {
                hours += (int)Math.Ceiling((double)pile / (double)middle);
            }

            if(hours < 0) break;

            if(hours <= h) {
                result = Math.Min(result, middle);
                Console.WriteLine($"{hours} and {middle}: {result}");
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }

        return result;
    }
}
```