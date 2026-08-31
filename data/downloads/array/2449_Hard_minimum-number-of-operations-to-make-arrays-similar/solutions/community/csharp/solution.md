# There just wasn't a solution with a C# tag

**Author:** vitalywashere
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/solutions/3542982/](https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/solutions/3542982/)

---

# Code
```
public class Solution {
    public long MakeSimilar(int[] nums, int[] target) {
        var numsEven = new List<int>();      
        var numsOdd = new List<int>();
        var targetEven = new List<int>();
        var targetOdd = new List<int>();
        for (var i = 0; i < nums.Length; i++)
        {
            var n = nums[i];
            if (n % 2 == 0)
                numsEven.Add(n);
            else
                numsOdd.Add(n);
            var t = target[i];
            if (t % 2 == 0)
                targetEven.Add(t);
            else
                targetOdd.Add(t);
        }
        numsEven.Sort();
        numsOdd.Sort();
        targetEven.Sort();
        targetOdd.Sort();
        long count = 0;
        for (var i = 0; i < numsEven.Count; i++)
            count += Math.Abs(numsEven[i] - targetEven[i]);
        for (var i = 0; i < numsOdd.Count; i++)
            count += Math.Abs(numsOdd[i] - targetOdd[i]);
        return count / 4;
    }
}
```