# Brute force

**Author:** user9385
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/4744904/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/4744904/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. Check the prefix is the same as suffix
2. Check does the prefix exist in the dictionary
3. Put visited strings into dictionary
# Approach
<!-- Describe your approach to solving the problem. -->
Use one more Hashset to decrease the time cost in getting prefix.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
# Code
```
public class Solution {
    Dictionary<string, long> dict = new();
    HashSet<int> lengths = new();
    public long CountPrefixSuffixPairs(string[] words) {
        long count = 0;
        for(int i=0; i<words.Length; ++i){
            count += CheckPrefixSuffix(words[i]);
            dict.TryAdd(words[i], 0);
            dict[words[i]]++;
            lengths.Add(words[i].Length);
        }
        return count;
    }
    private long CheckPrefixSuffix(string a){
        long count = 0;
        if(dict.ContainsKey(a)){
            count+=dict[a];
        }
        foreach(var length in lengths){
            if(a.Length > length){
                string prefix = a.Substring(0, length);
                string suffix = a.Substring(a.Length-length);
                if(prefix == suffix && dict.ContainsKey(prefix)){
                    count+=dict[prefix];
                }
            }
        }
        return count;
    }
}
```