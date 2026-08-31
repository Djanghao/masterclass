# 3 ways to solve in C# (beats 100% Memory)

**Author:** yeuhoahuuco
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/solutions/4849003/](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/solutions/4849003/)

---

# Code
```
public class Solution {
    public int MinSumOfLengths(int[] arr, int target) {
        int l = arr.Length;
        if(l == 1)
          return -1;

        if(l == 2)
        {
            if(arr[0] == arr[1])
            {
                return (arr[0] == target) ? 2 : -1;
            }
            if(arr[0] == 0 || arr[1] == 0)
            {
                if(arr[0] == 0)
                {
                   return (arr[1] == target) ? 3 : -1;
                }else {
                   return (arr[0] == target) ? 3 : -1;
                }
            }
        }

        // -- Solution 1:
        // int minValue = int.MaxValue;
        // int maxValue = int.MinValue;     
        // for(int i = 0; i < l; i++)
        // {
        //     minValue = Math.Min(minValue, arr[i]);
        //     maxValue = Math.Max(maxValue, arr[i]);
        // }
        
        // // special case...
        // if(maxValue == minValue)
        // {
        //     if(minValue > target)
        //     {
        //         return -1;
        //     }else if(minValue == target)
        //     {
        //         return 2;
        //     }else{
        //         int k = target % minValue;
        //         if(k != 0)
        //         {
        //             return -1;
        //         }else{
        //             int d = target / minValue;
        //             if(2*d > l)  // [...]  +  [...]
        //             {
        //                 return -1;
        //             }               
        //             return 2*(target / minValue);
        //         }
        //     }
        // }
        
        // // special case...
        // if(maxValue*(l - 1) + minValue < target)
        //    return -1;

        // var list = new List<(int, int, int)>();
        // for(int i = 0; i < l; i++)
        // {
        //     int sum = 0;
        //     int j = 0;
        //     while(i + j <= l - 1 && sum < target)
        //     {
        //         sum += arr[i + j];
        //         j++;
        //     }
        //     if(sum == target)
        //     {
        //        list.Add((i, i + j - 1, j));
        //     }else {
        //        sum -= arr[i + j - 1];
        //        if(sum == target)
        //        {
        //           list.Add((i, i + j - 2, j - 1));
        //        }
        //     }
        // }

        // if(list.Count < 2)
        //   return -1;
        
        // (int left, int right, int len) = (0, 0, 0);
        // (int left1, int right1, int len1) = (0, 0, 0);
        // int minSumLen = int.MaxValue;
        // int sumLen = 0;
        // for(int i = 0; i < list.Count - 1; i++)
        // {
        //     (left, right, len) = list[i];
        //     for(int j = i + 1; j < list.Count; j++)
        //     {
        //         (left1, right1, len1) = list[j];
        //         if((right < left1) || (right1 < left))
        //         {
        //             sumLen = len + len1;
        //             if(sumLen < minSumLen)
        //             {
        //                 minSumLen = sumLen;
        //             }
        //         }
        //     }
        // }      
        // return minSumLen == int.MaxValue ? -1 : minSumLen;


        // -- Solution 2:
        int minValue = int.MaxValue;
        int maxValue = int.MinValue;     
        for(int i = 0; i < l; i++)
        {
            minValue = Math.Min(minValue, arr[i]);
            maxValue = Math.Max(maxValue, arr[i]);
        }
        
        // special case...
        if(maxValue == minValue)
        {
            if(minValue > target)
            {
                return -1;
            }else if(minValue == target)
            {
                return 2;
            }else{
                int k = target % minValue;
                if(k != 0)
                {
                    return -1;
                }else{
                    int d = target / minValue;
                    if(2*d > l)  // [...]  +  [...]
                    {
                        return -1;
                    }               
                    return 2*(target / minValue);
                }
            }
        }
        
        // special case...
        if(maxValue*(l - 1) + minValue < target)
           return -1;

        var arr1 = new (int, int, int)[l];
        int count = 0;
        for(int i = 0; i < l; i++)
        {
            int sum = 0;
            int j = 0;
            while(i + j <= l - 1 && sum < target)
            {
                sum += arr[i + j];
                j++;
            }
            if(sum == target)
            {
               arr1[i] = (i, i + j - 1, j);
               count++;
            }else {
               sum -= arr[i + j - 1];
               if(sum == target)
               {
                    arr1[i] = (i, i + j - 2, j - 1);
                    count++;
               }
            }
        }

        if(count < 2)
          return -1;
        
        //arr1 = arr1.Where(x => x.Item3 > 0).ToArray();
        arr1 = Array.FindAll(arr1, x => x.Item3 > 0); 
        
        (int left, int right, int len) = (0, 0, 0);
        (int left1, int right1, int len1) = (0, 0, 0);
        int minSumLen = int.MaxValue;
        int sumLen = 0;
        for(int i = 0; i < arr1.Length - 1; i++)
        {
            (left, right, len) = arr1[i];
            for(int j = i + 1; j < arr1.Length; j++)
            {
                (left1, right1, len1) = arr1[j];
                if((right < left1) || (right1 < left))
                {
                    sumLen = len + len1;
                    if(sumLen < minSumLen)
                    {
                        minSumLen = sumLen;
                    }
                }
            }
        }
        return minSumLen == int.MaxValue ? -1 : minSumLen;


        // -- Solution 3 (Not my solution)
        // User:  https://leetcode.com/ping_pong/
        // int[] minLen = new int[l];
        // Array.Fill(minLen, int.MaxValue);

        // int start = 0, sum = 0, result = int.MaxValue;
        // for (int end = 0; end < l; end++) {
        //     sum += arr[end];
        //     while (sum > target) {
        //         sum -= arr[start];
        //         start++;
        //     }
        //     if (sum == target) {
        //         int currentLen = end - start + 1;
        //         if (start > 0 && minLen[start - 1] != int.MaxValue) {
        //             result = Math.Min(result, currentLen + minLen[start - 1]);
        //         }
        //         minLen[end] = Math.Min(minLen[end], currentLen);
        //     }
        //     minLen[end] = end > 0 ? Math.Min(minLen[end], minLen[end - 1]) : minLen[end];
        // }
        // return result == int.MaxValue ? -1 : result;
    }
}
```