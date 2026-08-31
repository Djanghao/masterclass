# Beginner friendly [Java/JavaScript/Python] Solution

**Author:** HimanshuBhoir
**Votes:** 5
**Link:** [https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/2521523/](https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/2521523/)

---

**Java**
```
class Solution {
    public int[] numsSameConsecDiff(int n, int k) {
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9);
        while(--n > 0){
            List<Integer> tmp = new ArrayList();
            for(int val: list){
                int rem = val % 10;
                if(rem + k < 10)     tmp.add(val * 10 + rem + k);
                if(k != 0 && rem - k >= 0)   tmp.add(val * 10 + rem - k);
            }
            list = tmp;
        }
        return list.stream().mapToInt(j->j).toArray();
    }
}
```
**JavaScript**
```
var numsSameConsecDiff = function(n, k) {
   let list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    while(--n > 0){
        let tmp = []
        for(let val of list){
            let rem = val % 10
            if(rem + k < 10)     tmp.push(val * 10 + rem + k)
            if(k != 0 && rem - k >= 0)   tmp.push(val * 10 + rem - k)
        }
        list = tmp
    }
    return list
};
```
**Python**
```
class Solution(object):
    def numsSameConsecDiff(self, n, k):
        lst = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        while n > 1:
            tmp = []
            for val in lst:
                rem = val % 10
                if rem + k < 10:
                    tmp.append(val * 10 + rem + k)
                if k != 0 and rem - k >= 0:
                    tmp.append(val * 10 + rem - k)
            lst = tmp
            n -= 1
        return lst
```