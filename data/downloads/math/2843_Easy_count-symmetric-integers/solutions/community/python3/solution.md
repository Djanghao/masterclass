# Neat and Clean Solution || Line to Line Explained ||  In 9 Languages🔥

**Author:** ADITYAGABA1322
**Votes:** 21
**Link:** [https://leetcode.com/problems/count-symmetric-integers/solutions/3996222/](https://leetcode.com/problems/count-symmetric-integers/solutions/3996222/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- The intuition for solving this problem involves the following steps:
 Start with a function that takes two integer inputs, low and high, which represent the range of integers you need to check for symmetry.
Initialize a variable, let's call it count, to keep track of the number of symmetric integers found within the given range. Set count to 0 initially.
Create a loop that iterates through all the integers from low to high (inclusive).

___

# Approach
<!-- Describe your approach to solving the problem. -->

The approach to solving this problem involves checking each integer within a given range to determine whether it is symmetric or not. Here's a step-by-step approach to solving it:

1. Create a function countSymmetricIntegers that takes two integer parameters: low and high, representing the range of integers to consider.
2. Initialize a variable count to 0. This variable will be used to keep track of the count of symmetric integers found within the range.
3. Iterate through all the integers from low to high (inclusive). You can use a for loop for this purpose.
4. For each integer in the range, check whether it is symmetric or not. 
5. You can do this by calling a separate function, let's call it isSymmetric, and passing the current integer as an argument.
6. Implement the isSymmetric function:
Convert the integer to a string or perform some other logic to determine if it's symmetric.
7. Check if the number meets the conditions for being symmetric. For example, you can check if the left half of the number's digits is equal to the reverse of the right half.
8. Return true if the number is symmetric and false otherwise.
9. Inside the loop in the countSymmetricIntegers function, if isSymmetric returns true for the current integer, increment the count variable by 1.
10. After the loop has finished, return the count variable, which will contain the total count of symmetric integers within the given range.

___

# Complexity
- Time complexity: O(N * k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
1.) The countSymmetricIntegers function iterates through 'n' integers in the range [low, high], where 'n' is the difference between high and low plus one (i.e., n = high - low + 1).

2.) For each integer in that range, the isSymmetric function, which has a time complexity of O(k) where 'k' is the average number of digits in the integers within the range, is called.

So, the overall time complexity of the code is indeed O(n * k), where 'n' is the number of integers in the range, and 'k' is the average number of digits for any number in the array.
- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of the code is primarily determined by the space used in the isSymmetric function.O(1), as it doesn't depend on the input size.

___


# ******Upvote******\uD83D\uDE4F\uD83C\uDFFB

___

# Code

