# Java sorting solution | easy to understand | O(nlogn)

**Author:** dyckia
**Votes:** 67
**Link:** [https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/1116418/](https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/1116418/)

---

```
class Solution {
    public int maxProfit(int[] inventory, int orders) {
        /*                       
          1  3  5  5  9  9  9    original sorted inventory
          1  3  5  5  5  5  5    profit gain after selling all 9-value balls: (9 + 8 + 7 + 6) * 3 -> (9 + 6) * (9 - 6 + 1) / 2 * 3
          1  3  3  3  3  3  3    (5 + 4) * (5 - 4 + 1) / 2 * 5  -> (curValue + nextValue + 1) * (curValue - nextValue) / 2 * numSameColor
          1  1  1  1  1  1  1
          0  0  0  0  0  0  0
          
          need to handle the edge case that orders left is less than the number of items to buy
        */
        int mod = 1000000007;
        Arrays.sort(inventory);
        int curIndex = inventory.length - 1;
        int curValue = inventory[curIndex];
        long profit = 0;
        while (orders > 0) {
            while (curIndex >= 0 && inventory[curIndex] == curValue) {
                curIndex--;
            }
            // if all colors of balls are the same value, nextValue is 0
            int nextValue = curIndex < 0 ? 0 : inventory[curIndex];
            // number of colors of balls with same value 
            int numSameColor = inventory.length - 1 - curIndex;
            // number of items to buy
            int nums = (curValue - nextValue) * numSameColor;
            if (orders >= nums) {
                // buy all items
                profit += (long)(curValue + nextValue + 1) * (curValue - nextValue) / 2 * numSameColor;
            } else {
			    // orders left is less than the number of items to buy
                int numFullRow = orders / numSameColor;
                int remainder = orders % numSameColor;
                profit += (long)(curValue + curValue - numFullRow + 1) * numFullRow / 2 * numSameColor;
                profit += (long)(curValue - numFullRow) * remainder;
            }
            orders -= nums;
            profit = profit % mod;
            curValue = nextValue;
        }
        return (int)profit;
    }
}
```