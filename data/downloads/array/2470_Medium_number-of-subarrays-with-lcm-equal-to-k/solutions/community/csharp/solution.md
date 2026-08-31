# C# - Passes 100%

**Author:** aserrabi
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/5291294/](https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/5291294/)

---

# Approach
1. Initialize a counter `result` to zero.
2. Use a nested loop to iterate through each possible subarray.
   - Outer loop starts at each element in the array.
   - Inner loop extends the subarray one element at a time.
3. Calculate the LCM of the current subarray.
4. If the LCM equals \\( k \\), increment the result counter.
5. Break the inner loop if the LCM exceeds \\( k \\) since extending the subarray further would only increase the LCM.

# Complexity
- Time complexity: $$O(n^2 * log(max(a_i)) $$
- Space complexity: $$O(1)$$

# Code
```
public class Solution {
    public int SubarrayLCM(int[] nums, int k) {
        var result = 0;

        for (int i = 0; i < nums.Length; i++)
        {
            var currentLcm = nums[i];

            if (currentLcm == k)
            {
                result++;
            }

            for (int j = i+1; j < nums.Length; j++)
            {
                var a = currentLcm;
                var b = nums[j];

                currentLcm = lcm(a, b);

                if (currentLcm > k)
                {
                    break;
                }

                result += (currentLcm == k) ? 1 : 0;
            }
        }

        return result;
    }

    private static int lcm(int a, int b)
    {
        return (a * b) / gcd(a, b);
    }

    private static int gcd(int a, int b)
    {
        if (a == 0)
        {
            return b;
        }

        return gcd(b % a, a);
    }
}
```