# 2 Straightforward C# Solutions w/ explanation + Sliding Window

**Author:** minaohhh
**Votes:** 31
**Link:** [https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/1217675/](https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/1217675/)

---

### **Approach 1: Sliding Window**

**Implementation**
```
public int LengthOfLongestSubstring(string s) {
	var letters = new Dictionary<char, int>(); // key:letter, val: latest index
	int maxCount = 0, left = 0, right;

	for (right = 0; right < s?.Length; right++) {
		char letter = s[right];

		if (letters.ContainsKey(letter)) { // End the window
			left = Math.Max(left, letters[letter] + 1); // Update left of window
		}

		letters[letter] = right; //Update index of letter on map

		maxCount = Math.Max(maxCount, right - left + 1); // Get the longest window length 
	}

	return maxCount;
}
```

---

### **Approach 2: Using a list to remember the substring length**
*(faster than 89%, memory less than 99%) *

**Algorithm**
* Use a list `letters` to remember the substrings with unique characters
* If a duplicate is detected,
	* Get the substring `length` and determine the `maxLength`
	* Remove the preceding characters up to the duplicate letter from the list using `RemoveRange`
* Continue until the end 

**Complexity**
* Time: `O(n)`, where `n` is the length of the string `s`
* Space: `O(n)` since we created the list `letters` that will contain a maximum of all the letters in the entire string `s`

**Implementation**
```csharp
public class Solution {
    public int LengthOfLongestSubstring(string s) {
        List<char> letters = new List<char>();
        int maxLength = 0;
        
        foreach (char c in s) {
            if (!letters.Contains(c)) {
                letters.Add(c);
            }
            else {
                maxLength = Math.Max(maxLength, letters.Count);
                
                // remove preceding characters up to the duplicate letter
                int idx = letters.IndexOf(c);
                letters.RemoveRange(0, idx+1);

                letters.Add(c);
            }
        }
        
        return Math.Max(maxLength, letters.Count); 
    }
}
```

**If you like the solution, please upvote \uD83D\uDD3C**