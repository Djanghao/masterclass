# Track previous max energy boost by DP

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5676746/](https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5676746/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```csharp []
public class Solution {
    public long MaxEnergyBoost(int[] energyDrinkA, int[] energyDrinkB) {
        int len = energyDrinkA.Length;
        List<long> listA = new List<long>(), listB = new List<long>();
       
        for(int i = 0; i < len; i++)
        {
            if(i < 2)
            {
                listA.Add((listA.Count == 0 ? 0 : listA[0]) + energyDrinkA[i]);
                listB.Add((listB.Count == 0 ? 0 : listB[0]) + energyDrinkB[i]);
            }
            else
            {
                listA.Add(energyDrinkA[i] + Math.Max(listA[1], listB[0]));
                listB.Add(energyDrinkB[i] + Math.Max(listB[1], listA[0]));

                listA.RemoveAt(0);
                listB.RemoveAt(0);
            }
        }

        return Math.Max(listA[1], listB[1]);
    }
}
```