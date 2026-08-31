# Easy C# solution.

**Author:** ymjoshi
**Votes:** 2
**Link:** [https://leetcode.com/problems/task-scheduler-ii/solutions/4180244/](https://leetcode.com/problems/task-scheduler-ii/solutions/4180244/)

---

# Intuition
Create an easy solution using hashmap.

# Approach
Use hashmap to record the last execution time of the function. Ensure the space beween the next execution.

# Complexity
- Time complexity:
O(n) where n = number of tasks in the array.

- Space complexity:
O(n) where n = number of tasks in the array.

# Code
```
public class Solution {
    public long TaskSchedulerII(int[] tasks, int space) {
        Dictionary<int, long> map = new ();
        long days = 0;

        for(int i = 0; i < tasks.Length; i ++)
        {
            days ++;

            if(map.ContainsKey(tasks[i]) == false)
            {
                map.Add(tasks[i], days);
            }
            else
            {
                // forward the number of days
                if(map[tasks[i]] + space >= days)
                {                                
                    days = map[tasks[i]] + space + 1;                    
                }   

                map[tasks[i]] = days;
            }
        }

        return days;
    }
}
```