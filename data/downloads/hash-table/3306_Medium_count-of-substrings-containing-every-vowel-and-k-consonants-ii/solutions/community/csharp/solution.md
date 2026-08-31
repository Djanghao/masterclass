# C# PrefixSum & SlidingWindow O(N)

**Author:** unagiHuman
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/5847275/](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/5847275/)

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
```csharp []
public class Solution {
    public long CountOfSubstrings(string word, int k) {
        var vowelMap = new Dictionary<char,int>();
        vowelMap['a'] = 0;
        vowelMap['e'] = 1;
        vowelMap['i'] = 2;
        vowelMap['o'] = 3;
        vowelMap['u'] = 4;

        var N = word.Length;
        var prefixsum = new long[N+1,6];
        for(var i=1; i<N+1; i++)
        {
            var c = word[i-1];
            for(var j=0; j<6; j++)
            {
               prefixsum[i,j] = prefixsum[i-1,j];
            }
            if(vowelMap.ContainsKey(c))
            {
                var vindex = vowelMap[c];
                prefixsum[i,vindex]+=1;
            }
            else
            {
                prefixsum[i,5] +=1;
            }
        }

        return GetCountAtMostK(k) -  GetCountAtMostK(k+1);

        long GetCountAtMostK(int kval)
        {
            long atmostCount = 0;
            var left = 0;
            var right = 0;
            while(left<N && right<N)
            {
                var count = checkConstCount(left,right);
                if(checkVowel(left,right))
                {
                    if(count >= kval)
                    {
                        //Console.WriteLine("l:{0} r:{1} count:{2}",left, right, count);
                        atmostCount += (N - 1 - right + 1);
                        left++;
                    }
                    else
                    {
                        right++;
                    }
                    
                }
                else
                {
                    right++;
                }
            }
            return atmostCount;
        }

        bool checkVowel(int left, int right)
        {
            
            for(var i=0; i<5; i++)
            {
                var count = prefixsum[right+1,i] - prefixsum[left,i];
                if(count == 0)
                {
                    
                    return false;
                }
                //Console.WriteLine("{0},{1}",prefixsum[right+1,i], prefixsum[left,i]);
            }
            //Console.Write("\
");
            return true;
        }

        long checkConstCount(int left, int right)
        {
            var count = prefixsum[right+1,5] - prefixsum[left,5];
            return count;
        }
    }
}
```