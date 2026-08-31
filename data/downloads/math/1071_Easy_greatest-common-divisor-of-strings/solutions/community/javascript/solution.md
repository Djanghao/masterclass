# 🚀 100% || Easy JS Sol || Explained with Intuition & Approach ✨

**Author:** Rajat310
**Votes:** 83
**Link:** [https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3126159/](https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3126159/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

-     Euclidean Algorithm.



# Approach
<!-- Describe your approach to solving the problem. -->

1. The approach of the above function is to find the greatest common divisor (GCD) of the lengths of the two input strings, **str1** and **str2**, and use that value as the length of the desired common prefix. 
2. The function starts by checking if the ***concatenation of str1 and str2 is equal to the concatenation of str2 and str1***. 
3. If not, it returns an empty string, as this is a necessary condition for the two strings to have a common prefix.
4. If the concatenation of str1 and str2 is equal to the concatenation of str2 and str1, the function calculates the GCD of the lengths of the two strings using the Euclidean algorithm. 
5. The Euclidean algorithm is implemented using the gcds function, which takes two input numbers and returns their GCD.
6. Finally, the function uses the slice method to extract a substring of str1 with length equal to the GCD of the lengths of str1 and str2.
7.  This substring is the desired common prefix and is returned as the result of the function.






# Complexity
- Time complexity: $$O(log(min(n, k)))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

1. Because here n is the length of str1 and k is the length of str2. 
2. This is because the time complexity of the gcds function, which implements the Euclidean algorithm for finding the greatest common divisor (GCD) of two numbers, is O(log(min(x, y))), where x and y are the two input numbers.





- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

1. Because as the function uses only a few variables and does not store any data structures in memory, such as arrays or objects.




# Code
```
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    
    if (str1 + str2 !== str2 + str1) {

        return "";
    }

    let n = str1.length;

    let k = str2.length;

    let gcds = function (x, y) {
        
        if (!y) {
            return x;
        }
        return gcds(y, x % y);
    }

    let div = gcds (n, k);

    return str1.slice(0, div);
};
```


![cat img for upvote on LC.jpeg](./images/0.jpeg)
