# c# clear

**Author:** tatar1nro
**Votes:** 1
**Link:** [https://leetcode.com/problems/furthest-point-from-origin/solutions/4014045/](https://leetcode.com/problems/furthest-point-from-origin/solutions/4014045/)

---

# Code
```
public class Solution 
{
    public int FurthestDistanceFromOrigin(string moves)
    {
        var data = moves.ToCharArray();
        var lenght = data.Length;
        var sum = 0;
        var free = 0;
        for (var i = 0; i < lenght; ++i)
        {
            var character = data[i];
            if (character == 'L')
            {
                ++sum;
            }
            else if (character == 'R')
            {
                --sum;
            }
            else
            {
                ++free;
            }
        }

        return Math.Abs(sum) + free;
    }
}
```