# In c# because there was none

**Author:** user1731Qh
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-room/solutions/4296398/](https://leetcode.com/problems/closest-room/solutions/4296398/)

---

# Intuition
Based on heipit's solution a contribution in c# because there was none.

# Code
```
public class Solution {
    public int[] ClosestRoom(int[][] rooms, int[][] queries)
    {
        var indexes = new int[queries.Length];
        for (int i = 0; i < queries.Length; i++) indexes[i] = i;

        Array.Sort(rooms, (x, y) => y[1].CompareTo(x[1]));
        Array.Sort(indexes, (x, y) => queries[y][1].CompareTo(queries[x][1]));

        var answers = new int[queries.Length];
        var roomIdsSoFar = new List<int>();
        int roomIndex = 0;
        foreach(int index in indexes)
        {
            while(roomIndex < rooms.Length && rooms[roomIndex][1] >= queries[index][1])
            {
                roomIdsSoFar.Add(rooms[roomIndex][0]);
                roomIndex++;
            }
            roomIdsSoFar.Sort();

            int floor = 0;
            int ceil = int.MaxValue;
            foreach (int id in roomIdsSoFar)
            {
                if (id <= queries[index][0] && id > floor) floor = id;
                if (id > queries[index][0] && id < ceil) ceil = id;
            }

            int ansAbs = int.MaxValue, ans = -1;
            if (floor > 0)
            {
                ans = floor;
                ansAbs = Math.Abs(queries[index][0] - floor);
            }
            if (ceil < int.MaxValue && ansAbs > Math.Abs(queries[index][0] - ceil))
            {
                ans = ceil;
            }

            answers[index] = ans;
        }
        return answers;
    }
}
```