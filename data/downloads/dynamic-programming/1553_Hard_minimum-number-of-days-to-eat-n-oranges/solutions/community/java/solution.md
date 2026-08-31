# Java O(log^2N) beats 100% time with explanation

**Author:** NKwatra
**Votes:** 33
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/794351/](https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/794351/)

---

There are 3 options for each vaue of N. If we solve it as a classic DP problem, trying out all 3 options and taking the best of them, it would lead to a complexity of O(N) {Since one of the options reduces n by 1 in each step, it would go to O(N) if we evaluate this option}. Instead what we can do is we can evaluate the other two options and we would get a complexity of O(log<sup>2</sup> N). 

Logic for doing  1+ min( (n%2) + f(n/2), (n%3) + f(n/3) ) : 
Since we need to eliminate evaluation of f(n-1), What we do is we only evaluate for  n, when n % 2 = 0  or n % 3 = 0.  If it is not the case, we simple assume that we took a number of steps, where we ate 1 orange each day. 

Consider a case where n = 2m + 1, 
if we choose to eat 1 orange today, we have even number of oranges left for tomorrow. So we are adding n % 2 for today, when we ate 1 orange.

On a similar ground we are adding n % 3  to the other option and evaluating only cases when n % 2 =0 or n % 3 = 0. 

Another **important** thing to note is that we are not using an array of size n (or n +1) as in a classic DP problem. This is because we would be storing f(x) only for some values of x, not all. So our array would be sparse and there would be wastage of space (leading to MLE). Instead we can use a map and reduce the amount of space required.

**JAVA CODE**

```
class Solution {
    private HashMap<Integer,Integer> mp = new HashMap<>();
    public int minDays(int n) {
        if(n <= 2)
            return n;
        if(mp.containsKey(n))
            return mp.get(n);
        
        mp.put(n, 1 + Math.min(n % 2 + minDays(n/2), n % 3 + minDays(n/3)));
        return mp.get(n);
    }
}
```


