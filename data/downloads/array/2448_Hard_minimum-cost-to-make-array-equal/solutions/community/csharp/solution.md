# Optimized Cost Calculation Algorithm for Number Array

**Author:** mina_emad_radi
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/3665592/](https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/3665592/)

---

# Intuition
    The intuition behind this approach is to calculate the minimum cost required
     by considering different starting points in the given array of numbers and costs.


# Approach
    The given code first sorts the numbers and their corresponding costs in ascending order based on the numbers.
    It then calculates the total cost by iterating over the sorted numbers from the second element onwards.
    For each iteration, it calculates the difference between the current number and the first number as DX.
    It updates the total cost by adding DX multiplied by the cost of the current number.
    After calculating the cost with the first number as the starting point, it sets the initial answer to the total cost.
    Next, the code starts a new iteration from the second element onwards.
    For each iteration, it calculates DX as the difference between the current number and the previous number.
    It updates the total cost by subtracting the cost of subsequent numbers multiplied by DX, and adding the cost of previous numbers multiplied by DX.
    It checks if the new total cost is less than the current answer and updates answer if necessary.
    Finally, it returns the answer as the minimum cost.
# Complexity
    Time complexity: The time complexity of this approach is O(n log n) due to the sorting operation performed on the numbers and costs.
    Space complexity: The space complexity is O(n) as the sorted numbers and costs are stored in separate arrays.
![R.gif](./images/0.gif)

# Code
```
public class Solution {
   public long MinCost(int[] nums, int[] cost)
{
    var sortedArrays = nums.Select((num, index) => new { Num = (long)num, Cost = (long)cost[index] })
        .OrderBy(item => item.Num)
        .ToArray();


    long[] sortedNums = sortedArrays.Select(item =>item.Num).ToArray();
    long[] sortedCost = sortedArrays.Select(item =>item.Cost).ToArray();

     long[] prefixCost = new long[sortedCost.Length];
       prefixCost[0] = sortedCost[0];
for (int i = 1; i < sortedCost.Length; ++i)
    prefixCost[i] = sortedCost[i] + prefixCost[i - 1];




    long totalCost = 0;
    long DX;
    for (int i = 1; i < sortedNums.Length; i++)
    {
        DX = sortedNums[i] - sortedNums[0];
        totalCost += DX * (long)sortedCost[i];
    }
    long answer = totalCost;

    for (int i = 1; i < sortedNums.Length; i++)
    {
        DX = sortedNums[i] - sortedNums[i - 1];
            totalCost +=  prefixCost[i - 1] * DX;
            totalCost -=  (prefixCost[sortedCost.Length - 1] - prefixCost[i - 1]) * DX;
        answer = totalCost < answer ? totalCost : answer;
    }

    return answer;
}

}
```