# Ugh O(1)

**Author:** votrubac
**Votes:** 159
**Link:** [https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/3312090/](https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/3312090/)

---

The worst first contest problem I remember.
    
First, we give everyone one dollar to satisfy condition 2. Then, we check how many kids can get exactly 7 more dollars.

There are several edge cases because of the requirement to distribute all money: 

1. All kids, except the last one, got `7` dollars, and the last kid got exactly `3` dollars.
	- Only `children - 2` kids can get exactly `8` dollars, as we need to re-distribute dollars between last two kids.
2. We have exactly `children * 7` dollars.
	- This is the only case when all children receive exactly `8` dollars. 
3. Otherwise, no more than `children - 1` can get exactly `8` dollars (even if we have a lot of money)
	- And no more than `money / 7` kids can get exactly `8` dollars (if our money is limited).

**C++**
```cpp
int distMoney(int money, int children) {
    money -= children;
    if (money < 0)
        return -1;
    if (money / 7 == children && money % 7 == 0)
        return children;
    if (money / 7 == children - 1 && money % 7 == 3)
        return children - 2;
    return min(children - 1, money / 7);
}
```