# O(n) space O(n) - Simple Loop - With Explanation

**Author:** manojpathak
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-nodes-with-value-one/solutions/2747824/](https://leetcode.com/problems/number-of-nodes-with-value-one/solutions/2747824/)

---

```
/*
This problem is about even odd. If a node is in even times in queries[] then it would have no effect on its childrens whatsoever.
However, if a node has a parent which is odd times then it makes a difference.

In the below solution first loop is to get the frequency of each node.
Then in second loop for each node its parents frequency is added and counter is updated accordingly.

Below is example table assuming parent and childs frequency and their impact

parent     child
  freq.     freq.
  
   3           3    =  6 is even, which means current node (as 6 % 2 = 0) does not contribute in final count.
   
   2           3    =  5 is odd, which means current node (as 5 % 2 = 1) contribute in final count.
   
   2           2    =  4 is even, which means current node (as 6 % 2 = 0) does not contribute in final count.
   
   3           2    =  5 is odd, which means current node (as 5 % 2 = 1) contribute in final count.
*/

class Solution {
    public int numberOfNodes(int n, int[] queries) {
        int[] res = new int[n+1];
        
        for(int index : queries)
            res[index]++;
        
        int count = res[1] % 2;
        for(int m = 2; m < res.length; m++){
            res[m]+=res[m/2];
            count += res[m] % 2;
        }
        
        return count;              
    }
}
```