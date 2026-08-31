# Easy solution oracle

**Author:** makhav07
**Votes:** 5
**Link:** [https://leetcode.com/problems/change-null-values-in-a-table-to-the-previous-value/solutions/2508089/](https://leetcode.com/problems/change-null-values-in-a-table-to-the-previous-value/solutions/2508089/)

---

```
Select id, Max(drink) OVER (Partition By grp Order By ROWNUM) drink
From
(
	Select id, drink, SUM(Case When drink is Null Then 0 Else 1 End) OVER (Order By ROWNUM) grp
	From  CoffeeShop 
) y

```