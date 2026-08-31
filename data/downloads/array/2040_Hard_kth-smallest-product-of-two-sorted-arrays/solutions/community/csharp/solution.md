# C# Solution - Binary Search with Counting

**Author:** taangels
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solutions/4715047/](https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solutions/4715047/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    private void Parition(int[] nums1, int[] nums2, out int posLen1, out int negLen1, out int posLen2, out int negLen2, 
        out int[] pos1, out int[] neg1, out int[] pos2, out int[] neg2, out bool isResultPositive, ref long k)
    {
        posLen1 = 0; negLen1 = 0; posLen2 = 0; negLen2 = 0;

        foreach (int num in nums1)
        {
            if (num < 0) negLen1++;
            else posLen1++;
        }

        foreach (int num in nums2)
        {
            if (num < 0) negLen2++;
            else posLen2++;
        }

        int numNegatives = posLen1 * negLen2 + posLen2 * negLen1;
        isResultPositive = k > numNegatives;

        pos1 = new int[posLen1]; neg1 = new int[negLen1];
        pos2 = new int[posLen2]; neg2 = new int[negLen2];

        int iPos = 0, iNeg = 0;
        foreach (int num in nums1)
        {
            if (num < 0)
                neg1[iNeg++] = num;
            else 
                pos1[iPos++] = num;
        }

        iPos = 0; iNeg = 0;
        foreach (int num in nums2)
        {
            if (num < 0)
                neg2[iNeg++] = num;
            else 
                pos2[iPos++] = num;
        }
        
        // if result is positive, we want negative numbers is descending order.
        // if result is positive, we want negative numbers is ascending order.
        // Reason is - for two arrays, if we keep i at arr1[0] and j and arr2[n-1], by 
        // comparing both values, we should be able to say that left side elements in arr2
        // are less than arr1[i] * arr2[j]
        if (isResultPositive)
        {
            k -= numNegatives; // find (k - numNeg)th positive number
            Array.Reverse(neg1);
            Array.Reverse(neg2);
        }
        else
        {
            Array.Reverse(pos1);
            Array.Reverse(pos2);
        }
    }

    private long GetValidNumberCount(int[] arr1, int[] arr2, long val)
    {
        int i = 0, j = arr2.Length-1;
        long count = 0L;

        while (i < arr1.Length && j >= 0)
        {
            // all numbers of left of j are less than val
            if (((long)arr1[i] * (long)arr2[j]) <= val)
            {
                count += (long)(j+1);
                i++;
            }
            else
            {
                j--;
            }
        }

        return count;
    }


    public long KthSmallestProduct(int[] nums1, int[] nums2, long k) 
    {

        Parition(nums1, nums2, out int posLen1, out int negLen1, out int posLen2, out int negLen2, out int[] pos1, 
                    out int[] neg1, out int[] pos2, out int[] neg2, out bool isResultPositive, ref k);
        
        // high , low based on input constraints
        long low = -(long)Math.Pow(10, 10) - 1;
        long high =  (long)Math.Pow(10, 10) + 1;

        while (low < high)
        {
            long mid = low + (high - low)/2;
            long count = isResultPositive ? GetValidNumberCount(pos1, pos2, mid) + GetValidNumberCount(neg1, neg2, mid)
                : GetValidNumberCount(pos1, neg2, mid) + GetValidNumberCount(pos2, neg1, mid);
            
            if (count >= k)
            {
                high = mid;
            }
            else
            {
                low = mid + 1;
            }
        }

        return high;
    }
}
```