# Simple Solution With Explanation Python, CPP, JAVA,C#,JAVASCRIPT  ✅ || Runtime 1 ms✅ || Beats 100% ✅

**Author:** MAVRICK-1
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/4454717/](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/4454717/)

---

# Intuition
The idea behind this problem comes from [LC 421 ](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) and [LC 1697](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/).

Similar to [LC 421 ](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/), we can convert each number to binary format and construct a trie that has children of 0 and 1. In this way, we can query the maximum bitwise XOR value in O(32) time.

Similar to [LC 1697](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/), we can sort queries and construct the trie on the fly. We use a two pointer approach to make sure only elements that do not exceed m_i are added to the trie.

Putting these thoughts together, we arrive at the solution below. Please refer to the code for more details.

# Complexity
- Time complexity: $$O(sort)$$, or $$O(NlogN + MlogM)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 

- Space complexity:$$O(N)$$


 Code
<h1>Python</h1>

```
class Solution:
    def maximizeXor(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        nums.sort()
        answer = []
        append = answer.append
        for x, m in queries:
            if nums[0] > m:
                append(-1)
                continue
            start, stop = 0, bisect_right(nums, m)
            num = 0
            bit = 2 ** m.bit_length()
            while bit:
                plus = num + bit
                if nums[start] >= plus:
                    num = plus
                elif nums[stop-1] >= plus:
                    cut = bisect_left(nums, plus, start, stop)
                    if x & bit:
                        stop = cut
                    else:
                        start = cut
                        num = plus
                bit //= 2
            append(num ^ x)
        return answer    
```
<h1> C++</h1>

```c++
struct Node {
    Node* child[2];

    bool containsKey(int bit) {
        return (child[bit] != NULL); // checks if this bit is present or not
    }

    void put(int bit, Node* node) {
        child[bit] = node;
    }

    Node* get(int bit) {
        return child[bit];
    }
};

class Trie {
private:
    Node* root;

public:
    Trie() {
        root = new Node();
    }

    void insert(int num) {
        Node* node = root;
        for(int i=31 ; i>=0 ; i--) {
            int bit = (num>>i) & 1;
            if(!node->containsKey(bit)) {
                node->put(bit,new Node());
            }
            node = node->get(bit);
        }
    }

    int getMax(int num) {
        Node* node = root;
        int maxNum = 0;

        for(int i=31 ; i>=0 ; i--) {
            int bit = (num>>i) & 1;
            if(node->containsKey(1-bit)) {
                maxNum = maxNum | (1<<i);
                node = node->get(1-bit);
            }
            else {
                node = node->get(bit);
            }
        }
        return maxNum;
    }
};

class Solution {
public:
    static bool cmp(vector<int> &a, vector<int> &b) {
        return a[1]<b[1];
    }

    vector<int> maximizeXor(vector<int>& nums, vector<vector<int>>& queries) {
        vector<int> ans(queries.size(),0);
        sort(begin(nums),end(nums));
        
        vector<vector<int>> offlineQueries;
        for(int i=0 ; i<queries.size() ; i++) {
            offlineQueries.push_back({queries[i][0],queries[i][1],i}); // {ai,xi,i}
        }
        sort(begin(offlineQueries),end(offlineQueries),cmp); // O(Q log Q)

        int idx = 0;
        Trie trie;
        //  O(Q*32 + N*32)
        for(int i=0 ; i<offlineQueries.size() ; i++) {
            int ai = offlineQueries[i][0]; // query is of type [ai,xi]
            int xi = offlineQueries[i][1];
            int queryIdx = offlineQueries[i][2];

            while(idx<nums.size() && nums[idx]<=xi) {
                trie.insert(nums[idx]);
                idx++;
            }

            if(idx == 0) ans[queryIdx] = -1;
            else ans[queryIdx] = trie.getMax(ai);
        }
        return ans;
    }
};
```
<h1>Java</h1>

```java
class Solution {
    public int[] maximizeXor(int[] nums, int[][] queries) {
        int[] ans = new int[queries.length];
        Integer[] idx = IntStream.range(0, ans.length).boxed().toArray(Integer[]::new);
        Arrays.sort(idx, Comparator.comparingInt(o -> queries[o][1])); // sort by query m first 
        Arrays.sort(nums); // also sort nums array 
        Node root = new Node();
        for (int i = 0,j=0; i < ans.length; i++){
            int m = queries[idx[i]][1], x = queries[idx[i]][0];
            while(j<nums.length&&nums[j]<=m){ // add elements to the binary tree.
                Node cur = root;
                for (int k =31;k>=0;k--){
                    int val = (nums[j]&1<<k)>0?1:0;
                    if (cur.bits[val]==null){
                        cur.bits[val]=new Node();
                    }
                    cur=cur.bits[val];
                }
                j++;
            }
            if (j==0){ // if j == 0, then there is no element in the tree
                ans[idx[i]]=-1;
                continue;
            }
            ans[idx[i]]=x;
            Node cur = root;
            for (int k = 31; k>=0;k--){
                int val = (x&1<<k)>0?1:0;
                if (cur.bits[val^1]!=null){ // take the opposite path if available
                    cur=cur.bits[val^1];
                    ans[idx[i]]|=1<<k; // set this bit
                }else{
                    cur=cur.bits[val];
                    ans[idx[i]]&=~(1<<k); // unset this bit.
                }
            }
        }
        return ans;
    }

    private class Node { // binary tree.
        Node[] bits = new Node[2];
        Node(){}
    }
}

```
<h1>Javascript</h1>

