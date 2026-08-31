# C# discard random coordinate not in circle | 189ms 100%

**Author:** Legon2k
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-random-point-in-a-circle/solutions/4071138/](https://leetcode.com/problems/generate-random-point-in-a-circle/solutions/4071138/)

---

# Code
```
public class Solution 
{
    Random rnd = new ();
    double radius;
    double radiusPow2;
    double x_center; 
    double y_center;

    public Solution(double radius, double x_center, double y_center) {
        this.radius = radius;
        this.radiusPow2 = radius * radius;
        this.x_center = x_center;
        this.y_center = y_center;
    }
    
    public double[] RandPoint() 
    {
        var (a1, a2) = (rnd.NextDouble() * radius, rnd.NextDouble() * radius);

        if(a1*a1 + a2*a2 > radiusPow2)
            return this.RandPoint();

        return rnd.Next(4) switch
        {
            0 => new double[] { x_center + a1, y_center + a2 },
            1 => new double[] { x_center + a1, y_center - a2 },
            2 => new double[] { x_center - a1, y_center - a2 },
            _ => new double[] { x_center - a1, y_center + a2 },
        };
    }
}
```