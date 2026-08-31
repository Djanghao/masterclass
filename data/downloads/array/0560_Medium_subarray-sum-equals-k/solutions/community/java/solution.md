# Java Solution with Detailed Explanation

**Author:** Conor-jiahaochen
**Votes:** 378
**Link:** [https://leetcode.com/problems/subarray-sum-equals-k/solutions/803317/](https://leetcode.com/problems/subarray-sum-equals-k/solutions/803317/)

---

## Thinkings ##

1. Use an array to store the sum accumulated from the beginning to a certain position.

   Example:

   ```
   nums = [1,   2,   3  ]
   sum  = [1, 1+2, 1+2+3]
   ```

2. How to create array "sum" ?

   ```
   sum[i] = sum[i - 1] + nums[i]
   ```

   Q : If i == 0, the index is out of range. How to solve this problem ?

   A : Set the first element of the array "sum" to 0, and initialize the array "sum" **from index 1 rather than 0**.

   ```java
   nums = [1,   2,   3  ]
   sum  = [0,   1,   1+2, 1+2+3] // Also, the length of "sum" is one more than "nums"  
   
   sum[i] = sum[i - 1] + nums[i - 1]
   ```

   ```java
   // Java Version
   int[] sum = new int[nums.length + 1];
   
   sum[0] = 0;
   for (int i = 1; i < (nums.length + 1); i++)
     sum[i] = sum[i - 1] + nums[i - 1];
   ```

3. Using array "sum" to calculate the sum of a subarray

   ```java
   sumOfSubarray = sum[end] - sum[start];
   ```

   For example : 

   &emsp;Caculate the sum of "nums" means using the last element of "sum" minus the first element of "sum" which is 0.

   ```java
   nums[0] + nums[1] + nums[2] = sum[3] - sum[0] = 6 - 0
   ```

4. **Using array "sum"** to caculate all possibilities .

   ```java
   for (int start = 0; start < sum.length; start++) {
               for (int end = start + 1; end < sum.length; end++) {
                   if (sum[end] - sum[start] == k)
                       count++;
               }
           }
   ```

## Code

```java
public class Solution {
    public int subarraySum(int[] nums, int k) {
        int count = 0;
      
        int[] sum = new int[nums.length + 1];
        sum[0] = 0;
        for (int i = 1; i <= nums.length; i++)
            sum[i] = sum[i - 1] + nums[i - 1];
      
        for (int start = 0; start < sum.length; start++) {
            for (int end = start + 1; end < sum.length; end++) {
                if (sum[end] - sum[start] == k)
                    count++;
            }
        }
      
        return count;
    }
}
```

## Complexity Analysis

- Time complexity : *O(n<sup>2</sup>)*. 
- Space complexity : *O(n)*.



## Optimization by Hashmap ##

### Thinkings ###

1. In the previous method

   Step 1.  The "nums" array is traversed to calculate all the elements of the sum array

   Step 2.  Use the nested loop to judge.

   key :  Can we judge when the array is traversed(Step 1) ?

2. Transposition

   ```java
   int[] sum = new int[nums.length + 1];
   
   sum[0] = 0;
   for (int end = 1; end < (nums.length + 1); end++)
     sum[end] = sum[end - 1] + nums[end - 1];
   ```

   1. Put each element of "sum" array into hashmap according to this format :  (_sum<sub>i</sub>_, _number of occurence_)

   2. **When constructing the "sum" array, we take the currently constructed element as sum[end], then all the elements before "end"  which have been calculated can be regarded as all sum[start] for this "end".**

      Transform the judgment condition

      Obviously, when sum[end] is calculated, all its possible sum[start] are already in the map.

      ```
      sum[end] - sum[start] == k
      
      sum[end] - k == sum[start]
      ```

      

   3. When _sum<sub>end</sub>_ is calculated, we only need to determine whether there is key == _sum<sub>end\xA0</sub>_ -  k in the hashmap and add the number of occurence to the answer.

      **Attention : In the previous method, we set the first element of sum to 0. Similarly, we put it in the hashmap, which is (0, 1).**

### Code

```java
public class Solution {
    public int subarraySum(int[] nums, int k) {
        int count = 0, sum = 0;
        HashMap < Integer, Integer > map = new HashMap < > ();
        map.put(0, 1);
      
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (map.containsKey(sum - k))
                count += map.get(sum - k);
            map.put(sum, map.getOrDefault(sum, 0) + 1);
        }
        return count;
    }
}
```
### Complexity Anaysis

- Time complexity : *O(n)*.
- Space complexity : *O(n)*.
## A harder problem
>https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/
>https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/discuss/803353/java-solution-with-detailed-explanation
