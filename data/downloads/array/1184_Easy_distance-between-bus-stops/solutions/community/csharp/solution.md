# Easy solution

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/distance-between-bus-stops/solutions/5916184/](https://leetcode.com/problems/distance-between-bus-stops/solutions/5916184/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int DistanceBetweenBusStops(int[] distance, int start, int destination) {
        int curr=start;int sum=0;int min=0;
        while(curr!=destination)
        { 
            sum+=distance[curr++];
            curr%=distance.Length;
            Console.WriteLine(sum+"*"+curr);   
            if(curr==destination) break;              
        }
        curr=start;
        int sum1=0;
        while(curr!=destination)
        {
            curr--;
            if(curr<0)
            {
                curr+=distance.Length;
            }
            sum1+=distance[curr];            
            Console.WriteLine(sum1+"*"+curr); 
        }
        int res=Math.Min(sum,sum1);
        return res;
    }
}
```