# Simple iterative solution

**Author:** MishaKonki
**Votes:** 2
**Link:** [https://leetcode.com/problems/average-waiting-time/solutions/5445786/](https://leetcode.com/problems/average-waiting-time/solutions/5445786/)

---


# Code
```
    function averageWaitingTime(customers: number[][]): number {
        
        let currTime = 0;

        let waitingTime = 0;
        for (let [arrival, time] of customers) {
            let cookTime = Math.max(currTime, arrival) + time;
            currTime = cookTime
            waitingTime += cookTime - arrival;
        }
        return waitingTime / customers.length
    };
```