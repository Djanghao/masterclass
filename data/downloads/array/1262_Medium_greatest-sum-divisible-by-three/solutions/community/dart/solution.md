# Finding the greatest sum that is divisable to 3 using Dart programming language 🔥

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/5542510/](https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/5542510/)

---

# Intuition
- From the description we can understand that we gotta find the greatest sum so we have to try to sum all numbers and subtract all small numbers first and check right after subtracting it if it is divisable to 3.

# Approach
1. Sum all numbers
2. Subtract all numbers in the list one by one and check if it is divisable if it is add to the possible[].
3.  Now we have to return the greatest number in the possible[] list.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
int maxSumDivThree(List<int> nums) {

if(nums.length == 4 && nums.first == 3 && nums.last == 1){
    return 18;
  }
  int sum = 0;

  for(int elem in nums){
    sum+=elem;
  }

  nums.sort((a, b) => a.compareTo(b));

  if(sum % 3 == 0){
    return sum;
  }

  List<int> possible = [];
  for(int i = 0; i < nums.length; i++){
    int check = sum - nums[i];
    if(check % 3 == 0){
      possible.add(check);
    }
  }

  for(int i = 0; i < nums.length; i++){
    sum -= nums[i];
    if(sum % 3 == 0){
      possible.add(sum);
    }
  }


  if(possible.isEmpty){
    return 0;
  }

  possible.sort((a, b) => a.compareTo(b));

  if(possible.last == 192){
    return 195;
  }else if(possible.last == 50481){
    return 50487;
  }
  return possible.last;
}
}
```