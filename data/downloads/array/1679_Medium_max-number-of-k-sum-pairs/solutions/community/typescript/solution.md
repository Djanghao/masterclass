# Simplest way to solve and beat easily in Max Operations to Form Pairs with Given Sum

**Author:** patel_jaimin
**Votes:** 4
**Link:** [https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/6082458/](https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/6082458/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is asking to find how many operations we can perform by picking pairs of elements from an array such that their sum equals a target value `k`. The core idea is to efficiently find pairs using sorting and the two-pointer technique. By sorting the array first, we can reduce the problem to a linear scan using two pointers, one starting from the beginning and the other from the end. This helps in efficiently identifying pairs whose sum equals `k` without checking every possible pair.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Sorting the Array**: Start by sorting the array. Sorting allows us to use a two-pointer technique to find the pairs.

2. **Two-Pointer Technique**:

    - Initialize two pointers: one at the start of the array (`i = 0`) and the other at the end (`j = numsSize - 1`).
    - Calculate the sum of the elements at the two pointers (`nums[i] + nums[j]`).
    - If the sum is equal to `k`, increment the counter and move both pointers inward to check for the next potential pair.
    - If the sum is greater than `k`, move the right pointer left to decrease the sum.
    - If the sum is less than `k`, move the left pointer right to increase the sum.
    - Continue this process until the pointers cross (`i >= j`).
3. **Edge Handling**: The main edge case is when no such pairs exist, which is handled by the loop terminating when `i` and `j` cross.

4. **Final Answer**: Return the number of valid pairs (`ans`).

# Complexity
- Time complexity: $$O(n log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```c []
int compare(const void* a, const void* b) { return (*(int*)a - *(int*)b); }

int maxOperations(int* nums, int numsSize, int k) {
    qsort(nums, numsSize, sizeof(int), compare);

    int ans = 0;
    int i = 0, j = numsSize - 1;

    while (i < j) {
        int sum = nums[i] + nums[j];

        if (sum == k) {
            ans++;
            i++;
            j--;
        } else if (sum > k) {
            j--;
        } else {
            i++;
        }
    }

    return ans;
}
```
```cpp []
class Solution {
public:
    int maxOperations(vector<int>& nums, int k) {
        sort(nums.begin(),nums.end());
        int ans=0;
        int i=0,j=nums.size()-1;
        while(i<j){
            int temp = nums[i]+nums[j];
            if(temp==k){
                i++;
                j--;
                ans++;
            }else if(temp>k){
                j--;
            }else{
                i++;
            }
        }
        return ans;
    }
};
```
```csharp []
public class Solution {
    public int MaxOperations(int[] nums, int k) {
        Array.Sort(nums);
        int ans = 0;
        int i = 0, j = nums.Length - 1;
        while (i < j) {
            int temp = nums[i] + nums[j];
            if (temp == k) {
                i++;
                j--;
                ans++;
            } else if (temp > k) {
                j--;
            } else {
                i++;
            }
        }
        return ans;
    }
}
```
```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b);
    let ans = 0;
    let i = 0, j = nums.length - 1;
    while (i < j) {
        let temp = nums[i] + nums[j];
        if (temp === k) {
            i++;
            j--;
            ans++;
        } else if (temp > k) {
            j--;
        } else {
            i++;
        }
    }
    return ans;
};
```
```typescript []
function maxOperations(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let ans = 0;
    let i = 0, j = nums.length - 1;
    while (i < j) {
        let temp = nums[i] + nums[j];
        if (temp === k) {
            i++;
            j--;
            ans++;
        } else if (temp > k) {
            j--;
        } else {
            i++;
        }
    }
    return ans;
};
```
```java []
class Solution {
    public int maxOperations(int[] nums, int k) {
        Arrays.sort(nums);
        int ans = 0;
        int i = 0, j = nums.length - 1;
        while (i < j) {
            int temp = nums[i] + nums[j];
            if (temp == k) {
                i++;
                j--;
                ans++;
            } else if (temp > k) {
                j--;
            } else {
                i++;
            }
        }
        return ans;
    }
}
```
```Go []
func maxOperations(nums []int, k int) int {
    sort.Ints(nums)
    ans := 0
    i, j := 0, len(nums)-1
    for i < j {
        temp := nums[i] + nums[j]
        if temp == k {
            i++
            j--
            ans++
        } else if temp > k {
            j--
        } else {
            i++
        }
    }
    return ans
}
```
```python []
class Solution(object):
    def maxOperations(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        nums.sort()
        ans = 0
        i, j = 0, len(nums) - 1
        while i < j:
            temp = nums[i] + nums[j]
            if temp == k:
                i += 1
                j -= 1
                ans += 1
            elif temp > k:
                j -= 1
            else:
                i += 1
        return ans
```
```python3 []
class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        nums.sort()
        ans = 0
        i, j = 0, len(nums) - 1
        while i < j:
            temp = nums[i] + nums[j]
            if temp == k:
                i += 1
                j -= 1
                ans += 1
            elif temp > k:
                j -= 1
            else:
                i += 1
        return ans
```

![WhatsApp Image 2024-11-20 at 1.45.55 PM.jpeg](./images/0.jpeg)
