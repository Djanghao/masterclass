# C# Two Pointers With Explanation

**Author:** YuLinChao
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4153006/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4153006/)

---

# Approach
First, by reading the description, we know array can be sorted and will not affect the result, and not expecting any duplicated element.
By these rules, we know the numbers in nums are continous and unique.

To make the actions as less as possible, we wish the interval formed by left and right(left and right as the boundary of the interval ) as big as possible, but the area size should smaller than nums.Length.  

Take [1,2,3,5,6] as the case.
[1,2,3,5] we will take 1,5 as the left and right, due to the length of the array is 5, 5 - 1 < 5, so this is valid interval, with this left and right, we only need to take one more element out of this interval to fuifll the rule.

[1,2,3,5,6] we can take 1,5 or 2,6 as the left and right, 5 - 1 or 2 -6 both less than 5.
1,6 is not a valid boundary of the interval, due to 6 - 1 = 5 and 5 is not less than 5.

So after we get the biggest interval to make the operation to be minimum, the needed operation is the total elements(nums.Length) - elements selected(fulfill the interval, 1,2,3,5).

Keep iterate all the values in the unique sorted array and find out the minimum value, that will be the answer.

# Code
```
public class Solution {
    public int MinOperations(int[] nums) {
        Array.Sort(nums);
        var st = new HashSet<int>(nums).ToArray();
        var n = nums.Length;
        var ans = n  - 1;
        var right = 0;
        for(var left = 0; left < st.Length; left++){
            while(right < st.Length && (st[right] - st[left]) < n){
                right++;
            }
            var size = right - left;
            var times = n - size;
            ans = Math.Min(ans, times);
        }
        return ans;
    }
}
```