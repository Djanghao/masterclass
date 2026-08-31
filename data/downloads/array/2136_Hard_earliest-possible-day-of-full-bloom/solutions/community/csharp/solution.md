# c# intuitive solution - sort array

**Author:** l87freeman
**Votes:** 1
**Link:** [https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/2754739/](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/2754739/)

---

# Intuition
intuitive solution - plant items with longest blooming firts  

# Approach
Sort array with preserving indices

# Complexity
- Time complexity:
$$O(n*log(n))$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution {
    public int EarliestFullBloom(int[] plantTime, int[] growTime) {
        var len = plantTime.Length;
        var plantGrow = new (int pl, int gr)[len];
        for(var i = 0; i < len; i++){
            plantGrow[i] = (plantTime[i], growTime[i]);
        }

        Array.Sort(plantGrow, (f, s) => s.gr - f.gr);

        var bloom = 0;
        var plant = 0;
        foreach(var (pl, gr) in plantGrow){
            plant += pl;
            bloom = Math.Max(bloom, plant + gr);
        }
        return bloom;
    }
}
```