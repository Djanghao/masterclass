# Do you firstly do the homework due earlier or later?

**Author:** laihm6
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/4312535/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/4312535/)

---

# Intuition
If each homework take the same time to do, do you firstly do the homework due earlier or later?

It is like doing the homework. For each of your day, you usually firstly want to do homework due earlier. Why? Homework with earlier due date means shorter time to do so.

# Approach
After knowing which event to attend firstly, the problem becomes easiler:
0) Sort the array by start date

Until no more events and also added all event:
1) Add events until today OR speed up to next event if no events added
2) Attend the event ends earlier for today
3) Remoce all expired events in the queue


# Complexity
- Time complexity:
$$O(nlog(n))$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution {
    public int MaxEvents(int[][] events) {
        Array.Sort(events, (a,b) => a[0]-b[0]);
        int n = events.Length;

        PriorityQueue<int, int> toAttend = new();
        int i = 0;
        int count = 0; 
        int day = 1;
        
        while(toAttend.Count>0 || i<n){
            //Step1: Add events until today OR speed up to next event if no events added
            while(i<n && events[i][0] <= day){
                toAttend.Enqueue(events[i][1], events[i][1]);
                i++;
            }
            if(toAttend.Count == 0){
                day = events[i][0];
                continue;
            }

            //Step 2: Attend the event ends earlier
            if(toAttend.Count>0 && day<=toAttend.Peek()){
                toAttend.Dequeue();
                count++;
            }
            day++;

            //Step 3: Remove expired events in the queue
            while(toAttend.Count>0 && toAttend.Peek()<day){
                toAttend.Dequeue();
            }
        }

        return count;
    }
}
```