# 🚀🚀( C# and JS ) Solution || Iterative || Fast || Simple || Intuitive || 100% Faster

**Author:** Mohamed_Elfar
**Votes:** 5
**Link:** [https://leetcode.com/problems/summary-ranges/solutions/1807770/](https://leetcode.com/problems/summary-ranges/solutions/1807770/)

---

```
public class Solution {
        public IList<string> SummaryRanges(int[] nums)
        {
            var result = new List<string>();
            for (int i = 0; i < nums.Length; i++)
            {
                int start = nums[i];
                while (i < nums.Length - 1 && nums[i + 1] - nums[i] == 1)
                {
                    i++;
                }
                if (start != nums[i])
                    result.Add($"{start}->{nums[i]}");
                else
                    result.Add($"{start}");
            }

            return result;
        }
}
```
trasnlate to js:
```
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let start = nums[i];
        while (i < nums.length - 1 && nums[i + 1] - nums[i] == 1) {
            i++;
        }
        if (start != nums[i])
		    result.push(`${start}->${nums[i]}`);
        else 
		    result.push(start.toString());
    }
    return result;
};

```