# C# simple solution plus 1-liner Linq bonus | 70ms 100%

**Author:** Legon2k
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/3072049/](https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/3072049/)

---

More intuitive for experience diff (code optimized below)
```
public class Solution {
    public int MinNumberOfHours(
        int initialEnergy, int initialExperience, int[] energy, int[] experience) 
    {
        var hours = Math.Max(0, energy.Sum()+1-initialEnergy);  // extra energy

        foreach(var current in experience)
        {
            var diff = initialExperience - current;

            diff = diff > 0 ? 0 : 1 - diff;

            hours += diff;

            initialExperience += diff + current;
        }

        return hours;
    }
}
```
with some refactoring for diff
```
public class Solution {
    public int MinNumberOfHours(
        int initialEnergy, int initialExperience, int[] energy, int[] experience) 
    {
        var hours = Math.Max(0, energy.Sum()+1-initialEnergy);  // extra energy

        foreach(var current in experience)
        {
            var diff = 1 - Math.Min(1, initialExperience-current);

            hours += diff;

            initialExperience += diff + current;
        }

        return hours;
    }
}
```
# "1-liner" with Linq
(Not exactly pure 1-liner. Maybe Linq's guru could turn it to true 1-liner)
```
public class Solution {
    public int MinNumberOfHours(
        int initialEnergy, int initialExperience, 
        int[] energy, int[] experience) 

    => Math.Max(0, energy.Sum()+1-initialEnergy)
      + experience.Sum(exp =>
        {
            var diff = 1 - Math.Min(1, initialExperience - exp);

            initialExperience += diff + exp;

            return diff;
        });
}
```
This is like true 1-liner if re-use optional diff=0 parameter in method's singnature
```
public class Solution {
    public int MinNumberOfHours(
        int initialEnergy, int initialExperience, 
        int[] energy, int[] experience, int diff = 0) 

    => Math.Max(0, energy.Sum()+1-initialEnergy)
      + experience.Sum(exp =>
         new {
            diffForSum = (diff = 1-Math.Min(1, initialExperience - exp)),
            _ = (initialExperience += diff + exp)
        }.diffForSum);
}
```