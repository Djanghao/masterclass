# SORTING IS A WASTE OF (RUN)TIME!!! Not one single sort and I have the fastest C# submission 134ms

**Author:** Silentium_est_inaestimabile
**Votes:** 2
**Link:** [https://leetcode.com/problems/arithmetic-subarrays/solutions/4319950/](https://leetcode.com/problems/arithmetic-subarrays/solutions/4319950/)

---

# Intuition
Sorting and comparing.... just seems like way too much work. Why bother with any of that when we can use a few properties of finite arithmetic sequences to do the heavy lifting for us?

The main idea is to use a very quick check to eliminate a given subarray from consideration before we put any real computation into it.

Here is what we need to know about finite arithmetic sequences.
i) The average value of the sequence is (a_n + a_1) / 2.
ii) The difference between a_i and a_(i+1) is (a_n - a_1) / (n - 1).

# Approach
First we create an array of length nums.size() + 1, and we populate it with the partial sums of the array nums. This allows us to quickly calculate the sum of the elements of the ith subarray as SUM = (partialSums[r[i] + 1] - partialSums[l[i]]).

Now we can compute the average value of the elements of the subarray and compare it to the average value of the arithmetic sequence that would be formed by rearranging the subarray. Iterate through the subarray to find its maximum value and its minimum value. We want to avoid integer division and the rounding associated with it, so instead of division we will use the old grade school trick of cross multiplication to eliminate the denominators when we calculate the the two averages. This gives us something to check:

A) PartialSums[r[i] + 1] - partialSums[l[i]]) * 2 != (SUBARRAY_MIN + SUBARRAY_MAX) * (r[i] - l[i] + 1))

If the two are not equal then it is impossible to rearrange the subarray into an arithmetic sequence and we can mark it false. Note though if they are equal that does not immediately imply that the subarray can be rearranged into an arithmetic sequence, we will need to verify that. Again, copying and sorting and comparing seems so excessive.

If the subarray can be rearranged then the first term of the sequence would be the minimum value of the subarray and the final term would be the maximum value, both of which we have already found.

Create a HashSet<int> and insert every value of the subarray into it.

Use the formula from above to calculate the difference between two adjacent values in the arithmetic sequence:

Diff = (a_n - a_1) / 2 = (subarrayMax - subArrayMin) / 2.

Now we will compute every value that should be in the arithmetic sequence and check if it is contained in the HashSet subArrayElements. If we find even one of our computed values is not in the set, then it is impossible to rearrange the subarray into an arithmetic sequence. SO if we find one, set results[i] = false and contradictionFound = true and break out of the loop.

(The coputed values are subarray_min, subarray_min + Diff, subarray_min + 2*Diff, ..... , subarrayMin + (n-1)*Diff )

It is possible that the loop ended without us breaking out of it, so check. If contradictionFound == false then the subarray can be rearranged into an arithmetic sequence.

My RunTime is 134 ms, that is the absolute fastest runtime for C# there is, the next closest is 154 ms. That is an enourmous difference to have between first and second place!!!!

The same algorithm is also the absolute fastest when written in C++, there it has a Runtime of 15ms and the closest contender in second place is 18ms, a full 20% slower!!!

This solution beats 100% in Runtime and 96.67% in Memory.

The code is well commented. Anything that might be unclear here should be clear in the comments.

Sometime it pays to completely ignore the hints....

That's all folks....

EDIT: I found another optimization which takes exactly one line of code to detect some but not all subarrays that cannot be rearranged into an arithmetic sequence. It can save even more work and shave the Runtime down even further. If anyone wants me to add it in or explain it give me some thumbs up or request it in the comments. 

# Complexity
- Time complexity:
$$O(n)$$ 

- Space complexity:
$$O(n)$$