```javascript
var maximizeXor = function (nums, queries) {
  const result = new Array(queries.length);
  
  // we must use an array to save on space
  // objects and maps take up too much memory
  // we create a trie so that we can easily find
  // the best result
  const trie = [null, null];
  for (let num of nums) {
    let node = trie;
	// we start at 30 because 10 ** 9 is our max value and 2 ** 30 > 10 ** 9
    for (let i = 30; i >= 0; i--) {
      const b = 1 << i;
      if (b & num) {
        if (!node[1]) {
          node[1] = [null, null];
        }
        node = node[1];
      } else {
        if (!node[0]) {
          node[0] = [null, null];
        }
        node = node[0];
      }
    }
  }

  // do a quick check to find the minimum value
  // to speed up our run time
  const min = Math.min(...nums);

  // this is our main function that will traverse the trie
  const dfs = (node, num, i, xorVal, max) => {

    // if we don't have a node then there was no number
	// with this bit set/unset so we return -1
	// also if our value that we are trying to XOR is
	// greater than the max, we return -1
    if (!node || xorVal > max) {
      return -1;
    }

	// this is our base case and we found a matching value
	// so we can return the value
    if (i === -1) return xorVal;
	
	// create a bit mask of our current bit we are examining
    const bit = 1 << i;
	
	// decrement i for our next call
	// we won't need i anymore for the remainder of this call
    i--;
	
	// if the bit is greater than the max then we only have 1 option
	// we must take the unset bit which is 0
	// so we traverse node[0] and pass along all other values
    if (bit > max) {
      return dfs(node[0], num, i, xorVal, max);
    }
	
	// if the bit is set in num
    if (num & bit) {
	  // then we want to preference the unset bit
	  // in the xorVal
	  // if it's possible then we return it
	  // otherwise we try to set the bit
      let x = dfs(node[0], num, i, xorVal, max);
      if (x > -1) {
        return x;
      }
      return dfs(node[1], num, i, xorVal | bit, max);
	  
	// this is just the opposite of above
	// where we preference the set bit
	// because the bit is not set in num
    } else {
      let y = dfs(node[1], num, i, xorVal | bit, max);
      if (y > -1) {
        return y;
      }
      return dfs(node[0], num, i, xorVal, max);
    }
  };

  // Iterate through the numbers
  for (let i = 0; i < queries.length; i++) {
    const [num, max] = queries[i];
	// do a fast check to minimize the work done
    if (max < min) {
      result[i] = -1;
      continue;
    }
	// store the result for the num XOR the result
    result[i] = dfs(trie, num, 30, 0, max) ^ num
  }
  return result;
};

```
<h1>c#</h1>

```c#
public class Solution
{
  public int[] MaximizeXor(int[] nums, int[][] queries)
  {
    var ans = new int[queries.Length];

    // sort both nums and queries
    Array.Sort(nums);

    var qs = queries
      .Select((q, i) => (i: i, x: q[0], m: q[1]))
      .OrderBy(_ => _.m)
      .ToList();

    var mbl = Convert.ToString(Math.Max(nums.Max(), queries.Max(x => x[0])), 2).Length;
    var trie = new Trie();
    var numIndex = -1;

    for (var j = 0; j < qs.Count; j++)
    {
      var query = qs[j];
      var x = query.x;
      var m = query.m;

      // add to trie all nums that are less than m
      while (numIndex + 1 < nums.Length && nums[numIndex + 1] <= m)
      {
        ++numIndex;

        var n = nums[numIndex];
        var ch = new int[mbl];

        for (var i = 0; i < mbl; i++)
        {
          ch[mbl - 1 - i] = n % 2;
          n >>= 1;
        }

        trie.Add(ch);
      }

      var xch = new int[mbl];

      for (var i = 0; i < mbl; i++)
      {
        xch[mbl - 1 - i] = x % 2;
        x >>= 1;
      }

      var xor = 0;
      var xnum = 0;

      var node = trie.Root;
      var incomplete = false;

      // go down the trie to find the xor == 1 if possible
      for (var i = 0; i < mbl; i++)
      {
        Trie.TrieNode next = null;

        foreach (var child in node.Nodes)
        {
          var bit = xch[i] ^ child.Key;
          var power = child.Key == 1 ? (1 << (mbl - 1 - i)) : 0;

          if (bit == 1)
          {
            if (xnum + power <= m)
            {
              next = child.Value;
              xnum += power;
              xor += (1 << (mbl - 1 - i));
            }
          }
          else if (next == null)
          {
            next = child.Value;
          }
        }

        if (next != null)
          node = next;
        else
          incomplete = true;
      }

      ans[query.i] = incomplete ? -1 : xor;
    }

    return ans;
  }

  public class Trie
  {
    public class TrieNode
    {
      public int Value { get; }

      public bool IsEnd { get; private set; }

      public SortedDictionary<int, TrieNode> Nodes => _nodes;

      private SortedDictionary<int, TrieNode> _nodes { get; } = new SortedDictionary<int, TrieNode>();

      public TrieNode(int value)
      {
        Value = value;
      }

      public bool SetEnd() => IsEnd = true;

      public TrieNode Add(int value)
      {
        if (_nodes.ContainsKey(value))
          return _nodes[value];

        var node = new TrieNode(value);
        _nodes[value] = node;

        return node;
      }
    }

    public TrieNode Root { get; } = new TrieNode(default);

    public void Add(IEnumerable<int> seq)
    {
      var current = Root;

      foreach (var element in seq)
        current = current.Add(element);

      current.SetEnd();
    }
  }
}
```

