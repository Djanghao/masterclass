# [Prefix Sum & Sliding Window Tutorial] Count Number of Nice Subarrays

**Author:** never_get_piped
**Votes:** 50
**Link:** [https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/5349310/](https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/5349310/)

---

**This post includes the solution for both using Prexis Sum and Sliding Window.**

**Topic** :  Prefix Sum

### Prefix Sum:
Prefix sum, also known as cumulative sum, is a technique used in computer science and mathematics to efficiently calculate the sum of a sequence of numbers. The prefix sum of a sequence `a[0], a[1] ... a[n - 1]` is another sequence` s[0], s[1] ... s[n - 1]` where each element `s[i]` represent the sum of the first i elements of the original array. (ChatGPT)

An example of prefix sum array:
`a = [1, 2, 3, 4, 5]` =>
`s = [1, 3, 6, 10, 15]`

Feel free to refer to these two tutorials on prefix sums and their applications:
* [Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/5281785/prefix-sum-number-theory-hash-table-tutorial-subarray-sums-divisible-by-k/)
* [Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/solutions/5278327/prefix-sum-number-theory-hash-table-tutorial-continuous-subarray-sum/)


___

# **Solution**:
To solve this problem, we may use the **prefix sum** skill.

We first take the modulus of each `nums[i]` by two for `0 <= i < len(nums)`. Odd numbers will result in `1`, while even numbers will result in `0`. The problem becomes finding the number of subarrays that sum to `k` with the modified `nums` array.

We begin by computing the prefix sum for each index `i` of the provided array `nums`. 

With the given example `nums = [1, 1, 2, 1, 1]` and `k = 3`, here is the running prefix sum : `p = [1, 2, 2, 3, 4]`. 

Note that the sum of a subarray `nums[i] + nums[i + 1] + ... nums[j]` can be represented as `p[j] - (i > 0 ? p[i - 1] : 0)`. 

If a subarray `nums[i] + nums[i + 1] + ... + nums[j]` equals k, it must satisfy:
* `p[j] - (i > 0 ? p[i - 1] : 0) == k`

We can utilize a **Hash Table** `prefixCount` to store our prefix sums frequency, where each key represents a prefix sum value and its corresponding occurrences. Using a native array will be faster in this case because it avoids the overhead of key hashing typically required by hash tables.

For the current running `j`, we find the number of `p[i]` satisfy the above condition. We increase the answer by `prefixCounnt[p[i]]`. 
In this context, `p[i]` is computed as `p[j] - k`, under the condition that `p[j] >= k`. We initialize `prefixCount[0]` to `1` to specifically address the scenario where `p[j]` equals `k`.


```c++ []
class Solution {
public:
    int numberOfSubarrays(vector<int>& nums, int k) {
        for(int i = 0; i < nums.size(); i++) {
            nums[i] %= 2;
        }
        
        vector<int> prefixCounnt(nums.size() + 1);
        prefixCounnt[0] = 1;
        int s = 0, ans = 0;
        for(int i = 0; i < nums.size(); i++) {
            s += nums[i];
            ans += (s >= k) ? prefixCounnt[s - k] : 0;
            prefixCounnt[s]++;
        }
        return ans;
    }
};
```
```java []
class Solution {
    public int numberOfSubarrays(int[] nums, int k) {
        for (int i = 0; i < nums.length; i++) {
            nums[i] %= 2;
        }
        
        int[] prefixCount = new int[nums.length + 1];
        prefixCount[0] = 1;
        int s = 0;
        int ans = 0;
        
        for (int num : nums) {
            s += num;
            if (s >= k) {
                ans += prefixCount[s - k];
            }
            prefixCount[s]++;
        }
        
        return ans;
    }
}
```
```python []
class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        for i in range(len(nums)):
            nums[i] %= 2
        
        prefix_count = [0] * (len(nums) + 1)
        prefix_count[0] = 1
        s = 0
        ans = 0
        
        for num in nums:
            s += num
            if s >= k:
                ans += prefix_count[s - k]
            prefix_count[s] += 1
        
        return ans
```
```Go []
func numberOfSubarrays(nums []int, k int) int {
    for i := 0; i < len(nums); i++ {
        nums[i] %= 2
    }
    
    prefixCount := make([]int, len(nums)+1)
    prefixCount[0] = 1
    s := 0
    ans := 0
    
    for _, num := range nums {
        s += num
        if s >= k {
            ans += prefixCount[s-k]
        }
        prefixCount[s]++
    }
    
    return ans
}
```
```PHP []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function numberOfSubarrays($nums, $k) {
        foreach ($nums as $key => $value) {
            $nums[$key] %= 2;
        }
        
        $prefixCount = array_fill(0, count($nums) + 1, 0);
        $prefixCount[0] = 1;
        $s = 0;
        $ans = 0;
        
        foreach ($nums as $num) {
            $s += $num;
            if ($s >= $k) {
                $ans += $prefixCount[$s - $k];
            }
            $prefixCount[$s]++;
        }
        
        return $ans;
    }
}
```
```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] %= 2;
    }
    
    let prefixCount = new Array(nums.length + 1).fill(0);
    prefixCount[0] = 1;
    let s = 0;
    let ans = 0;
    
    for (let num of nums) {
        s += num;
        if (s >= k) {
            ans += prefixCount[s - k];
        }
        prefixCount[s]++;
    }
    
    return ans;
};
```


**Complexity:**
* Time Complexity : `O(n)`.
* Space Complexity : `O(n)`.

