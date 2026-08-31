# 🌺C#, Java, Python3, JavaScript Solution - O(n)

**Author:** Daisy001
**Votes:** 17
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/3506973/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/3506973/)

---

**Here to see the full explanation :\u2B50[Zyrastory - #121 Best Time to Buy and Sell Stock](https://zyrastory.com/en/coding-en/leetcode-en/leetcode-121-best-time-to-buy-and-sell-stock-solution-and-explanation-en/)\u2B50**


---

# Example :
# C#
\u274Cfirst try  - **Time Complexity : O(n^2)**
```
public class Solution {
    public int MaxProfit(int[] prices) {
        
        int max = 0;
         for(int i = 0;i<prices.Length-1;i++)
         {
             for(int j = i+1;j<prices.Length;j++)
             {
                 int res = prices[j]-prices[i];
                 if(res>max)
                 {
                     max = res;
                 }
             }
         }
        return max;
    }
}
```

Solution - **Time Complexity : O(n)**
```
public class Solution {
    public int MaxProfit(int[] prices) {
        int max = 0;
        int min = prices[0];
        
        for(int i=1;i<prices.Length;i++){
            if(prices[i] < min){
                min = prices[i];
            }
            
            else if((prices[i] - min) > max )
            {
                max = prices[i] - min;
            }
        }
        return max;
    }
}
```

---

# Java
```
class Solution {
    public int maxProfit(int[] prices) {
        int max = 0;
        int min = prices[0];
        
        for(int i=1;i<prices.length;i++){
            if(prices[i] < min){
                min = prices[i];
            }
            
            else if((prices[i] - min) > max )
            {
                max = prices[i] - min;
            }
        }
        return max;
    }
}
```

---
# Python3
```
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max = 0;
        min = prices[0];
        
        for i in range(1,len(prices)):
            if prices[i] < min :
                min = prices[i]
            
            elif((prices[i] - min) > max):
                max = prices[i] - min
        
        return max;
```

---

# JavaScript
```
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var max = 0;
    var min = prices[0];

    for(var i=1;i<prices.length;i++){
        if(prices[i] < min){
            min = prices[i];
        }

        else if((prices[i] - min) > max )
        {
            max = prices[i] - min;
        }
    }
    return max;
};
```


**If you got any problem about the explanation or you need other programming language solution, please feel free to let me know (leave comment or messenger me).**

Thanks!

**\uD83E\uDDE1See next question - [Zyrastory - #122 Best Time to Buy and Sell Stock II](https://zyrastory.com/en/coding-en/leetcode-en/leetcode-122-best-time-to-buy-and-sell-stock-ii-solution-and-explanation-en/)**