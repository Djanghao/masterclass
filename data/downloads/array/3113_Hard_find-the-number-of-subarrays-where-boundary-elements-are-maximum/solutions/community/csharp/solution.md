# C#|Sliding Window and Using Stack| O(n)

**Author:** shwetaja
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/solutions/5033197/](https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/solutions/5033197/)

---

# Intuition


# Approach

**Appraoch 1:Sliding Window  Approach** (**Giving TLE error**)

In normal sliding window,we expand the window till window is valid.Window is valid means window has max elemenet at first position and at last position.
Now, in normal sliding window,there is only one window which we expand and shrink.
But in this problem, every element of the array can generate no of subarrays where that element is the max element of that subarray.

e.g. nums = [1,4,3,3,2]
Here, element 1 can generate subarray {1} where 1 is the max element and it is at 1st and last position.
Similarly, element 4 can generate subarray {4} where 4 is the max element and it is at 1st and last position and so on.
So,for each unique element in the array , we need to create new window.

e.g. windows are created as follows:
At i=0 ,nums[i]=1,window1={1}
At i=1,nums[i]=4,window1={1,4},window2={4}

**How expansion happens in this problem?**
During array traversal ,when we visit any element,it gets added to all
the previously created windows.Also,if it is encountered first time,
a new window is created for that element.
Now,because an element gets added to all the previously created windows, new element may be greater than max of that window.
If this happens ,window becomes invalid and there is no use of expanding the invalid window.

e.g. At i=0 window1 as {1} and max of window=1.
At i=1, 4 got added to it and window1 became {1,4}.
Here, 4 > max which is not valid.
So,we should remove window when window becomes invalid.
So,it is necessary to check after every expansion if some of the previously created windows have not become invalid.

**How answer is calculated?**
Every time element gets added to the window,it forms subarrays with all the previous occurances of that element in that window.

e.g. nums={3,3,3}
At i=0, window1 is crerated. Window1={3}
At i=1 window1 expanded.Window1={3,3}
Now,last added element 3 will form subarrays with all the previous occurances of 3.
So,calculate the frequency of 3 and add it to the answer.
Frequ[3]=2 => ans+=2

At i=2 window1 expanded.Window1={3,3,3}
Now,last added element 3 will form subarrays with all the previous occurances of 3.
So,calculate the frequency of 3 and add it to the answer.
Frequ[3]=3 => ans+=3

**How window shrinking happens in this problem?**
After every expansion , we check if any window's max element has become less than current nums[i].If yes, then make frequency of max element of that window=0.In this way,we remove the window.

****Following is the implementation of this approach:****
```
public class Solution {
    public long NumberOfSubarrays(int[] nums) 
    {
    
     Dictionary<long,long> map=new Dictionary<long,long>();
     long ans=0;

     for(int i=0;i<nums.Length;i++)
     {
        if(!map.ContainsKey(nums[i]))
        {
            map.Add(nums[i],1);
        }
        else
        {
            map[nums[i]]++;
        }
        
        ans+=map[nums[i]];
        
        foreach(KeyValuePair<long,long> kvp in map)
        {
            if(nums[i]>kvp.Key)
            {
                map.Remove(kvp.Key);
            }
        }
     }
        return ans;
    }
}
```
**2>Approach2:Optimized Using Stack**
```
public class Solution {
    public long NumberOfSubarrays(int[] nums) 
    {
          Dictionary<int,int> map=new Dictionary<int,int>();
          Stack<int> st=new Stack<int>();
          long ans=0;

          for(int i=0;i<nums.Length;i++)
          {
            if(map.ContainsKey(nums[i]))
            {
                map[nums[i]]++;
            }
            else
            {
                map.Add(nums[i],1);
            }
           
            ans+=map[nums[i]];
          
           
            while(st.Count>0 && st.Peek()<nums[i])
            {
                map[st.Peek()]=0;
                st.Pop();
            }
            if(st.Count==0 || st.Peek()>nums[i])
            {
                st.Push(nums[i]);
            }
          }
          return ans;
    }
}
```



# Complexity
- Time complexity of optimized approach:
O(n) Where n=Length of nums Array

- Space complexity of optimized approach:
O(n) Where n=Length of nums array

# Code
