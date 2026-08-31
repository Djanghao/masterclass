# My easy to understand Java AC solution using Two pointers

**Author:** Tonkotsu_Ramen
**Votes:** 57
**Link:** [https://leetcode.com/problems/sort-transformed-array/solutions/83317/](https://leetcode.com/problems/sort-transformed-array/solutions/83317/)

---

The idea is simple: 
For a parabola, 
if a >= 0, the min value is at its vertex. So our our sorting should goes from two end points towards the vertex, high to low.
if a < 0, the max value is at its vertex. So our sort goes the opposite way.

```
public class Solution {
    public int[] sortTransformedArray(int[] nums, int a, int b, int c) {
        int[] res = new int[nums.length];
        int start = 0;
        int end = nums.length - 1;
        int i = a >= 0 ? nums.length - 1 : 0;
        while(start <= end) {
            int startNum = getNum(nums[start], a, b, c);
            int endNum = getNum(nums[end], a, b, c);
            if(a >= 0) {
                if(startNum >= endNum) {
                    res[i--] = startNum;
                    start++;
                }
                else{
                    res[i--] = endNum;
                    end--;
                }
            }
            else{
                if(startNum <= endNum) {
                    res[i++] = startNum;
                    start++;
                }
                else{
                    res[i++] = endNum;
                    end--;
                }
            }
        }
        return res;
    }
    public int getNum(int x, int a, int b, int c) {
        return a * x * x + b * x + c;
    }
}
```