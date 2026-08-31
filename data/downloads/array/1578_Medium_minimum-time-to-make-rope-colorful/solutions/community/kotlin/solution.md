# Interview Approach Solution

**Author:** cs_iitian
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/4463244/](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/4463244/)

---

# Video Solution
https://youtu.be/ccP1Vxd7d64

`What if all balloons are one after another ?`

You don\u2019t need to remove anything.

`What if two balloons are consecutive ?`

You will remove the balloon with minimum neededTime.

So let\u2019s say we have [R, B, B] with neededTime [1, 3, 4]

Now we have to remove one of B, so I will remove the one which need 3 time unit.

`What if more than two balloons are consecutive ?`

In this case we have to remove all the balloons except one balloons which has highest neededTime.

Why ?

let\u2019s see through example

[R, B, B, B, B] \u21D2 [1, 2, 4, 5, 2] Now here we can see from 4 B , we have to remove 3 B.

Which one will you remove ?

Obviously those have minimum neededTime, so one would be left which has highest maximum neededTime.

````none
So we will calculate sum and then subtract maximum, 
which will give us minimum time to remove consecutive ballons.
````

That\u2019s the logic

```Kotlin []
class Solution {
    fun minCost(colors: String, neededTime: IntArray): Int {
        var ans = 0
        var i = 0
        while(i < colors.length) {
            var j = i+1
            var sum = neededTime[i]
            var max = neededTime[i]
            while(j < colors.length && colors[j] == colors[i]) {
                if(max < neededTime[j]) max = neededTime[j]
                sum += neededTime[j]
                j++
            }
            if(j >= i+1) {
                ans += sum - max
            }
            i = j
        }
        return ans
    }
}
```

Time Complexity: O(n)

Space Complexity: O(1)

# One Loop Solution

Here, we will keep track of maximum and in our result we will just add minimum.
```Kotlin []
class Solution {
    fun minCost(colors: String, neededTime: IntArray): Int {
        var ans = 0
        var max = 0
        for(i in 0 until colors.length) {
            if(i > 0 && colors[i] == colors[i-1]) {
                ans += Math.min(max, neededTime[i]);
                max = Math.max(max, neededTime[i]);
            } else {
                max = neededTime[i]
            }
        }
        return ans
    }
}
```

# Upvote it \uD83D\uDE42

![image.png](./images/0.png)
