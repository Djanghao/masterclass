# [Java/C++/Python/JavaScript/PHP/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/1991276/](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/1991276/)

---

```
```

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

```
```

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* ***Java***
```
class Node {
    HashMap<Integer, Node> children;
    Node() {
        this.children = new HashMap<>();
    }
}

class Trie {
    Node root;
    
    Trie() {
        this.root = new Node();
    }
    
    public void insert(int[] A) {
        for(int num : A) {
            Node curr = this.root;
            for(int i=31;i>=0;i--) {
                int currBit = (num >> i) & 1;
                if(!curr.children.containsKey(currBit)) 
                    curr.children.put(currBit, new Node());
                curr = curr.children.get(currBit);
            }
        }
    }
}
class Solution {
    public int findMaximumXOR(int[] nums) {
        Trie trie = new Trie();
        trie.insert(nums);
        
        int max = 0;

        for(int num : nums) {
            Node curr = trie.root;
            int currSum = 0;
            for(int i=31;i>=0;i--) {
                int requiredBit = 1-((num >> i) & 1); // if A[i] is 0, we need 1 and if A[i] is 1, we need 0. Thus, 1 - A[i]
                if(curr.children.containsKey(requiredBit)) {
                    currSum |= (1<<i); // set ith bit of curr result
                    curr = curr.children.get(requiredBit);
                } else {
                    curr = curr.children.get(1-requiredBit);
                }
            }
            max = Math.max(max, currSum); // get max number
        }
        return max;
    }
}

```

```
```

```
```

The best result for the code below is ***0ms / 7.0MB*** (beats 100.00% / 100.00%).
* ***C++***
```
class Solution {
public:
    struct node{
        // val at the leaf is value of path from root to leaf
        int val;
        // two links, 0 and 1, for each bit
        struct node* link[2];
        node(){
            val=0;
            link[0]=link[1]=NULL;
        }
    };
    struct node* start=new node();
    
    void insertTrie(int x){
    	// straightforward insertion from msb to lsb
        struct node* ptr=start;
        for(int i=31;i>=0;i--){
            bool curbit=(x&(1<<i));
            if(ptr->link[curbit]==NULL)
                ptr->link[curbit]=new node();
            ptr=ptr->link[curbit];
        }
        ptr->val=x;
    }
    
    int checkTrie(int x){
    	// checking from msb to lsb(least significat bit)
        struct node* ptr=start;
        for(int i=31;i>=0;i--){
            bool curbit=(x&(1<<i));
            // if curbit is 1,see if we can have a number with that bit 0 to maximize the xor
            if(ptr->link[1-curbit]!=NULL)
                ptr=ptr->link[1-curbit];
            // if not then proceed with curbit
            else if(ptr->link[curbit]!=NULL)
                ptr=ptr->link[curbit];
        }
        return ptr->val;    
    }
    int findMaximumXOR(vector<int>& nums) {
        int ans=0,n=nums.size();
        if(nums.size()<2) return 0;
        insertTrie(nums[0]);
        for(int i=1;i<n;i++){
        	// for nums[i], we are finding element in nums[0 to i-1] with which it's xor will be max
            ans=max(ans,nums[i]^checkTrie(nums[i]));
            // add nums[i] to the trie
            insertTrie(nums[i]);
        }
        return ans;
    }
};
```

```
```

```
```


