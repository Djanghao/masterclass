# [Python3, Java, C++] Subsets O(n^2 * 2^n)

**Author:** tojuna
**Votes:** 80
**Link:** [https://leetcode.com/problems/maximum-good-people-based-on-statements/solutions/1711216/](https://leetcode.com/problems/maximum-good-people-based-on-statements/solutions/1711216/)

---

I recommend checking this problem first: https://leetcode.com/problems/subsets/solution/
Look for *Approach 3: Lexicographic (Binary Sorted) Subsets*

* We are going to generate every possible permutation of good and bad people
* Then we check if this permutation satisfies the given constraints

Permutation representation in binary:

>111 : 0 -> good, 1 -> good, 2 -> good
110 : 0 -> good, 1 -> good, 2 -> bad
101 : 0 -> good, 1 -> bad, 2 -> good
011 : 0 -> bad, 1 -> good, 2 -> good
100 : 0 -> good, 1 -> bad, 2 -> bad
... and so on.

With 3 people we will have 8 permutations(2<sup>n</sup>)
With 4 people we will have 16 permutations

>For n = 3:
Lower limit: 1 << n = 2<sup>n</sup> = 8 = 1000
Upper limit: 1 << (n + 1) - 1 = 2<sup>n+1</sup> - 1 = 16 - 1 = 15 = 1111
Integer.toBinaryString(8).substring(1): 000
Integer.toBinaryString(9).substring(1): 001
...
Integer.toBinaryString(15).substring(1): 111

To check if our permutation satisfies the constraints, we check if the statements of good people in our permutation are making any contradictions. If they are, this permutation will not hold and we can return false.

If our `permutation` satisfies the given constraints, count the number of ones in our `permutation`.
Permutation with maximum ones is the answer. 

<iframe src="https://leetcode.com/playground/aSJnx2F5/shared" frameBorder="0" width="700" height="460"></iframe>

*Time Complexity*: O(n<sup>2</sup> * 2<sup>n</sup>)
