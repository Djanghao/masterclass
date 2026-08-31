# Csharp | Check every substring | O(n^2)

**Author:** alfonsohdez08
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/solutions/1761923/](https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/solutions/1761923/)

---

```
public class Solution {
    private HashSet<string> _hashes;
    
    public int EqualDigitFrequency(string s) {
        /*
            Brute force solution: try every substring O(s.Length ^ 2)
            
            Approach: build a substring of length [1, s.Length] using
            the sliding window pattern, and then check if the built
            substring meet the requirements. If so, dump it into a 
            hashset (using string default comparer).
        */
        
        _hashes = new HashSet<string>();
        
        for (int substringLength = 1; substringLength <= s.Length; substringLength++)
            CountEqualDigitFrequency(s, substringLength);
        
        return _hashes.Count;
    }
    
    private void CountEqualDigitFrequency(string str, int substringLength)
    {
        var windowDigitFrequencies = new Dictionary<char, int>();
        
        int windowStart = 0;
        for (int windowEnd = 0; windowEnd < str.Length; windowEnd++)
        {
            char rightDigit = str[windowEnd];
            windowDigitFrequencies[rightDigit] = (windowDigitFrequencies.ContainsKey(rightDigit) ? windowDigitFrequencies[rightDigit] : 0 ) + 1;
            
            if (windowEnd - windowStart + 1 == substringLength)
            {
                if (HasSameDigitFrequency(windowDigitFrequencies))
                {
                    // We have found a substring that meets the requirements
                    _hashes.Add(str.Substring(windowStart, windowEnd - windowStart + 1));
                }
                
                char leftDigit = str[windowStart++];
                
                windowDigitFrequencies[leftDigit]--;
                if (windowDigitFrequencies[leftDigit] == 0)
                    windowDigitFrequencies.Remove(leftDigit);
            }
        }
    }
    
    private static bool HasSameDigitFrequency(Dictionary<char, int> digitFrequencies)
    {
        List<int> frequencies = digitFrequencies.Values.ToList();
        
        int frequency = frequencies[0];
        for (int i = 1; i < frequencies.Count; i++)
            if (frequency != frequencies[i]) return false;
            
        return true;
    }
}
```