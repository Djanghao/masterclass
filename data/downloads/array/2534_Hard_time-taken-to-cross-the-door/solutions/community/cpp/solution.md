# C++, Simulation using Two Queues with Explanations

**Author:** strahd
**Votes:** 12
**Link:** [https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/4020030/](https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/4020030/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

There can be 4 states at any time:
    1) No one is at the door
    2) Some people are exiting but no one is entering
    3) Some people are entering but no one is exiting
    4) There are people at both sides of the door

People at both sides will line up (i.e. form queues) when they arrive at the door. So, it feels natural to have two queues represeting the lines at each side. 

Once these are established the solution starts to take form. 

The arrival array is already sorted. We just have to split it into two queues. We can assign arrival index as the id number for that person. We also have to keep arrival times in queues

Then, for each point in time we are going to check if there is anyone waiting to go through the door by looking at the queues. Since we kept arrival times in queues, we can compare the time to the arrival time of the front of each queue. If it is earlier than the time of queue front, that means that person hasn't arrived yet.

The first three states are not complicated. For the last state, in order to decide who goes first we need a variable keeping the previous state of the door. 

We simply simulate each second while at least one queue is not empty. Each time someone goes through the door (states 2, 3 and 4) time is added to the results array.

# Approach
    create two queues with pair elements: one for entry one for exit. 
    pairs keep arrival time and id num
    create a vector for result
    t = 0 for time, door = 0 for door state enumaration: (0=unused, 1=entered, 2=exited)

    iterate arrival: push {time, id} pairs to their respective que

    loop while at least one que is not empty:

        if time is earlier than the front of either queue:
            no one has arrived at the door -> set door state to "not used"

        else if time is equal to or later than exit queue front, but earlier than enter queue front:
            no one is entering, people are waiting to exit ->
            person in front of the exit que exits, write time to result
            pop exit que, set door state to "exit"

        else if time is equal to or later than enter queue front, but earlier than exit queue front::
            no one is exiting, people are waiting to enter -> 
            person in front of the enter que enters, write time to result
            pop enter que, set door state to "enter"
  
        else:  
            people are waiting at both sides ->
            if door state is "exit" or "not used":
                person in front of the exit que exits, write time to result
                pop exit que, set door state to "exit"
            else:
                person in front of the enter que enters, write time to 
                pop enter que, set door state to "enter"
        
        increment time
    end while loop

    return result

 

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```
class Solution {
public:
    vector<int> timeTaken(vector<int>& arrival, vector<int>& state) {
        int sz = arrival.size(), t = 0, door = 0;
        vector<int> res(sz, 0);
        queue<pair<int,int>> enterQ, exitQ;

        for (int i = 0; i < sz; i++) {
            if (state[i])
                exitQ.push({arrival[i], i});
            else
                enterQ.push({arrival[i], i});                       
        }

        while (!exitQ.empty() || !enterQ.empty()) {
            if ((exitQ.empty() || exitQ.front().first > t) && (enterQ.empty() || enterQ.front().first > t))
                door = 0;
            else if (!exitQ.empty() && exitQ.front().first <= t && (enterQ.empty() || enterQ.front().first > t)) {
                res[exitQ.front().second] = t;
                door = 2;
                exitQ.pop();            
            }
            else if ((exitQ.empty() || exitQ.front().first > t) && !enterQ.empty() && enterQ.front().first <= t) {
                res[enterQ.front().second] = t;
                door = 1;
                enterQ.pop();                
            }
            else {
                if (door == 0 || door == 2) {
                    res[exitQ.front().second] = t;
                    door = 2;
                    exitQ.pop(); 
                } else {
                    res[enterQ.front().second] = t;
                    door = 1;
                    enterQ.pop();  
                }
            }
            t++;
        }
        return res;
    }
};
```