# ✅✅Python Simple Solution 🔥🔥 Easy to Understand🔥🔥

**Author:** cohesk
**Votes:** 113
**Link:** [https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3321942/](https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3321942/)

---

# Please UPVOTE \uD83D\uDC4D

**!! BIG ANNOUNCEMENT !!**
I am Giving away my premium content videos related to computer science and data science and also will be sharing well-structured assignments and study materials to clear interviews at top companies to my first 1000 Subscribers. So, **DON'T FORGET** to Subscribe

Click Here to Subscribe \uD83D\uDC49 https://www.youtube.com/@techwired8/?sub_confirmation=1

**Solution Video Search \uD83D\uDC49 "Number of Zero-Filled Subarrays by Tech Wired leetcode" on YouTube**

![Yellow & Black Earn Money YouTube Thumbnail (55).png](./images/0.png)


```
class Solution:
    def zeroFilledSubarray(self, nums: List[int]) -> int:
        total_zero_subarrays = current_zero_subarrays = 0
                
        for num in nums:
            if num == 0:
                current_zero_subarrays += 1
                total_zero_subarrays += current_zero_subarrays
            else:
                current_zero_subarrays = 0
                
        return total_zero_subarrays

```
![image.png](./images/1.png)

# Please UPVOTE \uD83D\uDC4D