# Code
```
public class Solution
{
    public IList<bool> CheckArithmeticSubarrays(int[] nums, int[] l, int[] r)
    {
        // There are a few tests we can use before resorting to a brute force approach of sort and verify


        ///**********************************************************************************************/
        /// Create an array of the partial sums of nums with length nums.Length + 1. This allows us
        /// to quickly find the sum of the terms in any subarray.
        /// 
        /// EX: Given indices i less than j, then the sum of the elements [nums(i) ... nums(j)] is 
        ///     equal to partialSums(j + 1) - partialSums(i).
        /// 
        /// We will use this array to compute the average value of the elements in the subarray and 
        /// compare them against the forumula for the average value of an arithmetic sequence which
        /// is:
        /// 
        /// AVG = (seq_min + seq_max) / 2
        /// 
        /// If SUM(nums[i]..nums[j])/(j - i + 1) != AVG then we can immediately eliminate the array from consideration.
        ///**********************************************************************************************/
        int[] partialSums = new int[nums.Length + 1];
        partialSums[0] = 0;
        for(int i = 0; i < nums.Length; i++)
        {
            partialSums[i + 1] = partialSums[i] + nums[i];
        }


        bool[] results = new bool[l.Length];

        HashSet<int> subArrayElements = new HashSet<int>();
        int SUB_MIN = 0;                     // Minimum element in subarray
        int SUB_MAX = 0;                     // Maximum element in subarray
        int L_idx = 0;                       // Left index
        int R_idx = 0;                       // Right index;
        int n = 0;                           // Number of elements in subarray
        int Diff = 0;                        // Difference between elements if the subarray is in fact an arithmetic sequence.
                
        bool contradictionFound = false;     // Flag used during the second test to detect a logical contradiction and 
                                             // determine a subarray cannot be rearranged into an arithmetic sequence.

        for(int i = 0; i < l.Length; i++)
        {

            ///**********************************************************************************************/
            /// Try to quickly identify cases were it is impossible based on the test at the top of the page
            /// 
            /// NOTE: This WILL NOT CATCH EVERY FALSE! Any case that makes it past this test still needs
            ///       to be verified before marking it true.
            ///**********************************************************************************************/
            SUB_MIN = Int32.MaxValue;
            SUB_MAX = Int32.MinValue;
            L_idx = l[i];
            R_idx = r[i];
            n = R_idx - L_idx + 1;
            
            // Find the minimum and maximum values in the subarray
            for(int j = L_idx; j <= R_idx; j++)
            {
                if (nums[j] < SUB_MIN) SUB_MIN = nums[j];
                if (nums[j] > SUB_MAX) SUB_MAX = nums[j];
            }

            // Begin testing the subarray
            if ( (partialSums[R_idx + 1] - partialSums[L_idx]) * 2 != (SUB_MIN + SUB_MAX) * (R_idx - L_idx + 1) )
            {
                // We compare two different methods of calculating the average value of the elements of the subarray.
                // If the two methods do not agree then clearly it cannot be rearranged into an arithmetic sequence.
                results[i] = false;
            }
            else
            {
                contradictionFound = false;
                ///**********************************************************************************************/
                ///  We will add the elements of the subarray to a HashSet. Then we will compute each term in what
                ///  would be the arithmetic sequence and add each to the HashSet. If the HashSet return true for
                ///  any of the values in the second step that implies that the value was NOT in the subarray, and
                ///  therefor the subarry cannot be rearranged into an arithmetic sequence.
                ///  We will try with using a HashSet. First we compute d (the difference between the terms if 
                ///  the subarray can form a valid arithmetic sequence. 
                ///  
                ///  The computed elements of the arithmetic sequence are:
                ///  
                ///  SUB_MIN + 0*d, SUB_MIN + 1*d, SUB_MIN + 2d, ... , SUB_MIN + (n - 1)*d
                ///  
                ///**********************************************************************************************/;
                
                // Add the terms to the subarray
                subArrayElements.Clear();
                for(int j = L_idx; j <= R_idx;j++)
                {
                    subArrayElements.Add(nums[j]);
                }


                Diff = (SUB_MAX - SUB_MIN) / ((R_idx - L_idx));      // In a finite arithmetic sequence the difference between adjacent
                                                                     // terms is given by (Max - Min)/(n - 1)
                for(int k = 0; k < n; k++)
                {
                    if(subArrayElements.Add(SUB_MIN))
                    {
                        results[i] = false;
                        contradictionFound = true;
                        break;
                    }

                    SUB_MIN += Diff;
                }

                if(!contradictionFound)
                {
                    results[i] = true;
                }
            }
        }

        return results;

    }
}

//Constraints:

// n == nums.length
// m == l.length
// m == r.length
// 2 <= n <= 500
// 1 <= m <= 500
// 0 <= l[i] < r[i] < n
// - 10^5 <= nums[i] <= 10^5
```