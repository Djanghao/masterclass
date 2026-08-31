# 100% Dart Solution W/ Explanation (Backtracking)

**Author:** AndreLock
**Votes:** 1
**Link:** [https://leetcode.com/problems/combination-sum-iii/solutions/3573280/](https://leetcode.com/problems/combination-sum-iii/solutions/3573280/)

---


# Approach
Given a number k where k is the number of values to add together and n is the target value return all combinations of numbers 1-9 that add up to n where no numbers 1-9 are used twice in the same list, and no duplicate lists are returned. 

To do this I first created all of the options (1-9). I then called a function that takes the number of values needed, the target number, and the remaining options. For each iteration it tries to see if all options create viable answers if they do that means that the length of the list is k and the target = 0. Then the list is returned to the parent which adds on the value that is recursed with moving up until reaching the top.

Note: In order to not return duplicate results I made sure to use a sublist starting from the checked value that way you will not remove just a single value and thus try 1 , 3 and 3 , 1 which would return permutations not combinations.

Time: 263ms Beats: 100%
Memory: 141.6MB Beats: 100%

# Code
```
class Solution {
  List<List<int>> combinationSum3(int k, int n) {
      List<int> opts = [];
      for(int i = 1 ; i <= 9 ; ++i){
          opts.add(i);
      }
      return combinations(opts, n , k);
  }
  List<List<int>> combinations(List<int> options , int target, int nums){
      if(nums == 0){
          if(target == 0){
              return [[]];
          }
          return [];
      }
      List<List<int>> return_list = [];
      for(int i = 0 ; i < options.length ; ++i){
          List<int> opts_new = options.sublist(i + 1);
          List<List<int>> combos = combinations(opts_new , target - options[i] , nums - 1);
          for(int x = 0 ; x < combos.length ; ++x){
              return_list.add(combos[x]);
              return_list[return_list.length - 1].add(options[i]);
          }
      }
      return return_list;
  }
}
```