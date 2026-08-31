# C# : Trie Data structure based solution

**Author:** akbarbuneri
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/2919546/](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/2919546/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
One approach to solve this problem is to use a trie data structure. A trie is a tree-like data structure that stores a set of strings. Each node in the trie represents a single character in a string, and the path from the root to a leaf node represents a complete string.


# Approach
<!-- Describe your approach to solving the problem. -->
To find the maximum XOR of two numbers in the given array, we can use a trie to store the binary representation of each number. Then, we can iterate through the trie and for each node, we can check if there is a complementary node at the same depth (i.e., a node with a value that would result in a XOR of 1 when combined with the current node). If such a node exists, we can update the maximum XOR.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this code is O(n * 32), where n is the number of integers in the input array nums.

This is because the first loop that inserts the binary representation of each number into the trie takes O(n) time, and the second loop that finds the maximum XOR takes O(n) time. Within each of these loops, there is an additional loop that iterates through the bits of each number, which takes O(32) time because there are 32 bits in an integer.

Therefore, the overall time complexity is O(n * 32).
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of this code is O(n * 32), where n is the number of integers in the input array nums.

This is because the trie data structure used in this code stores one node for each bit of each number in the input array. Since there are n numbers in the input array and each number has 32 bits, the total number of nodes in the trie is n * 32.

Therefore, the space complexity of this code is O(n * 32).
# Code
```
public class Solution {
    public class TrieNode
    {
        public TrieNode[] children;
        public TrieNode()
        {
            children = new TrieNode[2];
        }
    } 
    public int FindMaximumXOR(int[] nums)
    {
        TrieNode root = new TrieNode();

        // Insert the binary representation of each number into the trie
        foreach (int num in nums)
        {
            TrieNode curr = root;
            for (int i = 31; i >= 0; i--)
            {
                int bit = (num >> i) & 1;
                if (curr.children[bit] == null)
                {
                    curr.children[bit] = new TrieNode();
                }
                curr = curr.children[bit];
            }
        }

        int maxXOR = int.MinValue;

        // Find the maximum XOR by iterating through the trie and checking for complementary nodes
        foreach (int num in nums)
        {
            TrieNode curr = root;
            int currXOR = 0;
            for (int i = 31; i >= 0; i--)
            {
                int bit = (num >> i) & 1;
                if (curr.children[bit ^ 1] != null)
                {
                    currXOR += (1 << i);
                    curr = curr.children[bit ^ 1];
                }
                else
                {
                    curr = curr.children[bit];
                }
            }
            maxXOR = Math.Max(maxXOR, currXOR);
        }

        return maxXOR;
    }


}
```