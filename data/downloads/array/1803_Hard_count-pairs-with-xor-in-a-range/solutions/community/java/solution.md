# Java solution with explaination

**Author:** yashcr7
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-pairs-with-xor-in-a-range/solutions/4016191/](https://leetcode.com/problems/count-pairs-with-xor-in-a-range/solutions/4016191/)

---

# Approach
Goal of the problem is to find all pairs (X,Y) such that X^Y falls in the range [Low, High]. 


Following steps illustrate how to solve this problem. Later I will describe the components in detail.
 
```
For each number, N, in the array:
- Get the count of all numbers that satisfy the condition X^N < high+1
- Get the count of all numbers that satisfy the condition X^N < low
- Count += (count from 1 - count from 2)
- Add the number to trie

```


There are two main components described below.

- **Adding to trie**: 
Add every bit of the number in a trie from high to low. This will be helpful in the next step.
```
Node n = root;
for(int i=maxBits-1; i>=0; i--){
    // get the (i)th bit
    int bit = (num>>i) & 1;
    if(n.children[bit]==null){
        n.children[bit] = new Node();
    }
    n.children[bit].total+=1;
    n = n.children[bit];
}
````
- **Counting all smaller values**
Count all smaller values in the trie such that the number in trie, say X, when xor'd with given number Y should result in a value less than the given limit. 
How do we achieve this optimally? This is where the trie we're building along the way comes in. 
```
From i=14(highest possible based on input)-> 0
    Get the ith bit of the number and ith bit of the limit. 
    Here are the following possible cases:
        -> numBit = 0, limitBit = 0
            otherNumsBit = 1 => 0^1 = 1. The resulting number would be greater than limit. We can ignore the subtree.
            otherNumsBit = 0 => 0^0 = 0. We cant say for sure that the resulting number should be less so we need to go down the trie.
        -> numBit = 1, limitBit = 0
            otherNumsBit = 1 => 1^1 = 0. We cant say for sure that the resulting number should be less so we need to go down the trie.
            otherNumsBit = 0 => 1^0 = 1. The resulting number would be greater than limit. We can ignore the subtree.
        -> numBit = 1, limitBit = 1
            otherNumsBit = 1 => 1^1 = 0. All numbers with bit 1 at this position should be counted since xor with given number would result in numbers less than limit.
            otherNumsBit = 0 => 1^0 = 1.  We cant say for sure that the resulting number should be less so we need to go down the trie.
        -> numBit = 0, limitBit = 1
            otherNumsBit = 1 => 0^1 = 1. We cant say for sure that the resulting number should be less so we need to go down the trie.
            otherNumsBit = 0 => 0^0 = 0.  All numbers with bit 0 at this position should be counted since xor with given number would result in numbers less than limit.

From the above there are two cases in which we should count all underlying numbers and move to child trieNode that doesnt include those numbers.

if(bitNum==0 && bitLim==1){
    count+= (n.children[0]!=null)? n.children[0].total :0;
    n = n.children[1];
}
else if(bitNum==1 && bitLim==1) {
    count+= (n.children[1]!=null)? n.children[1].total :0;
    n=n.children[0];
}
else n = n.children[bitNum]; 
```


# Complexity
N = size of the array
14: max bits as per the constraints of the problem
- Time complexity:
Count: O(14)
Add to trie: O(14)
we do the above for each number ie count twice and add to trie
Overall: O(N*14*14*14)
O(N)
To generalize: O(N*Max_bits)

- Space complexity:
O(N*14)

# Code
```
class Node {
    Node[] children;
    int total;
    public Node(){
        children = new Node[2];
        total=0;
    }
}
class Trie {
    Node root;
    int maxBits;
    public Trie(){
        root = new Node();
        maxBits = 15;
    }
    public void add(int num){
        root.total+=1;
        Node n = root;
        for(int i=maxBits-1; i>=0; i--){
            int bit = (num>>i) & 1;
            if(n.children[bit]==null){
                n.children[bit] = new Node();
            }
            n.children[bit].total+=1;
            n = n.children[bit];
        }
    }

    public int countPairs(int num, int limit){
        Node n = root;
        int count = 0;
        for(int i=maxBits-1; i>=0&&n!=null; i--) {
            int bitNum = (num>>i) & 1;
            int bitLim = (limit>>i) & 1;
            if(bitNum==0 && bitLim==1){
                count+= (n.children[0]!=null)? n.children[0].total :0;
                n = n.children[1];
            }
            else if(bitNum==1 && bitLim==1) {
                count+= (n.children[1]!=null)? n.children[1].total :0;
                n=n.children[0];
            }
            else n = n.children[bitNum];
        }
        return count;
    }
}
class Solution {
    public int countPairs(int[] nums, int low, int high) {
        int count = 0;
        Trie trie = new Trie();
        for(int num : nums){
            int highLimit = trie.countPairs(num, (high+1));
            int lowLimit = trie.countPairs(num, low);
            count += (highLimit-lowLimit);
            trie.add(num);
        }
        return count;
    }

}
```