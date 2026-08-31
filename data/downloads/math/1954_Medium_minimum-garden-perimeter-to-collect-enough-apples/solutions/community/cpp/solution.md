# C++ Easy and Simple Solution For Beginners

**Author:** RBrar
**Votes:** 17
**Link:** [https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/solutions/1375421/](https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/solutions/1375421/)

---

```
class Solution {
public:
    long long minimumPerimeter(long long neededApples) {
        long long i = 0;
        long long x = 0;
 
        while(x < neededApples){   
            x += (long long) 12*pow(i,2); 
            ++i;
        }
        return (long long) (i-1)*8;
    }
};
```

There is a pattern of apples added in each iteration. Let's see how many apples are in the perimeter of the square of each side length:

0 - Side Length 0: 0 apples on perimeter
1 - Side Length 2: 12 apples on perimeter
2 - Side Length 4: 48 apples on perimeter
3 - Side Length 6: 108 apples on perimeter ...

So the number of apples we add on each iteration is 12 * ( i ^ 2 ). We keep adding this until it becomes larger than neededApples. Then, we return the perimeter of the square.