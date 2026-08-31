# Explained O(n) Soln using Manacher's Algo

**Author:** harsh007kumar
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/solutions/4712779/](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/solutions/4712779/)

---

# Approach
    1. Use ManacherAlgorithm to find in linear time all the longest possible palindrome length for each index in 's' of odd length
    2. Now transfer o/p of manacher's into 2 arrays:
    - 1st contains length of longest palindrome on left of each index
    - 2nd contains length of longest palindrome on right of each index
    3. Iterate thru 0..l-2 indicies and for each index update the 'maxProduct' if greater value of LongestPaliOnleft[i]*LongestPaliOnright[i+1] is found

# Complexity
- Time & Space complexity:
O(n)

# Code
```
public class Solution {
    // Time O(n) | Space O(n), n = length of string 's'
    // Ref https://youtu.be/fWFrAnNQKH8
    public long MaxProduct(string s) {
        int l=s.Length;
        if(l==2) return 1;       // base case
         
        // find the longest odd pali from each idx
        int[] longestPali = ManacherAlgorithm(s);           // O(n)
        // s   a b a c a b a d e
        // Ex: 1 3 1 7 1 3 1 1 1
        
        // From Manacher's we find the longest palindrome avaliable on left for each idx moving left..right
        long[] longestPaliOnLeft = new long[l];
        for(int i=0;i<l;i++)
        {
            var paliLen = longestPali[i];
            // update cur idx
            longestPaliOnLeft[i]=Math.Max(1,longestPaliOnLeft[i]);
            
            // if we have a pali of len 3 we know what's the no of idx we need to move before we can have that Palindrome under
            var half = paliLen/2;
            var j=i+half;
                longestPaliOnLeft[j]=Math.Max(longestPaliOnLeft[j],paliLen);
        }
        // update for shorter palindrome so for large palindrome the index before show have -2 value atleast
        for(int i=l-2;i>=0;i--)
            longestPaliOnLeft[i]=Math.Max(longestPaliOnLeft[i],longestPaliOnLeft[i+1]-2);
        // Now we have
        // Ex: 1 1 3 1 3 5 7 1 1


        // update the max seen so far for each idx left..right
        var max=longestPaliOnLeft[0];
        for(int i=1;i<l;i++)
        {
            max=Math.Max(max,longestPaliOnLeft[i]);
            longestPaliOnLeft[i]=max;
        }
        // after above operation we have
        // Ex: 1 1 3 3 3 3 7 1 1

        //-----------------------------------------------------------//
        // From Manacher's we find the longest palindrome avaliable on right for each idx moving right..left
        // Ex: 1 3 1 7 1 3 1 1 1
        long[] longestPaliOnRight = new long[l];
        
        for(int i=l-1;i>=0;i--)
        {
            var paliLen = longestPali[i];
            // update cur idx
            longestPaliOnRight[i]=Math.Max(1,longestPaliOnRight[i]);
            
            // if we have a pali of len 3 we know what's the no of idx we need to move before we can have that Palindrome under
            var half = paliLen/2;
            var j=i-half;
                longestPaliOnRight[j]=Math.Max(longestPaliOnRight[j],paliLen);
            
        }
        // update for shorter palindrome so for large palindrome the index before show have -2 value atleast
        for(int i=1;i<l;i++)
            longestPaliOnRight[i]=Math.Max(longestPaliOnRight[i],longestPaliOnRight[i-1]-2);
        // Now we have
        // Ex: 7 5 3 1 3 1 1 1 1

        // update the max seen so far for each idx right..left
        max=longestPaliOnRight[l-1];
        for(int i=l-2;i>=0;i--)
        {
            max=Math.Max(max,longestPaliOnRight[i]);
            longestPaliOnRight[i]=max;
        }
        // after above operation we have
        // Ex: 7 5 3 3 3 1 1 1 1

        // Finally update the maximum product of the 2 odd length pali found of each side
        long maxProduct=1;
        for(int i=0;i<l-1;i++)
            maxProduct = Math.Max(maxProduct,longestPaliOnLeft[i]*longestPaliOnRight[i+1]);
        return maxProduct;
    }
    // Time = Space = O(n), n = length of input string 's'
    // ref https://leetcode.com/problems/longest-palindromic-substring/solutions/4212241/98-55-manacher-s-algorithm
    public static int[] ManacherAlgorithm(string s) {
        string T = "^#" + string.Join("#", s.ToCharArray()) + "#$";
        int n = T.Length;
        int[] P = new int[n];
        int C = 0, R = 0;
        
        for (int i = 1; i < n-1; i++) {
            P[i] = (R > i) ? Math.Min(R - i, P[2*C - i]) : 0;
            while (T[i + 1 + P[i]] == T[i - 1 - P[i]])
                P[i]++;
            
            if (i + P[i] > R) {
                C = i;
                R = i + P[i];
            }
        }
        // convert palindrome length array back to original length of input string
        int[] mana = new int[s.Length];
        int j=0;
        for(int i=2;i<n-2;i+=2)
            mana[j++]=P[i];
        return mana;
    }
    // // Time O(n^2) | Space O(n), n = length of string 's' | TLE
    // public long MaxProduct(string s) {
    //     /*
    //     1. Find the longest odd length palidrome possible for each index in 's'
    //     2. Now in first loop divide the s into 2 parts from idx 1...len-2 so we kept a left and right part
    //     3. Now for each part check all the index and get the longest possible palindrome within the substring limit/bounder
    //     4. Multiply the length of longest from each part and if its greather than update maxProduct.
    //     */
    //     int l = s.Length, lt,rt;
    //     long maxProductOfOddLengthPalindromes=1;
    //     if(l==2) return maxProductOfOddLengthPalindromes;
        
    //     // find the longest odd pali from each idx
    //     int[] longestPali = new int[l];
    //     for(int centre=0;centre<l;centre++)                 // O(n^2)
    //     {
    //         longestPali[centre]++;   // each single char is pali of len 1
    //         lt = centre-1;
    //         rt = centre+1;
    //         while(lt>=0 && rt<l && s[lt--]==s[rt++])
    //             longestPali[centre]+=2;     // as we increase length by 2 chars
    //     }
    //     // Divide into 2 parts, dividing idx is considered part of left
    //     for(int divideFrom = 0;divideFrom<l-1;divideFrom++) // O(n^2)
    //     {
    //         int cur = -1,longestLt=1,longestRt=1,paliLenAtCurIdx,half,maxExtent;

    //         // find longest palidrome in left half
    //         while(++cur<=divideFrom)
    //         {
    //             paliLenAtCurIdx =  longestPali[cur];
    //             half = (paliLenAtCurIdx-1)/2;
    //             // take min of the half length of pali or the boundry/division point
    //             maxExtent = Math.Min(half,divideFrom-cur);
    //             // update longest pali found so far
    //             longestLt=Math.Max(longestLt,1+(2*maxExtent));
    //         }
    //         // find longest palidrome in right half
    //         while(cur<l)
    //         {
    //             paliLenAtCurIdx =  longestPali[cur];
    //             half = (paliLenAtCurIdx-1)/2;
    //             // take min of the half length of pali or the boundry/division point
    //             maxExtent = Math.Min(half,-1+cur-divideFrom);
    //             // update longest pali found so far
    //             longestRt=Math.Max(longestRt,1+(2*maxExtent));

    //             cur++;
    //         }
    //         // update the maximum product of the 2 odd length pali found of each side
    //         maxProductOfOddLengthPalindromes = Math.Max(longestLt*longestRt,maxProductOfOddLengthPalindromes);
    //     }
    //     return maxProductOfOddLengthPalindromes;
    // }
}
```
![image.png](./images/0.png)
