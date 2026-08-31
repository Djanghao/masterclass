# Java 90% O(n)/O(n) Easy to understand solution using sliding window of fixed size

**Author:** Robertm393
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/4158907/](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/4158907/)

---

# Intuition
*Please upvote if you found this solution helpful. 

We want to count the number of valid substrings between minSize and maxSize. A key insight is that if a substring is of size N, at least as many substrings of size N-1 must be in the string. Therefore, we only need to test substrings of length minSize. 

# Approach
Sliding window: define a window length of minSize. Capture each substring within the window as we move through the string from left to right. Count the frequency of each substring and store it in a hashmap. 

Once we have traversed the string, we will have a hashmap consisting of all the substrings of size minSize. We check each to see whether each candidate substring is valid (so long as it is longer than the current valid max length substring), by checking whether it consists of <= maxLetters.

# Complexity
- Time complexity:
$$O(n)$$ (The length (N) of the string + the number of valid substrings V * the length of each valid substring VL)  O(n + V * VL)
At most, if each character in string S is a valid substring, we will iterate through the entire string twice, giving us a time complexity of O(2n) = O(n)

- Space complexity:
$$O(n)$$ the size of the hashmap

# Code
```
class Solution {
    public int maxFreq(String s, int maxLetters, int minSize, int maxSize) {
        HashMap<String, Integer> map = new HashMap<>(); 
        int maxOccurrences = 0; 

        int left = 0, right = minSize; //window size 

        while (right <= s.length()){
            //count substrings within a window of size minsize
            //all substrings larger than minsize must contain substrings of length equal to minsize, 
            //so there will be at least as many unique substrings of length minsize as any longer length
            String substr = s.substring(left, right); 
            map.put(substr, map.getOrDefault(substr, 0) + 1); 
            left++; right++; //shift window right
        }

           for (String substr : map.keySet()){    
            int count = map.get(substr); 

            if (count > maxOccurrences && isValidSubstring(substr, maxLetters))
                maxOccurrences = count;
        }

        return maxOccurrences;
    }

    public boolean isValidSubstring(String substr, int maxLetters){
        HashSet<Character> counts = new HashSet<>(); 
        for (int i = 0; i < substr.length(); i++){
            char c = substr.charAt(i);
            counts.add(c);
        }

        return counts.size() <= maxLetters;
    }
}
```