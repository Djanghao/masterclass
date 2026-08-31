# Java | 100% faster |  Two Pass with explanation

**Author:** kanvstnrn
**Votes:** 32
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/1117526/](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/1117526/)

---

First let's look at the O(N^2) solution - 
Simply do a double iteration and for each ball found, compute the distance and add it to the cost. Easy peasy.
```
class Solution {
    public int[] minOperations(String boxes) {
        int len = boxes.length();
        int[] ans = new int[len];
        for(int i=0;i<len;i++){
            int cost = 0;
            for(int j=0;j<len;j++){
                if(boxes.charAt(j)=='1') cost += Math.abs(i-j);
            }
            ans[i] = cost;
        }
        return ans;
    }
}
```

Now, let's take a look at the O(N) solution. The code has two passes, forward and back. 
The assumption is when we travel forward we're only considering the balls that are left to the current index, similarly when we travel back we're only considering the balls that are to the right of the current index.
When moving forward, the cost of moving balls to the right for ith index can be computed if we know the total number of balls till (i-1)th index and the cost of moving balls till (i-1)th index i.e
*forward[i] = forward[i-1]+number_of_balls_till_i-1*
In a similar fashion, 
*back[i] = back[i+1]+number_of_balls_till_i+1*

Once we have both these values, the answer is simply the summation of the forward and backward costs.
```
class Solution {
    public int[] minOperations(String boxes) {
        int len = boxes.length();
        int[] forward = new int[len];
        int prev = (boxes.charAt(0)=='0'?0:1);
        for(int i=1;i<len;i++){
            forward[i] += forward[i-1]+prev;
            prev += (boxes.charAt(i)=='0'?0:1);
        }
        prev = (boxes.charAt(len-1)=='0'?0:1);
        int[] back = new int[len];
        for(int i=len-2;i>=0;i--){
            back[i] += back[i+1]+prev;
            prev += (boxes.charAt(i)=='0'?0:1);
        }
        int[] op = new int[len];
        for(int i=0;i<len;i++) op[i] = forward[i]+back[i];
        return op;
    }
}
```