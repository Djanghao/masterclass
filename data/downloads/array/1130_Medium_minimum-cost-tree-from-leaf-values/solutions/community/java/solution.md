# O(n) Java with comments

**Author:** savvaru
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/1594574/](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/1594574/)

---

```
class Solution {
    public int mctFromLeafValues(int[] arr) {
        
        /*
        Remove small element i and the cost is arr[i] * Math.min(arr[i-1], arr[i+1]). minimum cost happens between smaller values of i-1 and i+1.

Remove until there is only one element and sum of cost is the answer.

Use stack to maintain decreasing order, when there is bigger value num, then pop small value arr[i] and acculate the cost arr[i] * Math.min(num, stk.peek()).
*/
        
        if(arr == null || arr.length < 2) return 0;
        
        Stack<Integer> stack = new Stack<>();
        int result =0;
        
        stack.push(Integer.MAX_VALUE);
        
        for(int num: arr){
         
            while(stack.peek() <= num){
                int smallValue = stack.pop();
                result = result + smallValue*Math.min(stack.peek(),num);
            }
            stack.push(num);
        }
        
        
        while(stack.size() > 2){
            result = result + stack.pop()*stack.peek();
        }
        
        return result;
    }
    
}
```

please upvote my solution