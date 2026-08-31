# [Java/C++/Python/JavaScript/Kotlin/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 5
**Link:** [https://leetcode.com/problems/scramble-string/solutions/1990829/](https://leetcode.com/problems/scramble-string/solutions/1990829/)

---

***Hello it would be my pleasure to introduce myself Darian.***

***Java***
```
public class Solution {
	public boolean isScramble(String s1, String s2) {
		if (s1.length() != s2.length()) return false;
		int len = s1.length();
		/**
		 * Let F(i, j, k) = whether the substring S1[i..i + k - 1] is a scramble of S2[j..j + k - 1] or not
		 * Since each of these substrings is a potential node in the tree, we need to check for all possible cuts.
		 * Let q be the length of a cut (hence, q < k), then we are in the following situation:
		 * 
		 * S1 [   x1    |         x2         ]
		 *    i         i + q                i + k - 1
		 * 
		 * here we have two possibilities:
		 *      
		 * S2 [   y1    |         y2         ]
		 *    j         j + q                j + k - 1
		 *    
		 * or 
		 * 
		 * S2 [       y1        |     y2     ]
		 *    j                 j + k - q    j + k - 1
		 * 
		 * which in terms of F means:
		 * 
		 * F(i, j, k) = for some 1 <= q < k we have:
		 *  (F(i, j, q) AND F(i + q, j + q, k - q)) OR (F(i, j + k - q, q) AND F(i + q, j, k - q))
		 *  
		 * Base case is k = 1, where we simply need to check for S1[i] and S2[j] to be equal 
		 * */
		boolean [][][] F = new boolean[len][len][len + 1];
		for (int k = 1; k <= len; ++k)
			for (int i = 0; i + k <= len; ++i)
				for (int j = 0; j + k <= len; ++j)
					if (k == 1)
						F[i][j][k] = s1.charAt(i) == s2.charAt(j);
					else for (int q = 1; q < k && !F[i][j][k]; ++q) {
						F[i][j][k] = (F[i][j][q] && F[i + q][j + q][k - q]) || (F[i][j + k - q][q] && F[i + q][j][k - q]);
					}
		return F[0][0][len];
	}
}
```

***C++***
```
class Solution {
public:
    // checks if s2 is scrambled form of s1
    /*
        The idea is to find a position in string s1, from where scrambling must have
        started to create s2. So if k is the position, then s1[0-k] and s1[k+1, N-1]
        were the last scramble op. We do this recursively for the smaller substrings.
        
    */
    bool isScrambled(int s1_start, int s1_end, int s2_start, int s2_end,
                    string& s1, string& s2, unordered_map<string, bool>& dp) {
        // create the current position combination
        string curr_cmb = to_string(s1_start) + ',' + to_string(s1_end) + 
                            ',' + to_string(s2_start) + ',' + to_string(s2_end);
        // check if the values is in cache 
        auto it = dp.find(curr_cmb);
        if(it != dp.end())
            return dp[curr_cmb];
        
        // base cases
        if(s1_end < s1_start || s2_end < s2_start)
            return false;
        // if the size of two strings is diff, then scrambling not poss
        if(s1_end - s1_start != s2_end - s2_start)
            return false;
        // if the two substrings match, then they are scrambled
        if(s1.substr(s1_start, s1_end - s1_start + 1) == s2.substr(s2_start, s2_end - s2_start + 1))
            return true;
        
        // check if the two substrings contains the same set of chars
        vector<int> char_freq(256, 0);
        for(int i = 0; i <= s1_end - s1_start; i++)
            char_freq[s1[s1_start + i]-'a']++, char_freq[s2[s2_start + i]-'a']--;
        for(int i = 0; i < 256; i++)
            if(char_freq[i]) 
				return false;
        
        // find a position which is the potential scramble point
        for(int k = 0; k < (s1_end - s1_start); k++) {
            // check for s1[start: k], s2[start:k] and s1[k+1 : end], s2[k+1 : end]
            if(isScrambled(s1_start, s1_start + k, s2_start, s2_start + k, s1, s2, dp)  &&
              isScrambled(s1_start + k + 1, s1_end, s2_start + k + 1, s2_end, s1, s2, dp))
                return dp[curr_cmb] = true;
            // Now incase of s2, maybe scramble opertation was performed at k, so 
            // now check if the other half of s2
            // check for s1[start: k], s2[end - k : end] and s1[k+1 : end], s2[s : end - k - 1]
            if(isScrambled(s1_start, s1_start + k, s2_end - k, s2_end, s1, s2, dp)  &&
              isScrambled(s1_start + k + 1, s1_end, s2_start, s2_end - k - 1, s1, s2, dp))
                return dp[curr_cmb] = true;
        }
        return dp[curr_cmb] = false;
    }
    
    bool isScramble(string s1, string s2) {
        // DP cache: saves the result of (s1_start, s1_end, s2_start, s2_end) cmb
        unordered_map<string, bool> dp;
        return isScrambled(0, s1.size()-1, 0, s2.size()-1, s1, s2, dp);
    }
};
```

***Python***
```
class Solution(object):
    def isScramble(self, s1, s2):
        """
        :type s1: str
        :type s2: str
        :rtype: bool
        """
        if s1 == s2:
            return True
        if len(s1) != len(s2):
            return False
            
        # Check both strings have same count of letters
        count1 = collections.defaultdict(int)
        count2 = collections.defaultdict(int)
        for c1, c2 in zip(s1, s2):
            count1[c1] += 1
            count2[c2] += 1
        if count1 != count2: return False
        
        # Iterate through letters and check if it results in a partition of 
        # string 1 where the collection of letters are the same
        # on the left (non-swapped) or right (swapped) sides of string 2
        # Then we recursively check these partitioned strings to see if they are scrambled
        lcount1 = collections.defaultdict(int) # s1 count from left
        lcount2 = collections.defaultdict(int) # s2 count from left
        rcount2 = collections.defaultdict(int) # s2 count from right
        for i in xrange(len(s1) - 1):
            lcount1[s1[i]] += 1          
            lcount2[s2[i]] += 1
            rcount2[s2[len(s1) - 1 - i]] += 1
            if lcount1 == lcount2:  # Left sides of both strings have same letters
                if self.isScramble(s1[:i + 1], s2[:i + 1]) and \\
                   self.isScramble(s1[i + 1:], s2[i + 1:]):
                    return True
            elif lcount1 == rcount2: # Left side of s1 has same letters as right side of s2
                if self.isScramble(s1[:i + 1], s2[-(i + 1):]) and \\
                   self.isScramble(s1[i + 1:], s2[:-(i + 1)]):
                    return True
        return False
```

***JavaScript***
```
const _isScramble = function (s1, s2, trackMap) {    
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;
    if (s1.length === 0 || s2.length === 0) return true;
    const trackKey = s1 + s2;
    if (trackKey in trackMap) return !!trackMap[trackKey];

    let result = false;
    let xorFW = 0;
    let xorBW = 0;

    for (var i = 0, j = s1.length - 1, iPlus = 1; i < s1.length - 1; i++, j--, iPlus++) {
        xorFW ^= s1.charCodeAt(i) ^ s2.charCodeAt(i);
        xorBW ^= s1.charCodeAt(i) ^ s2.charCodeAt(j);

        if (xorFW === 0 &&
            _isScramble(s1.substring(0, iPlus), s2.substring(0, iPlus), trackMap) &&
            _isScramble(s1.substring(iPlus), s2.substring(iPlus), trackMap)) {
            result = true;
            break;
        }

        if (xorBW === 0 &&
            _isScramble(s1.substring(0, iPlus), s2.substring(s1.length - iPlus), trackMap) &&
            _isScramble(s1.substring(iPlus), s2.substring(0, s1.length - iPlus), trackMap)) {
            result = true;
            break;
        }
    }

    trackMap[trackKey] = result;
    trackMap[s2 + s1] = result;
    return result;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const isScramble = function (s1, s2) {
    return _isScramble(s1, s2, {});
};
```

***Kotlin***
```
class Solution {
    val memo = mutableMapOf<String, Boolean>()
    
    fun isNotAnagram(s1: String, s2: String): Boolean {
        val f1 = MutableList(26) {0}
        val f2 = MutableList(26) {0}
        for (c in s1) {
            f1[(c-'a').toInt()]++
        }
        for (c in s2) {
            f2[(c-'a').toInt()]++
        }
        return f1.toString() != f2.toString()
    }
    
    fun isScramble(s1: String, s2: String): Boolean {
        if (s1 == s2) return true
        if (isNotAnagram(s1, s2)) return false
        memo["$s1*$s2"]?.let {
            return it
        }
        val n = s1.length
        for (i in 1 .. n-1) {
            
            if ((isScramble(s1.substring(0,i), s2.substring(0,i)) && isScramble(s1.substring(i,n), s2.substring(i,n))) || (isScramble(s1.substring(0,i), s2.substring(n-i,n)) && isScramble(s1.substring(i,n), s2.substring(0,n-i)))) {
                memo["$s1*$s2"] = true
                return true
            }
        }
        memo["$s1*$s2"] = false
        return false
    }
}
```

***Swift***
```
class Solution {
    func isScramble(_ s1: String, _ s2: String) -> Bool {
        var dp: [String: Bool] = [:]
        

        func _isScramble(_ chs1: [Character], _ chs2: [Character]) -> Bool {
            let key = String(chs1) + "-" +  String(chs2)
            if let v = dp[key] { return v }            
            if chs1.count == 1 { return chs1[0] == chs2[0] }
            var val = false

            for i in 1..<chs1.count {
                val = val || (_isScramble(Array(chs1[0..<i]), Array(chs2[0..<i])) 
                                && _isScramble(Array(chs1[i..<chs1.count]), Array(chs2[i..<chs2.count])))
                val = val || (_isScramble(Array(chs1[0..<i]), Array(chs2[chs2.count - i..<chs2.count]))
                                && _isScramble(Array(chs1[i..<chs1.count]), Array(chs2[0..<chs2.count-i]))) 
            }
            
            dp[key] = val
            return val
        }
        
        if s1.count != s2.count {
            return false
        } else {
            return _isScramble(Array(s1), Array(s2))
        }
    }
    
}
```

***Consider upvote if useful! Hopefully it can be used in your advantage!***
***Take care brother, peace, love!***
***"Open your eyes."***