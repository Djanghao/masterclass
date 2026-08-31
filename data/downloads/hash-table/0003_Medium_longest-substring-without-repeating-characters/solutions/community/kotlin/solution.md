# [Fastest Solution Explained][0ms][100%] O(n)time complexity O(n)space complexity

**Author:** darian-catalin-cucer
**Votes:** 14
**Link:** [https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/2383487/](https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/2383487/)

---


(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

The best result for the code below is ***0ms / 3.27MB*** (beats 99.04% / 90.42%).
* *** Java ***

```

public int lengthOfLongestSubstring(String s) {
    int i = 0, j = 0, max = 0;
    Set<Character> set = new HashSet<>();
    
    while (j < s.length()) {
        if (!set.contains(s.charAt(j))) {
            set.add(s.charAt(j++));
            max = Math.max(max, set.size());
        } else {
            set.remove(s.charAt(i++));
        }
    }
    
    return max;
}

```
The idea is use a hash set to track the longest substring without repeating characters so far, use a fast pointer j to see if character j is in the hash set or not, if not, great, add it to the hash set, move j forward and update the max length, otherwise, delete from the head by using a slow pointer i until we can put character j to the hash set.
```
```

```
```

The best result for the code below is ***0ms / 10MB*** (beats 100.00% / 95.49%).
* *** Python ***

```
Sliding window
We use a dictionary to store the character as the key, the last appear index has been seen so far as value.
seen[charactor] = index

move the pointer when you met a repeated character in your window.
```

```

indext    0    1    2    3   4   5   6   7
string    a    c    b    d   b   a   c   d
          ^                  ^
          |                  |
		left               right
		seen = {a : 0, c : 1, b : 2, d: 3} 
		# case 1: seen[b] = 2, current window  is s[0:4] , 
		#        b is inside current window, seen[b] = 2 > left = 0. Move left pointer to seen[b] + 1 = 3
		seen = {a : 0, c : 1, b : 4, d: 3} 
indext    0    1    2    3   4   5   6   7
string    a    c    b    d   b   a   c   d
						 ^   ^
					     |   |
				      left  right		
indext    0    1    2    3   4   5   6   7
string    a    c    b    d   b   a   c   d
					     ^       ^
					     |       |
				       left    right		
		# case 2: seen[a] = 0,which means a not in current window s[3:5] , since seen[a] = 0 < left = 3 
		# we can keep moving right pointer.

```

```
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        seen = {}
        l = 0
        output = 0
        for r in range(len(s)):
            """
            If s[r] not in seen, we can keep increasing the window size by moving right pointer
            """
            if s[r] not in seen:
                output = max(output,r-l+1)
            """
            There are two cases if s[r] in seen:
            case1: s[r] is inside the current window, we need to change the window by moving left pointer to seen[s[r]] + 1.
            case2: s[r] is not inside the current window, we can keep increase the window
            """
            else:
                if seen[s[r]] < l:
                    output = max(output,r-l+1)
                else:
                    l = seen[s[r]] + 1
            seen[s[r]] = r
        return output
```
* Time complexity :O(n).
n is the length of the input string.
It will iterate n times to get the result.

* Space complexity: O(m)
m is the number of unique characters of the input.
We need a dictionary to store unique characters.

```
```

```
```

The best result for the code below is ***0ms / 23.7MB*** (beats 59.24% / 60.42%).
* *** C++ ***


```

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        
        //SLIDING WINDOW  - TIME COMPLEXITY O(2n)
        //                  SPACE COMPLEXITY O(m)   //size of array
        
        int store[256]={0}; //array to store the occurences of all the characters
        int l=0;    //left pointer
        int r=0;    //right pointer
        int ans=0;  //initializing the required length as 0
        
        while(r<s.length())     //iterate over the string till the right pointer reaches the end of the string 
        {
            store[s[r]]++;      //increment the count of the character present in the right pointer 
            
            while(store[s[r]]>1)    //if the occurence become more than 1 means the char is repeated
            { 
                store[s[l]]--;   //reduce the occurence of temp as it might be present ahead also in the string
                l++;         //contraction of the present window till the occurence of the 't' char becomes 1
            }
            
            ans = max(ans,r-l+1);    //As the index starts from 0 , ans will be (right pointer-left pointer + 1)
            r++;        // now will increment the right pointer 
        }
        return ans;
    }
};

```

```
```

```
```

The best result for the code below is ***0ms / 78MB*** (beats 100.00% / 100.00%).
* *** JavaScript ***


```

function lengthOfLongestSubstring(s) {
    const map = {};
    var left = 0;
    
    return s.split('').reduce((max, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);
}

```

```
Time Complexity = O(N)
Space Complexity = O(N)
```

```
var lengthOfLongestSubstring = function(s) {
    // keeps track of the most recent index of each letter.
    const seen = new Map();
    // keeps track of the starting index of the current substring.
    let start = 0;
    // keeps track of the maximum substring length.
    let maxLen = 0;
    
    for(let i = 0; i < s.length; i++) {
        // if the current char was seen, move the start to (1 + the last index of this char)
        // max prevents moving backward, 'start' can only move forward
        if(seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start)
        seen.set(s[i], i);
        // maximum of the current substring length and maxLen
        maxLen = Math.max(i - start + 1, maxLen);
    } 
    
    return maxLen;  
};
```


```
```

```
```

The best result for the code below is ***0ms / 33.33MB*** (beats 99.00% / 60.12%).
* *** Kotlin ***


```

fun lengthOfLongestSubstring(s: String): Int {
    var maxLength = 0
    val queue = LinkedList<Char>()
    for (i in s.indices) {
        if (queue.isNotEmpty()) {
            when {
                queue.first == s[i] -> queue.poll()
                queue.last == s[i] -> queue.clear()
                queue.contains(s[i]) -> {
                    while (queue.isNotEmpty()) {
                        if (queue.poll() == s[i]) break
                    }
                }
            }
        }

        maxLength = max(maxLength, queue.size+1)
        queue.offer(s[i])
    }

    return maxLength
}
```

```
import kotlin.math.*

class Solution {
    private val hashMap = mutableMapOf<Char, Int>()
    private var longest = Pair<Int, Int>(0, 1)
    
    fun lengthOfLongestSubstring(s: String): Int {
        if (s.length == 0) {
            return 0
        }
        
        var start = 0
        
        for (i in 0 until s.length) {
            val letter = s[i]
            if (hashMap.containsKey(letter)) {
                // start = max(start, hashMap[letter]!! + 1)
                // why use max() ? "abba": if we take not max, then when visiting second 'a' ->
                // we'll take b, but don't need it as it'll include duplicate
                start = hashMap[letter]!! + 1
                // +1 as we don't need current that has duplication, but next letter after it
            }
            val (firstIdx: Int, secondIdx: Int) = longest
            
            if (secondIdx - firstIdx < i - start + 1) {
                longest = Pair<Int, Int>(start, i+1)
                // +1 is to include current last letter as otherwise it will be excluding
            }
            hashMap.put(letter, i)
        }
        val (firstIdx: Int, secondIdx: Int) = longest
        
        return secondIdx - firstIdx
    }
}
```

```
```

```
```

The best result for the code below is ***0ms / 13.17MB*** (beats 79.34% / 99.92%).
* *** Swift ***


```

class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        guard !s.isEmpty else { return 0 }
        var len = 0, chars = [Character]()
        for c in s {
            if let idx = chars.firstIndex(of: c) {
                chars.removeSubrange(0...idx)
            }
            chars.append(c)
            len = max(len, chars.count)
        }
        return len
    }
}

```
* O(N)
```
class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        var longest = 0, startIndex = 0
        var charMap: [Character: Int] = [:]

        for (index, char) in s.enumerated() {
            if let foundIndex = charMap[char] {
                startIndex = max(foundIndex+1, startIndex)
            }
            longest = max(longest, index - startIndex + 1)
            charMap[char] = index
        }
        return longest
    }
}
```

```
```

```
```

The best result for the code below is ***0ms / 62.07MB*** (beats 99.99% / 99.99%).
* *** PHP ***


```

class Solution {

/**
 * @param String $s
 * @return Integer
 */
function lengthOfLongestSubstring($s) {
	$start = 0;    //current starting position of search
    $length = 0; //current max length of substring
    for($i = 0; $i < strlen($s); $i++){
        $char = $s[$i];
        if(isset($arr[$char]) && $arr[$char] >= $start){
            $start = $arr[$char] + 1;
        } elseif($i - $start === $length) {
            $length++;
        }
        $arr[$char] = $i;
    }
    return $length;
}
}

```

```
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function lengthOfLongestSubstring($s) 
    {
        if (strlen($s) === 0) return 0;
        if (strlen($s) === 1) return 1;
        
        $chars = str_split($s);
        
        $i = $j = $max = 0;
        $seen = [];
        
        while ($i < count($chars))
        {
            $c = $chars[$i];
           
            while (array_key_exists($c, $seen))
            {
                unset($seen[$chars[$j]]);
        		$j++;
            }
            
            $seen[$chars[$i]] = true;
            
            $max = max($i - $j + 1, $max);
            $i++;
        }
        return $max;
    }
}
```

```
```

```
```

The best result for the code below is ***0ms / 1.17MB*** (beats 99.64% / 99.92%).
* *** C ***


```

int lengthOfLongestSubstring(char * s){
    /*letter_map is to keep track if we saw this character in this substring*/
    int letter_map[128] = {0}, res = 0;
    char* start = s, *end = s;
    
    while (*end) {
        /* If we reached a letter we saw already - check max length and start a new substring*/
        if (letter_map[*end]) {
            res = (end - start > res) ? end - start : res;
            while (*start != *end) {
                letter_map[*start] = 0;
                start++;
            }
            start++;
            end++;
        }
        else {
            letter_map[*end] = 1;
            end++;
        }  
    }
    return end-start > res ? end-start : res;
}

```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***
