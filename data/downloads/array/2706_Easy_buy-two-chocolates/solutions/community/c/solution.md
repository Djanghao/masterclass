# nth_element

**Author:** votrubac
**Votes:** 16
**Link:** [https://leetcode.com/problems/buy-two-chocolates/solutions/3568642/](https://leetcode.com/problems/buy-two-chocolates/solutions/3568642/)

---

**C++**
```cpp
int buyChoco(vector<int>& p, int money) {
    nth_element(begin(p), begin(p) + 1, end(p));
    return money < p[0] + p[1] ? money : money - p[0] - p[1];
}
```