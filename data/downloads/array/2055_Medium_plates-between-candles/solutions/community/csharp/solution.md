# C# prefix solution

**Author:** clewBy
**Votes:** 3
**Link:** [https://leetcode.com/problems/plates-between-candles/solutions/2701089/](https://leetcode.com/problems/plates-between-candles/solutions/2701089/)

---

```
public class Solution {
    public int[] PlatesBetweenCandles(string s, int[][] queries) {
        int n = s.Length;
        int[] candlesPref = new int[n];
        int[] leftClosestCandle = new int[n];

        int candleIdx = -1, candleCount = 0;
        for(int i = 0; i < n; i++){
            if(s[i] == '|') {
                candleIdx = i;
                candleCount++;
            }
            leftClosestCandle[i] = candleIdx;
            candlesPref[i] = candleCount;
        }

        candleIdx = -1;
        int[] rightClosestCandle = new int[n];
        for(int i = n-1; i >= 0; i--){
            if(s[i] == '|') candleIdx = i;
            rightClosestCandle[i] = candleIdx;
        }

        int idx = 0;        
        int[] res = new int[queries.Length];
        foreach(int[] query in queries){
            int leftCandleIdx = rightClosestCandle[query[0]];
            int rightCandleIdx = leftClosestCandle[query[1]];
            if(leftCandleIdx != -1 && rightCandleIdx > leftCandleIdx){
                res[idx++] = (rightCandleIdx-leftCandleIdx+1) - (candlesPref[rightCandleIdx]-candlesPref[leftCandleIdx]+1);
            } else{
                res[idx++] = 0;
            }
        }
        return res;
    }
}
```