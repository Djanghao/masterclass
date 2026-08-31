# C# bitmasks, permutations

**Author:** valtss
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/4086345/](https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/4086345/)

---

# Intuition
- Looked at constraints - m,n <=8 that usually means that bitmasks are on the table.
- After bit of a thought realized how to efficiently calculate score from 2 bitmasks.
- Permutations generation pattern - again possible due to low m and n. Similar as in question #46 for example.

# Approach
1. Prepare bitmasks for all the students and mentors
2. Generate permutations either from students or mentors - calculate score for each generated permutation.

# Complexity
- Time complexity:
$$O(n!)$$ This dominated by the permutations, which means  bitmask tricks just allow to make it slightly less horrible. Bitmask tricks make this ~8 times faster or so in the worst case.

- Space complexity:
$$O(n)$$ roughly, we reduce input questions to bitmasks & use stack in recursion for finding permutations, but we do not store them.

# Code
```
public class Solution {
    // bitmask of answers
    uint calcMask(int[] A)
    {
        uint V = 0;
        for (int j = 0; j < A.Length; j++)
            if (A[j] != 0)
            {
                V |= (1u << j);
            }

        return V;

    }
    // score between a and b bitmasks
    // mask = integer with m least bits set
    int score(uint a, uint b, uint mask)
    {
        // AND and Popcntz
        return BitOperations.PopCount(a&b) + 
              // Invert A and B, apply masks get M/N bits, AND, popcnt
              BitOperations.PopCount(((~a) & mask)&((~b) & mask));
    }

    // Score for all the array
    int scoreAll(uint[] S, uint[] M, uint mask)
    {
        int result = 0;
        for (int i = 0; i < S.Length; i++)
        {
            result += score(S[i], M[i], mask);
        }
        return result;
    }

    void swap(uint[] nums, int a, int b)
    {
        var tmp = nums[a];
        nums[a] = nums[b];
        nums[b] = tmp;        
    }    
    // Permutations generating pattern (#46)
    int solve(int n, uint[] S, uint[] M, uint mask)
    {
        int answer = 0;

        if (n < 0)
        {
            return scoreAll(S,M, mask);
        }

        for (int i = n; i >=0 ; i--)
        {
            swap(S, n, i);
            answer = Math.Max(answer, solve(n-1, S, M, mask)); 
            swap(S, n, i);            
        }
        return answer;
    }

    public int MaxCompatibilitySum(int[][] students, int[][] mentors)
    {
        uint[] S = new uint[students.Length];
        uint[] M = new uint[mentors.Length];

        uint mask = 0;
        // precalculate mask that sets N/M least bits
        for (int i = 0; i < students[0].Length; i++)
            mask |= (1u << i);

        // precalculate bitmasks for students and mentors 
        for (int i = 0; i < S.Length; i++)
        {
            S[i] = calcMask(students[i]);
            M[i] = calcMask(mentors[i]);
        }
        
        return solve(S.Length-1, S, M, mask);        
    }
}
```