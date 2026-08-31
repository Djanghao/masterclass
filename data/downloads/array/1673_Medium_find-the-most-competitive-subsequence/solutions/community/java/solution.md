# java with explaination 2 approaches,99% faster

**Author:** kushguptacse
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/1027677/](https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/1027677/)

---

Problem -
as mentioned in HINTS we just need to find the k elements in such a way that they are in increasing order with as smallest combination as possible.
1. one approach comes to mind is to sort the array and return first k elements. but by doing this we will fail below case ->
arr=[2,1,4,3],k=2. 
by above approach answer will be 1,2 but actual answer is [1,3] as we need to leave 2 if we want to start our output array with 1. So, basically we want lexographic order.

**Approach 2->**
1. one naive approach comes to mind is to maintain a collection of size k and start arranging element in increasing order in that collection. 
2. for that stack is usefull as we can compare top element (last element) directly in o(1) time.
3. so, iterate through the nums array and push element into stack if current element is greater then stack.peek. else if current element is smaller then peek element of stack remove elements from stack till again stack comes in a increasing order to be able to add current item.
4. But we need to handle a condition that stack size should be of size k exactly. so in step 3 pop elements from stack if there are still some possiblity left to complete size k along with element peek value check. ie. (stack.size()+ nums.length-i > k) elements_left_in_loop + stack.size. similarly add element to stack only if current stack size <k.
5. once loop finishes just start filling output array from k-1 to 0 from stack.pop()
```
 public int[] mostCompetitive(int[] nums, int k) {
        int[] op = new int[k];
        Deque<Integer> stack = new LinkedList<>();
        for(int i=0;i<nums.length;i++) {
            while(!stack.isEmpty() && nums[stack.peek()]>nums[i] && nums.length-i+stack.size()>k) {
                stack.pop();
            }
            if(stack.size()<k) {
                stack.push(i);            
            }
        }
        for(int i=k-1;i>=0;i--) {
             op[i]=nums[stack.pop()];
        }
        return op;
    }
```

The above approach can also further modified and we can use output array of size k to behave as stack itself. where we can use j variable to identify stack current size. it will save extra stack memory and also extra loop to fill back array.

```
class Solution {
    public int[] mostCompetitive(int[] nums, int k) {
        int[] stack = new int[k];
        for(int i=0,j=0;i<nums.length;i++) {
          while(j>0 && stack[j-1]>nums[i] && j+nums.length-i>k) {
              j--;
          }
          if(j<k) {
              stack[j++]=nums[i];
          }
        }
        return stack;
    }
}
```