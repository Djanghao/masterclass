# 🐌 C# - priority queue

**Author:** user7166Uf
**Votes:** 2
**Link:** [https://leetcode.com/problems/course-schedule-iii/solutions/2185819/](https://leetcode.com/problems/course-schedule-iii/solutions/2185819/)

---

Based on https://leetcode.com/problems/course-schedule-iii/discuss/2185248/Java-PriorityQueue-and-Sorting-Well-Explanation.

```
public class Solution
{
    public int ScheduleCourse(int[][] courses)
    {
        Array.Sort(courses, Comparer<int[]>.Create((left, right) => left[1] - right[1]));
        PriorityQueue<int, int> priorityQueue = new();

        int time = 0;
        foreach (int[] course in courses)
        {
            (int duration, int lastDay) = (course[0], course[1]);
            time += duration;
            priorityQueue.Enqueue(duration, -duration);
            if (time > lastDay)
            {
                time -= priorityQueue.Dequeue();
            }
        }

        return priorityQueue.Count;
    }
}
```