# C# Priority Queue

**Author:** codeme0720
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-frequent-ids/solutions/4956668/](https://leetcode.com/problems/most-frequent-ids/solutions/4956668/)

---


# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public long[] MostFrequentIDs(int[] nums, int[] freq)
    {
        List<long> ans = new List<long>();
        int n = nums.Length;
        PriorityQueue<long,long> pq = new PriorityQueue<long,long>(Comparer<long>.Create((x,y)=>y.CompareTo(x)));
        Dictionary<long,long> dict = new Dictionary<long,long>();

        for(int i=0;i<n;i++)
        {
            if(dict.ContainsKey(nums[i]))
                dict[nums[i]] += freq[i];
            else
                dict[nums[i]] = freq[i];

            pq.Enqueue(nums[i],dict[nums[i]]);

            while(true)
            {
                pq.TryPeek(out long val, out long priorityval);
                if(priorityval == dict[val])
                {
                    ans.Add(priorityval);
                    break;
                }
                else
                    pq.Dequeue();
            }
        }

        return ans.ToArray();
    }
}
```