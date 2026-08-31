# One Line Solution Python with math.

**Author:** qqzipcar
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-upgradable-servers/solutions/5172332/](https://leetcode.com/problems/maximum-number-of-upgradable-servers/solutions/5172332/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The situation is case by case, therefore we process each case one by one. Firstly assume that we upgrade all servers with allowance of carrying a negative balance in our account. Then we will finally reach the balance of
$$
\	ext{money} - \	ext{upgrade}\	imes\	ext{count}
$$
This might be a negative number, so we sell server to pay depts. For each server sell, it gives back $upgrade+sell$ much money. Therefore, the number of server we should sell is
$$
\\frac{\	ext{money} - \	ext{upgrade}\	imes\	ext{count}}{\	ext{upgrade+sell}}
$$
However, this could be a non-integer, then with python
```python
(money - upgrade * count)//(upgrade+sell)
```
must be the negative of the number of servers we should sell. The final solution is 
```python
min( count, count + (money - upgrade * count)//(upgrade+sell))
```



# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution(object):
    def maxUpgrades(self, count, upgrade, sell, money):
        """
        :type count: List[int]
        :type upgrade: List[int]
        :type sell: List[int]
        :type money: List[int]
        :rtype: List[int]
        """
        return [ min([c, c + (m-u*c)//(u+s)]) for c,u,s,m in zip(count,upgrade,sell,money)]

        
```