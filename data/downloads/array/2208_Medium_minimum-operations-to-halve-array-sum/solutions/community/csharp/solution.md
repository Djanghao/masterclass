# Simple Priority Queue Implementation

**Author:** ayush6203
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/3425366/](https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/3425366/)

---

# Complexity
- Time complexity:
O(NLogN)

- Space complexity:
O(N)

# Code
```
public class Solution {
    public int HalveArray(int[] nums) {
        PriorityQueue<double, double> maxPriortyQueue = new PriorityQueue<double, double>();
        double givenSum = 0;
        foreach(int num in nums)
            givenSum += num;

        double currSum = givenSum;
        givenSum /= 2;
        int operations = 0;

        foreach(int num in nums)
            maxPriortyQueue.Enqueue(num, -num);

        while(maxPriortyQueue.Count != 0){
            ++operations;
            double currMaxNum = maxPriortyQueue.Dequeue();
            currMaxNum /= 2;
            currSum -= (double)currMaxNum;
            maxPriortyQueue.Enqueue(currMaxNum, -currMaxNum);
            if(currSum <= givenSum)
                return operations;
        }

        return operations;
    }
}
```