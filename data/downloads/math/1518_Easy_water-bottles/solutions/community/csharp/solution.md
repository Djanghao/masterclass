# Solution using simple Maths

**Author:** Shree_Govind_Jee
**Votes:** 2
**Link:** [https://leetcode.com/problems/water-bottles/solutions/4319300/](https://leetcode.com/problems/water-bottles/solutions/4319300/)

---

# Complexity
- Time complexity:$$O(log(numBottles))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public int numWaterBottles(int numBottles, int numExchange) {
        int res=0;
        int rem=0;
        while(numBottles != 0){
            res += numBottles;

            numBottles += rem;
            rem = numBottles%numExchange;
            numBottles = numBottles/numExchange;
        }
        return res;
    }
}
```
```C++ []
class Solution {
public:
    int numWaterBottles(int numBottles, int numExchange) {
        int res=0;
        int rem=0;
        while(numBottles != 0){
            res += numBottles;

            numBottles += rem;
            rem = numBottles%numExchange;
            numBottles = numBottles/numExchange;
        }
        return res;
    }
};
```
```C []
int numWaterBottles(int numBottles, int numExchange) {
    int res=0;
        int rem=0;
        while(numBottles != 0){
            res += numBottles;

            numBottles += rem;
            rem = numBottles%numExchange;
            numBottles = numBottles/numExchange;
        }
        return res;
}
```
```C# []
public class Solution {
    public int NumWaterBottles(int numBottles, int numExchange) {
        int res=0;
        int rem=0;
        while(numBottles != 0){
            res += numBottles;

            numBottles += rem;
            rem = numBottles%numExchange;
            numBottles = numBottles/numExchange;
        }
        return res;
    }
}
```
