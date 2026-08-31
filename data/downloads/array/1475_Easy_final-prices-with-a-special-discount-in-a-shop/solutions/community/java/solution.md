# My Simple Java Solution, O(n), using Stack, with explanation

**Author:** Predator_2K40
**Votes:** 26
**Link:** [https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/1717276/](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/1717276/)

---

**Code:-**

```
class Solution 
{
    public int[] finalPrices(int[] prices)
    {
        int n= prices.length;
        int[] arr=new int[n];
        ArrayDeque<Integer> stack=new ArrayDeque<>();
        stack.push(prices[n-1]);
        arr[n-1]=prices[n-1];
        for (int i = n-2; i >= 0;i--)
        {
            while (!stack.isEmpty() && stack.peek()>prices[i])
                stack.pop();
            if (stack.isEmpty())
                arr[i]=prices[i];
            else
                arr[i]=prices[i]-stack.peek();
            stack.push(prices[i]);
        }
        return arr;
    }
}
```


**Intuition and Approach:-**

* This problem is pretty simple if you know that you are actually finding next smaller element for a particular element, i.e. , we are finding the previous smaller element for an element from the right. 
* Thus, we use a stack to store the elements until the peek or top element in the stack is smaller than  the current element, because we need the smaller and previous one, and after each iteration, we push the current element in the stack. 
* **Note that in the worst case, the time complexity will be O(2n)=O(n)**
These are typical stack problems, so solve these to get more intuition.

Upvote if you liked my solution.....
