# C# using queue

**Author:** rahatsaini
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/4575096/](https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/4575096/)

---

# Intuition
Using Bfs to go though all possible combinations

# Approach
Keep calculating the oranges remaining by all possible combinations

# Complexity
- Time complexity:
O(3^n)

- Space complexity:
o(1)

# Code
```
public class Solution {
    public int MinDays(int n) {
        Queue<int> q = new();
        q.Enqueue(n);
        int result = 0;
        HashSet<int> visited = new HashSet<int>();
        while(q.Count > 0)   
        {
            int size = q.Count;
            
            for(int i=0; i<size; i++)
            {
                var leftOranges = q.Dequeue();
                if(visited.Contains(leftOranges))
                    continue;
                visited.Add(leftOranges);    
                if(leftOranges == 0)    
                    return result;
                int temp=0;
                
                if(leftOranges%3==0)
                {
                    var z = (2*(leftOranges/3));
                    temp = leftOranges - z;
                    q.Enqueue(temp); 
                }
                
                if(leftOranges%2 == 0)
                {   var  z =(leftOranges/2);
                    temp = leftOranges - z;
                    q.Enqueue(temp); 
                
                }
                    temp = leftOranges -1;
                q.Enqueue(temp); 

            }
            result++;
      }
      return result;
      }
}
```