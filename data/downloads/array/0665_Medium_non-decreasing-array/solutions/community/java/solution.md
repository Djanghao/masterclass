# JS, Python, Java, C++ | Simple Solution w/ Visual Explanation

**Author:** sgallivan
**Votes:** 459
**Link:** [https://leetcode.com/problems/non-decreasing-array/solutions/1190763/](https://leetcode.com/problems/non-decreasing-array/solutions/1190763/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

This problem seems easy at first read. If we iterate through the nums array (**N**), count the number of instances in which an element is lower than the one preceeding (**err**), and then see that count go above **1**, then we should be able to **return false**. The problem becomes more difficult, however, once we realize that we're allowed to modify one element, which will naturally impact its relationship with the surrounding elements.

With that in mind, we can think of the different possible scenarios faced when we find an incidence of decreasing value. Consider the base scenario, with **N[i-1] = a** and **N[i] = b**:

![Visual 1](https://i.imgur.com/2iLebXQ.png)

In this base scenario, we can see that there are two ways to fix this decrease, either by decreasing **N[i-1]** to **b** or by increasing **N[i]** to **a**. But which one is better? To answer that, we'll have to observe the surrounding elements (**N[i-2]** and **N[i+1]**).

Right away, we can see that there are three possible scenarios for each of the surrounding elements. They can either be larger than **a** (**x >= a**), in between **a** and **b** (**b < y < a**) or smaller than **b** (**z <= b**):

![Visual 2](https://i.imgur.com/Msb0qLW.png)

Scenarios **XAB** and **ABZ** can quickly be determined to trigger a **return** of **false** because in both cases the **err** count will increment to **2**:

![Visual 3](https://i.imgur.com/x6WHkcN.png)

Things get more complicated, however, once the values are staggered. In the case of **ZABX**, we can _either_ move **a** down or **b** up in order to achieve increasing values, while in **YABX** we can _only_ move **b** up and in **ZABY** we can _only_ move **a** down:

![Visual 4](https://i.imgur.com/fXF5aDX.png)

In the final scenario, **YABY**, there is no possible way to fix the array with one modification, even though there's only one initial incidence of a descending value:

![Visual 5](https://i.imgur.com/IKOSWmR.png)

With this all in mind, we can write our function to **return false** if we see **err > 1** or if we see the **YABY** scenario. If we reach the end without triggering either condition, we can **return true**.

 - _**Time Complexity: O(N)** where N is the length of N_
 - _**Space Complexity: O(1)** with no modification of inputs_

---

#### ***Implementation:***

There are only minor differences in the code of all four languages.

---

#### ***Javascript Code:***

The best result for the code below is **84ms / 40.9MB** (beats 91% / 90%).
```javascript
var checkPossibility = function(N) {
    for (let i = 1, err = 0; i < N.length; i++)
        if (N[i] < N[i-1])
            if (err++ || (i > 1 && i < N.length - 1 && N[i-2] > N[i] && N[i+1] < N[i-1]))
                return false 
    return true
};
```

---

#### ***Python Code:***

The best result for the code below is **172ms / 15.1MB** (beats 96% / 99%).
```python
class Solution:
    def checkPossibility(self, N: List[int]) -> bool:
        err = 0
        for i in range(1, len(N)):
            if N[i] < N[i-1]:
                if err or (i > 1 and i < len(N) - 1 and N[i-2] > N[i] and N[i+1] < N[i-1]):
                    return False
                err = 1
        return True
```

---

#### ***Java Code:***

The best result for the code below is **0ms / 39.9MB** (beats 100% / 91%).
```java
class Solution {
    public boolean checkPossibility(int[] N) {
        for (int i = 1, err = 0; i < N.length; i++)
            if (N[i] < N[i-1])
                if (err++ > 0 || (i > 1 && i < N.length - 1 && N[i-2] > N[i] && N[i+1] < N[i-1]))
                    return false;
        return true;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **16ms / 26.8MB** (beats 98% / 100%).
```c++
class Solution {
public:
    bool checkPossibility(vector<int>& N) {
        for (int i = 1, err = 0; i < N.size(); i++)
            if (N[i] < N[i-1])
                if (err++ || (i > 1 && i < N.size() - 1 && N[i-2] > N[i] && N[i+1] < N[i-1]))
                    return false;
        return true;
    }
};
```