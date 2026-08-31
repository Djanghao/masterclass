# C#| HashMap and Min Priority Queue

**Author:** shwetaja
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/5165041/](https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/5165041/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
1>Time to traverse the nums array and build HashMap=O(n)
Where n=Length of nums array
2>Time to traverse the HashMap and build the P.Q.
=O(n*log(2))

In worst case,every element of nums array will be same.So sum of digits for every number will be same.So, Hashmap will have only one entry.So, in this case outer for loop which traverses hashmap runs only one time and inner for loop will run n times.

Overall T.C.=O(n*log(2))


- Space complexity:
1>Space used by HashMap=O(n) Where n=Length of nums array
In worst case every number in nums array will be unique and HashMap may contain n entries
2>Space used by P.Q.=O(2)

Overall S.C.=O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MaximumSum(int[] nums) 
    {
     Dictionary<int,List<int>> map=new Dictionary<int,List<int>>();

     for(int i=0;i<nums.Length;i++)    
     {
        string str=nums[i].ToString();
        int sum=0;
        
        for(int j=0;j<str.Length;j++)
        {
            sum+=str[j]-'0';
        }
        
        if(map.ContainsKey(sum))
        {
            map[sum].Add(nums[i]);
        }
        else
        {
            map.Add(sum,new List<int>(){nums[i]});
        }
     }
    
     int ans=int.MinValue;
     foreach(KeyValuePair<int,List<int>> kvp in map)
     {
        List<int> lst=kvp.Value;
        if(lst.Count<=1)
        {
            continue;
        }
        
        PriorityQueue<int,int> pq=new PriorityQueue<int,int>();
        for(int i=0;i<lst.Count;i++)
        {
            pq.Enqueue(lst[i],lst[i]);
            if(pq.Count>2)
            {
                pq.Dequeue();
            }
        }
            int numi=pq.Dequeue();
            int numj=pq.Dequeue();
            ans=Math.Max(ans,numi+numj);
     }
        return ans==int.MinValue?-1:ans;
    }
}
```