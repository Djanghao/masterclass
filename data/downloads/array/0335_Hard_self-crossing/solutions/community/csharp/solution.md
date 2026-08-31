# Solution O(N)

**Author:** bogdanonline444
**Votes:** 0
**Link:** [https://leetcode.com/problems/self-crossing/solutions/6026325/](https://leetcode.com/problems/self-crossing/solutions/6026325/)

---


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public bool IsSelfCrossing(int[] distance) {
        int n = distance.Length;
        for (int i = 3; i < n; i++) 
        {
            if (distance[i] >= distance[i - 2] && distance[i - 1] <= distance[i - 3]) 
            {
                return true;
            }
            if (i >= 4 && distance[i - 1] == distance[i - 3]) 
            {
                if(distance[i] + distance[i - 4] >= distance[i - 2])
                {
                    return true;
                }
            }
            if (i >= 5 && distance[i - 2] >= distance[i - 4]) 
            {
                if(distance[i] + distance[i - 4] >= distance[i - 2])
                {
                    if(distance[i - 1] <= distance[i - 3])
                    {
                        if(distance[i - 1] + distance[i - 5] >= distance[i - 3])
                        {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
}
```
![89f26eaf70fa927a79d4793441425859.jpg](./images/0.jpeg)
