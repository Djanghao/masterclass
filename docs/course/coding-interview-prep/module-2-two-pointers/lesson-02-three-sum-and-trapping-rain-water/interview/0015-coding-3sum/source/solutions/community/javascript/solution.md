# 【Video】Two Pointer Solution

**Author:** niits
**Votes:** 1045
**Link:** [https://leetcode.com/problems/3sum/solutions/5055810/](https://leetcode.com/problems/3sum/solutions/5055810/)

---

# Intuition
Using two pointers

---

# Solution Video

https://youtu.be/9HDVSJn3obo

\u25A0 Timeline
`0:04` Understanding a strategy to solve 3Sum
`2:05` Demonstrate how to solve 3Sum
`7:01` Coding
`9:49` Time Complexity and Space Complexity

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 4,509
Thank you for your support!

---

# Approach

I think it's tough to manage 3 indices at the same time, so my strategy is to fix `i`.

```
Input: nums = [-1,0,1,2,-1,-4]
```
```
[-1,0,1,2,-1,-4]
  i
```
We fix `i` at index `0` at first. Then we have other two indices `j` and `k`. `j` starts from `i + 1` and `k` starts from the last index.

```
[-1,0,1,2,-1,-4]
  i j         k
```
Basically, we calculate a total of 3 numbers, then if the total is `0`, that is one of target triplets.

But there are many cases where the total is not `0`. In that case we should move `j` or `k` to the next, because we fix `i` at index `0` at first. All calculations in a loop this time, we must use `i` number.

---

Question

How can we decide and move `j` or `k` to the next index?

---

My strategy is to sort input array, so that we can decide which index we should move.

```
[-1,0,1,2,-1,-4]
\u2193
[-4,-1,-1,0,1,2]
  i  j        k
```

---

\u2B50\uFE0F Points

- Why do we need to sort input array?

That's because if the total is greater than `0`, we want small total next time. In that case, we should move `k` to the next because input array is sorted, we are sure that if `k` move to left index, we will get small total compared with the current total.

On the other hand, if the total is smaller than `0`, we want big total next time. In that case we should move `j` to the right index to get big total.

---

Let's see one by one.

```
[-4,-1,-1,0,1,2]
  i  j        k

nums[i] + nums[j] + nums[k] = -3
```
We should move `j` to the next.

I'll speed up
```
[-4,-1,-1,0,1,2]
  i     j     k

nums[i] + nums[j] + nums[k] = -3

j moves to the next

[-4,-1,-1,0,1,2]
  i       j   k

nums[i] + nums[j] + nums[k] = -2

j moves to the next

[-4,-1,-1,0,1,2]
  i         j k

nums[i] + nums[j] + nums[k] = -1

j moves to the next

[-4,-1,-1,0,1,2]
  i           k
              j
```
Now `j` and `k` are the same index, so we stop iteration. For this question, we have to find all triplets.

Next, we fix `i` at index `1`. `j` starts from `i + 1` and `k` starts from the last index.

```
[-4,-1,-1,0,1,2]
     i  j     k
```
We do the same thing.

```
[-4,-1,-1,0,1,2]
     i  j     k

nums[i] + nums[j] + nums[k] = 0
```
We found total `0` and 3 indices are different, so current combination meets condition the description says. That is one of answers.

```
res = [[-1,-1,2]]
```
When we found the target triplet, there are several ways to move pointers. I think easiest way is to move `j` once.

But there is problem. What if the next number is the same as current number like this.

```
[-4,-1,-1,-1,1,2]
     i    j   k

I changed 0 to -1 at index 3.
```
In this case, we found [-1,-1,2] again. It's the target triplet but the description says "No duplicate".

To avoid this, when we found one of the target triplets, we move `j` once but we check the number after we move `j`. If the number is the same previous number, we continue to move `j` until we find differnt number, so that we can avoid duplicate combination.


---

\u2B50\uFE0F Points

Move `j` until we find different number when we find one of the target triplets.

---

Let's go back to main topic.

```
[-4,-1,-1,0,1,2]
     i    j   k

nums[i] + nums[j] + nums[k] = 1
```
Now the total is greater than `0`. We should move `k` to the left index to get small total.

```
[-4,-1,-1,0,1,2]
     i    j k

nums[i] + nums[j] + nums[k] = 0
```
We found a new triplets that meets the conditions.

```
res = [[-1,-1,2], [-1,0,1]]
```
This example is example 1 in the description. It says those two combinations are return value, so I stop explanation.

After that, we do the same thing. `j` and `k` are the same index, so we fix `i` at index `2`. `j` starts from `i + 1` and `k` starts from the last index.

```
[-4,-1,-1,0,1,2]
        i j   k
```

In the end,

```
return [[-1,-1,2], [-1,0,1]]
```

Easy!\uD83D\uDE04
Let's see solution codes and step by step algorithm.

---

This question is similar to Two Sum \u2161 question.

https://youtu.be/fj5ruWT6B5U

---

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
Depends on language you use. In python, sorting algorithm use Timsort which uses $$O(n)$$ space.


```python []
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()

        for i in range(len(nums)):
            if i > 0 and nums[i] == nums[i-1]:
                continue
            
            j = i + 1
            k = len(nums) - 1

            while j < k:
                total = nums[i] + nums[j] + nums[k]

                if total > 0:
                    k -= 1
                elif total < 0:
                    j += 1
                else:
                    res.append([nums[i], nums[j], nums[k]])
                    j += 1

                    while nums[j] == nums[j-1] and j < k:
                        j += 1
        
        return res
```
```javascript []
var threeSum = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let total = nums[i] + nums[j] + nums[k];

            if (total > 0) {
                k--;
            } else if (total < 0) {
                j++;
            } else {
                res.push([nums[i], nums[j], nums[k]]);
                j++;

                while (nums[j] === nums[j-1] && j < k) {
                    j++;
                }
            }
        }
    }
    return res;    
};
```
```java []
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        Arrays.sort(nums);

        for (int i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i-1]) {
                continue;
            }
            
            int j = i + 1;
            int k = nums.length - 1;

            while (j < k) {
                int total = nums[i] + nums[j] + nums[k];

                if (total > 0) {
                    k--;
                } else if (total < 0) {
                    j++;
                } else {
                    res.add(Arrays.asList(nums[i], nums[j], nums[k]));
                    j++;

                    while (nums[j] == nums[j-1] && j < k) {
                        j++;
                    }
                }
            }
        }
        return res;        
    }
}
```
```C++ []
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> res;
        sort(nums.begin(), nums.end());

        for (int i = 0; i < nums.size(); i++) {
            if (i > 0 && nums[i] == nums[i-1]) {
                continue;
            }
            
            int j = i + 1;
            int k = nums.size() - 1;

            while (j < k) {
                int total = nums[i] + nums[j] + nums[k];

                if (total > 0) {
                    k--;
                } else if (total < 0) {
                    j++;
                } else {
                    res.push_back({nums[i], nums[j], nums[k]});
                    j++;

                    while (nums[j] == nums[j-1] && j < k) {
                        j++;
                    }
                }
            }
        }
        return res;        
    }
};
```

# Step by Step Algorithm

1. **Initialize Result List**:
   - Create an empty list `res` to store the triplets whose sum is zero.
     ```python
     res = []
     ```

2. **Sort the Input Array**:
   - Sort the input array `nums` in non-decreasing order. Sorting the array helps in avoiding duplicate triplets.
     ```python
     nums.sort()
     ```

3. **Iterate Through the Array**:
   - Iterate through each element in the sorted array `nums`.
     ```python
     for i in range(len(nums)):
     ```

4. **Skip Duplicate Elements**:
   - Check if the current element is a duplicate of the previous element and skip it if it is.
     ```python
     if i > 0 and nums[i] == nums[i-1]:
         continue
     ```

5. **Initialize Pointers**:
   - Initialize two pointers `j` and `k` to point to the elements next to the current element `i` and at the end of the array, respectively.
     ```python
     j = i + 1
     k = len(nums) - 1
     ```

6. **Two-Pointer Approach**:
   - Use a two-pointer approach with pointers `j` and `k` to find triplets whose sum equals zero.
     ```python
     while j < k:
     ```

7. **Calculate Total**:
   - Calculate the total sum of the current triplet.
     ```python
     total = nums[i] + nums[j] + nums[k]
     ```

8. **Adjust Pointers Based on Total**:
   - If the total sum is greater than zero, decrement the `k` pointer to decrease the total sum.
     ```python
     if total > 0:
         k -= 1
     ```
   - If the total sum is less than zero, increment the `j` pointer to increase the total sum.
     ```python
     elif total < 0:
         j += 1
     ```
   - If the total sum equals zero, add the triplet `[nums[i], nums[j], nums[k]]` to the result list `res`.
     ```python
     else:
         res.append([nums[i], nums[j], nums[k]])
     ```

9. **Handle Duplicate Triplets**:
   - Increment the `j` pointer to skip any duplicate elements.
     ```python
     j += 1
     while nums[j] == nums[j-1] and j < k:
         j += 1
     ```

10. **Return Result**:
   - Return the list `res` containing all the unique triplets whose sum is zero.
     ```python
     return res
     ```

This algorithm efficiently finds all unique triplets in the given array `nums` whose sum equals zero using a two-pointer approach. It avoids duplicate triplets by skipping duplicate elements during traversal.

---

Thank you for reading my post.

## \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

##  \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

### How to Use LeetCode Effectively - 3 steps to improve problem-solving techniques from beginner

https://youtu.be/bU_dXCOWHls
