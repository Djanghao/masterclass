# beat 100% in speed and memory

**Author:** malp0403
**Votes:** 0
**Link:** [https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/solutions/4151378/](https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/solutions/4151378/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Divide array into odd and even array
# Approach

create two list to store odd number and even number seperately
sum up odd list and even number from larger to small 
eg.
input {5,4,3,1,1} k =3
odd list = {5,3,1,1}
even list = {4};
sumup_odd = [0,5,8,9,10]
sumup_even =[0,4]

notice I put 0 in the front, the index of sumup_array means how many number I pick up from the odd list/even list

to get a even sum: you can pick like below format
sumup odd:  0  ,2  ,4 ....   i
sumup even  k  ,k-2,k-4 .... k-i

reason: odd +odd = even;

do a loop like above, remeber to check the boundary:
1. enough k-i in sumup_even array
2. k-i is larger than 0


<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {

public long LargestEvenSum(int[] nums,int k)
{
                List<int> odds = new List<int> ();
            List<int> even = new List<int>();
            Array.Sort(nums);
            foreach (var item in nums)
            {
                if (item % 2 == 0) even.Add(item);
                else odds.Add(item);
            }

            long[] oddArray = Enumerable.Repeat((long)0,odds.Count+1).ToArray();
            for(int i =1;i <oddArray.Length; i++)
            {
              oddArray[i] = oddArray[i-1] + odds[odds.Count-i];          
            }
            long[] evenArray = Enumerable.Repeat((long)0, even.Count + 1).ToArray();
            for (int i = 1; i < evenArray.Length; i++)
            {
                evenArray[i] = evenArray[i - 1] + even[even.Count - i];      
            }


            long answer = long.MinValue;
            for(int i =0; i < oddArray.Length;)
            {
                if( k-i < evenArray.Length && k-i >=0)
                {
                    answer = Math.Max(oddArray[i] + evenArray[k - i], answer);
                }

                i += 2;
            }


            return answer != long.MinValue?answer:-1;
}

}
```