# Efficient bitwise O(NlogK)

**Author:** david1121
**Votes:** 46
**Link:** [https://leetcode.com/problems/construct-the-minimum-bitwise-array-ii/solutions/5903709/](https://leetcode.com/problems/construct-the-minimum-bitwise-array-ii/solutions/5903709/)

---

# Intuition
I solved this problem by noticing a pattern in the given examples:

```
Input | Answer | Input | Answer
-------------------------------
2           -1      10
3            1      11       1
5            4     101     100
7            3     111      11
11           9    1011    1001
13          12    1101    1100
31          15   11111    1111
```

- If the binary ends in 01 (like 5 and 13), then the answer is to just subtract 1.
- If the binary consists of all 1s (like 7 and 31), the answer is to remove the leftmost 1.
- 11 is the only one that doesn't fit into the above. I noticed that the answer involves removing that 2nd 1 from the right (1011 -> 1001). And in general, the approach is to remove the leftmost 1 of the longest chain of 1s starting from the right. So for 11, we remove the 2nd 1 to make it 1001, because if we add a 1, it can be ORed back to 11:
```
   1001
OR 1010
   ----
   1011
```
**This holds true for all numbers** except for 2.

Some more examples:

`1111111` (127) would become `0111111` | `1000000` (63 | 64).
```
   0111111
OR 1000000
   -------
   1111111
```

`11101111` (239) would become `11100111` | `11101000` (231 | 232).
```
   11100111
OR 11101000
   --------
   11101111
```

`1110001` (113) would become `1110000` | `1110001` (112 | 113).
```
   1110000
OR 1110001
   -------
   1110001
```

# Approach
If the number is 2, add -1 to the answer array. Else, start checking the bits from the right. Move left everytime there is a 1. When the first 0 is found, remove the 1 to the right. This minimizes the number as much as possible.

# Code
```python3 []
class Solution:
    def minBitwiseArray(self, nums: List[int]) -> List[int]:
        ans = []

        for num in nums:
            if num == 2:
                ans.append(-1)
                continue

            num_copy = num
            count = 0

            # Count consecutive 1s from the right
            while num & 1 == 1:
                count += 1
                num >>= 1
            
            # [count]th bit is the position of the last 1, like 100111 (count = 3)
            # Subtract the bit                                     ^
            ans.append(num_copy - 2 ** (count-1))
        
        return ans
```
``` java []
class Solution {
    public int[] minBitwiseArray(List<Integer> nums) {
        int[] ans = new int[nums.size()];

        for (int i = 0; i < nums.size(); i++) {
            int num = nums.get(i);

            if (num == 2) {
                ans[i] = -1;
                continue;
            }

            int numCopy = num;
            int count = 0;

            // Count consecutive 1s from the right
            while ((num & 1) == 1) {
                count++;
                num >>= 1;
            }

            // [count]th bit is the position of the last 1, like 100111 (count = 3)
            // Subtract the bit                                     ^
            ans[i] = numCopy - (1 << (count - 1));
        }

        return ans;
    }
}
```

``` cpp []
class Solution {
public:
    vector<int> minBitwiseArray(vector<int>& nums) {
        vector<int> ans(nums.size());

        for (int i = 0; i < nums.size(); i++) {
            int num = nums[i];

            if (num == 2) {
                ans[i] = -1;
                continue;
            }

            int numCopy = num;
            int count = 0;

            // Count consecutive 1s from the right
            while ((num & 1) == 1) {
                count++;
                num >>= 1;
            }

            // [count]th bit is the position of the last 1, like 100111 (count = 3)
            // Subtract the bit                                     ^
            ans[i] = numCopy - (1 << (count - 1));
        }

        return ans;
    }
};

```
``` javascript []
var minBitwiseArray = function(nums) {
    let ans = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (num === 2) {
            ans[i] = -1;
            continue;
        }

        let numCopy = num;
        let count = 0;

        // Count consecutive 1s from the right
        while ((num & 1) === 1) {
            count++;
            num >>= 1;
        }

        // [count]th bit is the position of the last 1, like 100111 (count = 3)
        // Subtract the bit                                     ^
        ans[i] = numCopy - (1 << (count - 1));
    }

    return ans;
};

```

# Complexity
- Time complexity: $$O(NlogK)$$ where K is the largest number in `nums`
- Auxiliary space complexity: $$O(1)$$