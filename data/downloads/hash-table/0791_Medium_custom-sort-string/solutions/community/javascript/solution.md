# 🔥✅✅ Beat 100% | ✅ Full explanation with pictures ✅✅🔥

**Author:** DevOgabek
**Votes:** 145
**Link:** [https://leetcode.com/problems/custom-sort-string/solutions/4856325/](https://leetcode.com/problems/custom-sort-string/solutions/4856325/)

---


A new painting tutorial is now available
![Glenn Radars_9.png](./images/0.png)


![31c8f335-9e52-45bd-8701-8f33260b84ad_1709165793.521128.png](./images/1.png)


[![Screen Shot 2024-03-11 at 05.05.15.png](./images/2.png)](https://leetcode.com/problems/custom-sort-string/submissions/1200021046?envType=daily-question&envId=2024-03-11)

![Glenn Radars_8.png](./images/3.png)

![Glenn Radars_8.png](./images/4.png)

![Glenn Radars_8.png](./images/5.png)



```python []
class Solution(object):
    def customSortString(self, order, s):
        char_count = {char: 0 for char in order}
        for char in s:
            if char in char_count:
                char_count[char] += 1
    
        sorted_s = ''
        for char in order:
            sorted_s += char * char_count[char]
    
        for char in s:
            if char not in order:
                sorted_s += char

        return sorted_s
```
```python3 []
class Solution:
    def customSortString(self, order: str, s: str) -> str:
        char_count = {char: 0 for char in order}
        for char in s:
            if char in char_count:
                char_count[char] += 1
    
        sorted_s = ''
        for char in order:
            sorted_s += char * char_count[char]
    
        for char in s:
            if char not in order:
                sorted_s += char

        return sorted_s
```
```C++ []
class Solution {
public:
    string customSortString(string order, string s) {
        std::unordered_map<char, int> charCount;
        for (char c : order) {
            charCount[c] = 0;
        }
        
        for (char c : s) {
            if (charCount.find(c) != charCount.end()) {
                charCount[c]++;
            }
        }
        
        std::string sortedS;
        for (char c : order) {
            sortedS.append(charCount[c], c);
        }
        
        for (char c : s) {
            if (charCount.find(c) == charCount.end()) {
                sortedS.push_back(c);
            }
        }
        
        return sortedS;
    }
};
```
```javascript []
var customSortString = function(order, s) {
    const charCount = {};
    for (const char of order) {
        charCount[char] = 0;
    }

    for (const char of s) {
        if (charCount[char] !== undefined) {
            charCount[char]++;
        }
    }

    let sortedS = '';
    for (const char of order) {
        sortedS += char.repeat(charCount[char]);
    }

    for (const char of s) {
        if (!order.includes(char)) {
            sortedS += char;
        }
    }

    return sortedS;
};
```


![Glenn Radars_9 2 4 2.png](./images/6.png)

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
\uD83D\uDFE2 [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/solutions/4856902/beat-100-full-explanation-with-pictures/)

[More...](https://leetcode.com/DevOgabek/)