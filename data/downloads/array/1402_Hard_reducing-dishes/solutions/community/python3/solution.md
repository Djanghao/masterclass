# ✅✅Python🔥Java 🔥C++🔥Simple Solution🔥Easy to Understand🔥

**Author:** cohesk
**Votes:** 190
**Link:** [https://leetcode.com/problems/reducing-dishes/solutions/3353418/](https://leetcode.com/problems/reducing-dishes/solutions/3353418/)

---

# Please UPVOTE \uD83D\uDC4D

**!! BIG ANNOUNCEMENT !!**
I am currently Giving away my premium content well-structured assignments and study materials to clear interviews at top companies related to computer science and data science to my current Subscribers this week. I planned to give for next 10,000 Subscribers as well. So **DON'T FORGET** to Subscribe

**Search \uD83D\uDC49`Tech Wired leetcode` on YouTube to Subscribe**

# Video Solution
**Search \uD83D\uDC49 `Reducing Dishes by Tech Wired` on YouTube**

![Yellow & Black Earn Money YouTube Thumbnail (4).png](./images/0.png)



Happy Learning, Cheers Guys \uD83D\uDE0A

# Approach:

The problem can be solved using a greedy approach. First, we sort the input array in decreasing order. Then, we iterate over the array and calculate the prefix sums of the elements, adding each prefix sum to the result as long as it remains non-negative. If the prefix sum becomes negative at any point, we stop the iteration and return the current result.

# Intuition:

- The intuition behind the greedy approach is that the maximum satisfaction value is obtained by serving the most popular dishes first, and the least popular dishes last. By sorting the dishes in decreasing order of popularity, we can ensure that we serve the most popular dishes first, and thus maximize the satisfaction value.

- Next, we calculate the prefix sums of the sorted dishes, starting from the most popular dish. The prefix sum at index i represents the total satisfaction value obtained by serving the i most popular dishes in decreasing order. If the prefix sum at any point becomes negative, it means that the remaining dishes have a net negative contribution to the total satisfaction value, and we can stop serving them.

- By stopping the iteration as soon as the prefix sum becomes negative, we can ensure that we don't serve any dishes that have a net negative contribution to the total satisfaction value. This allows us to obtain the maximum satisfaction value while minimizing the number of dishes served.


```Python []
class Solution:
    def maxSatisfaction(self, satisfaction: List[int]) -> int:
        satisfaction.sort(reverse=True)
        n = len(satisfaction)
        presum, res = 0, 0
        for i in range(n):
            presum += satisfaction[i]
            if presum < 0:
                break
            res += presum
        return res

    
        # An Upvote will be encouraging

```
```Java []
class Solution {
    public int maxSatisfaction(int[] satisfaction) {
        Arrays.sort(satisfaction);
        int n = satisfaction.length;
        int presum = 0, res = 0;
        for (int i = n - 1; i >= 0; i--) {
            presum += satisfaction[i];
            if (presum < 0) {
                break;
            }
            res += presum;
        }
        return res;
    }
}


```
```C++ []
class Solution {
public:
    int maxSatisfaction(vector<int>& satisfaction) {
        sort(satisfaction.begin(), satisfaction.end(), greater<int>());
        int n = satisfaction.size();
        int presum = 0, res = 0;
        for (int i = 0; i < n; i++) {
            presum += satisfaction[i];
            if (presum < 0) {
                break;
            }
            res += presum;
        }
        return res;
    }
};

```

![image.png](./images/1.png)

# Please UPVOTE \uD83D\uDC4D