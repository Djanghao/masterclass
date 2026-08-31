# 🔥✅✅ Beat 100% | ✅ Full explanation with pictures ✅✅🔥

**Author:** DevOgabek
**Votes:** 119
**Link:** [https://leetcode.com/problems/find-the-pivot-integer/solutions/4866463/](https://leetcode.com/problems/find-the-pivot-integer/solutions/4866463/)

---

![31c8f335-9e52-45bd-8701-8f33260b84ad_1709165793.521128.png](./images/0.png)

[![Screen Shot 2024-03-13 at 05.09.44.png](./images/1.png)](https://leetcode.com/problems/find-the-pivot-integer/submissions/1202017127)

![SitePreview 2.png](./images/2.png)

(For TTS)
# \uD83D\uDCA1
Consider the property of an arithmetic series and how it relates to finding the pivot integer. Think about the relationship between the sum of integers from 1 to x and the sum of integers from x to n. How can you use this relationship to determine the pivot integer without iterating through each possible x?

<br>
<br>
<br>



![SitePreview 2.png](./images/3.png)

1. `x = sqrt(n * (n + 1) / 2)`: This line calculates the square root of an expression involving \\( n \\) and assigns the result to the variable \\( x \\).

2. `if x % 1 != 0`: This line checks if the value of \\( x \\) is not an integer. The modulo operator (%) calculates the remainder of the division of \\( x \\) by 1. If the remainder is not zero, it means \\( x \\) is not an integer.

![SitePreview 2.png](./images/4.png)




3. `return -1`: If \\( x \\) is not an integer, the function returns -1, indicating that there is no integer solution for the given value of \\( n \\).

4. `else: return int(x)`: If \\( x \\) is an integer (i.e., the square root of the expression is a whole number), the function returns the integer value of \\( x \\).
5. 
```python []
class Solution(object):
    def pivotInteger(self, n):
        x = sqrt(n * (n + 1) / 2)
        
        if x % 1 != 0:
            return -1
        else:
            return int(x)
```
```python3 []
class Solution:
    def pivotInteger(self, n: int) -> int:
        x = sqrt(n * (n + 1) / 2)

        if x % 1 != 0:
            return -1
        else:
            return int(x)
```
```C++ []
class Solution {
public:
    int pivotInteger(int n) {
        double x = sqrt(n * (n + 1) / 2.0);
        
        if (fmod(x, 1.0) != 0) {
            return -1;
        } else {
            return static_cast<int>(x);
        }
    }
};
```
```javascript []
var pivotInteger = function(n) {
    let x = Math.sqrt(n * (n + 1) / 2);
    
    if (x % 1 !== 0) {
        return -1;
    } else {
        return Math.floor(x);
    }
};
```


![Glenn Radars_9 2 4 2.png](./images/5.png)


## **My solutions**

\uD83D\uDFE2 - $$easy$$  
\uD83D\uDFE1 - $$medium$$ 
\uD83D\uDD34 - $$hard$$

\uD83D\uDFE1 [46. Permutations](https://leetcode.com/problems/permutations/solutions/4853218/beat-98-64-full-explanation-with-pictures)
\uD83D\uDFE1 [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/4845532/there-is-an-80-chance-of-being-in-the-interview-full-problem-explanation)
\uD83D\uDFE1 [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/solutions/4845742/simple-explanation-with-pictures)
\uD83D\uDFE1 [39. Combination Sum](https://leetcode.com/problems/combination-sum/solutions/4847482/beat-8292-full-explanation-with-pictures)
\uD83D\uDFE2 [2540. Minimum Common Value](https://leetcode.com/problems/minimum-common-value/solutions/4845076/beat-9759-full-explanation-with-pictures)
\uD83D\uDFE2 [3005. Count Elements With Maximum Frequency](https://leetcode.com/problems/count-elements-with-maximum-frequency/solutions/4839796/beat-8369-full-explanation-with-pictures)
\uD83D\uDFE2 [3028. Ant on the Boundary](https://leetcode.com/problems/ant-on-the-boundary/solutions/4837433/full-explanation-with-pictures)
\uD83D\uDFE2 [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/solutions/4834682/beat-10000-full-explanation-with-pictures)
\uD83D\uDFE1 [1750. Minimum Length of String After Deleting Similar Ends](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/solutions/4824224/beat-10000-full-explanation-with-pictures)
\uD83D\uDFE1 [948. Bag of Tokens](https://leetcode.com/problems/bag-of-tokens/solutions/4818912/beat-10000-full-explanation-with-pictures)
\uD83D\uDFE1 [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/4813340/beat-10000-full-explanation-with-pictures)
\uD83D\uDFE2 [977. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/solutions/4807704/square-sorter-python-python3-javascript-c)
\uD83D\uDFE2 [2864. Maximum Odd Binary Number](https://leetcode.com/problems/maximum-odd-binary-number/solutions/4802402/visual-max-odd-binary-solver-python-python3-javascript-c)
\uD83D\uDFE1 [1609. Even Odd Tree](https://leetcode.com/problems/even-odd-tree/solutions/4797529/even-odd-tree-validator-python-python3-javascript-c)
\uD83D\uDFE2 [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/solutions/4795373/why-not-1-line-of-code-python-python3-c-everyone-can-understand)
\uD83D\uDFE1 [513. Find Bottom Left Tree Value](https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4792022/binary-tree-explorer-mastered-javascript-python-python3-c-10000-efficiency-seeker)
\uD83D\uDFE2 [1. Two Sum](https://leetcode.com/problems/two-sum/solutions/4791305/5-methods-python-c-python3-from-easy-to-difficult)
\uD83D\uDFE2 [543. Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/solutions/4787634/surpassing-9793-memory-magician-excelling-at-9723)
\uD83D\uDFE2 [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/solutions/4848126/beat-100-full-explanation-with-pictures)
\uD83D\uDFE2 [136. Single Number](https://leetcode.com/problems/single-number/solutions/4862807/master-the-xor-trick-beat-97-20-with-full-explanation)
\uD83D\uDFE2 [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/solutions/4864068/mastering-efficiency-beat-98-71)
\uD83D\uDFE2 [108. Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/4864578/beat-89-74-full-explanation-with-pictures)

[More...](https://leetcode.com/DevOgabek/)