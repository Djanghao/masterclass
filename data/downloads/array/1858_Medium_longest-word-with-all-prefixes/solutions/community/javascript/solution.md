# Clean Trie DFS solution 100%

**Author:** 1709abhishek
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/2697593/](https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/2697593/)

---

```
class Trie{
    constructor(){
        this.root={};
    }
    
    insert(word){
        let node=this.root;
        for(let x of word){
            if(node[x]==null)node[x]={};
            node=node[x];
        }
        node.isWord=true;
    }
    
    traverse(word){
        let node=this.root;
        for(let x of word){
            if(node[x]==null)return null;
            node=node[x];
        }
        return node;
    }
    
    search(word){
        let node=this.traverse(word);
        return node!=null && node.isWord===true;
    }
    
    startsWith(prefix){
        let node=this.traverse(prefix);
        return node!=null;
    }
}

var dfs = function(node,word){
    let maxWord = word;
    for(let x in node){
        if(node[x].isWord){
            let res=dfs(node[x],word+x);
            if(res.length>maxWord.length || res.length===maxWord.length && res<maxWord){
                maxWord=res;
            }
        }
    }
    return maxWord;
}

var longestWord = function(words) {
    let t = new Trie();
    for(let word of words){
        t.insert(word);
    }
    
    return dfs(t.root,"");
};
```