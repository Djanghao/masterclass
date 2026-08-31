# Beats 100% Kotlin in Time (O(N+M)) and Space (O(1)) complexity, where my Kotlin homies at??

**Author:** sinha_i_prefer
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/5908927/](https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/5908927/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Looking at the problem, we soon realize that simulating this would be too big of a task, and looking at the nature of repeated operations on AND and XOR makes it clear that there is some simplification needed to be done which would make the problem manageable.
# Approach
<!-- Describe your approach to solving the problem. -->
Just start by analyzing the testcases in the problem. In the first testcase:

[1 AND 6, 1 AND 5, 2 AND 6, 2 AND 5, 3 AND 6, 3 AND 5]

Let's pick the first two pairs of the and function which have to be operated with a XOR as described in the sum.

Hence, we end up with 
(1 && 6)^(1 && 5)

We can see that 1 is common in both the brackets and hence can be factored out, resulting in:
1&&(6^5). 

Moving on to the next two pairs and apply the result we have obtained previously, this results to:
2&&(6^5).

Now, we operate XOR on both on these attained terms as we are supposed to get the XOR sum of all elements of this array.
(1&&(6^5))^(2&&(6^5))

It's observable that the previously attained result(i.e. 
(a&&b)^(a&&c)=a&&(b^c)) is still applicable, and hence can be applied again. This results in:
(1^2)&&(6^5)

From this observation we can conclude that the result of this question would be the 'AND' of the XOR sum of each array seperately.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N+M)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```kotlin []
class Solution {
    fun getXORSum(arr1: IntArray, arr2: IntArray): Int {
        var arr1res = arr1[0]
        var arr2res = arr2[0]
        for(i in 1 until arr1.size){
            arr1res = arr1res xor arr1[i]
        }
        for(i in 1 until arr2.size){
            arr2res = arr2res xor arr2[i]
        }
        return arr1res and arr2res
    }
}
```
First solution posted here lol, be brutal.
