# EASY SOLUTION USING C# BINARY SEARCH BEATS 87%

**Author:** bobur_jr
**Votes:** 0
**Link:** [https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/5951963/](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/5951963/)

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
    public int[] NumSmallerByFrequency(string[] queries, string[] words) {
        var res = new int[queries.Length];
        words = words.OrderBy(x => GetFrequency(x)).ToArray();
        var l = words.Length;
        for(var i = 0; i < queries.Length; i++) {
            var freq = GetFrequency(queries[i]);
            var greaterIndex = FindFirstGreaterIndex(words, freq);
            res[i] = (l - greaterIndex);
        }
        return res;
    }

    private int FindFirstGreaterIndex(string[] words, int freaquency){
        int l = 0, r = words.Length - 1;

        while(l <= r){
            var md = (l + r) / 2;
            var freq = GetFrequency(words[md]); 
            if(freq == freaquency){
                l = md + 1;
            }else if(freq > freaquency){
                r = md - 1;
            }else if(freq < freaquency){
                l = md + 1;
            }
        }
        return l;
    }

    private int GetFrequency(string word){
        var counter = 0;
        var min = 'z' + 1;
        foreach(var w in word){
            if(w < min){
                counter = 1;
                min = w;
            }else if(w == min){
                counter++;
            }
        }
        return counter;
    }
}
```