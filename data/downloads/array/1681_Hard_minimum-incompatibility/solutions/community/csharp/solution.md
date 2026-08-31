# DFS and BackTracking gives double 100%.  idea is easy to understand.

**Author:** malp0403
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-incompatibility/solutions/4180084/](https://leetcode.com/problems/minimum-incompatibility/solutions/4180084/)

---

# Intuition
Backtracking and DFS

# Approach
1. create a list with K Length( like K boxess)
2. create an array of length 17 to records value from 1-16 

backTracking:
1. move to next new box to take values
2. dont open new box but loop through previous box to see anyone can take values(box is not full yet)

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
         int min = int.MaxValue;
 int setLimit = 0;
 public int MinimumIncompatibility(int[] nums, int k)
 {
     List<(int total,int[] arr)> list = new List<(int total, int[] arr)>();
     setLimit = nums.Length / k;
     for(int i =0; i < k; i++)
     {
         list.Add((0,Enumerable.Repeat(0, 17).ToArray()));
     }
     int[] temp = Enumerable.Repeat(0, 17).ToArray();
     temp[nums[0]] = 1;

     list[0] = (1, temp);
     dfs(1, nums, list, 0);
     return min != int.MaxValue? min:-1;
 }
 public void dfs(int index, int[] nums, List<(int total, int[] arr)> list,int listIndex)
 {
     if (index >= nums.Length)
     {
         // cal the total difference;
         min = Math.Min(min, cal(list));
         return;
     }

     // open a new subSet
     if(listIndex < list.Count - 1)
     {
         list[listIndex + 1].arr[nums[index]] = 1;
         list[listIndex + 1] = (1, list[listIndex + 1].arr);

         dfs(index + 1, nums, list, listIndex + 1);

         list[listIndex + 1].arr[nums[index]] = 0;
         list[listIndex + 1] = (0, list[listIndex + 1].arr);
     }

     for (int i=0; i <= listIndex; i++)
     {
         int val = nums[index];
         //if value is not present and total subset is less than setLimit
         if (list[i].arr[val] == 0 && list[i].total < setLimit)
         {
             list[i].arr[val] = 1;
             list[i] = (list[i].total + 1, list[i].arr);
          
             dfs(index + 1, nums, list, listIndex);

             list[i].arr[val] = 0;
             list[i] = (list[i].total -1, list[i].arr);
         }
     }
     
 }

 public int cal(List<(int total, int[] arr)> list)
 {
     int sum = 0;

     foreach (var item in list)
     {
         int minIndex = 0;
         while(item.arr[minIndex] ==0)
         {
             minIndex++;
         }
         int maxIndex = 16;
         while (item.arr[maxIndex] == 0)
         {
             maxIndex--;
         }
         sum += (maxIndex - minIndex);
     }

     return sum;
 }

}
```