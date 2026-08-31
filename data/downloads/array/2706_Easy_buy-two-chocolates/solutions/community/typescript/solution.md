# ✅✅✅Time O(N) && Space O(1) || Easiest and Best Sol out there, no cap.

**Author:** notsaurabh
**Votes:** 1
**Link:** [https://leetcode.com/problems/buy-two-chocolates/solutions/4429361/](https://leetcode.com/problems/buy-two-chocolates/solutions/4429361/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```C++ []
class Solution {
public:
    int buyChoco(vector<int>& a, int money) {
        int min1,min2;
        min1=min2=INT_MAX;
        for(int i=0;i<a.size();i++)
            if(a[i]<min1){
                min2=min1;
                min1=a[i];
            }
            else if(a[i]<min2)
                min2=a[i];

        return min1+min2<=money?(money-(min1+min2)):money;
    }
};
```
```python []
class Solution:
    def buyChoco(self, a: List[int], money: int) -> int:
        min1=min2=sys.maxsize

        for i in range(len(a)):
            if a[i]<min1:
                min2=min1
                min1=a[i]
            elif a[i]<min2:
                min2=a[i]

        return money-min1-min2 if min1+min2<=money else money
```
```Typescript []
function buyChoco(a: number[], money: number): number {
    let min1,min2;
    min1=min2=Number.MAX_VALUE;
    for(let i=0;i<a.length;i++)
        if(a[i]<min1){
            min2=min1;
            min1=a[i];
        }
        else if(a[i]<min2)
            min2=a[i];

    return min1+min2 <= money?(money-min1-min2):money;
};
```
