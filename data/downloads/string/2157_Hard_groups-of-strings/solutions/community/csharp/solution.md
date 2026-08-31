# 💥 Beats 100% on runtime [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/groups-of-strings/solutions/6017347/](https://leetcode.com/problems/groups-of-strings/solutions/6017347/)

---

# Intuition
Group words that are connected by small transformations, such as changing one letter, adding one letter, or removing one letter. The challenge is to figure out which words can be connected to each other using these transformations and then count how many distinct groups we can form.

# Approach
We represent each word by a "bitmask" where each bit represents the presence or absence of a letter ('a' to 'z'). Then, we use the Union-Find (Disjoint Set Union) structure to group words together if their bitmasks can be transformed by a single letter change, addition, or removal. Finally, we count the number of unique groups and the size of the largest group.

# Complexity
- Time complexity:
O(n * m * 26), where n is the number of words, m is the average length of the words, and 26 represents the number of letters in the alphabet. This is because we check each word's transformations and perform union-find operations for each one.

- Space complexity:
O(n), where n is the number of words, since we store the bitmasks, the Union-Find data structure, and the word mappings.

# Code
```csharp []
public class Solution
{
    public int[] GroupStrings(string[] words)
    {
        int n = words.Length;
        
        // Union-Find (Disjoint Set Union) object
        UnionFind uf = new UnionFind(n);
        
        // Map to track the bitmask of each word and its index
        Dictionary<int, int> map = new Dictionary<int, int>();
        int[] mask = new int[n];
        
        // Step 1: Create the bitmask for each word
        for (int i = 0; i < n; i++) 
        {            
            int x = 0;
            foreach (var c in words[i]) 
            {
                // Set the (c - 'a')th digit to 1
                x |= (1 << (c - 'a'));
            }
            map[x] = i;
            mask[i] = x;
        }
        
        // Step 2: For each word, check all possible transformations
        for (int i = 0; i < n; i++) 
        {
            string current = words[i];
            int len = current.Length;
            int x = mask[i];
            
            for (int j = 0; j < len; j++) 
            {
                char c = current[j];
                
                // Remove character at position j by setting the (c - 'a')th digit to 0
                x &= ~(1 << (c - 'a'));
                
                // If we find a word with the current bitmask, union them
                if (map.ContainsKey(x)) 
                {
                    int next = map[x];
                    uf.Join(i, next);
                } 
                
                // Step 3: Try replacing character at position j with each character from 'a' to 'z'
                for (char t = 'a'; t <= 'z'; t++) 
                {
                    // Check if the (t - 'a')th digit is already 1 (don't need to change it)
                    int dig = (x >> (t - 'a')) & 1;
                    if (dig == 1) 
                    {
                        continue;
                    }
                    
                    // Set the (t - 'a')th digit to 1 to simulate replacing
                    x |= (1 << (t - 'a'));                 
                    
                    // If we find a word with this bitmask, union them
                    if (map.ContainsKey(x)) 
                    {
                        int next = map[x];
                        uf.Join(i, next);
                    }
                    
                    // Backtrack, remove the character at position t
                    x &= ~(1 << (t - 'a'));
                }
                
                // Backtrack to restore the original bitmask (add back the character at position j)
                x |= (1 << (c - 'a'));                           
            }         
        }
        
        // Step 4: Get the number of groups and the size of the largest group
        HashSet<int> set = new HashSet<int>();
        int max = 1;
        for (int i = 0; i < n; i++) 
        {
            int fx = uf.Find(i);
            set.Add(fx);
            max = Math.Max(max, uf.Size[fx]);
        }
        
        return new int[] { set.Count, max };
    }  
}

public class UnionFind
{
    private int[] father;
    public int[] Size;

    // Constructor to initialize the Union-Find data structure
    public UnionFind(int n)
    {
        father = new int[n];
        for (int i = 0; i < n; i++) 
        {
            father[i] = i; // Initially, each word is its own parent
        }
        Size = new int[n];
        Array.Fill(Size, 1); // Initially, each group has size 1
    }
    
    // Union function to merge two sets
    public void Join(int x, int y)
    {
        int fx = Find(x);
        int fy = Find(y);
        if (fx != fy) 
        {
            father[fx] = fy; // Make the parent of x the parent of y
            Size[fy] += Size[fx]; // Update the size of the group
        }
    }
    
    // Find function to find the representative of the set
    public int Find(int x)
    {
        int root = x;
        while (father[root] != root) 
        {
            root = father[root]; // Traverse up the tree to find the root
        }
        
        // Path compression: make the nodes directly point to the root
        while (x != root) 
        {
            int fx = father[x];
            father[x] = root;
            x = fx;
        }
        
        return root;
    }
    
    // Optional: Check if two nodes are connected
    public bool IsConnected(int x, int y)
    {
        return Find(x) == Find(y);
    }
}

```