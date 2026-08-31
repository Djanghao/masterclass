# simple solution using Dart | 96% acceptance

**Author:** nidha_nidh
**Votes:** 0
**Link:** [https://leetcode.com/problems/average-waiting-time/solutions/5483658/](https://leetcode.com/problems/average-waiting-time/solutions/5483658/)

---

### Intuition
The problem involves calculating the average waiting time for customers given their arrival times and service times. The goal is to simulate the processing of each customer, taking into account the waiting time they experience before being served.

### Approach
1. **Initialization**: Start with the service start time initialized to the arrival time of the first customer.
2. **Iteration**: For each customer:
   - Check if the current start time is greater than or equal to the customer's arrival time. If it is, the server is free, and the customer's service can start immediately after the previous service ends.
   - If the server is not free, update the start time to the customer's arrival time plus their service time.
   - Calculate the waiting time for the current customer and add it to the total waiting time.
3. **Average Calculation**: After processing all customers, compute the average waiting time by dividing the total waiting time by the number of customers.

### Complexity
- **Time Complexity**: 
  - The algorithm iterates through the list of customers exactly once, performing constant-time operations for each customer.
  - Therefore, the time complexity is \\(O(n)\\), where \\(n\\) is the number of customers.

- **Space Complexity**: 
  - The algorithm uses a few integer variables (`start`, `sumAvg`, and `sum`) to keep track of the state.
  - No additional data structures are used that scale with the input size.
  - Therefore, the space complexity is \\(O(1)\\).

# Code
```
class Solution {
  double averageWaitingTime(List<List<int>> customers) {
    int start = customers[0][0]; // Start time is initialized to the first customer's arrival time
    int sumAvg = 0; // Total accumulated waiting time

    for (int i = 0; i < customers.length; i++) {
      int sum = 0; // Waiting time for the current customer

      // Check if the server is free (start time >= arrival time)
      if (start >= customers[i][0]) {
        // If the server is busy, add the service time to the current start time
        start += customers[i][1];
      } else {
        // If the server is free, set the start time to the customer's arrival time plus service time
        start = customers[i][0] + customers[i][1];
      }

      // Calculate the waiting time for the current customer
      sum += (start - customers[i][0]);
      // Accumulate the waiting time for the average calculation
      sumAvg += sum;
    }

    // Compute and return the average waiting time
    return sumAvg / customers.length;
  }
}

```