The best result for the code below is ***26ms / 12.2MB*** (beats 95.42% / 82.32%).
* ***Python***
```
class TrieNode:
    def __init__(self):
        self.children = dict()                        # children nodes
        self.val = 0                                  # end value 

class Trie:
    def __init__(self, n):
        self.root = TrieNode()                        # root node
        self.n = n                                    # max length of all numbers
        
    def add_num(self, num):
        node = self.root 
        for shift in range(self.n, -1, -1):           # only shift self.n bits 
            val = 1 if num & (1 << shift) else 0      # verify bit from left to right 
            if val not in node.children:
                node.children[val] = TrieNode()
            node = node.children[val]
        node.val = num
        
class Solution:
    def findMaximumXOR(self, nums: List[int]) -> int:
        max_len = len(bin(max(nums))) - 2             # get max length of all numbers' binary
        trie = Trie(max_len)
        for num in nums: trie.add_num(num)            # build trie
            
        ans = 0
        for num in nums:                              # for each num, find the number which can create max value with num using XOR
            node = trie.root 
            for shift in range(max_len, -1, -1):
                val = 1 if num & (1 << shift) else 0  # verify bit from left to right
                node = node.children[1-val] if 1-val in node.children else node.children[val] # try opposite bit first, otherwise use same bit
            ans = max(ans, num ^ node.val)            # maintain maximum
        return ans    
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
var findMaximumXOR = function(nums) {
    let max = 0;
    for (let i = 31; i >= 0; --i) {   // we start from 31 as we have 32 bit integers
        const mask = (~0 >>> i) << i; // this is just i 1s followed by zeros: 1100..00 for i = 2
        const set = new Set();  // using set for constant access time, as o/w need to loop through the array and would have had O(N\u02C62) time
        for (let num of nums) {
            set.add(num & mask); // adding the prefixes of all nums to the lookup set to check if we have a candidate
        }
        const maxCandidate = max | 1 << i; // we wand to check if in our set there are two numbers that xored will give us the best possible previous result with a 1 at the end. If yes, we will update the best possible result with 1, if not with 0.
        for (let num of set) {
            const another = maxCandidate ^ num; // this is the number we need to have num ^another === maxCandidate
            if (set.has(another)) { // if we have such, update maxCandidate => add 1 at the end. If not - in the next iteration i will increment, and as we did not add the 1, we will have 0 at this position.
                max = maxCandidate;
                break;
            }
        }
    }
    return max; // as we went from left to right all bits, the maxCandidate is as well the maximum.
};
```

```
```

```
```

The best result for the code below is ***68ms / 44.2MB*** (beats 100.00% / 45.25%).
* ***PHP***
```
function findMaximumXOR($nums) {
		$len = count($nums)-1;
		rsort($nums);
		$maxLen = strlen(decbin($nums[0]));
		$max=0;
		for ($i=0; $i<=$len; $i++) {
			if (strlen(decbin($nums[$i]))<$maxLen) break;
			for ($j=$i+1; $j<=$len; $j++) {
				$temp = $nums[$i] ^ $nums[$j];
				if ($temp>$max) {
					$max=$temp;
					$maxLen=strlen((decbin($max)));
				}
			}
		}
		return $max;
	}
```

```
```

```
```

The best result for the code below is ***12ms / 32.2MB*** (beats 95% / 84%).
* ***Swift***
```
class Solution {
    class Node {
        var zero: Node? = nil
        var one: Node? = nil
        
        var isLeaf: Bool {
            return zero == nil && one == nil
        }
    }
    
    //invariant: all branches have the same depth
    struct Trie {
        let root: Node = Node()
        let maxDigits: Int
        
        init(_ maxNum: Int) {
            maxDigits = maxNum.bitWidth - maxNum.leadingZeroBitCount
        }
        
        func insert(_ num: Int) {
            var currentNode = root
            
            for i in stride(from: maxDigits, to: 0, by: -1) {
                if num & (1 << (i-1)) == 0 {
                    if currentNode.zero == nil {
                        currentNode.zero = Node()
                    }
                    currentNode = currentNode.zero!
                } else {
                    if currentNode.one == nil {
                        currentNode.one = Node()
                    }
                    currentNode = currentNode.one!
                }
            }
        }
        
        //returns at least 0
        func getMax() -> Int {
            return getMaxRec(root,root,0)
        }
        
        func getMaxRec(_ n1: Node?, _ n2: Node?, _ startingValue: Int) -> Int {
            guard let n1 = n1 else {return 0}
            guard let n2 = n2 else {return 0}
            
            //base case:
            //using the invariant, we are at the bottom of the tree, so return the startingValue
            guard !(n1.isLeaf && n2.isLeaf) else {return startingValue}
            
            let newVal = startingValue << 1
            var val1 = getMaxRec(n1.one, n2.zero, newVal + 1)
            var val2 = getMaxRec(n1.zero, n2.one, newVal + 1)
            let best = max(val1,val2)
            
            if best > 0 {
                return best
            } else {
                val1 = getMaxRec(n1.one, n2.one, newVal + 0)
                val2 = getMaxRec(n1.zero, n2.zero, newVal + 0)
                return max(val1,val2)
            }
        }
    }
    
    func findMaximumXOR(_ nums: [Int]) -> Int {
        //if you remove the next two lines and update the maxDigits of the trie as you go, you can get the runtime down to 760ms (from 1162ms), but it adds a lot of complexity, so I'm not including it in this post.
        guard nums.count > 1 else {return 0}
        let maxNum = nums.max()!

        let trie = Trie(maxNum)
        
        for num in nums {
            trie.insert(num)
        }
        
        return trie.getMax()
    }
}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***