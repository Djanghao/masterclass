# 【Video】Give me 10 minutes - Beats 98% - How we think about a solution

**Author:** niits
**Votes:** 52
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/4308246/](https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/4308246/)

---

# Intuition
Iterate through from the last index.

---

# Solution Video

https://youtu.be/GZWR5cWZ3pw

\u25A0 Timeline
`0:05` Talk about time to pick up all garbages 
`1:44` Talk about time to travel to the next house
`5:37` Demonstrate how it works
`8:00` Coding
`11:12` Time Complexity and Space Complexity

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 3,165
My first goal is 10,000 (It's far from done \uD83D\uDE05)
Thank you for your support!

**My channel reached 3,000 subscribers these days. Thank you so much for your support!**

---

# Approach

## How we think about a solution

First of all, we have two types of time.

---

\u2B50\uFE0F Points

- Time to pick up garbages
- Time to travel to the next house

---

We need to calculate total time of those two times.

### Time to pick up garbages

Let's think about this input.
```
Input: garbage = ["MMM","PGM","GP"], travel = [3,10]
```

This is very simple. The description says "Picking up one unit of any type of garbage takes 1 minute", so total time to pick up all garbages is total number of `M`, `P` and `G`.

In this case,
```
4(= M) + 2(= P) + 1(= G) = 8 minutes
```

### Time to travel to the next house

Travel time is a little bit tricky. The description says "Each garbage truck starts at house 0 and must visit each house in order; however, they do not need to visit every house".

In other words, the trucks don't have to go to the next house if they already picked up all garbages. On the other hand, they must visit all houses even if one particular garbage is only in the last house.

(Seem like English test lol)\uD83D\uDE05


---

Problem

Problem here is that we don't know where each truck can finish picking up all garbages.

---

To solve this problem, my idea is to iterate through from the last house, because we can know where the last house is for each garbage.

To understand easily, I added extra garbage to the input. Let's think about `M` garbage.
```
Input: garbage = ["MMM","PGM","GP","M"], travel = [3,10,5]
```

The last house has `M` garbage. At index 2 house, there is no `M`. At index 1 and 0 houses, there are `M`.

If we iterate through from the beginning, it's hard to know whether the `M` truck should go to `index 2` or not. But if we iterate through from the last, we are sure that the `M` truck must go to `index 2` because we know that there is `M` garbage in the last house. (As I explain eariler, each truck must visit each house **in order**, so the `M` truck must go to `index 2`).


---

\u2B50\uFE0F Points

Iterate through from the end, so that we are sure whether each truck goes next or not.

---

Let's see one by one.

```
Input: garbage = ["MMM","PGM","GP","M"], travel = [3,10,5]
```
Count number of garbages.
```
res = 9
```
Iterate `travel` from the end (= iterate garbage from the end). The reason why we iterate `travel` is that we want to iterate `travel` and `garbage` at the same time but travel is always shorter than `garbage`, so we don't have to care about out of bounds.

Between the `index 3` and `index 2`, travel time is `5` and there is only `M`, so

```
["MMM","PGM","GP","M"]
                   \u2191(= i)
[3,10,5]
      \u2191(= i - 1)
res += travel time * (M + P + G)
res += 5 * (1 + 0 + 0)
res = 14 (= 9 + 5)
```
`(M + P + G)` is number of each truck, `0` or `1`. In this case, Only `M` truck needs to go to the last house.

Travel time index should be current index(i) - 1, because number of travel time is total number of houses - 1.

```
["MMM","PGM","GP","M"]
      3     10   5
```

Move previous house. Travel time is `10`. There is `G` and `P`.

```
["MMM","PGM","GP","M"]
              \u2191(= i)
[3,10,5]
    \u2191(= i - 1)

res += travel time * (M + P + G)
res += 10 * (1 + 1 + 1)
res = 44
```
There is no `M` garbage at `index 2`, but we know that `M` truck must go to the last house, so `M` truck is always `1`. More precisely, once the flags turn true, the flags are always true, because the trucks must go to the next house.

Move previous house. Travel time is `3`. There are garbages of `P`, `G`, `M`.

```
["MMM","PGM","GP","M"]
         \u2191(= i)
[3,10,5]
 \u2191(= i - 1)

res += travel time *(M + P + G)
res += 3 * (1 + 1 + 1)
res = 53
```
Then finish iteration. We don't have to go to the first house because we already added number of garbages at `index 0` and travel time `3` * `3` trucks which is between `index 0` and `index 1`.

```
Output: 53
```

Easy!\uD83D\uDE04
Let's see a real algorithm!


### Algorithm Overview:

At first, add number of garbages to result, then iterate through from the last index.

### Detailed Explanation:

1. **Initialization**: 
```
res = 0
```
Start with initializing the total time (`res`) to 0.

2. **Process Garbage Sizes**:
```
for g in garbage:
    res += len(g)
```
For each house, add the length of the garbage string to `res`. This step accounts for the time spent picking up garbage at each house.

3. **Initialize Garbage Type Flags**:
```
g, p, m = False, False, False
```
Set boolean flags to track the presence of different types of garbage.

4. **Update Garbage Type Flags**:
```
for i in range(len(travel), 0, -1):
    m = m or 'M' in garbage[i]
    p = p or 'P' in garbage[i]
    g = g or 'G' in garbage[i]

    res += travel[i-1] * (m + p + g)
```
Begin traversing the houses backward, starting from the last one. Check each garbage string for the presence of 'M','P', or 'G', and update the corresponding boolean flags. For each house, calculate its contribution to the total time based on the travel time and the sum of boolean flags. Accumulate the calculated contribution to the total time.

5. **Return Result**:
```
return res
```
Once all houses are processed, return the final total time as the minimum number of minutes needed to pick up all the garbage.

This algorithm efficiently calculates the minimum time required for garbage collection based on the given conditions.


# Complexity
- Time complexity: $$O(T * G)$$
`T` is length of `travel` variable and `G` is average time to find garbage in garbage string. But once we found the garbage, it will be $$O(T)$$. In reality, I think it's faster than this time complexity. In fact, this code beats more than 98%.

- Space complexity: $$O(1)$$

```python []
class Solution:
    def garbageCollection(self, garbage: List[str], travel: List[int]) -> int:
        res = 0
        
        for g in garbage:
            res += len(g)

        m, p, g = False, False, False

        for i in range(len(travel), 0, -1):
            m = m or 'M' in garbage[i]
            p = p or 'P' in garbage[i]
            g = g or 'G' in garbage[i]

            res += travel[i-1] * (m + p + g)
        
        return res
```
```javascript []
/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
        let res = 0;

        for (const g of garbage) {
            res += g.length;
        }

        let [m, p, g] = [false, false, false];

        for (let i = travel.length; i > 0; i--) {
            m = m || garbage[i].includes('M');
            p = p || garbage[i].includes('P');
            g = g || garbage[i].includes('G');

            res += travel[i - 1] * (m + p + g);
        }

        return res;    
};
```
```java []
class Solution {
    public int garbageCollection(String[] garbage, int[] travel) {
        int res = 0;

        for (String g : garbage) {
            res += g.length();
        }

        boolean m = false, p = false, g = false;

        for (int i = travel.length; i > 0; i--) {
            m = m || garbage[i].contains("M");
            p = p || garbage[i].contains("P");
            g = g || garbage[i].contains("G");

            res += travel[i-1] * ((m ? 1 : 0) + (p ? 1 : 0) + (g ? 1 : 0));
        }

        return res;      
    }
}
```
```C++ []
class Solution {
public:
    int garbageCollection(std::vector<std::string>& garbage, std::vector<int>& travel) {
        int res = 0;

        for (const string& g : garbage) {
            res += g.length();
        }

        bool m = false, p = false, g = false;

        for (int i = travel.size(); i > 0; i--) {
            m = m || garbage[i].find("M") != string::npos;
            p = p || garbage[i].find("P") != string::npos;
            g = g || garbage[i].find("G") != string::npos;

            res += travel[i-1] * ((m ? 1 : 0) + (p ? 1 : 0) + (g ? 1 : 0));
        }

        return res;
    }
};
```

---

##### Python Tips

`m`, `p` and `g` are boolean flags. Python considers `True` as `1` and `False` as `0`, so please execute this if you want to check.

```
print(True + 1)  # 2
print(False + 1)  # 1
```
That's why we can calculate like this.

```
res += travel[i-1] * (m + p + g)
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
https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4312501/video-give-me-6-minutes-hashmap-how-we-think-about-a-solution/

video
https://youtu.be/424EOdu4TeY

\u25A0 Timeline\u3000of the video

`0:04` Think about how we calculate the answer
`0:58` Demonstrate how it works
`3:58` Coding
`5:53` Time Complexity and Space Complexity
`6:11` Summary of the algorithm with my solution code

### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4306758/video-give-me-9-minutes-how-we-think-about-a-solution/

video
https://youtu.be/Tf69tOpE4GE

\u25A0 Timeline of the video

`0:05` Try to find a solution pattern
`1:44` What if we have the same numbers in input array?
`5:37` Why it works when we skip reduction
`7:22` Coding
`8:52` Time Complexity and Space Complexity