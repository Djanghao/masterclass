# ⚡️C++ || TS || O(n log(mn)) time, O(1) space || without data structure

**Author:** xkatianx
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-deviation-in-array/solutions/3225646/](https://leetcode.com/problems/minimize-deviation-in-array/solutions/3225646/)

---


I see many solutions using a heap (or priority queue) and their time complexity is actually $O(n\\log(m)\\log(n))$ where $m$ is the size of `nums[i]`.
Here I'm going to share a theoretically faster solution.

# Intuition 
If our final array has only even numbers, we can always divide them by 2 to also half the deviation. Thus, our final array always has an odd number. (Though not in our test cases, there is another way to deal with arrays that contain 0.)
Assuming $x$ is an odd number in our final array, there will not be any even numbers $\\geq 2x$ in our final array because we always divide them to have smaller deviation. By dividing those numbers in advanced, we reduce the time complexity from $O(\\log(m)\\log(n))$ to $O(\\log(m))$. 
The rest is just like other heap solutions, but now we are sure to have $O(n)$ iterations rather than $O(n \\log(m))$ because we have $x$ and every number is $<2x$.

# Complexity
- Time complexity: $O(n\\log(mn))$

- Space complexity: $O(1)$

(assuming heap sort)

# Code
```C++ []
class Solution {
public:
    int minimumDeviation(vector<int>& nums) {
        // Step 1: shift right until odd and find the maximum (simulation)
        int maxOdd = 0;
        for (int n : nums) {
            while ((n & 1) == 0) n >>= 1;
            if (n > maxOdd) maxOdd = n;
        }

        // Step 2: shift left every odd nums
        // Step 3: shift right until it will be less than {maxOdd}
        for (int i = 0; i < nums.size(); i++) {
            if ((nums[i] & 1)) nums[i] <<= 1;        
            while ((nums[i] & 1) == 0) {
                if (nums[i] >> 1 < maxOdd) break;
                nums[i] >>= 1;
            }
        }

        // Step 4: sort
        std::sort(nums.begin(), nums.end());
        
        // Step 5: brute force every possible answer (only shift right)
        int i = nums.size() - 1;
        int ans = nums[i] - nums[0];
        while (1) {
            int max = nums[i--];
            if (max & 1) break;
            max >>= 1;
            int min = nums[0] < max ? nums[0] : max;
            int delta = nums[i] - min;
            if (delta < ans) ans = delta;
        }    
        return ans;
    }
};
```
```typescript []
function minimumDeviation (nums: number[]): number {
    let maxOdd = 0
    nums.forEach(v => {
        while ((v & 1) === 0) v >>= 1
        maxOdd = Math.max(v, maxOdd)
    })
    nums.forEach((v, i) => {
        if ((nums[i] & 1) === 1) nums[i] <<= 1
        while ((nums[i] & 1) === 0) {
            if (nums[i] >> 1 < maxOdd) break 
            nums[i] >>= 1
        }
    })
    nums.sort((a, b) => a - b)
    let ans = nums.at(-1) - nums.at(0)
    while (true) {
        const max = nums.pop()
        if ((max & 1) === 1) break
        const min = Math.min(nums.at(0), max >> 1)
        ans = Math.min(ans, nums.at(-1) - min)
    }    
    return ans
}
```