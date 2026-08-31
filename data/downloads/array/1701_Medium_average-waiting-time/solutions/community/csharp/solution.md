# Simple C# solution ( memory beats 100% , time taken beats 88%)

**Author:** iamgokulnathanmcs
**Votes:** 1
**Link:** [https://leetcode.com/problems/average-waiting-time/solutions/5444486/](https://leetcode.com/problems/average-waiting-time/solutions/5444486/)

---

# Intuition
its a simple but interesting problem as long as we keep track of the chef time because that acts as our reference time from there we can canculate the waiting time based on when the customer came.

# Approach
- For each customer, if the chef is free before the customer arrives (chefTime < customers[i][0]), update the chef's start time to the customer's arrival time.
- Add the customer's cooking time to the chefTime.
- Calculate the waiting time for the current customer as the difference between chefTime and the customer's arrival time, then add it to totalWaitTime.

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
public class Solution {
    public double AverageWaitingTime(int[][] customers) {

        //keeping track of total time or chef time of reference.
        int chef = 0;
        // sum of all wait time from all customer.
        var totalWait = .0;
        for(int i =0 ;i< customers.Length ; i++)
        {
            /* if the chef is free and customer arrives at nth time then chef starts at nth time immediately so we are updating chef value . */
            if(chef < customers[i][0])
            {
                chef = customers[i][0];
            }
            
            // food preparation time is added to chef total time
            chef += customers[i][1];
            //wait time calculation.
            totalWait += chef - customers[i][0];         
        }
        return totalWait/customers.Length;
    }
}
```