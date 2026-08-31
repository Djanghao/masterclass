# Minimum Deletions to make String K-Special: Efficient HashMap Algo

**Author:** madhusudanrathi99
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4886626/](https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4886626/)

---

# Intuition
The intuition behind this code is to find the minimum number of deletions required to make the frequency of each character in the string `word` at most `k`.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **Initialize Variables**: 
The code initializes a dictionary `map` to store the frequency of each character in `word`, a list `vals` to store the frequencies, and integers `sumOfLess`, `ans`, and `n` to store the sum of frequencies less than the current frequency, the minimum number of deletions, and the number of distinct characters in `word` respectively.
2. **Count Frequencies**: 
The code then iterates over the characters in `word` and increments their frequency in `map`.
3. **Store Frequencies**: 
The code stores the frequencies in `vals` and sorts `vals`.
4. **Calculate Minimum Deletions**: 
The code iterates over `vals`. For each frequency `vals[i]`, it calculates the sum of frequencies less than `vals[i]` and the sum of differences between frequencies greater than `vals[i]` and `k`. It updates `ans` with the minimum of `ans` and the calculated sum.
5. **Return Minimum Deletions**: 
The code returns `ans`, which represents the minimum number of deletions required to make the frequency of each character at most `k`.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(N \\log N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MinimumDeletions(string word, int k) {
        Dictionary<char, int> map = new Dictionary<char, int>();
        foreach(char ch in word) {
            if(!map.ContainsKey(ch))
                map[ch] = 0;
            map[ch]++;
        }
        
        List<int> vals = new List<int>();
        foreach(var item in map)
            vals.Add(item.Value);
        vals.Sort();
        
        int sumOfLess = 0;
        int ans = int.MaxValue;
        int n = vals.Count;
        for(int i = 0; i < n; i++) {
            if(i > 0)
                sumOfLess += vals[i - 1];
            int sum = sumOfLess;
            for(int j = i + 1; j < n; j++) {
                if(vals[j] - vals[i] > k)
                    sum += vals[j] - vals[i] - k;
            }
            ans = Math.Min(ans, sum);
        }
        return ans;
    }
}
```