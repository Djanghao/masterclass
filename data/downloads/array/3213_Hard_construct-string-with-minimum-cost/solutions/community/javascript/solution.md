# DP + Trie (optimized searching in Trie)

**Author:** ojha_akhil
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-string-with-minimum-cost/solutions/5436279/](https://leetcode.com/problems/construct-string-with-minimum-cost/solutions/5436279/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Let's say we have two words **"akhilendra"** and **"akhil"** stored in the **Trie**. Notice **"akhil"** is prefix of **"akhilendra"**.
So If we search both words seperately, then we will do the searching of **"akhil"** twice, once in **"akhil"** and another in **"akhilendra"**. This may cause Time limit exceeded error.

# Approach
<!-- Describe your approach to solving the problem. -->
To understand the approach, let's take an example. Lets say our target is `target = "hiiakhilendraojha"`. Notice at **index = 2** there is a character **"i"** and at **index = 12** there is character **"a"**. so we can write `dp[12] = min(dp[12], dp[2] + cost("akhilendra"))`. But to get `cost("akhilendra")` we have to do searching in the **Trie**. While searching **"akhilendra"** in the **Trie** we will pass through string **"akhil**, and as soon as we pass through character **"l"**, we will find our `flag in the node` to be `true` which will indicate that there is a word in the **Trie** which ends here.

As character `l` is at `index = 7` So, we will now do `dp[7] = min(dp[7], dp[2] + cost("akhil"))` and will resume our searching in the trie. After some letters we will reach to `index = 12`, where we will again find our `flag` to be `true`. That means another word ends at this point. So now we can do the operation `dp[12] = min(dp[12], dp[2] + cost("akhilendra"))` as the `cost("akhilendra")` will be saved while inserting it in the tree, so we can get its cost from there. 

So we will keep doing this untill we **reach the end of the string** or **any character does not matched in the Trie**.

You should notice that we are updateing `dp[12]` and `dp[7]` values using `dp[2]`, and we will do that same from all indecies of target, we will use `dp[i]` to update `dp[i+1], dp[i+2],...` values.

So you have to do two things, run a `for loop` from start index to end index of `target` and then run a `second loop` from `i+1`(considering you are currently at i in the first loop) that will match the character, if match occurs, it will check whether a word ends there or not, if end, we will update corresponding dp index value with the help of `dp[i]`. If match doesn't occurs, the we will break the second loop.

For better understanding check the function `traversal` in the class `Trie` in my code. It accepts index i, and runs a loop from i to end of string. **Note that `node.flag = 0` means there is not word in trie that ends here and if `node.flag > 0` means a word end at this position and `cost = node.flag`**.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$ in worst cases. But it will do little better than quadratic complexity as searching is a bit optimised.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Space complexity will depend upon the Trie structure.
# Code
```
/**
 * @param {string} target
 * @param {string[]} words
 * @param {number[]} costs
 * @return {number}
 */

class Node {
    constructor() {
        this.link = {};
        this.flag = 0;
    }

    // Check whether a particular character is present in the node or not.
    hasCharacter(character) {
        return this.link[character] != undefined; 
    }

    // Returns reference of next node in the Trie corresponding to a character.
    nextNode(character) {
        return this.link[character];
    }

    // Adds reference of a node into link array of this node.
    addNextNode(character, node) {
        this.link[character] = node;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    // Inserts a word in the Trie.
    insert(word, cost) {
        var dummy = this.root;
        
        for(let i = 0; i < word.length; i++) {
            if(dummy.hasCharacter(word[i])) dummy = dummy.nextNode(word[i]);
            else {
                var newNode = new Node();
                dummy.addNextNode(word[i], newNode);
                dummy = newNode;
            }
        }
        
        if((dummy.flag == 0) || (dummy.flag > cost)) {
            dummy.flag = cost;
        }
    }

    traversal(target, index, dp) {
        var dummy = this.root;
        for(let j = index; j < target.length; j++) {
            if(dummy.hasCharacter(target[j])) {
                dummy = dummy.nextNode(target[j]);
                if(dummy.flag > 0) dp[j + 1] = Math.min(dp[j + 1], dp[index] + dummy.flag);
            }
            else break;
        }
    }
}

var minimumCost = function(target, words, costs) {
    var n = target.length;

    var trie = new Trie();

    for(let i = 0; i < words.length; i++) {
        trie.insert(words[i], costs[i]);
    }

    var length;
    var cost;

    var dp = Array(n + 3).fill(Infinity);

    dp[0] = 0;

    for(let i = 0; i <= n; i++) {
        trie.traversal(target, i, dp);
    }

    if(dp[n] == Infinity) return -1;
    else return dp[n];
};
```