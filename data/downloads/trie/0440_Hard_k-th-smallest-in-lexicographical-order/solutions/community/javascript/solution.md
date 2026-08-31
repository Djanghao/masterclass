# Beats 100% | Easy Solution

**Author:** B_I_T
**Votes:** 115
**Link:** [https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/5818614/](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/5818614/)

---

![image.png](./images/0.png)
# Intuition
- The problem asks for the k-th lexicographical number between 1 and n. Lexicographical order means the numbers are ordered as strings, not as integers. For example, the lexicographical order for numbers from 1 to 13 is:
```
1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9
```
- You need to find the k-th number in this list efficiently. A brute-force approach would involve generating and sorting all numbers, but for large n, this is inefficient. Instead, we can exploit the tree-like structure of the lexicographical order.

# Approach
1. We can visualize the numbers in a lexicographical order tree:

    - At the root is 1, and its children are 10, 11, 12, ..., 19.
    - The node 2 has children 20, 21, ..., 29, and so on.
    - Given this structure, the problem becomes a traversal through the lexicographical tree, counting how many numbers lie under each node. Based on the count, we either move to the next sibling or descend deeper into the tree.

2. Key Idea:
    - Count of Numbers in a Range: We calculate how many numbers exist between a number a and the next sibling b (e.g., between 1 and 2, or between 10 and 11). This count is calculated for every level of the tree.

    - Skip Over Subtrees: Once we know how many numbers lie between a and b, we can decide whether to skip over a subtree (if the count is less than k) or descend into it.

    - Reduce k: As we skip over numbers, we decrement k until we find the k-th number.

3. Function getReqNum(a, b, n):
    - This function counts how many numbers lie between a and b in the lexicographical tree, considering numbers up to n.
    - It multiplies a and b by 10 at each step to explore the next level of the tree.
# Algorithm
1. Start from the number 1.
2. For each level, calculate how many numbers there are between the current number and the next sibling using getReqNum.
3. If the current range contains more than k numbers, descend into that range.
4. Otherwise, move to the next sibling and adjust k.
# Complexity
- Time Complexity:
    - The time complexity is O(log n) since, in each iteration, we're moving either down or sideways in the lexicographical tree. The number of levels is proportional to the logarithm of n.
- Space Complexity:
    - The space complexity is O(1) because we use a few variables to track the current number, and no additional data structures are used apart from integer variables.
# Code
```cpp []
class Solution {
private:
    int getReqNum(long a,long b,long &n){
        int gap=0; 
        while(a <= n){
            gap += min(n+1,b)-a;
            a*=10;
            b*=10;
        }
        return gap;
    }
public:
    int findKthNumber(long n, int k) {
        long num = 1;
        for(int i=1; i<k;){
            int req = getReqNum(num,num+1,n);
            if(i+req <= k){
                i+=req;
                num++;
            }else{
                i++;
                num *= 10;
            }
        }
        return num;
    }
};
```
```Java []
class Solution {
    private int getReqNum(long a, long b, long n) {
        int gap = 0;
        while (a <= n) {
            gap += Math.min(n + 1, b) - a;
            a *= 10;
            b *= 10;
        }
        return gap;
    }

    public int findKthNumber(int n, int k) {
        long num = 1;
        for (int i = 1; i < k;) {
            int req = getReqNum(num, num + 1, n);
            if (i + req <= k) {
                i += req;
                num++;
            } else {
                i++;
                num *= 10;
            }
        }
        return (int) num;
    }
}

```
```Python3 []
class Solution:
    def getReqNum(self, a, b, n):
        gap = 0
        while a <= n:
            gap += min(n + 1, b) - a
            a *= 10
            b *= 10
        return gap

    def findKthNumber(self, n: int, k: int) -> int:
        num = 1
        i = 1
        while i < k:
            req = self.getReqNum(num, num + 1, n)
            if i + req <= k:
                i += req
                num += 1
            else:
                i += 1
                num *= 10
        return num

```
```Javascript []
var findKthNumber = function(n, k) {
    const getReqNum = (a, b, n) => {
        let gap = 0;
        while (a <= n) {
            gap += Math.min(n + 1, b) - a;
            a *= 10;
            b *= 10;
        }
        return gap;
    };

    let num = 1; 
    let i = 1;   

    while (i < k) {
        let req = getReqNum(num, num + 1, n);  
        if (i + req <= k) {
            i += req;
            num++;
        } else {
            i++;
            num *= 10;
        }
    }

    return num;  
};

```
![Please hit the upvote button (1).png](./images/1.png)
