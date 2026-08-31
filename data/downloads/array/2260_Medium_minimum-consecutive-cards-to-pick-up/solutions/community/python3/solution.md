# Python3 | Beginner-friendly explained |

**Author:** hanjo108
**Votes:** 31
**Link:** [https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/1996393/](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/1996393/)

---

**Thought Process:**

So we want to find the minimum difference between current character's position and previously seen position. And only keep the minimum!

1.	Keep the index of visiting number (We will always update the index to latest since we are looking for minimum length)
2.	If your current number is seen before, then calculate the length from previously seen index, and update if its difference is smaller than what we have seen so far
3.	At the end of iteration, if we didn\u2019t find any duplicate, return -1; otherwise, return the minimum distance you found

**Complexity**
Time \u2013 O(N) as we iterate over the input only once
Space \u2013 O(N) at worst case we will be storing all the numbers in the input to our index hashmap. (in case of all distinct numbers in input array)

```
class Solution:
    def minimumCardPickup(self, cards: List[int]) -> int:
        minPick = float('inf')
        seen = {}
        for i, n in enumerate(cards):
            if n in seen:
                if i - seen[n] + 1 < minPick:
                    minPick = i - seen[n] + 1
            seen[n] = i
        if minPick == float('inf'):
            return -1
        return minPick
```

**Please correct me if I am wrong !
Please UPVOTE if you find this solution helpful !
Happy algo!**
