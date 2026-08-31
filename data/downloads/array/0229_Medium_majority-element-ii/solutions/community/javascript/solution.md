# 【Video】How we think about a solution - Boyer-Moore Majority Vote Algorithm

**Author:** niits
**Votes:** 65
**Link:** [https://leetcode.com/problems/majority-element-ii/solutions/5931576/](https://leetcode.com/problems/majority-element-ii/solutions/5931576/)

---

# Intuition
Find two majority candidates at first.

# Approach

---

# Solution Video

https://youtu.be/KzJHu5sWLKE

\u25A0 Timeline of the video
`0:00` Read the question of Majority Element II
`1:03` How we think about a solution
`3:47` Demonstrate solution with an example
`5:42` Explain Boyer-Moore Majority Vote Algorithm with visualization
`9:19` Coding
`12:49` Time Complexity and Space Complexity

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 8,296
Thank you for your support!

---

### How we think about a solution

Simply, we can solve the question like this.

```
class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        counts = {}
        for num in nums:
            counts[num] = counts.get(num, 0) + 1

        # Find all elements in the hash table that have a count greater than n/3.
        result = []
        for num, count in counts.items():
            if count > len(nums) // 3:
                result.append(num)

        return result
```

But there is a constraint saying "Could you solve the problem in linear time and in $$O(1)$$ space?" That solution should be $$O(n)$$ space.

Let's think about $$O(1)$$ space. we have a hint to solve the question. The description says "more than n/3 times".

Let's start with the simplest case.
```
[1,2,3]
```
 In this case, `n/3 is 1` and occurence of all numbers are `1`, so we don't find majority numbers.
```
[1,2,1]
```
In this case, `n/3 is 1` and occurence of `1` is `2`, so we find 1 majority number.
```
[1,2,1,2]
```
In this case, `n/3 is 1.333...` and occurence of `1` and `2` are both `2`, so we find 2 majority numbers.
```
[1,2,1,2,3]
```
In this case, `n/3 is 1.666...` occurence of `1` and `2` are both are `2`, so we find 2 majority numbers.

```
[1,2,1,2,3,3]
```
In this case, `n/3 is 2` all numbers are `2`, so we don't find majority numbers.

---
\u2B50\uFE0F Points

From exmaples above, We can find **2 majority numbers at most**.

To prove that, we can calculate like this.

From `[1,2,3]` and `[1,2,1]` cases, to make some number majority element, we need n/3 + 1 of some number. If we multiply 3 with n/3 + 1, the answer is definitely longer than length of original input array. That's why we can't create 3 majority elements.
```
(n/3 + 1) * 3 > input array
```
```
n = 6

case * 3
(6/3 + 1) * 3 > 6

case * 2 , both sides are equal.
(6/3 + 1) * 2 == 6
```

That's why we can find **2 majority numbers at most**.

---

But there is an case where we find 1 majority number, we are not sure we have 1 or 2 majority numbers.

That's why at first, it's good idea to find `two majority candidates` in the array whether they are more than `n/3 or not`.

Let's see this input.

```
Input: [1,4,6,3,10,4,4,3,4]
```
Iterate through the input array and it turns out two majority candidates are `4` and `3`. Let me explain how we find the two majority candidates later.

Then, we iterate through the input array again to count occurence of `4` and `3`.
```
4: 4 times
3: 2 times
```
At last, if occurence of `4` and `3` is more than len(input) // 3, then we find majority numbers.

```
len(input) // 3 = 3
occurence of 4 is more than 3? Yes
occurence of 3 is more than 3? No
```

```
Output: [4]
```

- **How can we find majority candidates?**

Since we can't use data structure like `HashMap`, simply we use two variables for majority candidates and two `counts` variables.

But let's simplify the question. try to find 1 majority number.
```
[1,1,2,2,2,1,1]
majority = 0
count = 0
```
Iterate through one by one
```
At index 0. find 1
majority = 1
count = 1
```
```
At index 1. find 1
majority = 1
count = 2
```
```
At index 2. find 2
majority = 1
count = 1
```
In this case, we find `2`, add `-1` to `count` which is number of occurence of `1`, but still `1` is a majority number.
```
At index 3. find 2
majority = 1
count = 0
```
Again, add `-1` to `count` which is number of occurence of `1`. Now `count` is `0` which means `next number should will be majority number`. 

In early index, we just found `1` twice. That's why `1` is majority number `so far`, but from index `2`, we found `2` twice. Now occurence of `1` and `2` is the same.  
```
At index 4. find 2
majority = 2
count = 1
```
Now `count` means occurence of `2` instead of `1`, because at index 4, `2` is majority number so far.
```
At index 5. find 1
majority = 2
count = 0
```
Now `count` is `0`, so next number will be a majority number. 
```
At index 6. find 1
majority = 1
count = 1
```
```
Output: Majority number is 1
```
Actually, I use the same algorithm for majority number \u2160. I solved it about a year ago.

https://youtu.be/sBuRjHqDTzY


---

# Boyer-Moore Majority Vote Algorithm

The algorithm above is known as Boyer-Moore Majority Vote Algorithm.

The Boyer-Moore Majority Vote Algorithm is an efficient algorithm used to find the majority element (an element that appears more than half of the time) in a given array. This algorithm operates in linear time and requires O(1) additional space.

Here are the basic steps of the Boyer-Moore Majority Vote Algorithm:

1. **Candidate Element Selection**: Choose the first element of the array as the candidate element and initialize a counter.

2. **Element Counting**: Traverse through the array. If the current element matches the candidate element, increment the counter. If they don't match, decrement the counter.

3. **Check Counter**: If the counter becomes zero, choose the current element as the new candidate element and reset the counter to one.

4. **Final Candidate Verification**: After these steps, verify if the selected candidate is indeed the majority element.

By following these steps, the algorithm efficiently identifies the most frequently occurring element, if one exists, in linear time O(n) in the worst case. This efficiency is achieved by carefully selecting candidate elements and comparing them against other elements.


---



We use this idea for two majority candidates. Let's see real algorithm!

### Algorithm Overview:

1. Initialize `majority1`, `majority2`, `count1`, and `count2` to track the majority elements and their counts.
2. Iterate through the input list `nums` to find the two majority elements.
3. Iterate through `nums` again to verify the counts of the two majority elements.
4. Return a list of majority elements that appear more than `len(nums) // 3` times.

### Detailed Explanation:

1. **Initialization:**
   - Initialize `majority1`, `majority2`, `count1`, and `count2` to 0. These variables will be used to keep track of the majority elements and their counts.

2. **First Iteration to Find Majority Elements:**
   - Iterate through the input list `nums`.
   - If the current number is equal to `majority1`, increment `count1`.
   - If the current number is equal to `majority2`, increment `count2`.
   - If `count1` is 0, update `majority1` to the current number and increment `count1`.
   - If `count2` is 0, update `majority2` to the current number and increment `count2`.
   - If both `count1` and `count2` are non-zero and the current number is not equal to either majority, decrement `count1` and `count2`.

3. **Second Iteration to Verify Counts:**
   - Reset `count1` and `count2` to 0.
   - Iterate through `nums` again.
   - Count the occurrences of `majority1` and `majority2` by incrementing `count1` and `count2` accordingly.

4. **Result Generation:**
   - Create an empty list `res` to store the majority elements.
   - If `count1` is greater than `len(nums) // 3`, add `majority1` to `res`.
   - If `count2` is greater than `len(nums) // 3`, add `majority2` to `res`.
   - Return the list `res` containing the majority elements that appear more than `len(nums) // 3` times.

The algorithm uses the Boyer-Moore Majority Vote algorithm to find the majority elements in `nums` efficiently and then verifies their counts to ensure they appear more than `len(nums) // 3` times before returning the result.


---


# Complexity
- Time complexity: O(n)


- Space complexity: O(1)


```python []
class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        majority1 = majority2 = count1 = count2 = 0

        for num in nums:
            if num == majority1:
                count1 += 1
            elif num == majority2:
                count2 += 1
            elif count1 == 0:
                majority1 = num
                count1 += 1
            elif count2 == 0:
                majority2 = num
                count2 += 1
            else:
                count1 -= 1
                count2 -= 1

        # Verify that majority1 and majority2 appear more than n/3 times.
        count1, count2 = 0, 0

        for num in nums:
            if num == majority1:
                count1 += 1
            elif num == majority2:
                count2 += 1

        res = []
        if count1 > len(nums) // 3:
            res.append(majority1)
        if count2 > len(nums) // 3:
            res.append(majority2)

        return res
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let majority1 = 0;
    let majority2 = 0;
    let count1 = 0;
    let count2 = 0;

    for (const num of nums) {
        if (num === majority1) {
            count1++;
        } else if (num === majority2) {
            count2++;
        } else if (count1 === 0) {
            majority1 = num;
            count1++;
        } else if (count2 === 0) {
            majority2 = num;
            count2++;
        } else {
            count1--;
            count2--;
        }
    }

    count1 = 0;
    count2 = 0;

    for (const num of nums) {
        if (num === majority1) {
            count1++;
        } else if (num === majority2) {
            count2++;
        }
    }

    const res = [];
    const n = nums.length;

    if (count1 > Math.floor(n / 3)) {
        res.push(majority1);
    }
    if (count2 > Math.floor(n / 3)) {
        res.push(majority2);
    }

    return res;    
};
```
```java []
class Solution {
    public List<Integer> majorityElement(int[] nums) {
        Integer majority1 = 0;
        Integer majority2 = 0;
        int count1 = 0;
        int count2 = 0;

        for (int num : nums) {
            if (num == majority1) {
                count1++;
            } else if (num == majority2) {
                count2++;
            } else if (count1 == 0) {
                majority1 = num;
                count1++;
            } else if (count2 == 0) {
                majority2 = num;
                count2++;
            } else {
                count1--;
                count2--;
            }
        }

        count1 = 0;
        count2 = 0;

        for (int num : nums) {
            if (num == majority1) {
                count1++;
            } else if (num == majority2) {
                count2++;
            }
        }

        List<Integer> res = new ArrayList<>();
        int n = nums.length;

        if (count1 > n / 3) {
            res.add(majority1);
        }
        if (count2 > n / 3) {
            res.add(majority2);
        }

        return res;        
    }
}
```
```C++ []
class Solution {
public:
    vector<int> majorityElement(vector<int>& nums) {
        int majority1 = 0;
        int majority2 = 0;
        int count1 = 0;
        int count2 = 0;

        for (const int num : nums) {
            if (num == majority1) {
                count1++;
            } else if (num == majority2) {
                count2++;
            } else if (count1 == 0) {
                majority1 = num;
                count1++;
            } else if (count2 == 0) {
                majority2 = num;
                count2++;
            } else {
                count1--;
                count2--;
            }
        }

        count1 = 0;
        count2 = 0;

        for (const int num : nums) {
            if (num == majority1) {
                count1++;
            } else if (num == majority2) {
                count2++;
            }
        }

        std::vector<int> res;

        if (count1 > nums.size() / 3) {
            res.push_back(majority1);
        }
        if (count2 > nums.size() / 3) {
            res.push_back(majority2);
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

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

\u2B50\uFE0F My previous post and video

post
https://leetcode.com/problems/missing-number/solutions/4894173/video-using-index-numbers/

https://youtu.be/jVn0ZPzfAGk