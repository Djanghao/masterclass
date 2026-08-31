# C# | Binary search | Rabin-Carp hash | Rolling hash | July 2023

**Author:** jianminchen
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-duplicate-substring/solutions/3794647/](https://leetcode.com/problems/longest-duplicate-substring/solutions/3794647/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
It is so exciting to warm up algorithm for Meta phone screen. I work on algorithm with tag: Sliding window. 
# Approach
<!-- Describe your approach to solving the problem. -->
I chose to review rolling hash to solve the algorithm using optimal complexity. The editorial solution written for premium users are so nice and I enjoy reading rolling hash algorithm. 

The solution I wrote does not include the modulus using 10^9 + 7 to avoid hash collision. 
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1044_longest_duplicate_substring
{
    class Program
    {
        static void Main(string[] args)
        {
            var test = new Program();

            var result = test.LongestDupSubstring("banana");

            // output: "ana"
            Debug.Assert(result.CompareTo("ana") == 0);
        }

        // First prime number after 26 for hashing lowercase characters
        private const int HASH_NUM = 31; 

        /// <summary>
        /// July 20, 2023
        /// quickly study C# code from the following
        /// https://leetcode.com/problems/longest-duplicate-substring/solutions/2973788/rabin-karp-binary-search/
        /// </summary>
        /// <param name="s"></param>
        /// <returns></returns>
        public string LongestDupSubstring(String s)
        {
            var answer = "";
            var left = 1;
            var right = s.Length - 1;

            while (left <= right)
            {
                //binary search to finding largest size of substring
                int mid = left + (right - left) / 2;

                var duplicate = getDuplicate(mid, s);

                if (duplicate != null)
                {
                    answer = duplicate;
                    left = mid + 1;
                }
                else
                {
                    right = mid - 1;
                }
            }

            return answer;
        }
        
        /// <summary>
        /// Find first duplicate substring in s with specific size
        /// </summary>
        /// <param name="size"></param>
        /// <param name="s"></param>
        /// <returns></returns>
        private string getDuplicate(int size, string s){
            long h = hash(s.Substring(0,size));

            var set = new HashSet<long>();

            set.Add(h);

            long pow = 1;
            for(int i=1;i<size;i++)
            {
                pow = (pow * HASH_NUM);//Calculate HASH_NUM^(size-1)
            }

		    int n = s.Length;
            for(int i = 0; i < n-size; i++)
            {
                h = nextHash(pow, h, s[i], s[i+size]);
                
                if(set.Contains(h))
                {
                    return s.Substring(i+1, size);
                }

                set.Add(h);
            }

            return null;
        }

        /// <summary>
        /// check editorial - 
        /// </summary>
        /// <param name="s"></param>
        /// <returns></returns>
        private long hash(string s)
        {
            long h = 0;
            long a = 1;

            int n = s.Length;

            for (int i = n; i >= 1; i--)
            {
                char ch = s[i - 1];

                h += (ch - 'a' + 1) * a;

                a = (a * HASH_NUM);
            }

            return h;
        }
        
        /// <summary>
        /// Calculate hash from current hash by removing left char and adding right char
        /// </summary>
        /// <param name="pow"></param>
        /// <param name="hash"></param>
        /// <param name="left"></param>
        /// <param name="right"></param>
        /// <returns></returns>
        private long nextHash(long pow, long hash, char left, char right)
        {
            return (hash - (left - 'a' + 1) * pow) * HASH_NUM + (right - 'a' + 1);
        }
    }
}
```