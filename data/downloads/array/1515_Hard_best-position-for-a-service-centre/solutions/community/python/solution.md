# [Python] Gradient Descent

**Author:** delphih
**Votes:** 15
**Link:** [https://leetcode.com/problems/best-position-for-a-service-centre/solutions/731550/](https://leetcode.com/problems/best-position-for-a-service-centre/solutions/731550/)

---

Update: 
Thank **@igor84** for providing a testcase that the previous code will fail. That testcase is **[[83, 54], [64, 69], [7, 48], [47, 80]]**.
I update some parts of the code to pass that testcase. Nevertheless, this method is not guarented to find the best point. It could fall into a local optimum. 

Updated code:
```
    def getMinDistSum(self, P: List[List[int]]) -> float:
        from math import sqrt
        def dist_all(x, y):  # calculate the sum of distances from (x, y) to all points
            return sum(sqrt((x2-x)**2 + (y2-y)**2) for x2, y2 in P)

        l = len(P)
        x, y = sum(x for x, y in P) / l, sum(y for x, y in P) / l  # use centroid as the start point
        d = dist_all(x, y)  # sum of distances for initial point
        
        # step: inital searching step. choosing 10 since all point coordinates are in range [0, 100]
        # eps: since the problem demands an accuracy of 10^-5. I choose a smaller one, no reason
        # these two numbers are kind of arbitrarily choosen
        step, eps = 10, 0.000001
        div = 5  # numbers of directions to search on every point. Setting to 4 will make it equivalent to previous version
        theta = 2 * pi / div  # corresponding central angle
        while step > eps:
            for i in range(div):
                dx, dy = cos(theta*i), sin(theta*i)
                x2, y2 = x + step * dx, y + step * dy
                t = dist_all(x2, y2)
                if t < d:
                    x, y, d = x2, y2, t
                    flag = True
                    break
            else:
                step /= 2  # if no better point is found, shrink ths step for a closer search
        return d
```

Last version:
```
    def getMinDistSum(self, P: List[List[int]]) -> float:
        from math import sqrt
        def dist_all(x, y):  # calculate the sum of distances from (x, y) to all points
            return sum(sqrt((x2-x)**2 + (y2-y)**2) for x2, y2 in P)

        l = len(P)
        x, y = sum(x for x, y in P) / l, sum(y for x, y in P) / l  # use centroid as the start point
        d = dist_all(x, y)  # sum of distances for initial point
        
        # step: inital searching step. choosing 10 since all point coordinates are in range [0, 100]
        # eps: since the problem demands an accuracy of 10^-5. I choose a smaller one, no reason
        # these two numbers are kind of arbitrarily choosen
        step, eps = 10, 0.000001
        while step > eps:
            flag = False  # Do we find a better point in this round?
            for dx, dy in ((0,1),(0,-1),(1,0),(-1,0)):
                x2, y2 = x + step * dx, y + step * dy
                t = dist_all(x2, y2)
                if t < d:  # do find a better solution point
                    x, y, d = x2, y2, t
                    flag = True
                    break
            if not flag: step /= 2  # if no better point is found, shrink ths step for a closer search
        return d
```