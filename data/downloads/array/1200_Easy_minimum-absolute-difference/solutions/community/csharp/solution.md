# C# Sort and Iterate

**Author:** dj_cow
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-absolute-difference/solutions/5944711/](https://leetcode.com/problems/minimum-absolute-difference/solutions/5944711/)

---

# Intuition
Sort & Iterate

# Approach
if(diff < min) wipe list and add
else if(diff == min) add to list

# Complexity
- Time complexity:
O(n + nlogn)

- Space complexity:
O(n)

# Code
```csharp []
public class Solution {
    public IList<IList<int>> MinimumAbsDifference(int[] arr) {
        
        Array.Sort(arr);

        IList<IList<int>> result = new List<IList<int>>();

        int minAbsD = Int32.MaxValue;

        for(int i = 0; i < arr.Length - 1 ; i++)
        {
            int diff = arr[i + 1] - arr[i];
            if(diff < minAbsD)
            {
                result.Clear();
                minAbsD = diff;
                result.Add(new List<int>(){arr[i], arr[i+1]});
            }
            else if(diff == minAbsD) result.Add(new List<int>(){arr[i], arr[i+1]});
        }

        return result;

        
        


    }
}
```