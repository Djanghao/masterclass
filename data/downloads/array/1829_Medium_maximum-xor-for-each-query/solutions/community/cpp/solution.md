# Easiest Solution | Beats 100% ✅| C++ | Java | Python3 | Javascript

**Author:** jay_singla
**Votes:** 123
**Link:** [https://leetcode.com/problems/maximum-xor-for-each-query/solutions/6021142/](https://leetcode.com/problems/maximum-xor-for-each-query/solutions/6021142/)

---

![Screenshot 2024-11-08 055144.png](./images/0.png)


# Intuition
1) Understanding the Goal:

- We are given a sorted array nums and an integer maximumBit.
- We need to find an integer k less than 2^maximumBit such that nums[0] XOR nums[1] XOR ... XOR nums[nums.length-1] XOR k is maximized for each query.
- After each query, we remove the last element of nums and repeat the process on the remaining array.
2) Maximizing XOR:

- To maximize XOR, we need to find a k that when XORed with the cumulative XOR of the array (xor_all) gives the largest possible result.
- The largest value that can be formed with maximumBit bits is 2^maximumBit - 1. This number has all bits set to 1 up to maximumBit (e.g., for maximumBit = 3, the number is 111 in binary or 7 in decimal).
- Thus, to maximize the XOR with xor_all, we can choose k to be xor_all XOR maxXor, where maxXor = 2^maximumBit - 1.
3) Reversing from the End:

- We\u2019re asked to start from the entire array and progressively "remove" the last element for each query.
- For each query, we adjust xor_all by XORing out the last element in the current nums array, giving us an updated cumulative XOR for the remaining array.

# Approach
1) Initialize Cumulative XOR and Maximum XOR Mask:

- First, compute the cumulative XOR of all elements in nums (xor_all). This gives us the XOR of the full array.
- Calculate maxXor = 2^maximumBit - 1, which will be used to find k in each query.
2) Compute Each Answer Iteratively:

- For each query, find k by computing xor_all XOR maxXor, which maximizes the XOR value for the current cumulative XOR.
- Append this result to ans.
- Update xor_all by XORing out the last element of the current nums, effectively removing it from consideration for the next query.
3) Return the Result in Reverse Order:

- Since we processed the array from end to beginning, ans will contain the answers in reverse order, so we return it as-is.

# Complexity
- Time complexity:
O(n) -> to traverse the array

- Space complexity:
O(1) but  O(n) if we consider space used for answer.

# Code
```cpp []
class Solution {
public:
    vector<int> getMaximumXor(vector<int>& nums, int maximumBit) {
        int n = nums.size(),xorr = nums[0],maxxorr = pow(2,maximumBit)-1;
        for(int i=1;i<n;i++)xorr ^= nums[i];
        vector<int>ans(n);
        for(int i=0;i<n;i++){
            ans[i] = xorr^maxxorr;
            xorr ^= nums[n-1-i];
        }
        return ans;
    }
};
```
```Java []
class Solution {
    public int[] getMaximumXor(int[] nums, int maximumBit) {
        int n = nums.length;
        int xorr = nums[0];
        int maxXor = (1 << maximumBit) - 1;

        for (int i = 1; i < n; i++) {
            xorr ^= nums[i];
        }

        int[] ans = new int[n];
        for (int i = 0; i < n; i++) {
            ans[i] = xorr ^ maxXor;
            xorr ^= nums[n - 1 - i];
        }

        return ans;
    }
}
```
```Python3 []
class Solution:
    def getMaximumXor(self, nums: List[int], maximumBit: int) -> List[int]:
        n = len(nums)
        xorr = nums[0]
        max_xor = (1 << maximumBit) - 1
        
        for i in range(1, n):
            xorr ^= nums[i]
        
        ans = []
        for i in range(n):
            ans.append(xorr ^ max_xor)
            xorr ^= nums[n - 1 - i]
        
        return ans

        
```
```Javascript []
/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
    const n = nums.length;
        let xorr = nums[0];
        const maxXor = (1 << maximumBit) - 1;

        for (let i = 1; i < n; i++) {
            xorr ^= nums[i];
        }

        const ans = [];
        for (let i = 0; i < n; i++) {
            ans.push(xorr ^ maxXor);
            xorr ^= nums[n - 1 - i];
        }

        return ans;
};
```
![LC.png](./images/1.png)
