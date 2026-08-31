# Kotlin and Java clean and simple solution without division

**Author:** awawa
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/2062977/](https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/2062977/)

---

The solution idea is to check if dots from three consecutive days lay on the same line. If they are, then you need only one line to connect them, if they are not you need two lines. To check if dots are on the same line we use the formula `(y1 - y2) / (x1 - x2) == (y1 - y3) / (x1 - x3)`, but to avoid division we rewrite the  formula as `(y1 - y2) * (x1 - x3) == (y1 - y3) * (x1 - x2)`, also we could rewrite it as `(y1 - y2) * (x1 - x3) - (y1 - y3) * (x1 - x3) == 0`.

**Kotlin code:**
```
class Solution {
    fun minimumLines(stockPrices: Array<IntArray>): Int {
        if (stockPrices.size < 2) return 0
        stockPrices.sortBy { it[0] }
        
        var count = 1
        for (i in 2 until stockPrices.size) {
            val (x1, y1) = stockPrices[i - 2]
            val (x2, y2) = stockPrices[i - 1]
            val (x3, y3) = stockPrices[i]
            
            if ((y1 - y2) * (x1 - x3) - (y1 - y3) * (x1 - x2) != 0) count++
        }
        return count
    }
}
```

**Java code:**
```
class Solution {
    public int minimumLines(int[][] stockPrices) {
        if (stockPrices.length < 2) return 0;
        Arrays.sort(stockPrices, (first, second) -> (first[0] - second[0]));
        
        int count = 1;
        for (int i = 2; i < stockPrices.length; i++) {
            
            int x1 = stockPrices[i - 2][0];
            int x2 = stockPrices[i - 1][0];
            int x3 = stockPrices[i][0];
            
            int y1 = stockPrices[i - 2][1];
            int y2 = stockPrices[i - 1][1];
            int y3 = stockPrices[i][1];
            
            if ((y1 - y2) * (x1 - x3) - (y1 - y3) * (x1 - x2) != 0) count++;
        }
        
        return count;
    }
}
```