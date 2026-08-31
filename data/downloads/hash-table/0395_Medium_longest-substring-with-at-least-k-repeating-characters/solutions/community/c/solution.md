# C++ Super Easy Solution 100% Faster ,Explanation with Example

**Author:** yadvendrak01
**Votes:** 65
**Link:** [https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/1139114/](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/1139114/)

---

**Intution :**  Break the string into two  parts when a character with count less than k is found . Recursively check for longest substring for both part. 1 . String before breaking Point and  2. String after breaking point. 


**Example : s  = aababcaabb  k = 2**
**Count of a = 5 , b = 4 , c = 1**

```
//Count of c is less than k so break in two parts :
//Part before breaking point
l1 = longestSubstring("aabab", 2);
//And part after breaking point
l2 = longestSubstring("aabb",2)
```

**l1 will be 5 and l2 will be 4 so answer will be 5**
```
class Solution {
public:
    int longestSubstring(string s, int k) {
        int n = s.length();
		
		// if length of string is 0 or it is less than k then there will no longest substring so we will return 0.
        if(n == 0 or n < k) return 0;
		
		//k ==1 means that all the characters will be unique so we will return entire length.
        if(k <= 1) return n;
		
		//count map to store count of characters
        unordered_map<char,int> countMap;
        for(char c : s) countMap[c]++;
       
        int left =0;
		
		//We will increment left till the count of character is greater than k and left is less than string length
		//if left >=n means all characters have count greater than k  so we will return left
        while(left < n && countMap[s[left]] >= k) left++;
        if(left >= n-1) return left;
		
		//We will break into two parts   , part before breaking and part after breaking point.
        int l1 = longestSubstring(s.substr(0,left) ,k);
        
		// to check if more continious characters are having count less than k 
        while(left < n && countMap[s[left]] < k) left++;
        
		// to check for longest Substring in part after left
        int l2 = left < n ? longestSubstring(s.substr(left),k) : 0;
        
		//return max of l1 and l2
        return max(l1,l2);
    }
};

```


**Incase of doubt feel free to comment.**