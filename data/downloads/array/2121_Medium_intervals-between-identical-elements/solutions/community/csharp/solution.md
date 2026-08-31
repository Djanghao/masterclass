# CSharp (C#) with prefix sum

**Author:** juwikuang
**Votes:** 1
**Link:** [https://leetcode.com/problems/intervals-between-identical-elements/solutions/1648432/](https://leetcode.com/problems/intervals-between-identical-elements/solutions/1648432/)

---

if we have [2,1,2,1,2,1,2,1,2], if we are looking for ans[4],

ans[4] = (4-0)+(4-2) + (6-4) + (8-4)

 there are two parts, the ones before and after the 4th element.
 
 before =  (4-0)+(4-2) , 
 after = (6-4) + (8-4)
 
 let's look at *before* first.
 before = (4-0) + (4-2) = 4 * 2 - (0+2)
 we can see that (0+2) is the accumulate from the first element to the second. or to say, the indices summation before the ith element (here i is 4). 
 
 after = (6-4) + (8-4) = (6+8) - 4 * 2.
 here 6+8 is the sum from (i+1)th to the last. 




```csharp
public class Solution
{
    public long[] GetDistances(int[] arr)
    {
        int n = arr.Length;
        Dictionary<int, List<int>> positionMap = new Dictionary<int, List<int>>();
        for (int i = 0; i < n; i++)
        {
            if (!positionMap.ContainsKey(arr[i]))
            {
                positionMap[arr[i]] = new List<int>();
            }

            positionMap[arr[i]].Add(i);
        }

        long[] ans = new long[n];
        foreach(List<int> list in positionMap.Values)
        {
            long[] preSums = new long[list.Count + 1];
            for(int i = 0; i < list.Count; i++)
            {
                preSums[i + 1] = preSums[i] + list[i];
            }

            for(int i = 0; i < list.Count; i++)
            {
                long v = list[i];
                // pre
                ans[v] = v * (i+1) - preSums[i+1];
                // post
                ans[v] += preSums[list.Count] - preSums[i] - v * (list.Count - i);
            }
        }

        return ans;
    }
}
```