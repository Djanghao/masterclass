# [Python3, Java, C++] Simple O(mn)

**Author:** tojuna
**Votes:** 121
**Link:** [https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/1660943/](https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/1660943/)

---

**Explanation**:
To find the total number of `laser beams` we have to do 2 things:
1. Find the `number of laser beams` between 'adjacent rows'. A row here is considered only if it has atleast 1 `security device`. Otherwise the row is simply ignored. 
Thus if:                                   
Row `1`: 3 security devices   
Row `2`: 0 security devices    
Row `3`: 2 security devices
We can ignore row `2` and say that row `1` is adjacent to row `3`. To find the `number of laser beams` between 'adjacent rows' we can multiply the number of security devices in the first row of the pair to the number of security devices in the second row of the pair.
2. Doing step 1 only solves a part of the problem. We now need to find the sum of all the `laser beams` from each pair of 'adjacent rows'.

**Algorithm**:
For each string in bank:
* `count` = number of ones in string
* Multiply `count` by the non-zero `count` of previous string and add it to `ans`
<iframe src="https://leetcode.com/playground/CfnEimzJ/shared" frameBorder="0" width="500" height="275"></iframe>

Time Complexity: `O(mn)`, `m` = length of bank, `n` = length of string