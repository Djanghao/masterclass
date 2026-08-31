# Prefix sum approach

**Author:** mxvlshn
**Votes:** 3
**Link:** [https://leetcode.com/problems/range-sum-query-immutable/solutions/5324581/](https://leetcode.com/problems/range-sum-query-immutable/solutions/5324581/)

---

# Approach
Prefix sum approach

# Complexity
- Time complexity: O(2n) -> O(n)

- Space complexity: O(n) prefixSum collection of n length

# Code
```
public class NumArray {
    private readonly int[] _prefixSum;
    
    public NumArray(int[] nums) {
        _prefixSum = new int[nums.Length];
        for (int i = 0; i < nums.Length; i++)
        {
            _prefixSum[i] = i == 0 ? nums[i] : _prefixSum[i-1] + nums[i];
        }
    }
    
    public int SumRange(int left, int right) {
        if (left == 0)
        {
            return _prefixSum[right];
        }

        return _prefixSum[right] - _prefixSum[left-1];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.SumRange(left,right);
 */
```