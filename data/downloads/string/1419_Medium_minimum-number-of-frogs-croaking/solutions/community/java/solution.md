# Java | greedy | explained & with picture illustration

**Author:** rainbowh
**Votes:** 23
**Link:** [https://leetcode.com/problems/minimum-number-of-frogs-croaking/solutions/1127569/](https://leetcode.com/problems/minimum-number-of-frogs-croaking/solutions/1127569/)

---

This is a greedy problem, very similar to scheduling intervals, as represented in the following picture. One little twist we make is, 
- treating 'c's as the LEFT boundary of an interval, 
- treaing 'k's as the RIGHT boundary of an interval. 

The minimum number of frogs can be transformed to the number of overlaps between intervals, which we can calculate by keeping count of the left and right boundaries. 
- when we see a LEFT boundary, count + 1
- when we see a RIGHT boundary, count - 1

In addition to the boundary count, we also need to do a string validity check. There are two possible types of invalid strings: 
1. incorrect spelling, e.g. "croakcrook" 
	- an extra data structure, i.e. hashmap or array, or manually keep counts of the letters
	- here in the word "croak", all letters appear only once
	- we can simply check if the number of the previous letter in "croak" >= number of current letter
		- e.g. in the example "croakcrook", number of 'o' = 3 > number of 'r' = 2 -> invalid 
2. unfinished word, e.g. "croakcroa" 
	- check if the final count = 0, which means all the "croak"s started have been finished 

<img src='https://assets.leetcode.com/users/images/9781c579-fe49-41e0-b50d-c680f8b5f359_1616715550.054294.jpeg' width = 700 height = 380>

```
public int minNumberOfFrogs(String croakOfFrogs) {
	int[] letterCounts = new int[26]; 
	int count = 0;
	int maxCount = 0;
	
	for (char c : croakOfFrogs.toCharArray()) {
		letterCounts[c - 'a'] ++; 
		// do boundary count 
		if (c == 'c') { // left boundary
			count++;
			maxCount = Math.max(maxCount, count);
		} else {
			if (!isValid(c, letterCounts)) return -1; 
			if (c == 'k') { // right boundary 
				count--;
			}
		}
	}
	// check if the string is finished
	return count == 0 ? maxCount : -1;
}

// check string validity
private boolean isValid(char c, int[] counts) {
	char prevChar;
	if (c == 'r') prevChar = 'c';
	else if (c == 'o') prevChar = 'r';
	else if (c == 'a') prevChar = 'o';
	else prevChar = 'a'; 

	return counts[prevChar - 'a'] >= counts[c - 'a']; 
}
```