# Easy Python3 Solution | Beats 100% 🔥 | O(nlogn) Time Compx | O(1) Space Compx | Geometry

**Author:** Nalin7Kaushik
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimize-manhattan-distances/solutions/4949548/](https://leetcode.com/problems/minimize-manhattan-distances/solutions/4949548/)

---

# Time Complexity : O(NlogN)
# Space Complexity : O(1)

# Explanation
Here insted of using **Manhattan Distance** i be using **Chebyshev distance** to ease the soution

Consider a rectangle ABCD and our all points lies inside them.

```
A----------------------------B
|                            |
|                            |
|                            |
|                            |
C----------------------------D
```

### Step1: 
Sort the points based on sum of x,y coordinates.

    points.sort(key = lambda x: x[0] + x[1])

So after sorting in this basis the $$'first'$$ point will be neares to C since small value of x and small value of y will result in point nearest to C. Similarly the $$'last'$$ point will be nearst to B. 


```
A----------------------------B
|                       last |
|                            |
|                            |
|  first                     |
C----------------------------D
```

### Step2: 
According to question we have to caluclate maximum **Chebyshev distance** after removing each points at once. Since we know the maximum distance will always be between this first and last point, so we will calculate **Chebyshev distance** after removing $$'first'$$ point then $$'last'$$ point.

    max_man_dis.append(fun(points[1:]))  #operates on all point except 1st
    max_man_dis.append(fun(points[:-1])) #operates on point except last



### Step3: fun(points) explaination
- mx_out keep track of point closest to **B** as max(u+v) will be the point closest to **B**
- mn_out keep track of point closest to **C** as min(u+v) will be the point closest to **C**
- mx_out keep track of point closest to **D** as max(u-v) will be the point closest to **D**
- mx_out keep track of point closest to **A** as min(u-v) will be the point closest to **A**

now the maximum **Distance** will always be either of diagonals i.e. **AD** or **CB**

So we return max from AD and CB
    
    return max(mx_out - mn_out, mx_in - mn_in)

### Step4:
Performing same pattern for points near to **A** and **D**. Diagonal AD

```
A----------------------------B
|  first                     |
|                            |
|                       last |
|                            |
C----------------------------D
```

    points.sort(key = lambda x: x[0] - x[1])
    max_man_dis.append(fun(points[1:]))
    max_man_dis.append(fun(points[:-1]))

### Step5

Return minmum distance from all the 4 maximum Chebyshev distance we obtained.

    return min(max_man_dis)



# **Upvote if you like the approach \uD83D\uDC4D**


# Code
```
def fun(points):
    mx_out = max(u + v for u, v in points)
    mn_out = min(u + v for u, v in points)
    
    mx_in = max(u - v for u, v in points)
    mn_in = min(u - v for u, v in points)
    
    return max(mx_out - mn_out, mx_in - mn_in)

class Solution:
    def minimumDistance(self, points: List[List[int]]) -> int:
        max_man_dis = []
        
        points.sort(key = lambda x: x[0] + x[1])
        max_man_dis.append(fun(points[1:]))
        max_man_dis.append(fun(points[:-1]))

        points.sort(key = lambda x: x[0] - x[1])
        max_man_dis.append(fun(points[1:]))
        max_man_dis.append(fun(points[:-1]))
        
        return min(max_man_dis)
```