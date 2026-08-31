# C# Solution using Dictionary & HashSet

**Author:** zmmohib
**Votes:** 5
**Link:** [https://leetcode.com/problems/finding-the-users-active-minutes/solutions/2939916/](https://leetcode.com/problems/finding-the-users-active-minutes/solutions/2939916/)

---

# Intuition
Each user has a unique userId and also each user can perform multiple task in a given minute. Use a Dictionary where key is the userId and for each userId we need to count the number of unique minutes. So  for the value in the Dictionary use a HashSet to keep track of the unique active minutes.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(m + n) 
Where m = number of unique users
and n = length of the logs array

# Code
```
public class Solution
{
    public int[] FindingUsersActiveMinutes(int[][] logs, int k)
    {
        var userActiveMinutes = new Dictionary<int, HashSet<int>>();
        foreach (var log in logs)
        {
            var userId = log[0];
            var taskPerformedAtTime = log[1];
            
            if (!userActiveMinutes.ContainsKey(userId))
            {
                userActiveMinutes[userId] = new HashSet<int>();
            }
            
            userActiveMinutes[userId].Add(taskPerformedAtTime);
        }

        int[] result = new int[k];
        foreach (var (userId, totalTimeTaken) in userActiveMinutes)
        {
            result[totalTimeTaken.Count - 1]++;
        }   

        return result;
    }
}
```