```C++ []
class Solution {
public:
    int countSymmetricIntegers(int low, int high) {
        int res = 0;  // variable to store the result
        for(int i=low; i<=high; i++){  // loop until i is less than or equal to high
            if(isSymmetric(i)) res++;  // if the number is symmetric increment the result
        }
        return res;  // return the result
    }
    bool isSymmetric(int num){  // function to check if the number is symmetric
        string s = to_string(num);  // variable to store the string
        int n = s.length();  // variable to store the length of the string
        if(n%2 == 1) return false;  // if the length of the string is odd return false
        int leftSum = 0;  // variable to store the left sum
        int rightSum = 0;  // variable to store the right sum
        for(int i=0; i<n/2; i++){  // loop until i is less than n/2
            leftSum += s[i] - '0';  // update the left sum
            rightSum += s[n-i-1] - '0';  // update the right sum
        }
        return leftSum == rightSum;  // return true if the left sum is equal to the right sum else return false
    }
};
```
```java []
class Solution {
    public int countSymmetricIntegers(int low, int high) {
        int res = 0;  // variable to store the result
        for(int i=low; i<=high; i++){  // loop until i is less than or equal to high
            if(isSymmetric(i)) res++;  // if the number is symmetric increment the result
        }
        return res;  // return the result
    }
    public boolean isSymmetric(int num){  // function to check if the number is symmetric
        String s = Integer.toString(num);  // variable to store the string
        int n = s.length();  // variable to store the length of the string
        if(n%2 == 1) return false;  // if the length of the string is odd return false
        int leftSum = 0;  // variable to store the left sum
        int rightSum = 0;  // variable to store the right sum
        for(int i=0; i<n/2; i++){  // loop until i is less than n/2
            leftSum += s.charAt(i) - '0';  // update the left sum
            rightSum += s.charAt(n-i-1) - '0';  // update the right sum
        }
        return leftSum == rightSum;  // return true if the left sum is equal to the right sum else return false
    }
}

```
```python []
class Solution(object): # class Solution 
    def countSymmetricIntegers(self, low, high): # function to count symmetric integers
        """
        :type low: int
        :type high: int
        :rtype: int
        """
        res = 0 # variable to store the result
        for i in range(low, high+1): # loop until i is less than or equal to high
            if self.isSymmetric(i): res += 1 # if the number is symmetric increment the result
        return res # return the result
    def isSymmetric(self, num): # function to check if the number is symmetric
        s = str(num) # variable to store the string
        n = len(s) # variable to store the length of the string
        if n%2 == 1: return False # if the length of the string is odd return false
        leftSum = 0 # variable to store the left sum
        rightSum = 0 # variable to store the right sum
        for i in range(n//2): # loop until i is less than n/2
            leftSum += int(s[i]) # update the left sum
            rightSum += int(s[n-i-1]) # update the right sum
        return leftSum == rightSum # return true if the left sum is equal to the right sum else return false

```
```python3 []
class Solution:
    def countSymmetricIntegers(self, low: int, high: int) -> int:  # function to count symmetric integers
        res = 0  # variable to store the result
        for i in range(low, high+1):  # loop until i is less than or equal to high
            if self.isSymmetric(i): res += 1  # if the number is symmetric increment the result
        return res  # return the result
    def isSymmetric(self, num: int) -> bool:  # function to check if the number is symmetric
        s = str(num)  # variable to store the string
        n = len(s)  # variable to store the length of the string
        if n%2 == 1: return False  # if the length of the string is odd return false
        leftSum = 0  # variable to store the left sum
        rightSum = 0  # variable to store the right sum
        for i in range(n//2):  # loop until i is less than n/2
            leftSum += int(s[i])  # update the left sum
            rightSum += int(s[n-i-1])  # update the right sum
        return leftSum == rightSum  # return true if the left sum is equal to the right sum else return false

```
```c []
#include <stdio.h>
#include <stdbool.h>
#include <string.h>

// Function prototype for isSymmetric
bool isSymmetric(int num);

int countSymmetricIntegers(int low, int high) {
    int res = 0; // variable to store the result
    for (int i = low; i <= high; i++)
    { // loop until i is less than or equal to high
        if (isSymmetric(i))
            res++; // if the number is symmetric increment the result
    }
    return res; // return the result
}

bool isSymmetric(int num) {  // function to check if the number is symmetric
    char s[100];             // variable to store the string
    sprintf(s, "%d", num);   // variable to store the length of the string
    int n = strlen(s);       // variable to store the length of the string
    if (n % 2 == 1)
        return false; // if the length of the string is odd return false
    int leftSum = 0;  // variable to store the left sum
    int rightSum = 0; // variable to store the right sum
    for (int i = 0; i < n / 2; i++)
    {                                   // loop until i is less than n/2
        leftSum += s[i] - '0';          // update the left sum
        rightSum += s[n - i - 1] - '0'; // update the right sum
    }
    return leftSum == rightSum; // return true if the left sum is equal to the right sum else return false
}


```
```c# []
public class Solution {
    public int CountSymmetricIntegers(int low, int high) {
        int res = 0;  // variable to store the result
        for(int i=low; i<=high; i++){  // loop until i is less than or equal to high
            if(isSymmetric(i)) res++;  // if the number is symmetric increment the result
        }
        return res;  // return the result
        }
    public bool isSymmetric(int num){  // function to check if the number is symmetric
        string s = num.ToString();  // variable to store the string
        int n = s.Length;  // variable to store the length of the string
        if(n%2 == 1) return false;  // if the length of the string is odd return false
        int leftSum = 0;  // variable to store the left sum
        int rightSum = 0;  // variable to store the right sum
        for(int i=0; i<n/2; i++){  // loop until i is less than n/2
            leftSum += s[i] - '0';  // update the left sum
            rightSum += s[n-i-1] - '0';  // update the right sum
        }
        return leftSum == rightSum;  // return true if the left sum is equal to the right sum else return false
        }
}
```
```javascript []
var countSymmetricIntegers = function(low, high) {
    let res = 0;  // variable to store the result
    for(let i=low; i<=high; i++){  // loop until i is less than or equal to high
        if(isSymmetric(i)) res++;  // if the number is symmetric increment the result
    }
    return res;  // return the result
};

var isSymmetric = function(num) {  // function to check if the number is symmetric
    let s = num.toString();  // variable to store the string
    let n = s.length;  // variable to store the length of the string
    if(n%2 == 1) return false;  // if the length of the string is odd return false
    let leftSum = 0;  // variable to store the left sum
    let rightSum = 0;  // variable to store the right sum
    for(let i=0; i<n/2; i++){  // loop until i is less than n/2
        leftSum += parseInt(s[i]);  // update the left sum
        rightSum += parseInt(s[n-i-1]);  // update the right sum
    }
    return leftSum == rightSum;  // return true if the left sum is equal to the right sum else return false
};
```
```swift []
class Solution {
    func countSymmetricIntegers(_ low: Int, _ high: Int) -> Int {
        var res = 0;  // variable to store the result
        for i in low...high {  // loop until i is less than or equal to high
            if isSymmetric(i) { res += 1
            } // if the number is symmetric increment the result
            }
        return res;  // return the result
    }
    func isSymmetric(_ num: Int) -> Bool {  // function to check if the number is symmetric
        let s = String(num);  // variable to store the string
        let n = s.count;  // variable to store the length of the string
        if n%2 == 1 { return false }  // if the length of the string is odd return false
        var leftSum = 0;  // variable to store the left sum
        var rightSum = 0;  // variable to store the right sum
        for i in 0..<n/2 {  // loop until i is less than n/2
            leftSum += Int(String(s[s.index(s.startIndex, offsetBy: i)]))!;  // update the left sum
            rightSum += Int(String(s[s.index(s.startIndex, offsetBy: n-i-1)]))!;  // update the right sum
        }
        return leftSum == rightSum;  // return true if the left sum is equal to the right sum else return false
    }
}

```
```Dart []
class Solution {
    int countSymmetricIntegers(int low, int high) {
        int res = 0;  // variable to store the result
        for(int i=low; i<=high; i++){  // loop until i is less than or equal to high
            if(isSymmetric(i)) res++;  // if the number is symmetric increment the result
        }
        return res;  // return the result
    }
    bool isSymmetric(int num){  // function to check if the number is symmetric
        String s = num.toString();  // variable to store the string
        int n = s.length;  // variable to store the length of the string
        if(n%2 == 1) return false;  // if the length of the string is odd return false
        int leftSum = 0;  // variable to store the left sum
        int rightSum = 0;  // variable to store the right sum
        for(int i=0; i<n/2; i++){  // loop until i is less than n/2
            leftSum += int.parse(s[i]);  // update the left sum
            rightSum += int.parse(s[n-i-1]);  // update the right sum
        }
        return leftSum == rightSum;  // return true if the left sum is equal to the right sum else return false
    }
}
```