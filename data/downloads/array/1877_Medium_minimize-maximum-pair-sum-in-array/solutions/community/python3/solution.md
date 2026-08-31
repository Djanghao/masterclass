# 【Video】Give me u minutes - How we think about a solution

**Author:** niits
**Votes:** 28
**Link:** [https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/4297828/](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/4297828/)

---

# Intuition
Sort input array.

---

# Solution Video

https://youtu.be/DzzjWJdhNhI

\u25A0 Timeline of the video

`0:04` Explain how we can solve Minimize Maximum Pair Sum in Array
`2:21` Check with other pair combinations
`4:12` Let's see another example!
`5:37` Find Common process of the two examples
`6:45` Coding
`7:55` Time Complexity and Space Complexity

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 3,130
My first goal is 10,000 (It's far from done \uD83D\uDE05)
Thank you for your support!

**My channel reached 3,000 subscribers these days. Thank you so much for your support!**

---


# Approach

## How we think about a solution

We need to meet these two condtion


---

1. Each element of nums is in exactly one pair
2. The maximum pair sum is minimized.

---

Let's think about this input
```
Input: [63, 71, 12, 80, 38, 21, 92, 15]
```
Since we return minimized maximum pair sum, we create minimum pair of each number, then find the minimized maximum pair sum.

Let's start with the biggest number.

If we use `92`, how do you create minimized maximum pair sum? It's simple. Just pairing `92` with the smallest number in the input array.

```
(92, 12)  

rest of numbers
[63, 71, 80, 38, 21, 15]
```
The next biggest number is `80`. how do you create minimized maximum pair sum? We pair `80` with `15`.

They are pair of the second biggest number and second smallest number.
```
(92, 12)  
(80, 15)

rest of numbers
[63, 71, 38, 21]
```
How about `71`. If we want to create minimized maximum pair sum, we should choose `21` in the rest of numbers.
```
(92, 12)  
(80, 15)
(71, 21)

rest of numbers
[63, 38]
```
Then we pair `63` and `38`
```
(92, 12) = 104
(80, 15) = 95
(71, 21) = 92
(63, 38) = 101
```
These 4 numbers are possible minimized maximum pair sum.

All we have to do is to return maximum value of the 4 pairs.

```
Output: 104
```

What if we create `(80, 12)`?
```
(80, 12) = 92
(92, 15) = 107
(71, 21) = 92
(63, 38) = 101
```
minimum maximum is now `107` which is greater than `104`. This is not answer.

How about `(92, 80)`? minimum maximum is now `172` which is greater than `104`. This is not answer.

```
(92, 80) = 172
(71, 12) = 83
(63, 15) = 78
(38, 21) = 59
```

How about `(21, 12)`? minimum maximum is now `134` which is greater than `104`. This is not answer.

```
(21, 12) = 33
(92, 15) = 107
(80, 38) = 118
(71, 63) = 134
```
We have more other patterns but we cannot create minimum maximum number which is less than `104`.

---


### Let's see other example quickly

Let's see simpler example.
```
Input: [1, 70, 80, 100]
```

```
(100, 1) = 101
(80, 70) = 150
```
minimum maximum is `150`. We swap the numbers.
```
(100, 80) = 180
(1, 70) = 70
```
minimum maximum is `180` which is greater than `150`. This is not answer. 

```
(100, 70) = 170
(80, 1) = 81
```
minimum maximum is `170` which is greater than `150`. This is not answer. 

There are 3 more pair combinations but they just reverse of pairs. For example, `(1, 100)` is equal to `(100, 1)`, so let me skip explanation.
```
Output: 150
```

Look at these answer pair combinations.
```
(92, 12) = 104
(80, 15) = 95
(71, 21) = 92
(63, 38) = 101
```
```
(100, 1) = 101
(80, 70) = 150
```
The common process of these two is that we pair the biggest number and the smallest number at first. Next, we pair the second biggest number and the second smallest number...

That's why, seems like sorting input array is big help to solve this question.

Then we create pairs with current biggest and smallest number and take maximum value of all pairs.


---

\u2B50\uFE0F Points

Sort input array and create pairs of current biggest and smallest number. Then take maximum number of all pairs.

---

I felt like this question is tricky. but it's very straightforward question.
Let's see a real algorithm!

1. **Sort the array:**
     ```python
     nums.sort()
     ```
     Sorts the input array `nums` in ascending order. Sorting is crucial for pairing smaller and larger numbers efficiently.

2. **Initialize variables:**
     ```python
     n = len(nums)
     min_max_sum = 0
     ```
     Sets `n` to the length of the sorted array and initializes `min_max_sum` to 0. `min_max_sum` will keep track of the maximum pair sum as we iterate through the array.

3. **Iterate through pairs:**
     ```python
     for i in range(n // 2):
         min_max_sum = max(min_max_sum, nums[i] + nums[n - 1 - i])
     ```
     Iterates through the first half of the sorted array. For each iteration, calculates the sum of the current pair `(nums[i], nums[n - 1 - i])`. Updates `min_max_sum` to be the maximum of its current value and the calculated sum.

4. **Return the result:**
     ```python
     return min_max_sum
     ```
     After iterating through all possible pairs, returns the final value of `min_max_sum`.


# Complexity
- Time complexity: $$O(n log n)$$


- Space complexity: $$O(log n)$$ or $$O(n)$$

    Depends on language you use


```python []
class Solution:
    def minPairSum(self, nums: List[int]) -> int:
        nums.sort()

        n = len(nums)
        min_max_sum = 0

        for i in range(n // 2):
            min_max_sum = max(min_max_sum, nums[i] + nums[n - 1 - i])

        return min_max_sum        
```
```javascript []
var minPairSum = function(nums) {
    nums.sort((a, b) => a - b);

    let n = nums.length;
    let minMaxSum = 0;

    for (let i = 0; i < n / 2; i++) {
        minMaxSum = Math.max(minMaxSum, nums[i] + nums[n - 1 - i]);
    }

    return minMaxSum;    
};
```
```java []
class Solution {
    public int minPairSum(int[] nums) {
        Arrays.sort(nums);

        int n = nums.length;
        int minMaxSum = 0;

        for (int i = 0; i < n / 2; i++) {
            minMaxSum = Math.max(minMaxSum, nums[i] + nums[n - 1 - i]);
        }

        return minMaxSum;        
    }
}
```
```C++ []
class Solution {
public:
    int minPairSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());

        int n = nums.size();
        int minMaxSum = 0;

        for (int i = 0; i < n / 2; i++) {
            minMaxSum = max(minMaxSum, nums[i] + nums[n - 1 - i]);
        }

        return minMaxSum;        
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
https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4300895/video-give-me-10-minutes-how-we-think-about-a-solution/

video
https://youtu.be/MbCFzt4v1uE

\u25A0 Timeline of the video

`0:00` Read the question of Frequency of the Most Frequent Element
`1:11` Explain a basic idea to solve Frequency of the Most Frequent Element
`11:48` Coding
`14:21` Summarize the algorithm of Frequency of the Most Frequent Element

### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/find-unique-binary-string/solutions/4293749/video-give-me-7-minutes-how-we-think-about-a-solution/

video
https://youtu.be/tJ_Eu2S4334

\u25A0 Timeline of the video

`0:04` Explain a key point of the question
`1:39` Why you need to iterate through input array with len(nums) + 1?
`2:25` Coding
`3:56` Explain part of my solution code.
`3:08` What if we have a lot of the same numbers in input array?
`6:11` Time Complexity and Space Complexity