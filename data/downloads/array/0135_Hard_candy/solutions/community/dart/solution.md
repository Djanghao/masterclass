# Easy Approach in Dart and also in TypeScript

**Author:** 710sejal
**Votes:** 2
**Link:** [https://leetcode.com/problems/candy/solutions/3620854/](https://leetcode.com/problems/candy/solutions/3620854/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

A shorter and easier-to-write solution to the problem of distributing candies to children based on their ratings can be achieved using a single iteration through the ratings array. Here's a simplified approach:
1. Initialize the candies array with all elements set to 1, ensuring that each child receives at least one candy.
2. Traverse the ratings array from left to right, starting from the second child.
3. If the current child's rating is greater than the previous child's rating, assign candies[i] = candies[i - 1] + 1, ensuring the current child receives one more candy than the previous child.
4. Traverse the ratings array from right to left, starting from the second-to-last child.
5. If the current child's rating is greater than the next child's rating, and their current assigned number of candies (candies[i]) is less than or equal to the next child's candies plus one (candies[i + 1] + 1), update candies[i] to be one more than the next child's candies.
6. Calculate and return the sum of all elements in the candies array. This represents the minimum number of candies needed to distribute among the children while meeting the requirements.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize an array candies of the same length as the ratings array, with all elements set to 1.
2. Traverse the ratings array from left to right:
   - Compare the current child's rating with its left neighbor's     rating.
   - If the current child has a higher rating than its left neighbor, assign candies[i] = candies[i - 1] + 1, ensuring the current child receives one more candy than the left neighbor
3. Traverse the ratings array from right to left:
   - Compare the current child's rating with its right neighbor's rating
   - If the current child has a higher rating than its right neighbor and its assigned number of candies (candies[i]) is less than or equal to its right neighbor's candies plus one (candies[i + 1] + 1), update candies[i] to be one more than its right neighbor's candies.
4. Calculate the sum of all elements in the candies array, representing the minimum number of candies needed to distribute among the children.
5. Return the sum as the result.
```
function distributeCandies(ratings):
    n = length of ratings
    candies = array of size n with all elements initialized to 1
    
    // Traverse from left to right
    for i from 1 to n-1 do:
        if ratings[i] > ratings[i-1] then:
            candies[i] = candies[i-1] + 1
            
    // Traverse from right to left
    for i from n-2 to 0 do:
        if ratings[i] > ratings[i+1] and candies[i] <= candies[i+1] + 1 then:
            candies[i] = candies[i+1] + 1
            
    sum = sum of all elements in candies
    return sum
```
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
## Dart
```
class Solution {
  int candy(List<int> ratings) {
      int n = ratings.length;
      List<int> candies = List<int>.filled(n,1);
      for(int i=1;i<n;i++){
          if(ratings[i] > ratings[i-1]){
              candies[i] = candies[i-1]+1;
          }
      }
      for(int i =n-2;i>=0;i--){
          if(ratings[i+1] < ratings[i] && candies[i] <= candies[i+1]){
            candies[i] = candies[i+1]+1;
          }
      }
      
      int sum = candies.reduce((a,b) => a+b);
      return sum;
  }
}
```
## TypeScript
```
let candies = new Array(ratings.length).fill(1);
    for(let i=1;i<ratings.length;i++){
        if(ratings[i] > ratings[i-1]){
            candies[i] = candies[i-1]+1
        }
    } 

    for(let i = ratings.length-2;i>=0;i--){
        if(ratings[i] > ratings[i+1] && candies[i] <= candies[i+1]){
            candies[i] = candies[i + 1] + 1;
        }
    }  
    
    // console.log(candies)
    let sum = candies.reduce((a,b) => a+b);
    return sum;
```    

