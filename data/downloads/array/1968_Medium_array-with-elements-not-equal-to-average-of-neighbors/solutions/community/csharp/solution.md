# Super easy and fust solution C# O(N) beat 100%

**Author:** bogdanonline444
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/5946260/](https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/5946260/)

---


# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int[] RearrangeArray(int[] nums) {
        Array.Sort(nums);
        int n = nums.Length;
        int[] res = new int[n];
        int left = 0;
        int right = (n + 1) / 2;
        for(int i = 0; i < n; i++)
        {
            if(i % 2 == 0)
            {
                res[i] = nums[left];
                left++;
            }
            else
            {
                res[i] = nums[right];
                right++;
            }
        }
        return res;
    }
}
```
![89f26eaf70fa927a79d4793441425859.jpg](./images/0.jpeg)
