# C++ and C# easy solution with just one line!Explaned solution.

**Author:** aloneguy
**Votes:** 8
**Link:** [https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/3420095/](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/3420095/)

---

# Intuition:
(3,11) =>[3,5,7,9,11] => (11-3):2+1=5
(3,8)  =>[3,5,7] => (8-3):2+1=3
(4,10) =>[5,7,9] => (10-4):2=3
Formula:if low and high are both even then return (high-low)/2
Otherwise return (high-low)/2+1;
<!-- Describe your first thoughts on how to solve this problem. -->

![photo_2023-04-15_20-53-38.jpg](./images/0.jpeg)
![photo_2023-04-15_20-53-33.jpg](./images/1.jpeg)


```C++ []
class Solution {
public:
    int countOdds(int low, int high) {
        return (low%2==0 and high%2==0)?(high-low)/2:(high-low)/2+1;
    }
};
```
```C# []
public class Solution {
    public int CountOdds(int low, int high) {
        return (low%2==0 && high%2==0)?(high-low)/2:(high-low)/2+1;
    }
}
```
![Vote.png](./images/2.png)
