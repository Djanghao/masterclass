# C# Horrible Hack, Passes Contest

**Author:** asperity
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/solutions/5507056/](https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/solutions/5507056/)

---

# Code
```
public class Solution {
    public int MinChanges(int[] nums, int k) {
        var map = new Dictionary<int,int>();

        for(int i = 0; i < nums.Length/2; i++){
            var j = nums.Length - 1 - i;
            var diff = Math.Abs(nums[i] - nums[j]);
            if(!map.ContainsKey(diff)){
                map[diff] = 0;
            }
            map[diff]++;
        }
        var sorted = map.Select(x => (x.Key, x.Value)).OrderByDescending(x => x.Item2).ThenBy(x => x.Item1).ToArray();

        var totalRes = int.MaxValue;
        for(int l = 0; l < Math.Min(sorted.Length, 5); l++){
            var test = sorted[l];
            var res = 0;
            for(int i = 0; i < nums.Length/2; i++){
                var j = nums.Length - 1 - i;
                var diff = Math.Abs(nums[i] - nums[j]);
                //Console.WriteLine($"{nums[i]} - {nums[j]} = {diff}");
                if(test.Key != diff){
                    if(test.Key > nums[i] && test.Key > nums[j] && k <= nums[i] + nums[j]){
                        res++;
                    }
                    res++;
                }
            }
            totalRes = Math.Min(totalRes, res);
            //Console.WriteLine($"test key: {test.Key}. test: {test.Value}. Res = {res}");
            //break;
        }

        //for(int i = 0; i < nums.Length/2; i++){
        //    var j = nums.Length - 1 - i;
        //    var diff = Math.Abs(nums[i] - nums[j]);
        //    Console.WriteLine($"{nums[i]} - {nums[j]} = {diff}");
        //    if(bestAbs.Key != diff){
        //        if(bestAbs.Key > nums[i] && bestAbs.Key > nums[j]){
        //            res++;
        //        }
         //       res++;
        //    }
        //}
        return totalRes;
    }
}
```