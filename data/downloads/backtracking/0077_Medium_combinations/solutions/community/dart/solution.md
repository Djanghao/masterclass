# 🍏Two Similar Solutions. One 100% Time Beats, Second 100% Space Beats. With Explanation.

**Author:** Lainaaa
**Votes:** 4
**Link:** [https://leetcode.com/problems/combinations/solutions/3454065/](https://leetcode.com/problems/combinations/solutions/3454065/)

---

# Intuition
First I came up with the first solution, and then I tried to optimize it from space, so the second one happened. Everyone knows that on a leetcode after each submission, you can get different time and space complexity, so the first solution turned out to be 100% beats in time, and the second in space. Although the worst-case time complexity is the same, in general the first solution performs slightly better.

I prefer to disassemble the code myself without reading the comments, so I understand better. Therefore, at the end you will find code both with and without comments.

# Approach
This code generates all possible combinations of k numbers from 1 to n inclusive using **recursion** and **backtracking**.


The combine function first initializes an empty List of Lists called result. If k is equal to 1, it directly adds a List containing integers from 1 to n in result. Otherwise, it calls the addNumber function for each number i from 1 to n. 


The addNumber function performs a recursive backtracking algorithm. First, it checks whether the difference between n and the last element of the current List is less than the difference between k and the length of the current List. This is to avoid adding more numbers than needed to create valid combinations. 


If the condition passes, it loops through numbers from the next element of the last number in current to n. For each i, it creates a new List containing a copy of current and appends i to the copy. If this new List has a length of k, it directly adds it to matrix. Otherwise, it recursively calls addNumber with the new List, and the function continues to loop through the remaining numbers. 


Eventually, when all possible combinations have been generated, the result List is returned containing all the valid combinations.

# Complexity
- Time complexity O(n choose k):
Both solutions have a time complexity of O(n choose k), which is the number of possible combinations. The first solution generates all possible combinations by iterating through all n numbers and then recursively adding numbers to the current combination until it reaches k length. This results in a time complexity of O(n choose k). The second solution uses backtracking to traverse through all possible combinations by adding each number to the current combination and then recursively calling the function for the remaining numbers. This also has a time complexity of O(n choose k).
- Space complexity for the **first** solution O(n choose k)
- Space complexity for the **second** solution O(n)
For space complexity, the first solution uses additional space for the result List and for the current combination List in the addNumber function. This results in a space complexity of O(n choose k). The second solution only uses additional space for the result List and the current combination List (which is modified in place), resulting in a space complexity of O(k).

# Code
# - First approach with comments
```
class Solution {

  // Function takes in n and k as parameters and returns the result List
  List<List<int>> combine(int n, int k) {
    List<List<int>> result = []; // initialize an empty result List
    if (k == 1){ // if k is 1, add all numbers from 1 to n to the result List as single-item Lists
      for (var i = 1; i <= n; i++) {
        result.add([i]);
      }
      return result;
    }
    for (var i = 1; i <= n; i++) { // iterate from 1 to n, and call the addNumber function for each number
      addNumber(n, k, [i], result);
    }
    return result; // return the result List
  }

  // Function takes in n, k, current combination, and result matrix as parameters
  void addNumber(int n, int k, List<int> current, List<List<int>> matrix){
    if (n - current.last < k - current.length) { // if there aren't enough numbers left to fill k-length combinations, return
      return;
    }
    for (var i = current.last + 1; i <= n; i++) { // iterate from the next number after the last in the current combination, to n
      List<int> number = [...current]; // create a new List with the current numbers
      number.add(i); // add the current number to the new List
      if (number.length == k){ // if the new List has reached k length, add it to the result matrix
        matrix.add(number);
        continue;
      }else{ // otherwise, call the addNumber function recursively with the new List as the current combination
        addNumber(n, k, number, matrix);
      }
    }
  }
}

```
# - Second approach with comments
```
// Define the Solution class
class Solution {

  // Define the combine function which takes in n and k as parameters and returns the result List
  List<List<int>> combine(int n, int k) {
    
    // Initialize an empty result List
    List<List<int>> result = [];

    // Initialize an empty current List
    List<int> current = [];

    // Call the addNumber function with the given parameters
    addNumber(n, k, 1, current, result);

    // Return the result List
    return result;
  }

  // Define the addNumber function which takes in n, k, start, current and matrix as parameters
  void addNumber(int n, int k, int start, List<int> current, List<List<int>> matrix){
    
    // If the current List has a length equal to k, add it to the result List and return
    if (current.length == k) {
      matrix.add([...current]);
      return;
    }

    // Loop through the numbers from start to n
    for (var i = start; i <= n; i++) {
      
      // Add the current number to the current List
      current.add(i);

      // Recursively call the addNumber function with the next number as the start parameter
      addNumber(n, k, i + 1, current, matrix);

      // Remove the last number from the current List
      current.removeLast();
    }
  }
}
```
# - First approach withount comments
```
class Solution {
  List<List<int>> combine(int n, int k) {
    List<List<int>> result = [];
    if (k == 1){
      for (var i = 1; i <= n; i++) {
        result.add([i]);
      }
      return result;
    }
    for (var i = 1; i <= n; i++) {
      addNumber(n, k, [i], result);
    }

    return result;
  }

  void addNumber(int n, int k, List<int> current, List<List<int>> matrix){
    if (n - current.last < k - current.length) {
      return;
    }
    for (var i = current.last + 1; i <= n; i++) {
      List<int> number = [...current];
      number.add(i);
      if (number.length == k){
        matrix.add(number);
        continue;
      }else{
        addNumber(n, k, number, matrix);
      }
    }
  }
}
```
# - Second approach withount comments
```
class Solution {
  List<List<int>> combine(int n, int k) {
    List<List<int>> result = [];
    List<int> current = [];

    addNumber(n, k, 1, current, result);

    return result;
  }

  void addNumber(int n, int k, int start, List<int> current, List<List<int>> matrix){
    if (current.length == k) {
      matrix.add([...current]);
      return;
    }
    for (var i = start; i <= n; i++) {
      current.add(i);
      addNumber(n, k, i + 1, current, matrix);
      current.removeLast();
    }
  }
}
```
If you liked this solution, then do not forget to rate it please \uD83D\uDC4D\uD83C\uDFFB