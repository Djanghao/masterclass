# Gray Code || C++/ Python || Iterative solution || explained

**Author:** aynburnt
**Votes:** 33
**Link:** [https://leetcode.com/problems/gray-code/solutions/1308562/](https://leetcode.com/problems/gray-code/solutions/1308562/)

---

The main idea is to use previously calculated values
Look the examples in bit representation =>>
n=0  =>   [0]
n=1  =>  [0, 1] 
n=2 => [00, 01, 11, 10]   => [00, 01] + [11, 01]  => ( 0 + [result(n-1)] ) +  ( 1 + [result(n-1)] )
n=3 => [000, 001, 011, 010, 110, 111, 101, 100] => ( 0 + [result(n-1) ) + ( 1+ [result(n-1)] )
so on ...
Now we can implement the above pattern easily
We can make it more simple, if we observe that, Every time we just twiced the values in the prev result ans new values are just made on the folling pattern =>
n=0 =>  [0000]
n=1 => [0000, 0001]  // observe the we had just set (n-1)th bit to 1, iterating from right in the prev result ;
n=2 => [0000, 0001, 0011, 0010]
n=3 => [0000, 0001, 0011, 0010, 0110, 0111, 0101, 0100]
so on ...
mask containes (n-1)th bit as 1,   
if result for n=2, 0001 =>  **mask = 0010** hence newRes = (**res | mask**) = 0011; 
Hope it helped you to understand the logic.

```
class Solution {
public:
    vector<int> grayCode(int n) {
        vector<int> result;
        result.push_back(0);
        
        for (int i = 1; i <= n; i++) {
            int prevLength = result.size();
            int mask = 1 << (i - 1);
            for (int j = prevLength - 1; j >= 0; j--) {
                result.push_back(mask + result[j]);
            }
        }
        return result;
    }
};
```

**Python =>**
```
class Solution:
    def grayCode(self, n: int) -> List[int]:
        arr = []
        arr.append(0)
        for i in range(1,n+1):
            prevLength = len(arr)
            mask = 1 << (i-1)
            for j in range(prevLength, 0, -1):
                arr.append(mask + arr[j-1])
        return arr
```
**If you find it helpful, plz upvote**