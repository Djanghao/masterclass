# [Java/C++/Python/JavaScript/Kotlin/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 6
**Link:** [https://leetcode.com/problems/longest-repeating-character-replacement/solutions/2323176/](https://leetcode.com/problems/longest-repeating-character-replacement/solutions/2323176/)

---

```
```

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

```
```

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* ***Java***
```
 public int characterReplacement(String s, int k) {
		Map<Character, Integer> map = new HashMap<>(); 

	   int left = 0, maxRepeat = 0, maxWindow = 0;

		for(int right = 0; right < s.length(); right++) {
			char ch = s.charAt(right);
			if(!map.containsKey(ch)) {
				map.put(ch, 0);
			}
			map.put(ch, map.get(ch) + 1);
			
			// IMPORTANT: maxRepeat is not the accurate number of dominant character, It is the historical maximum count 
			// We do not care about it because unless it gets greater, it won't affect our final max window size.
			maxRepeat = Math.max(maxRepeat, map.get(ch));

			if(right - left + 1 - maxRepeat > k) {
				char remove = s.charAt(left);
				map.put(remove, map.get(remove) - 1);
				left++;
			}
        
        maxWindow = Math.max(maxWindow, right - left + 1);
    }
    
    return maxWindow;
}
```

```
```

```
```

The best result for the code below is ***0ms / 7.0MB*** (beats 100.00% / 100.00%).
* ***C++***
```
  int characterReplacement(string a, int k) {
        int i=0,j=0, maxRepeating = 0, maxLen = 0;
        unordered_map<char, int> m;
        
        //Character other than maximum repeating character should at most be k, becuase we can make only k changes in the string.
        //(length of substring - number of times of the maximum occurring character in the substring) <= k
		
        for(j=0; j<a.size(); j++){
            m[a[j]]++;
            maxRepeating = max(maxRepeating, m[a[j]]);
            //When other characters become greater than k, we move window ahead.
            if(j-i+1 - maxRepeating > k){
                m[a[i]]--;
                i++;
            }
            maxLen = max(maxLen, j-i+1);
        }
        return maxLen;
    }
```

```
```

```
```


The best result for the code below is ***26ms / 12.2MB*** (beats 95.42% / 82.32%).
* ***Python***
```
    def characterReplacement(self, s: str, k: int) -> int:
        
        l = 0
        c_frequency = {}
        longest_str_len = 0
        for r in range(len(s)):
            
            if not s[r] in c_frequency:
                c_frequency[s[r]] = 0
            c_frequency[s[r]] += 1
            
            # Replacements cost = cells count between left and right - highest frequency
            cells_count = r - l + 1
            if cells_count - max(c_frequency.values()) <= k:
                longest_str_len = max(longest_str_len, cells_count)
                
            else:
                c_frequency[s[l]] -= 1
                if not c_frequency[s[l]]:
                    c_frequency.pop(s[l])
                l += 1
        
        return longest_str_len
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
const characterReplacement = (s, k) => {
  let left = 0;
  let right = 0;
  let maxCharCount = 0;
  const visited = {};

  while (right < s.length) {
    const char = s[right];
    visited[char] = visited[char] ? visited[char] + 1 : 1;

    if (visited[char] > maxCharCount) maxCharCount = visited[char];

    if (right - left + 1 - maxCharCount > k) {
      visited[s[left]]--;
      left++;
    }

    right++;
  }

  return right - left;
};
```

```
```

```
```

The best result for the code below is ***68ms / 44.2MB*** (beats 100.00% / 45.25%).
* ***Kotlin***
```
class Solution {
    fun characterReplacement(s: String, k: Int): Int {
        var mostFreqCharCount = 0; var start = 0; var max=0
        val map = mutableMapOf<Char, Int>()
        
        for(end in 0 until s.length){
            map.put(s[end], map.getOrDefault(s[end], 0) + 1)
            mostFreqCharCount = Math.max(map.get(s[end])!!, mostFreqCharCount)
            if(end - start + 1 > mostFreqCharCount + k){
                map.put(s[start], map.get(s[start])!! - 1)
                start++                
            }
            max = Math.max(max, end - start + 1)
        }
        return max
    }
}
```

```
```

```
```

The best result for the code below is ***12ms / 32.2MB*** (beats 95% / 84%).
* ***Swift***
```
class Solution {
    
    func characterReplacement(_ s: String, _ k: Int) -> Int {
        var windowStart = 0, mx = 0, maxChar = 0
        var inputString = Array(s)
        var dict = [Character: Int]()
        
        for windowEnd in 0..<inputString.count{
            dict[inputString[windowEnd], default: 0 ] += 1
            maxChar = max(maxChar, dict[inputString[windowEnd], default: 0])
            let replaceCharCount = (windowEnd - windowStart + 1) - maxChar
            if replaceCharCount <= k{
                mx = max(mx, windowEnd - windowStart + 1 )
            }else{
                while( ((windowEnd - windowStart + 1) - maxChar) > k){
                    dict[inputString[windowStart], default: 0 ] -= 1
                    windowStart += 1
                }
            }
    
        }
        return mx
    }
}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***