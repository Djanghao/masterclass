# [JavaScript] Trie with explanation

**Author:** jialihan
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-pairs-with-xor-in-a-range/solutions/1126330/](https://leetcode.com/problems/count-pairs-with-xor-in-a-range/solutions/1126330/)

---

1. How to check pair's XOR is smaller than limit?
	```js
	limit bit: 1 0 1 0 0
	           ^   ^
	only at 1 bit, we can decrease to 0
	```
	
2. how to count valid pairs ?
XOR rule: `x ^ x= 0`
So when evaluate the number, only the same bit will be valid pair to get a `0` result of XOR at certain bit.

3. When find the valid count at bit `i` with `num_bit === x`, Note: have to try another way to find next possible smaller bit, then we need to make the `trieNode` to go another branch `trieNode = curNode.children[1-x]`.

4.  2^15 = 32768, so here max bit number is 14.

JS code:
```js
var countPairs = function(nums, low, high) {
    function insert(num){
        var node = root;
        for(i = 14; i>=0; i--)
        {
            var bit = (num >> i) & 1;
            if(!node.children[bit])
            {
                node.children[bit] = new TrieNode();
            }
            node.children[bit].cnt += 1;
            node = node.children[bit];
        }
    }
    function countSmallerNums(num, limit)
    {
        var cnt = 0;
        // count pairs with num strictly smaller than limit
        var node = root;
        for(i = 14; i>=0 && node; i--)
        {
            var lbit = (limit>>i) & 1;
            var nbit = (num >> i) & 1;
            if(lbit===1)
            {
                // we can decrease on 1 bit
                if(node.children[nbit])
                {
                     cnt += node.children[nbit].cnt;
                }
                // go to another way to find next bit count
                node = node.children[1-nbit];
            }
            else
            {
                // cannot increase the lbit === 0,
                // find the same Nbit to XOR to be '0'
                node = node.children[nbit];
            }
        }
        return cnt;
    }
    // starts here
    var root = new TrieNode();
    var res =0;
    for(var num of nums)
    {
        res += countSmallerNums(num, high+1) -  countSmallerNums(num, low);
        insert(num);
    }
    return res;
};

class TrieNode{
    constructor()
    {
        this.cnt = 0;
        this.children = new Array(2).fill(null);
    }
}
```

**Another XOR of two numbers: LC421**
using Trie-presentation can be as a basic example to use bit manipulation to do XOR for two nums, it's helpful to summarize similar problems:
https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/
