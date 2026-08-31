# 【Video】Give me 4 minutes - How we think about a solution

**Author:** niits
**Votes:** 45
**Link:** [https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/4322538/](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/4322538/)

---

# Intuition
Sort input array.

---

# Solution Video

https://youtu.be/HPzfCHfWPlY

\u25A0 Timeline\u3000of the video
`0:04` Two key points to solve this question
`1:46` Demonstrate how it works
`3:17` Coding
`4:14` Time Complexity and Space Complexity
`4:33` Summary of the algorithm with my solution code

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 3,196
My first goal is 10,000 (It's far from done \uD83D\uDE05)
Thank you for your support!

**My channel reached 3,000 subscribers these days. Thank you so much for your support!**

---

# Approach
## How we think about a solution

Key points to solve this question are as follows:

---

\u2B50\uFE0F Points

- piles.length % 3 == 0
- Bob will get all coins from index 0 to total number of piles / 3

---
- piles.length % 3 == 0

This means we can divide total piles of coins by `3`.

- Bob will get all coins from index 0 to total number of piles / 3

Let's say

```
Input = [1,2,3,4,5,6,7,8,9]
```
Everyone has `3` chances to get coins, because total number of piles is `9` and every time `3` piles are taken. 

And the description says

---
- Alice will pick the pile with the maximum number of coins.
- You will pick the next pile with the maximum number of coins.
- Bob will pick the last pile.

---
To get maximum number of coins, we should choose `2` piles from the last and `1` pile from the beginning, so that you will get the maximum number of coins with following the rules.

The first round should be
```
[1,8,9]

Alice will get 9
You will get 8
Bob will get 1
```
Bob will not take `7`, because if he takes `7`, Alice will get `6` and you will get `5` in the second around which is not maximum number of coins. 

Look at the second round case where Bob doesn't take `7`. You will get `6` instead of `5`.

The second round should be
```
[2,6,7]


Alice will get 7
You will get 6
Bob will get 2
```
The third round should be
```
[3,4,5]

Alice will get 5
You will get 4
Bob will get 3
```

You will get
```
Ouput: 18 (= 8 + 6 + 4) 
```
Bob will get `1`, `2` and `3` coins.

From the idea above, in the solution code, we can start from index `3`(in this case) which is `4` coins and every time we increment the index by `2` on each iteration. Because we know that Bob will get `1`,`2` and `3` coins, so from coin `4` to coin `9`, Alice will get the maximum number of coins and you will get the second maximum number of coins in every two pair `[4,5]`, `[6,7]`, `[8,9]`.

This is an image of iteration in the solution code. Start from `index 3` in this case.
```
[1,2,3,4,5,6,7,8,9] (The first round)
 b b b \u2191 a
[1,2,3,4,5,6,7,8,9] (The second round)
 b b b y a \u2191 a     
[1,2,3,4,5,6,7,8,9] (The third round)
 b b b y a y a \u2191 a

a: Alice
y: You
b: Bob     
\u2191: a current number you get
```
The last important thing is that we should sort input array, so that we can easily take the maximum number of coins and minimum number of coins from input array.

---

\u2B50\uFE0F Points

Sort input array before interation

---

Easy!\uD83D\uDE04
Let's see a real algorithm!

### Algorithm Overview

1. Sort input array
2. Start index from `len(piles) // 3` and increment index number by `2`

### Detailed Explanation:

**1. Sort the input list**
```python
piles.sort()
```

**Explanation:**
This line sorts the `piles` list in ascending order. Sorting is necessary to ensure that the piles with the highest number of coins are considered later in the iteration.

**2. Initialize the result variable**
```python
res = 0
```

**Explanation:**
Here, a variable `res` is initialized to zero. This variable will be used to keep track of the total sum of coins.

**3. Iterate through piles starting from one-third of the length**
```python
for i in range(len(piles) // 3, len(piles), 2):
    res += piles[i]
```

**Explanation:**
This `for` loop is used to iterate through the `piles` list. It starts from the index corresponding to one-third of the length of the list (`len(piles) // 3`). The loop increments the index by `2` in each iteration, effectively selecting every second pile.

In each iteration of the loop, the value at the current index (`piles[i]`) is added to the `res` variable. This is done to accumulate the total sum of coins from the selected piles.

**4. Return the final result**
```python
return res
```

**Explanation:**
Finally, the function returns the total sum of coins (`res`) as the result.

In summary, the algorithm first sorts the `piles` list, then iterates through a subset of the sorted list (every second element starting from one-third of the way through), adding the values at each selected index to the result. The final result is the total sum of coins from the selected piles.



# Complexity
- Time complexity: $$O(n log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(log n)$$ or $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def maxCoins(self, piles: List[int]) -> int:
        piles.sort()
        res = 0

        for i in range(len(piles) // 3, len(piles), 2):
            res += piles[i]
        
        return res
```
```javascript []
var maxCoins = function(piles) {
    piles.sort((a, b) => a - b);
    let res = 0;

    for (let i = Math.floor(piles.length / 3); i < piles.length; i += 2) {
        res += piles[i];
    }

    return res;    
};
```
```java []
class Solution {
    public int maxCoins(int[] piles) {
        Arrays.sort(piles);
        int res = 0;

        for (int i = piles.length / 3; i < piles.length; i += 2) {
            res += piles[i];
        }

        return res;        
    }
}
```
```C++ []
class Solution {
public:
    int maxCoins(vector<int>& piles) {
        sort(piles.begin(), piles.end());
        int res = 0;

        for (int i = piles.size() / 3; i < piles.size(); i += 2) {
            res += piles[i];
        }

        return res;        
    }
};
```


---

# Bonus code

You can solve this question with `deque`. `pop` is to get the largest number in input array and `popleft` is to get the smallest number in input array.

The first `pop` is for Alice and the second `pop` is for you. `popleft` is for Bob.

Time compelxity is $$O(nlogn)$$
Sapce compelxity is $$O(n)$$

```python []
class Solution:
    def maxCoins(self, piles: List[int]) -> int:
        piles.sort()
        q = deque(piles)
        res = 0

        while q:
            q.pop() # For Alice
            res += q.pop() # For you
            q.popleft() # For Bob
        
        return res
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
https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/4329227/video-give-me-10-minutes-how-we-think-about-a-solution/

video
https://youtu.be/bwQh44GWME8

\u25A0 Timeline of the video

`0:05` How we can solve this question
`1:56` Calculate left total
`6:32` Calculate right total
`11:12` Create answers
`11:51` Coding
`14:14` Time Complexity and Space Complexity
`14:39` Summary of the algorithm with my solution code


### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/arithmetic-subarrays/solutions/4321453/video-give-me-6-minutes-how-we-think-about-a-solution/

video
https://youtu.be/bE6YT9q16K8

\u25A0 Timeline of the video

`0:04` What does the formula mean?
`1:46` Demonstrate how it works
`3:39` Coding
`5:40` Time Complexity and Space Complexity
`6:06` Summary of the algorithm with my solution code
