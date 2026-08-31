# 🔥💯 Simple C# solution

**Author:** mmarusiak
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/solutions/5883463/](https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/solutions/5883463/)

---



# Code
```csharp []
public class Solution {
    public int MinOperationsMaxProfit(int[] customers, int boardingCost, int runningCost) {
        int maxProfit = -1;
        int rotMax = -1;
        int currentProfit = 0;
        int i = 0;
        int waitingCustomers = 0;
        while(i < customers.Length || waitingCustomers > 0){
            if(i < customers.Length) waitingCustomers += customers[i];
            if(waitingCustomers >= 4){
                waitingCustomers -= 4;
                currentProfit += 4 * boardingCost;
            }else{
                currentProfit += waitingCustomers * boardingCost;
                waitingCustomers = 0;
            }
            i ++;
            currentProfit -= runningCost;

            if(currentProfit > maxProfit && currentProfit > 0){ 
                maxProfit = currentProfit;
                rotMax = i;
            }
        }

        return rotMax;
    }
}
```