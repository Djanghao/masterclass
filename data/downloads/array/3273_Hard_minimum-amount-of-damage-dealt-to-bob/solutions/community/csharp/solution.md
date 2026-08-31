# Easy C# solution with priority

**Author:** Di828
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-amount-of-damage-dealt-to-bob/solutions/5716042/](https://leetcode.com/problems/minimum-amount-of-damage-dealt-to-bob/solutions/5716042/)

---


# Complexity
- Time complexity: O(n log(n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {      
   public long MinDamage(int power, int[] damage, int[] health)
{
    var enemies = new List<Enemy>();
    long totalDamage = 0;
    long result = 0;
    for (int i = 0; i < damage.Length; i++) 
    {
        enemies.Add(new Enemy() {
            Damage = damage[i], 
            Health = health[i], 
            Priority = (double)damage[i] / ((long)Math.Ceiling((double)health[i] / power)),
            HitsNeeded = (int)Math.Ceiling((double)health[i] / power)
        });

        totalDamage += damage[i];
    }

    enemies = enemies.OrderByDescending(x => x.Priority).ToList();

    foreach (var enemy in enemies) 
    {
        result += totalDamage * enemy.HitsNeeded;
        totalDamage -= enemy.Damage;
    }

    return result;
}
        public class Enemy 
        {
            public long Damage;
            public long Health;
            public double Priority;
            public long HitsNeeded;
        }
}
```