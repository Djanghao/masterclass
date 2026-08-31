# ✅✅Python Simple Solution 🔥🔥 Easy to Understand🔥🔥

**Author:** cohesk
**Votes:** 465
**Link:** [https://leetcode.com/problems/can-place-flowers/solutions/3317839/](https://leetcode.com/problems/can-place-flowers/solutions/3317839/)

---

# Please UPVOTE \uD83D\uDC4D

**!! BIG ANNOUNCEMENT !!**
I am Giving away my premium content videos related to computer science and data science and also will be sharing well-structured assignments and study materials to clear interviews at top companies to my first 1000 Subscribers. So, **DON'T FORGET** to Subscribe

https://www.youtube.com/@techwired8/?sub_confirmation=1

**Solution Video Search \uD83D\uDC49 "Can Place Flowers by Tech Wired leetcode" on YouTube**

![Yellow & Black Earn Money YouTube Thumbnail (54).png](./images/0.png)

```
class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        if n == 0:
            return True
        for i in range(len(flowerbed)):
            if flowerbed[i] == 0 and (i == 0 or flowerbed[i-1] == 0) and (i == len(flowerbed)-1 or flowerbed[i+1] == 0):
                flowerbed[i] = 1
                n -= 1
                if n == 0:
                    return True
        return False

```
![image.png](./images/1.png)

# Please UPVOTE \uD83D\uDC4D