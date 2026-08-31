# Easy Trie Tree (prefix tree) solution

**Author:** Najmuzzaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-with-xor-in-a-range/solutions/4303236/](https://leetcode.com/problems/count-pairs-with-xor-in-a-range/solutions/4303236/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves finding the number of nice pairs in an array. A nice pair is defined as a pair of indices (i, j) such that 0 <= i < j < nums.length and low <= (nums[i] XOR nums[j]) <= high. XOR (exclusive OR) is a bitwise operation that returns 1 where the corresponding bits of the operands are different and 0 where they are the same.
# Approach
<!-- Describe your approach to solving the problem. -->
The code uses a trie (prefix tree) to efficiently count the number of elements with a specific XOR value. The key observation is that XORing two numbers gives a unique result, and we can use a trie to store and retrieve these XOR values efficiently.

**1. Node Class:**
The Node class represents a node in the trie. It has links to its child nodes (representing 0 and 1) and maintains a count of the number of elements passing through that node.
**2. Trie Class:**
The Trie class has methods to insert a number into the trie (Insert), get the count of elements in a node (GetCount), and recursively calculate the count of nice pairs based on the XOR values and the specified range (dfs).
**3. Main Iteration Through the Array:**
The CountPairs method initializes a Trie object and iterates through the input array (nums).
For each number (num), it calculates and updates the count of nice pairs using the trie.
Specifically, it adds the count of nice pairs where the XOR value is greater than or equal to low and subtracts the count of nice pairs where the XOR value is less than low.
The current number is then inserted into the trie for future calculations.
# Complexity
- Time complexity:  O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The code iterates through the input array once.
The trie operations are performed in constant time for each number.
- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is primarily determined by the trie structure.
Each number in the array may contribute to the creation of new nodes in the trie.
Overall, the code efficiently utilizes a trie to store and retrieve XOR values, providing a solution with linear time complexity and reasonable space complexity for the given problem.
# Code
```
public class Solution {
    public class Node
    {
        public Node[] Links = new Node[2];
        public int Count = 0;
        public void Put(int ind, Node node)
        {
            Links[ind] = node;
        }
        public bool IsContains(int ind)
        {
            return Links[ind] != null;
        }
        public Node Get(int ind)
        {
            return Links[ind];
        }
        public void IncCount()
        {
            Count++;
        }
        public int GetCount()
        {
            return Count;
        }
    }
    public class Trie
    {
        public Node Root;

        public Trie()
        {
            Root = new Node();
        }

        public void Insert(int num)
        {
            Node node = Root;
            for (int i = 14; i >= 0; i--)
            {
                int bit = ((num >> i) & 1);
                if (!node.IsContains(bit))
                {
                    node.Put(bit, new Node());
                }
                node = node.Get(bit);
                node.IncCount();
            }
        }
        public int GetCount(Node root)
        {
            return root == null ? 0 : root.GetCount();
        }

        public int dfs(Node root, int index, int high, int val)
        {
            if (root == null) return 0;
            if (index < 0) return root.GetCount();

            int valBit = ((val >> index) & 1);
            int highBit = ((high >> index) & 1);

            if (valBit == 1)
            {
                if (highBit == 1) return dfs(root.Get(0), index - 1, high, val) + GetCount(root.Get(1));
                else return dfs(root.Get(1), index - 1, high, val);
            }
            else
            {
                if (highBit == 1) return dfs(root.Get(1), index - 1, high, val) + GetCount(root.Get(0));
                else return dfs(root.Get(0), index - 1, high, val);
            }
        }
    }


    public int CountPairs(int[] nums, int low, int high) {
      int ans = 0;
        Trie trie = new Trie();

        foreach (var num in nums)
        {
            ans += trie.dfs(trie.Root, 14, high, num);
            ans -= trie.dfs(trie.Root, 14, low - 1, num);
            trie.Insert(num);
        }

        return ans;
    }
}
```