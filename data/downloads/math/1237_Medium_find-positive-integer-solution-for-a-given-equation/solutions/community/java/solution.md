# Easy Java Solution | Using Binary Search

**Author:** PiyushParmar_28
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/3420364/](https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/3420364/)

---

# Complexity
- Time complexity: $$O(nlog(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/*
 * // This is the custom function interface.
 * // You should not implement it, or speculate about its implementation
 * class CustomFunction {
 *     // Returns f(x, y) for any given positive integers x and y.
 *     // Note that f(x, y) is increasing with respect to both x and y.
 *     // i.e. f(x, y) < f(x + 1, y), f(x, y) < f(x, y + 1)
 *     public int f(int x, int y);
 * };
 */

class Solution {
    public List<List<Integer>> findSolution(CustomFunction func, int z) {
        List<List<Integer>> result= new ArrayList<>();

        for(int i=1; i<= 1000; i++){
            int x= i;

            int left= 1;
            int right= 1000;

            while(left <= right){
                int y= (left+right)/2;

                int val= func.f(x, y);
                if(val == z){
                    List<Integer> l1= new ArrayList<>();
                    l1.add(x);
                    l1.add(y);

                    result.add(l1);
                    break;
                }
                else if(val > z){
                    right= y-1;
                }
                else{
                    left= y+1;
                }
            }
        }

        return result;
    }
}
```
![please-upvote.jpg](./images/0.jpeg)
