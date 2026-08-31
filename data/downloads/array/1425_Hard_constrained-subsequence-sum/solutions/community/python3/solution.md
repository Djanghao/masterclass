# 【Video】Give me 10 minutes - How we think about a solution - Python, JavaScript, Java, C++

**Author:** niits
**Votes:** 53
**Link:** [https://leetcode.com/problems/constrained-subsequence-sum/solutions/4191844/](https://leetcode.com/problems/constrained-subsequence-sum/solutions/4191844/)

---

# Intuition
having pairs (index and max value) in deque with decreasing order

---

# Solution Video

https://youtu.be/KuMkwvvesgo

\u25A0 Timeline of the video
`0:04` Explain a few basic idea
`3:21` What data we should put in deque?
`5:10` Demonstrate how it works
`13:27` Coding
`16:03` Time Complexity and Space Complexity

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 2,759
My initial goal is 10,000
Thank you for your support!

---


# Approach

## How we think about a solution

In this question, we need to find maximum sum of two numbers with the condition of `j - i <= k`.

Since we need to care about range and maximum value, seems like it's good idea to have both data as a pair.

---

\u2B50\uFE0F Points

We should have pairs of `index` and `maximum sum value`, because we have to care about them for this quesiton.

**Actually we can solve this question with holding only index numbers but it's the same as LeetCode tutorial. So I'll show you another way.**

---

You may face a difficulty now. The question is

---

\u25A0 Question

- How do we make sure this is maximum sum value in the `k` range?
---

Since we have range `k`, previous number might be part of the maximum sum value. So it's going to be tough if we move back and forth.

In this case, what data structure do you use?

---

\u2B50\uFE0F Points

My answer is to use `deque`.

One more important thing is that all data in `deque` are sorted in `decreasing order` of maximum sum value.

In other words, the first data(`deque[0]`) is always the maximum sum value in range `k` because all data are sorted in `decreasing order`.

---

- How can you keep range `k` in `deque`?

I believe your next question is how you can keep range `k` in `deque`? Acutually, this is a very simple.

Since we have pairs of index and maximum sum value, in every iteration, we check the index of the maximum sum values are valid or not with current index `i` - `k`.

If the index is equal to `i` - `k`, `pop` the maximum pair(= `deque[0]`) by `popleft()` because the index will be out of bounds in the next iteration, so no longer available. The reason why we use `deque` is that we can do this operation with `O(1)` instead of a list with.

Of course, you can use list to keep index and maximum sum value but when you pop data from `list[0]`, it's going to be time comsuming because all data will shift to the next places one by one. `deque` never happens like that.

- What data we should put in `deque`?

Before we discuss the question, Let me ask you one question.

we need to create the maximum sum sum, so question here is

---

\u25A0 Question

- How can we calculate the first number(`index 0`) in input array? Because so far only one number shows up.

---

This answer is also simple. This is addition, use `0` instead of `deque[0]`, because `0` doesn't affect any results of addition. In real solution code, use only number from `nums`.

Let's go back to the main question. Since we calcualte the first number with `nums[0] + 0`, so we don't need to have negative maximum sum value in `deque`, because we can say

```
Let's say we are now at index 3.

nums[3] + 0 > nums[3] + -1

0 and -1 are maximum sum value from `deque`.
```

---

\u2B50\uFE0F Points

We should have only positive maximum sum value in `deque`.

---

Let's see an example.

```
nums = [10,-2,-10,-5,20], k = 2
```
iterate through one by one.

```
index = 0 (= 10)
total = 10 (current number + max sum value of deque(= deque[0]))
res = 10 (this is return value)

if positive maximum sum? Yes
deque([(0, 10)]) \u2192 (index, maximum sum value)
```
```
index = 1 (= -2)
total = 8
res = 10 (because 10 > 8)

if positive maximum sum? Yes
deque([(0, 10), (1, 8)])
```
```
index = 2 (= -10)
total = 0
res = 10 (because 10 > 0)

if positive maximum sum? No
deque([(0, 10), (1, 8)])

if 0 == 2 - 2 (index of deque[0] == i - k)? Yes
(0, 10) will be out of bounds in the next iteration.

deque([(1, 8)])
```
```
index = 3  (= -5)
total = 3
res = 10 (because 10 > 3)

if positive maximum sum? Yes
deque([(1, 8), (3, 3)])

if 1 == 3 - 2 (index of deque[0] == i - k)? Yes
deque([(3, 3)])
```
```
index = 4 (= 20)
total = 23
res = 23 (because 10 < 23)

if positive maximum sum? Yes
deque([(3, 3), (4, 23)])
\u2193
keep decreasing order of maximum sum value, pop (3, 3)
because 23 is greater than 3
deque([(4, 23)])

if 4 == 4 - 2 (index of deque[0] == i - k)? ? No
deque([(4, 23)])
```

```
Output: 23
```

Thank you for reading! It took almost 2 hours to finish writing the post. lol
Let's see a real algorithm.

**Algorithm Overview:**

The algorithm aims to find the maximum sum of a non-empty subsequence of `nums` with a constraint that the difference between the indices of any 
 consecutive elements in the subsequence must not exceed `k`.

**Detailed Explanation:**

1. Initialize an empty deque `q` to store indices and their corresponding total sums, and a variable `res` to negative infinity. The deque `q` will be used to efficiently maintain the maximum total sum with the constraint.

2. Iterate through the elements of the `nums` list using the `enumerate` function, which provides both the index `i` and the value `num` of the current element.

3. Calculate the `total` for the current element by adding the value `num` to the total sum associated with the first index in the deque, `q[0][1]`, if the deque `q` is not empty. If the deque is empty, set `total` to the value of the current element, `num`.

4. Update the `res` variable with the maximum of its current value and the calculated `total`. This step keeps track of the maximum total sum seen so far.

5. Check if the deque `q` is not empty and the total `total` is greater than or equal to the total sum associated with the last index in the deque, `q[-1][1]`. If this condition is met, pop the last index from the deque because it will not be needed anymore.

6. If the `total` is greater than 0, append a tuple containing the current index `i` and the calculated `total` to the deque `q`. This index and its total sum will be used in the future calculations.

7. Check if the deque `q` is not empty and the index associated with the first element, `q[0][0]`, is equal to `i - k`. If this condition is met, it means the index at the front of the deque is too far from the current index `i`, so pop it from the deque. This step ensures that the maximum subsequence length is limited to `k`.

8. Repeat the above steps for all elements in the `nums` list.

9. Finally, return the `res` variable, which holds the maximum total sum found throughout the iteration.

This algorithm efficiently maintains a deque of indices with decreasing total sums and ensures that the maximum subsequence sum with a length constraint of `k` is calculated correctly.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(k)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def constrainedSubsetSum(self, nums: List[int], k: int) -> int:
      
        q = deque()
        res = float('-inf')

        for i, num in enumerate(nums):
            total = num + q[0][1] if q else num
            res = max(res, total)

            while q and total >= q[-1][1]:
                q.pop()
            
            if total > 0:
                q.append((i, total))
            
            if q and q[0][0] == i - k:
                q.popleft()
        
        return res        
```
```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
    const q = [];
    let res = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const total = num + (q.length > 0 ? q[0][1] : 0);
        res = Math.max(res, total);

        while (q.length > 0 && total >= q[q.length - 1][1]) {
            q.pop();
        }

        if (total > 0) {
            q.push([i, total]);
        }

        if (q.length > 0 && q[0][0] === i - k) {
            q.shift();
        }
    }

    return res;    
};
```
```java []
class Solution {
    public int constrainedSubsetSum(int[] nums, int k) {
        Deque<int[]> q = new LinkedList<>();
        int res = Integer.MIN_VALUE;

        for (int i = 0; i < nums.length; i++) {
            int num = nums[i];
            int total = num + (!q.isEmpty() ? q.getFirst()[1] : 0);
            res = Math.max(res, total);

            while (!q.isEmpty() && total >= q.getLast()[1]) {
                q.removeLast();
            }

            if (total > 0) {
                q.addLast(new int[]{i, total});
            }

            if (!q.isEmpty() && q.getFirst()[0] == i - k) {
                q.removeFirst();
            }
        }

        return res;        
    }
}
```
```C++ []
class Solution {
public:
    int constrainedSubsetSum(vector<int>& nums, int k) {
        deque<pair<int, int>> q;
        int res = INT_MIN;

        for (int i = 0; i < nums.size(); i++) {
            int num = nums[i];
            int total = num + (!q.empty() ? q.front().second : 0);
            res = max(res, total);

            while (!q.empty() && total >= q.back().second) {
                q.pop_back();
            }

            if (total > 0) {
                q.push_back(make_pair(i, total));
            }

            if (!q.empty() && q.front().first == i - k) {
                q.pop_front();
            }
        }

        return res;        
    }
};
```

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

### My next daily coding challenge post and video.

post
https://leetcode.com/problems/maximum-score-of-a-good-subarray/solutions/4196248/video-give-me-10-minutes-how-we-think-about-a-solution-python-javascript-java-c/

video
https://youtu.be/ZiO47ctvu6w

\u25A0 Timeline of the video
`0:05` Easy way to solve a constraint
`2:04` How we can move i and j pointers
`3:59` candidates for minimum number and max score
`4:29` Demonstrate how it works
`8:25` Coding
`11:04` Time Complexity and Space Complexity


### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/flatten-nested-list-iterator/solutions/4189136/give-me-10-minutes-how-we-think-about-a-solution-python-javascript-java-c/

video
https://youtu.be/N8QehVXYSc0

\u25A0 Timeline of the video
`0:04` 2 Keys to solve this question
`0:18` Explain the first key point
`0:45` Explain the first key point
`1:27` Explain the second key point
`5:44` Coding
`9:39` Time Complexity and Space Complexity
