# Utilising Max Age = 120, O(N) solution

**Author:** chrisTris
**Votes:** 1
**Link:** [https://leetcode.com/problems/friends-of-appropriate-ages/solutions/376487/](https://leetcode.com/problems/friends-of-appropriate-ages/solutions/376487/)

---

``` csharp
public class Solution 
{
    public int NumFriendRequests(int[] ages) 
    {
        int[] allAges = new int[121];
        int count = 0;
                
        for(int i = 0; i < ages.Length; i++)
        {
            allAges[ages[i]]++;
        }
                
        for (int i = 15; i < allAges.Length; i++)
        {
            int j = (int)(0.5 * i) + 8;
            
            while(j <= i)
            {
                count += allAges[j] * (allAges[i] - (i == j ? 1 : 0));
                j++;
            }
        }
        
        return count;
    }
}
```