# C# solution

**Author:** dasha_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/optimal-division/solutions/5645318/](https://leetcode.com/problems/optimal-division/solutions/5645318/)

---

# Approach
We create 2 arrays for intermediate results. We go from the end of the array and for each element from the last-1 element to the 1st element: we divide it either by the previous element of the input array or by the previous element from the intermediate array. The minimum value of these two (since in order to find the largest result, we must divide by the smallest possible value) is stored in an array with numbers, depending on which value is smaller - we form a string.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public string OptimalDivision(int[] nums) {
        if(nums.Length==1){
            return nums[0].ToString();
        }
        int length = nums.Length;
        double[] numsDivided = new double[length];
        numsDivided[length - 1] = nums[length - 1];
        string[] resArr = new string[length];
        for(int i = nums.Length - 2; i > 0; i--){
            double div1 = (double)nums[i]/nums[i+1];
            double div2 = (double)nums[i]/numsDivided[i+1];
            if(div2 < div1){
                resArr[i] = nums[i] + "/(" + resArr[i+1] + ")";
                numsDivided[i] = div2;
            }
            else{
                resArr[i] = CreateString(nums, i);
                numsDivided[i] = div1;
            }
        }
        if((double)nums[0]/numsDivided[1] > (double)nums[0]/nums[1]){
            resArr[0] = nums[0] + "/(" + resArr[1] + ")";
        }
        else{
            resArr[0] = CreateString(nums, 0);
        }
        return resArr[0];
    }

    private string CreateString(int[] nums, int index){
        if(index==nums.Length-1){
            return nums[index].ToString();
        }
        return nums[index] + "/" + CreateString(nums, index+1);
    }
}
```