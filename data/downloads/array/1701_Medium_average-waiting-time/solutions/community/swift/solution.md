# Beat 100% || O(n) || O(1)

**Author:** hudamabed
**Votes:** 2
**Link:** [https://leetcode.com/problems/average-waiting-time/solutions/5446607/](https://leetcode.com/problems/average-waiting-time/solutions/5446607/)

---


# Approach
For each customer, extract their arrival time (arrival) and the time needed to prepare their order (time).
Check if the chef is idle when the customer arrives:

    -If timer (current time when the chef finishes previous orders) is greater than arrival,
            it means the customer has to wait. Update timer by adding the preparation time.
    -If timer is less than or equal to arrival,
            it means the chef is idle when the customer arrives. Update timer to the sum of the arrival time and preparation time.

Calculate the waiting time for the current customer as timer - arrival and add it to waitingTime.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func averageWaitingTime(_ customers: [[Int]]) -> Double {
        var timer: Int = customers[0][0]
        var waitingTime: Int = 0

        for customer in customers {
            let arrival = customer[0]
            let time = customer[1]
            if (timer < arrival ) {
                timer = arrival
            }
            timer += time
            waitingTime = waitingTime + (timer - arrival)  
        }
        return (Double(waitingTime) / Double(customers.count) )
    }
}
``` 
![500a3dc2-a214-44d2-8aa9-2d54fb49128a_1682155607.4010892.png](./images/0.png)
