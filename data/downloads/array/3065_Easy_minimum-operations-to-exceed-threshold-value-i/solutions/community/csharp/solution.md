# very basic, pathetic

**Author:** beqdua
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/4889812/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/4889812/)

---

As we iterate through the array $nums$, we can keep track by incrementing the counter $res$ whenever the value of the $i^{th}$ element in $nums$ is less than the integer $k$.

#### Complexity
- Time complexity:
The time complexity of this ```MinOperations``` function is $O(n)$, where $n$ is the length of the $nums$ array. This is because it iterates through the array once, performing a constant number of operations (in this case, just one comparison and potentially one increment) for each element.

- Space complexity:
The space complexity is $O(1)$, because the algorithm uses a constant amount of extra space, regardless of the size of the $nums$ array. This is because it only declares a single integer variable $res$ to store the result, and its size does not depend on the size of the $nums$ array.


```
public class Solution {
    public int MinOperations(int[] nums, int k) {

        int res = 0;

        for (int i=0; i<nums.Length; i++)
        {
            if (nums[i] < k)
            {
                res++;
            }
        }

        return res;
    }
}
```