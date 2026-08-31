# C# solution

**Author:** phumney89
**Votes:** 0
**Link:** [https://leetcode.com/problems/meeting-scheduler/solutions/5766142/](https://leetcode.com/problems/meeting-scheduler/solutions/5766142/)

---


# Code
```csharp []
public class Solution {
        public IList<int> MinAvailableDuration(int[][] slots1, int[][] slots2, int duration)
        {
            Array.Sort(slots1, Comparer<int[]>.Create((a, b) => a[0] - b[0]));
            Array.Sort(slots2, Comparer<int[]>.Create((a, b) => a[0] - b[0]));
            List<int> retval = new List<int>(2);
            int i = 0, j = 0;
            while(i < slots1.Length && j < slots2.Length && retval.Count == 0)
            {
                int left = Math.Max(slots1[i][0], slots2[j][0]);
                int right = Math.Min(slots1[i][1], slots2[j][1]);
                if (right - left >= duration)
                {
                    retval.Add(left);
                    retval.Add(left + duration);
                }
                else if (slots1[i][1] < slots2[j][1]) i++;
                else j++;
            }

            return retval;
        }
}
```