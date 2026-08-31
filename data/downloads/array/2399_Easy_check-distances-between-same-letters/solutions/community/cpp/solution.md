# Easy Brute force approach in C++

**Author:** Krishnaroy7
**Votes:** 6
**Link:** [https://leetcode.com/problems/check-distances-between-same-letters/solutions/3406284/](https://leetcode.com/problems/check-distances-between-same-letters/solutions/3406284/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Overall, this solution has a time complexity of O(n^2), where n is the length of the input string. This may not be efficient for very large input strings, but it is a straightforward approach to solve this problem.

# Approach
<!-- Describe your approach to solving the problem. -->
The approach taken in this solution is a simple brute-force algorithm where we check every pair of characters in the string s. If we find two characters that are equal, we calculate the distance between them by subtracting their indices and subtracting 1. If the calculated distance does not match the corresponding value in the vector distance for that character, we return false because it means we cannot replace that character to get the desired distances.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2) as we are using two loops and traversing the whole string each time.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1) is a constant time 

# Code
```
class Solution {
public:
    	 bool checkDistances(string s, vector<int>& distance) {
		int n=s.size();

		for(int i=0;i<n;i++){
			for(int j=i+1;j<n;j++){
				if(s[i]==s[j]){
					if(j-i-1 != distance[s[i]-'a']){//(s[i]-'a' helps to access the particular character)
						return false;
					}
				}
			}
		}
		return true;
	}
};
```