# [Animated Video] Keep track of min and max product

**Author:** codeinmotion
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-product-subarray/solutions/6137444/](https://leetcode.com/problems/maximum-product-subarray/solutions/6137444/)

---

![Code In Motion Purple Transparent Background (2).png](./images/0.png)

# *CodeInMotion Resources*
## Every Leetcode Pattern You Need To Know
https://www.blog.codeinmotion.io/p/leetcode-patterns

## Blind 75 Animated Playlist
https://www.youtube.com/playlist?list=PLHm8nzcbp3_19DiTlDg8QYvR-hN5jzPCp

## Subscribe to YouTube
https://www.youtube.com/@CodeInMotion-IO?sub_confirmation=1

---
## Animated Video
https://youtu.be/eAYfkO9DmmE

## Intuition
The problem requires finding the maximum product subarray within a given array. This is tricky because of the impact of negative numbers: multiplying two negative numbers results in a positive product, which could contribute to the maximum product. To solve this, we must track both the minimum and maximum products as we iterate through the array. This ensures that we consider all possible combinations involving the current element.

## Approach
We use a dynamic programming approach, where we maintain two variables, `maxProduct` and `minProduct`, at each step. These represent the maximum and minimum products ending at the current index. We also track the global maximum product in `res`. For each number in the array, we calculate potential candidates for the next `maxProduct` and `minProduct` by considering the current number and its products with the previous `maxProduct` and `minProduct`. This allows us to handle the effect of negative numbers effectively.
$candidates = [num, num * minProduct, num * maxProduct]$
$maxProduct = max(candidates)$
$minProduct = min(candidates)$

## Example Walkthrough
Input: `[-3,1,-6,0,2,5]`

1. Initialize `minProduct = maxProduct = res = -3`.
2. Process `1`:  
   - Candidates: `[1, -3*1, -3*1] = [1, -3, -3]`
   - `minProduct = -3`, `maxProduct = 1`
   - Update `res = max(-3, 1) = 1`
3. Process `-6`:  
   - Candidates: `[-6, -3*-6, 1*-6] = [-6, 18, -6]`
   - `minProduct = -6`, `maxProduct = 18`
   - Update `res = max(1, 18) = 18`
4. Process `0`:  
   - Candidates: `[0, -6*0, 18*0] = [0, 0, 0]`
   - `minProduct = 0`, `maxProduct = 0`
   - `res = max(18, 0) = 18`
5. Process `2`:  
   - Candidates: `[2, 0*2, 0*2] = [2, 0, 0]`
   - `minProduct = 0`, `maxProduct = 2`
   - `res = max(18, 2) = 18`
6. Process `5`:  
   - Candidates: `[5, 0*5, 2*5] = [5, 0, 10]`
   - `minProduct = 0`, `maxProduct = 10`
   - `res = max(18, 10) = 18`

Output: `18`

## Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

## Code
```Python []
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        minProduct = maxProduct = res = nums[0]

        for num in nums[1:]:
            candidates = [num, num * minProduct, num * maxProduct]
            minProduct = min(candidates)
            maxProduct = max(candidates)
            res = max(res, maxProduct)
        
        return res
```
```Java []
class Solution {
    public int maxProduct(int[] nums) {
        int minProduct = nums[0], maxProduct = nums[0], res = nums[0];

        for (int i = 1; i < nums.length; i++) {
            int num = nums[i];
            int tempMax = Math.max(num, Math.max(num * maxProduct, num * minProduct));
            minProduct = Math.min(num, Math.min(num * maxProduct, num * minProduct));
            maxProduct = tempMax;
            res = Math.max(res, maxProduct);
        }

        return res;
    }
}
```
```JavaScript []
var maxProduct = function(nums) {
    let minProduct = nums[0], maxProduct = nums[0], res = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        let tempMax = Math.max(num, num * maxProduct, num * minProduct);
        minProduct = Math.min(num, num * maxProduct, num * minProduct);
        maxProduct = tempMax;
        res = Math.max(res, maxProduct);
    }

    return res;
};

```
```C# []
public class Solution {
    public int MaxProduct(int[] nums) {
        int minProduct = nums[0], maxProduct = nums[0], res = nums[0];

        for (int i = 1; i < nums.Length; i++) {
            int num = nums[i];
            int tempMax = Math.Max(num, Math.Max(num * maxProduct, num * minProduct));
            minProduct = Math.Min(num, Math.Min(num * maxProduct, num * minProduct));
            maxProduct = tempMax;
            res = Math.Max(res, maxProduct);
        }

        return res;
    }
}

```
```C++ []
class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int minProduct = nums[0], maxProduct = nums[0], res = nums[0];

        for (int i = 1; i < nums.size(); i++) {
            int num = nums[i];
            int tempMax = max(num, max(num * maxProduct, num * minProduct));
            minProduct = min(num, min(num * maxProduct, num * minProduct));
            maxProduct = tempMax;
            res = max(res, maxProduct);
        }

        return res;
    }
};

```
```Go []
func maxProduct(nums []int) int {
    minProduct, maxProduct, res := nums[0], nums[0], nums[0]

    for i := 1; i < len(nums); i++ {
        num := nums[i]
        tempMax := max(num, max(num*maxProduct, num*minProduct))
        minProduct = min(num, min(num*maxProduct, num*minProduct))
        maxProduct = tempMax
        res = max(res, maxProduct)
    }

    return res
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

```
### Please thumbs up on the bottom-left corner!<br>It motivates me to create more solutions and videos for you!
![thumbs up (1).png](./images/1.png)