<br/><br/>
___


**Topic** :  Sliding Window
Sliding Window problems are problems in which a fixed or variable-size window is moved through a data structure, typically an array or string, to solve problems efficiently based on continuous subsets of elements. This technique is used when we need to find subarrays or substrings according to a given set of conditions. (GFG Reference)

There are two types of sliding window:
- Fixed Size Sliding Window
- Dynamic Size Sliding Window

___

## Dynamic Size Sliding Window
A **Dynamic Size Sliding Window** refers to a window or subarray whose size is not fixed; instead, it dynamically expands or shrinks based on whether it meets specified conditions.

## Intuition Behind Dynamic Size Sliding Window
Generally, questions involving sliding window techniques often inquire about the number of subarrays or substrings that satisfy specific conditions.

By using brute force, we enumerate all subarrays or substrings and check whether each satisfies the condition. This enumeration typically results in at least `O(n^2)` time complexity.

For a fixed variable L, we check all subarrays [L : R] where L \u2264 R. The sliding window technique can be applied when all subarrays [L : M] satisfy the condition, and all subarrays with a left bound 'L' and any right bound [M + 1 : R] fail the condition.

Let's assume our current window has the range `[L : R]`. If the subarray `[L : R + 1]` satisfies the condition, we can continue expanding the right pointer `R` to find the maximum `M` for the current fixed `L`. If `[L : R + 1]` fails the condition, there is no need to check `[L : R + n]` because all subsequent subarrays will also fail the condition. Now it is time to expand the left pointer.

## Solution
First, it's essential to determine whether the sliding window technique is applicable. This method is suitable when:
```
For a fixed variable L, we check all subarrays [L : R] where L \u2264 R. The sliding window technique can be applied when all subarrays [L : M] satisfy the condition, and all subarrays with a left bound 'L' and any right bound [M + 1 : R] fail the condition.
```
This question satisfies these criteria, making it suitable for applying the sliding window technique. How? 

```
The number of subarrays with exactly  `k`  odd numbers equals the count of 
subarrays with at most `k` odd numbers minus the count of subarrays with at most `k - 1` odd numbers.
```

We can define an `atMost(k)` function to determine the number of subarrays that have at most `k` odd numbers. We initialized a left pointer `j` and a right pointer `i`, with `i` continuously moving to the right until the condition fails. We use `s` to count the number of odd numbers within our window. If `s > k`, it indicates that the window fails the condition, prompting us to move the left pointer and update `s` accordingly. 

At the same time, for the window `[j : i]` with the fixed right pointer `i`, there are `i - j + 1` subarrays that satisfy the condition.



<br/><br/>


```c++ []
class Solution {
public:
    int numberOfSubarrays(vector<int>& nums, int k) {
        return atMost(nums, k) - atMost(nums, k - 1); 
    }
    
    int atMost(vector<int>& nums, int k) {
        int s = 0, ans = 0;
        for(int i = 0, j = 0; i < nums.size(); i++) {
            s += nums[i] % 2;
            while(s > k) s -= (nums[j++] % 2);
            ans += (i - j + 1);
        }
        return ans;
    }
};
```
```java []
class Solution {
    public int numberOfSubarrays(int[] nums, int k) {
        return atMost(nums, k) - atMost(nums, k - 1);
    }
    
    private int atMost(int[] nums, int k) {
        int s = 0, ans = 0;
        for (int i = 0, j = 0; i < nums.length; i++) {
            s += nums[i] % 2;
            while (s > k) {
                s -= nums[j++] % 2;
            }
            ans += (i - j + 1);
        }
        return ans;
    }
}
```
```python []
class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        return self.atMost(nums, k) - self.atMost(nums, k - 1)
    
    def atMost(self, nums: List[int], k: int) -> int:
        s, ans = 0, 0
        j = 0
        for i in range(len(nums)):
            s += nums[i] % 2
            while s > k:
                s -= nums[j] % 2
                j += 1
            ans += (i - j + 1)
        return ans
```
```Go []
func atMost(nums []int, k int) int {
    s, ans := 0, 0
    j := 0
    for i := 0; i < len(nums); i++ {
        s += nums[i] % 2
        for s > k {
            s -= nums[j] % 2
            j++
        }
        ans += (i - j + 1)
    }
    return ans
}

func numberOfSubarrays(nums []int, k int) int {
    return atMost(nums, k) - atMost(nums, k-1)
}
```
```PHP []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function atMost($nums, $k) {
        $s = 0;
        $ans = 0;
        $j = 0;
        for ($i = 0; $i < count($nums); $i++) {
            $s += $nums[$i] % 2;
            while ($s > $k) {
                $s -= $nums[$j++] % 2;
            }
            $ans += ($i - $j + 1);
        }
        return $ans;
    }
    
    function numberOfSubarrays($nums, $k) {
        return $this->atMost($nums, $k) - $this->atMost($nums, $k - 1);
    }
}
```
```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    function atMost(nums, k) {
        let s = 0, ans = 0;
        let j = 0;
        for (let i = 0; i < nums.length; i++) {
            s += nums[i] % 2;
            while (s > k) {
                s -= nums[j++] % 2;
            }
            ans += (i - j + 1);
        }
        return ans;
    }
    
    return atMost(nums, k) - atMost(nums, k - 1);
};
```


**Complexity**:
* Time Complexity : `O(n)`
* Space Complexity : `O(1)`



**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**