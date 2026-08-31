# [Simulation Tutorial] Average Waiting Time

**Author:** never_get_piped
**Votes:** 16
**Link:** [https://leetcode.com/problems/average-waiting-time/solutions/5443543/](https://leetcode.com/problems/average-waiting-time/solutions/5443543/)

---

**Topic** :  Simulation

Simulation generally involves simulating the problem's processes and carefully following the instructions/information provided.
___

## Solution
The answer is straightforward: **divide the total waiting time by the number of customers**. While the second variable is given, the first requires calculation.

Let's use `totalTime` to denote the total waiting time and `curTime` to denote the current time.If a customer arrives at time `t`, we have the following two cases:
*  If `curTime` is less than or equal to `t`, in this case, the chef is idle, and they can start preparing the order immediately with `customers[i][1]` minutes of preparation time. After serving this customer, `curTime` is updated to `customers[i][0] + customers[i][1]`.
*  If `curTime` is greater than `t`, the customer needs to wait until the chef becomes idle, which is `curTime - t` minutes. Then, the chef starts preparing the order for `customers[i][1]` minutes, and `curTime` is updated to `curTime + customers[i][1]`.



<br/>

```c++ []
class Solution {
public:
    double averageWaitingTime(vector<vector<int>>& customers) {
        int n = customers.size(), curTime = 0;
        double totalTime = 0;
        for(int i = 0; i < n; i++) {
            if(curTime <= customers[i][0]) {
                totalTime += customers[i][1];
                curTime = customers[i][0] + customers[i][1];
            } else {
                totalTime += (curTime - customers[i][0] + customers[i][1]);
                curTime += customers[i][1];
            }
        }
        return totalTime / n;
    }
};
```
```java []
class Solution {
    public double averageWaitingTime(int[][] customers) {
        int n = customers.length, curTime = 0;
        double totalTime = 0;
        for(int i = 0; i < n; i++) {
            if(curTime <= customers[i][0]) {
                totalTime += customers[i][1];
                curTime = customers[i][0] + customers[i][1];
            } else {
                totalTime += (curTime - customers[i][0] + customers[i][1]);
                curTime += customers[i][1];
            }
        }
        return totalTime / n;
    }
}
```
```python []
class Solution:
    def averageWaitingTime(self, customers: List[List[int]]) -> float:
        n = len(customers)
        curTime = 0
        totalTime = 0
        for i in range(n):
            if curTime <= customers[i][0]:
                totalTime += customers[i][1]
                curTime = customers[i][0] + customers[i][1]
            else:
                totalTime += (curTime - customers[i][0] + customers[i][1])
                curTime += customers[i][1]
        return totalTime / n
```
```Go []
func averageWaitingTime(customers [][]int) float64 {
    n := len(customers)
    curTime := 0
    totalTime := 0.0
    for i := 0; i < n; i++ {
        if curTime <= customers[i][0] {
            totalTime += float64(customers[i][1])
            curTime = customers[i][0] + customers[i][1]
        } else {
            totalTime += float64(curTime - customers[i][0] + customers[i][1])
            curTime += customers[i][1]
        }
    }
    return totalTime / float64(n)
}
```
```PHP []
class Solution {

    /**
     * @param Integer[][] $customers
     * @return Float
     */
    function averageWaitingTime($customers) {
        $n = count($customers);
        $curTime = 0;
        $totalTime = 0;
        for ($i = 0; $i < $n; $i++) {
            if ($curTime <= $customers[$i][0]) {
                $totalTime += $customers[$i][1];
                $curTime = $customers[$i][0] + $customers[$i][1];
            } else {
                $totalTime += ($curTime - $customers[$i][0] + $customers[$i][1]);
                $curTime += $customers[$i][1];
            }
        }
        return $totalTime / $n;
    }
}
```
```javascript []
var averageWaitingTime = function(customers) {
    let n = customers.length;
    let curTime = 0;
    let totalTime = 0;
    for (let i = 0; i < n; i++) {
        if (curTime <= customers[i][0]) {
            totalTime += customers[i][1];
            curTime = customers[i][0] + customers[i][1];
        } else {
            totalTime += (curTime - customers[i][0] + customers[i][1]);
            curTime += customers[i][1];
        }
    }
    return totalTime / n;    
};
```

**Complexity**:
* Time Complexity : `O(n)`
* Space Complexity : `O(1)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**