# ✅💯java easy solution 👍

**Author:** mugeshking33
**Votes:** 1
**Link:** [https://leetcode.com/problems/average-waiting-time/solutions/5447654/](https://leetcode.com/problems/average-waiting-time/solutions/5447654/)

---

# Intuition
```javascript []
var averageWaitingTime = function(customers) {{
        let ans = 0;
        let time = customers[0][0];
        
        for (let c of customers) {
            time = c[0] < time ? time + c[1] : c[0] + c[1];
            ans = ans + (time - c[0]);
        }
        
        return ans / cu.length;
    }
```
```python []
class Solution:
    def averageWaitingTime(self, customers: List[List[int]]) -> float:
        ans = 0
        time = customers[0][0]
        
        for c in customers:
            time = max(time, c[0]) + c[1]
            ans += (time - c[0])
        
        return ans / len(customers)
```
```ruby []
def average_waiting_time(customers)
    ans = 0.0
    time = customers[0][0].to_f
    customers.each do |c|
      if c[0] < time
        time += c[1]
      else
        time = c[0] + c[1]
      end
      ans += (time - c[0])
    end
    ans / customers.length
  end
end

```
```C []
double averageWaitingTime(int** customers, int customersSize, int* customersColSize) {
    double ans = 0.0;
    int time = customers[0][0];

    for (int i = 0; i < size; i++) {
        if (customers[i][0] < time)
            time += customers[i][1];
        else
            time = customers[i][0] + customers[i][1];
        
        ans += (time - customers[i][0]);
    }

    return ans / size;
}
```
```C++ []
class Solution {
public:
    double averageWaitingTime(vector<vector<int>>& customers) {
        double ans = 0.0;
        int time = customers[0][0];

        for (int i = 0; i < customers.size(); i++) {
            time = (customers[i][0] < time) ? time + customers[i][1] : customers[i][0] + customers[i][1];
            ans += (time - customers[i][0]);
        }

        return ans / customers.size();
    }
};
```
``` java []
class Solution {
    public double averageWaitingTime(int[][] customers) {
        double ans=0,time=customers[0][0];
       for(int[] c : customers) {
            time=c[0]<time?time+c[1]:c[0]+c[1];
            ans=ans+(time-c[0]);
        }
        return (double)ans/customers.length;
    }
}
```
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
    public double averageWaitingTime(int[][] customers) {
        // Initialize variables to store total waiting time and current time
        double ans = 0, time = customers[0][0];
        
        // Iterate through each customer in the 'customers' array
        for (int[] c : customers) {
            // Update 'time' to reflect when the chef can start preparing this customer's order
            // If the current customer arrives after 'time', update 'time' to their arrival time + preparation time
            // Otherwise, update 'time' to the current 'time' + preparation time
            time = c[0] < time ? time + c[1] : c[0] + c[1];
            
            // Calculate the waiting time for the current customer and add it to 'ans'
            ans += (time - c[0]);
        }
        
        // Return the average waiting time by dividing total waiting time by the number of customers
        return ans / customers.length;
    }
}

```