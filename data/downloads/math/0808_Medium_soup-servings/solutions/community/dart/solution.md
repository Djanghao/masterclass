# Dart Solution W/ Explanation (100%)

**Author:** AndreLock
**Votes:** 2
**Link:** [https://leetcode.com/problems/soup-servings/solutions/3573356/](https://leetcode.com/problems/soup-servings/solutions/3573356/)

---

# Approach
Given a value n where n is the amount of soup of type a and b return the probability that a will run out first plus half the probability that a and b run out at the same time.

To solve this I used DP, memoization, and recursion. I recursively called the soupServe function with each possible service option. Once you reach the bottom it will then return  .5 if a and b = 0 or 1 if only b = 0. Using this we then add the probabilities of each option together and divide by the options to get the probabilities. From here we memoize the solution so we do not need to solve again from the starting point of a = a given number and b = a given number.

Note: If the value is greater than 4800 then the probability of b reaching 0 first is so close to 1 that a double can not be accurate at that point so instead of running into a stack overflow issue it is best to return 1 even though theoretically it could compute without it presuming the stack depth of your system is astronomically high.

Time: 303ms Beats: 100%
Memory: 143MB Beats: 100%


# Code
```
class Solution {
  double soupServings(int n) {
      if(n > 4800){
          return 1;
      }
      return soupServe(n,n, {});
  }
  double soupServe(int a, int b, Map<String,double> memo){
      if(a <= 0 && b <= 0){
          return .5;
      }
      if(b <= 0){
          return 0;
      }
      if(a <= 0){
          return 1.0;
      }
      String current_str = a.toString() + ' ' + b.toString();
      if(memo.containsKey(current_str)){
          return (memo[current_str] ?? 0.0);
      }
      double prob = 0;
      prob += soupServe(a - 100 , b, memo);
      prob += soupServe(a-75, b-25, memo);
      prob += soupServe(a-50, b-50, memo);
      prob += soupServe(a-25, b-75, memo);
      memo[current_str] = prob/4;
      return prob / 4;
  }
}
```