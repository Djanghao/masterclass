# 【Video】Give me 9 minutes - How we think about a solution

**Author:** niits
**Votes:** 16
**Link:** [https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4306758/](https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4306758/)

---

# Intuition
Sort and reverse input array

---

# Solution Video

https://youtu.be/Tf69tOpE4GE

\u25A0 Timeline of the video

`0:05` Try to find a solution pattern
`1:44` What if we have the same numbers in input array?
`5:37` Why it works when we skip reduction
`7:22` Coding
`8:52` Time Complexity and Space Complexity

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 3,162
My first goal is 10,000 (It's far from done \uD83D\uDE05)
Thank you for your support!

**My channel reached 3,000 subscribers these days. Thank you so much for your support!**

---

# Approach

## How we think about a solution

I always think about solutions with a small and simple input.

```
[1,2]
```
In this case, output should be `1`. How about this?
```
[1,2,3]
```
In this case, output should be `3`. How about this?
```
[1,2,3,4]
```
In this case, output should be `6`. How about this?
 ```
[1,2,3,4,5]
```
In this case, output should be `10`. How about this?

Did you notice something? Seems like we have a solution pattern.

Let's focus on `[1,2,3,4,5]` and put index numbers.

```
 0,1,2,3,4 (= 1 + 2 + 3 + 4 = 10)
[1,2,3,4,5]
```

---

\u2B50\uFE0F Points

The number of operations is equal to cumulative index numbers. And seems like sorting the input array makes problem easy. More precisely, Sorting allows us to compare numbers that are close in magnitude with each other.

---

### What if we have the same numbers in input array?

```
Input: [1,2,2,3]
```
In this case, output should be `4`. Let's put index numbers.
```
 0,1,2,3 (= 1 + 2 + 3 = 6)
[1,2,2,3]
```
We need to calculate the number of operations. How can you simplify it? 

Let's go back to `[1,2,3,4,5]` and break problems into small parts.

This question is `reduction operations`, so let's think about output from large to small number.

```
 0,1,2,3,4
[5,4,3,2,1]
Range of 5 and 4, we need 1 operation.
(= 5 \u2192 4)

 0,1,2,3,4
[4,4,3,2,1]
Range of 4, 4 and 3, we need 2 operations.
(= 4 \u2192 3, 4 \u2192 3)

 0,1,2,3,4
[3,3,3,2,1]
Range of 3, 3, 3 and 2, we need 3 operations.
(= 3 \u2192 2, 3 \u2192 2, 3 \u2192 2)

0,1,2,3,4
[2,2,2,2,1]
Range of 2, 2, 2, 2 and 1, we need 4 operations.
(= 2 \u2192 1, 2 \u2192 1, 2 \u2192 1, 2 \u2192 1)

[1,1,1,1,1]
Total operation should be 1 + 2 + 3 + 4 = 10
```
Even if we sort and reverse input array, we can get the same result.

Let's sort and reverse this input.
```
Input: [1,2,2,3]
```
Basically, we compare current number and previous number. That's why we start from `index 1` to prevent out of bounds.
```
 0,1,2,3
[3,2,2,1]
   i
Between 2 and 3, we need 1 operation.
(= match with current index)

Output = 1
```
Move next.
```
 0,1,2,3
[3,2,2,1]
     i
Between 2 and 2, we need 0 operation.
In this case the both numbers are 2. We don't do anything.

Output = 1
```
Move next.
```
 0,1,2,3
[3,2,2,1]
       i
Between 1 and 2, we need 1 operation.
Add 3 to output.

Output = 4
```
```
Output: 4
```
- Why this happens?

That's because between any two numbers, we reduce large number once at most. Even if we skip reduction when we find the same numbers, index number will be increased by 1 if we move next. That is total number of rest of large same number. That's why when we find small number in later part, we can add index number including number of reduction of the same numbers.

Let's check quickly.
```
   i
[5,5,5,5,1]
\u2192 [5,5,5,5,1], Output: 0 (Skip)

     i
[5,5,5,5,1]
\u2192 [5,5,5,5,1], Output: 0 (Skip)

       i
[5,5,5,5,1]
\u2192 [5,5,5,5,1], Output: 0 (Skip)

         i
[5,5,5,5,1]
\u2192 [1,1,1,1,1], Output: 4 (Add 4 for index 0(=5),1(=5),2(=5) and 3(=5))
```
Even if we skip reduction, index number is increased by 1, so when we find small number in later part, current index number(=4) is equal to number of reduction of the same numbers(=5).

---

\u2B50\uFE0F Points

Sort and reverse input array to calculate number of operations easily.


---

Let's see a real algorithm!

### Algorithm Overview:

The goal of this algorithm is to find the number of operations required to make all elements of the array equal. The operations consist of reducing the larger numbers to the smaller ones.

### Detailed Explanation:

1. **Sort the Array:**
```
nums.sort(reverse=True)
```
   - Sort the array `nums` in descending order. This ensures that the larger numbers are at the beginning of the array, and we can efficiently compare them.

2. **Initialize Variables:**
```
operations = 0
prev_unique = nums[0]
```
   - Initialize the variable to count the number of operations.
   - Initialize a variable to store the previous unique number, starting with the first element of the sorted array.

3. **Count Operations:**

```
for i in range(1, len(nums)):
    if nums[i] == prev_unique: continue
    
    if nums[i] < prev_unique:
        operations += i

    prev_unique = nums[i]
```

   - Iterate through the array from the second element to the end (`for i in range(1, len(nums))`).
   - Check if the current number is equal to the previous unique number (`if nums[i] == prev_unique: continue`).
   - If the current number is smaller than the previous unique number:
      - Increment the operations by the current index `i`.
   - Update the `prev_unique` to the current number for the next iteration.

4. **Return Result:**
   - Return the final count of operations.

Overall, the algorithm takes advantage of the descending order of the sorted array to efficiently count the operations needed to reduce the larger numbers to the smaller ones.

# Complexity
- Time complexity: $$O(n log n)$$


- Space complexity: $$O(log n)$$ or $$O(n)$$


```python []
class Solution:
    def reductionOperations(self, nums: List[int]) -> int:
        nums.sort(reverse=True)  # Sort the array in descending order
        operations = 0
        prev_unique = nums[0]

        for i in range(1, len(nums)):
            if nums[i] == prev_unique: continue
            
            if nums[i] < prev_unique:
                operations += i

            prev_unique = nums[i]

        return operations
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
    nums.sort((a, b) => b - a); // Sort the array in descending order
    let operations = 0;
    let prevUnique = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === prevUnique) continue;

        if (nums[i] < prevUnique) {
            operations += i;
        }

        prevUnique = nums[i];
    }

    return operations;    
};
```
```java []
class Solution {
    public int reductionOperations(int[] nums) {
        Arrays.sort(nums);
        int operations = 0;
        int prevUnique = nums[nums.length - 1];

        for (int i = nums.length - 2; i >= 0; i--) {
            if (nums[i] == prevUnique) continue;

            if (nums[i] < prevUnique) {
                operations += nums.length - 1 - i;
            }

            prevUnique = nums[i];
        }

        return operations;        
    }
}
```
```C++ []
class Solution {
public:
    int reductionOperations(vector<int>& nums) {
        sort(nums.begin(), nums.end(), greater<int>()); // Sort the array in descending order
        int operations = 0;
        int prevUnique = nums[0];

        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] == prevUnique) continue;

            if (nums[i] < prevUnique) {
                operations += i;
            }

            prevUnique = nums[i];
        }

        return operations;        
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

### My next daily coding challenge post and video.

post
https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/4308246/video-give-me-10-minutes-beats-98-how-we-think-about-a-solution/

video
https://youtu.be/GZWR5cWZ3pw

\u25A0 Timeline
`0:05` Talk about time to pick up all garbages 
`1:44` Talk about time to travel to the next house
`5:37` Demonstrate how it works
`8:00` Coding
`11:12` Time Complexity and Space Complexity

### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4300895/video-give-me-10-minutes-how-we-think-about-a-solution/

video
https://youtu.be/MbCFzt4v1uE

\u25A0 Timeline of the video

`0:00` Read the question of Frequency of the Most Frequent Element
`1:11` Explain a basic idea to solve Frequency of the Most Frequent Element
`11:48` Coding
`14:21` Summarize the algorithm of Frequency of the Most Frequent Element
