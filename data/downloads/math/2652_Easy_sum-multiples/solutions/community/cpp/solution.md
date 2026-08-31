# Greedy O(n)  & O(1) Solution  || Very simple & Easy to Understand

**Author:** kreakEmp
**Votes:** 24
**Link:** [https://leetcode.com/problems/sum-multiples/solutions/3446041/](https://leetcode.com/problems/sum-multiples/solutions/3446041/)

---


# Solution 1: 
Simple and strate forward bruteforce. space O(1) & time complexity O(n)
```
class Solution {
public:
    int sumOfMultiples(int n) {
        int sum = 0;
        for(int i = 1; i <= n; ++i){
            if(i%3 == 0 || i%5 == 0|| i%7 == 0) sum += i;
        }
        return sum;
    }
};
```

# Solution 2: 
Alternate solution with O(1) space & O(1) time complexity:
1. To get sum of all factors on k upto n, we can have this formula (sum of Arithmatic progression): k * (n/k) * (n/k + 1) / 2
If you woder how we get above formula then check this out :
   k + 2k + 3k + 4k + ..... xk = k (1 + 2 + 3 + 4 ... x) = k( (x )( x + 1)/2 )
   where x is the largest value of (xk <= n) => (x <= n/k)

2. Above formula is implemented on cal funtion.
3. To get the ans, we can sum :
    sum all the factor of 3 + sum of all the factors of 5 + sum of all the factors of 7 - sum of all the factor of 3 * 5 - sum of all the factors of 5 * 7 - sum of all the factors of 3 * 7 + sum of all the factors of 3 * 5 * 7.
```
class Solution {
public:
    int cal(int n, int k){ return k *(n/k)*(n/k+1)/2; }
    int sumOfMultiples(int n) {
        return cal(n, 3) + cal(n, 5) + cal(n, 7) - cal(n, 3*5) - cal(n, 5*7) - cal(n, 3*7) + cal(n, 3*5*7);
    }
};
```
<b>Here is an article of my recent interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted