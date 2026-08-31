# 【Video】Check 3 plots

**Author:** niits
**Votes:** 220
**Link:** [https://leetcode.com/problems/can-place-flowers/solutions/5526007/](https://leetcode.com/problems/can-place-flowers/solutions/5526007/)

---

# Intuition
Check 3 plots.

---

# Solution Video

https://youtu.be/VK0siutcv0Q

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 4,897
Thank you for your support!

---

# Approach
We have a rule. It says " flowers cannot be planted in adjacent plots". Let's think about these question with 2 examples below.

##### Example 1

```
flowerbed: [1,0,0,0,1]
n = 1
```
We will plant one flower at index `1`, `2` or `3`. Let's see one by one.

Simply, we can judge if we can plant the flower at current plot or not with this check.

---

\u2B50\uFE0F Points

Check left of current plot and right of current plot

---

At index `1`.
```
flowerbed: [1,0,0,0,1]

`left` plot is not okey because it's `1` which means `planted`.
`right` plot is okey because it's `0` which means `unplanted`.

In the end, we cannnot plant the flower at index `1`.

flowerbed: [1,0,0,0,1]
```

At index `2`.
```
flowerbed: [1,0,0,0,1]

`left` plot is okey because it's `0` which means `unplanted`.
`right` plot is okey because it's `0` which means `unplanted`.

In the end, we can plant the flower at index `2`.

flowerbed: [1,0,1,0,1]
```

At index `3`.
```
flowerbed: [1,0,1,0,1]

`left` plot is okey because it's `1` which means `planted`.
`right` plot is okey because it's `1` which means `planted`.

In the end, we cannnot plant the flower at index `3`.

flowerbed: [1,0,1,0,1]
```

```
return True
```

##### Example 2

```
flowerbed: [0,0,1,0,1]
n = 1
```
We have `0` at index `0` and `1`.

At index `1`, we cannnot plant the flower because `right` plot(= index `2`) has a flower.

How about index `0`. The `right` plot is okay because it's `0`. For `left` plot, it's out of bounds.


---

\u2B50\uFE0F Points

We can consider out of bounds as `unplanted`.

---

At index `0`

```
flowerbed: [0,0,1,0,1]

`left` plot is okey. It's out of bounds which means `unplanted`.
`right` plot is okey. It's `0` which means `unplanted`.

In the end, we can plant the flower at index `0`.

flowerbed: [1,0,1,0,1]
```

```
return True
```
We can apply idea of Example `2` to the last index. The `right` plot of the last index is out of bounds.

More precisely,


---
When current index `0`, `left` plot is always `True`. 
When current index is the last index, `right` plot is always `True`. 

---

https://youtu.be/bU_dXCOWHls

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
    
        for i in range(len(flowerbed)):
            left = i == 0 or flowerbed[i-1] == 0
            right = i == len(flowerbed) - 1 or flowerbed[i+1] == 0

            if left and right and flowerbed[i] == 0:
                flowerbed[i] = 1
                n -= 1
        
        return n <= 0
```
```javascript []
var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        const left = i === 0 || flowerbed[i - 1] === 0;
        const right = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
        
        if (left && right && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n <= 0;   
};
```
```java []
class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        for (int i = 0; i < flowerbed.length; i++) {
            boolean left = i == 0 || flowerbed[i - 1] == 0;
            boolean right = i == flowerbed.length - 1 || flowerbed[i + 1] == 0;
            
            if (left && right && flowerbed[i] == 0) {
                flowerbed[i] = 1;
                n--;
            }
        }
        return n <= 0;        
    }
}
```
```C++ []
class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        for (int i = 0; i < flowerbed.size(); i++) {
            bool left = i == 0 || flowerbed[i - 1] == 0;
            bool right = i == flowerbed.size() - 1 || flowerbed[i + 1] == 0;
            
            if (left && right && flowerbed[i] == 0) {
                flowerbed[i] = 1;
                n--;
            }
        }
        return n <= 0;        
    }
};
```

## Step by Step Algorithm

1. **Loop through each plot in the flowerbed**:
   - The loop iterates through each plot in the flowerbed.

```python
for i in range(len(flowerbed)):
```

2. **Check if the current plot and its adjacent plots are empty**:
   - Determine if the left plot and right plot of the current plot are empty. If the current plot is at the edge of the flowerbed, consider the adjacent plot as empty.
   - The condition `left` checks if the left plot is empty.
   - The condition `right` checks if the right plot is empty.

```python
left = i == 0 or flowerbed[i-1] == 0
right = i == len(flowerbed) - 1 or flowerbed[i+1] == 0
```

3. **Check if it's possible to plant a flower in the current plot**:
   - If the left plot, right plot, and current plot are all empty, it's possible to plant a flower.
   - If all conditions are met, plant a flower in the current plot by changing its value to 1 and decrement the number of flowers remaining to be planted (`n`).

```python
if left and right and flowerbed[i] == 0:
    flowerbed[i] = 1
    n -= 1
```

4. **Check if all flowers have been planted**:
   - After iterating through all plots, check if the number of flowers remaining to be planted (`n`) is less than or equal to 0. If so, return `True`, indicating that all flowers have been successfully planted without violating the adjacency rule. Otherwise, return `False`.

```python
return n <= 0
```

So, the algorithm iterates through each plot in the flowerbed, checks if it's possible to plant a flower in that plot, and updates the flowerbed accordingly. Finally, it returns `True` if all flowers have been successfully planted, and `False` otherwise.

---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

##### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

##### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

##### My previous video - Trapping Rain Water

https://youtu.be/7yg_WJA35uo

