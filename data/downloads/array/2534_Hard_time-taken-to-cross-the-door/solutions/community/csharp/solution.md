# C#: Logical Solution: Use 2 Queues.

**Author:** kartikhtog
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/5031160/](https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/5031160/)

---

# Intuition
Use 2 queues to keep track to persons who have first priority
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
- Create 1 queue for entering
- Create 1 queue for exiting
- Keep track of time
- When a person reaches arrival time add them to the correct queue
- If both queues are empty skip time to the next person
- Follow the rules to see which queue should be dequeued
- Add person to answer : answer[person] = time
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: Best case: O(n) ... Worst case O(2*n) = O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n) : to store answer and max element in queue
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    // public class Person{
    //     public int index;
    //     public bool wEnter;
    //     Public Person(int index, int wEnter)
    //     {
    //         this.index= index;
    //         this.wEnter = wEnter;
    //     }
    // }
    public int[] TimeTaken(int[] arrival, int[] state) {
        var timeOfCross = new int[arrival.Length];
        var wasUsedToEnter = false;
        var wasBeingUsed = false;
        var wantToEnter = new Queue<int>();// int is index person;
        var wantToExit = new Queue<int>();// int is index person;
        var arrivalIndex = 0;
        var time = 0;
        while(wantToEnter.Count()>0 || wantToExit.Count()>0 || arrivalIndex < arrival.Length)
        {
            while (arrivalIndex < arrival.Length && arrival[arrivalIndex]==time)
            {
                if (state[arrivalIndex]==0)
                {
                    wantToEnter.Enqueue(arrivalIndex);
                }
                else{
                    wantToExit.Enqueue(arrivalIndex);
                }
                arrivalIndex++;
            }
            if (wantToEnter.Count() == 0 && wantToExit.Count() == 0)//nothing happens shift the time and continue with loop;
            {
                wasBeingUsed = false;
                if (arrivalIndex < arrival.Length)
                {
                    time = arrival[arrivalIndex];
                }
                continue;
            }
            if (wasBeingUsed)
            {
                if (wasUsedToEnter && wantToEnter.Count()>0)
                {
                    wasUsedToEnter = true;
                    timeOfCross[wantToEnter.Dequeue()] = time;
                }
                else if (!wasUsedToEnter && wantToExit.Count()>0)
                {
                    timeOfCross[wantToExit.Dequeue()] = time;
                    wasUsedToEnter = false;
                }
                else if (wantToEnter.Count() >0 )
                {
                    wasUsedToEnter = true;
                    timeOfCross[wantToEnter.Dequeue()] = time;
                }
                else
                {
                    timeOfCross[wantToExit.Dequeue()] = time;
                    wasUsedToEnter = false;
                }
            }
            else
            {
                if (wantToExit.Count() >0 )
                {
                    var person = wantToExit.Dequeue();
                    timeOfCross[person] = time;
                    wasUsedToEnter = false;
                    //Console.WriteLine("Exit: " + person + " : "+ time);
                }
                else
                {
                    timeOfCross[wantToEnter.Dequeue()] = time;
                    wasUsedToEnter = true;
                }
                wasBeingUsed = true;
            }

            time++;
        }
    return timeOfCross;
    }
}
```