# Dew It | Verbose but Simple Solution | Trie based O(n2)

**Author:** captain_jackked
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/solutions/1759747/](https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/solutions/1759747/)

---

```
class Solution {
    public int equalDigitFrequency(String s) {
        char[] arr = s.toCharArray();
        Node trie = new Node(null, -1);
		// Insert all suffixes into trie. This eliminates duplicate substrings
		// The path to any valid node in the Trie represents a unique substring
        for(int i=0; i<arr.length; ++i)
            trie.insert(arr, i);
        return trie.count() - 1; // Exclude empty substring
    }
    
    class Node {
		// This trie also keeps note of digit frequencies in the path
        int[] freq;
        Node[] children = new Node[10];
        
        private Node(int[] parentFreq, int previousDigit) {
            if(parentFreq != null) {
                freq = parentFreq.clone();
                ++freq[previousDigit];
            } else
                freq = new int[10];
        }
        
        private void insert(char[] arr, int i) {
            if(i < arr.length) {
                int digit = arr[i] - '0';
                if(children[digit] == null)
                    children[digit] = new Node(freq, digit);
                children[digit].insert(arr, i+1);
            }
        }
        
        private int count() {
            int ans = hasUniqueFreq() ? 1 : 0;
            for(Node child: children) if(child != null)
                ans += child.count();
            return ans;
        }
        
		// There should be only one freq other than zero
        private boolean hasUniqueFreq() {
            int uniqueCount = -1;
            for(int i=0; i<10; ++i) if(freq[i] != 0) {
                if(uniqueCount == -1)
                    uniqueCount = freq[i];
                else if(freq[i] != uniqueCount)
                    return false;
            }
            return true;
        }
    }
}
```