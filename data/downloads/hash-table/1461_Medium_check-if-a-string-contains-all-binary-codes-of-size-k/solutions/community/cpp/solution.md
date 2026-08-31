# C++| Fast & Easy w/ Multiple Approaches

**Author:** prantik0128
**Votes:** 28
**Link:** [https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/2092924/](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/2092924/)

---

**Please upvote if you like the post :)**

So we need to check if every `binary code` of` length k` is a substring of `s`

***A. Intuitive/Brute Force Approach :*** **(TLE)**

So in the **Brute force** approach we do the same as mentioned in the question i.e check every `binary code` of length `k` if it is a substring of `s` or not.

```
class Solution {
public:
bool hasAllCodes(string s, int k) {
	int n = s.size(); 
	for(int i = 0; i <= (1 << k); i++){
		// convert to binary string and get the last k bits
		string binaryCode = bitset<20>(i).to_string().substr(20-k, k);
		if(s.find(binaryCode) == string::npos) return false;
	}        
	return true;
	}
};
```
**Time Complexity : O(N*2^k)**, 2^k are the number of binary codes possible and for each code, we need N iteration in worst case to find the binary code in the string s
**Space Complexity : O(N*2^k)**
****
****
***B. Hashset Approach : (Better)*** 
One thing we can observe that, in the question it is mentioned that we need to check if every binary code of length k is a substring of s, so we actually don't need to generate all codes and check if it matches rather we can **just check all the substrings of length k in the string s**, If number of all the **distinct substrings of length k is 2^k**. then it's for sure that all the binary codes exits in the distinct substrings.

```
class Solution {
public:
    bool hasAllCodes(string s, int k) {
	int n = s.size(); 
	unordered_set<string> set;
	for(int i = 0; i <= n - k; i++) 
		set.insert(s.substr(i, k)); // distinct substrings of size k
	return set.size() == (1 << k);
	}
};
```
**Time Complexity : O(N*k)** `N`, is the size of the string and `k` is the length of the binary code
**Space Complexity : O(N*k)**

****
****
***C. Rolling Hash Approach : (Optimized)*** 
So, we are calculating all the distinct substrings of `length k` for all which we actually don't need to do. We can just find the hash for the first substring of `length k` and then use the **`rolling hash technique`**.

**What is rolling hash approach actually ->**
The approach is very simple we will just keep on removing the last character of `previous substring` and keep adding the `next character` from `s` and calculate the hash from this only instead of recalculating the whole hash.
```
class Solution {
public:
	// (allOnes = ~0 = -1) in general
   int n = s.size(), size = 1 << k, count = 0, hash = 0, allOnes = ~size; 
	bool set[size]; memset(set, false, sizeof(set));
	for(int i = 0; i < n; i++){                    	    
		// below line combines all above-metioned steps for rolling hash calculation
		hash = ((hash << 1) & allOnes) | (s[i] - '0');            
		if(i >= k - 1 && !set[hash])   // first k - 1 iteration are to calculate hash of first substring of length k
			set[hash] = true, count++;
	}
	return count == size;
};
```
**Time Complexity : O(N)** `N`, is the size of the string
**Space Complexity : O(2^k)**

****
****


