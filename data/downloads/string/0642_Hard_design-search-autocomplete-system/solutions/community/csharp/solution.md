# Beats 90% Time 90% Space

**Author:** murh
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-search-autocomplete-system/solutions/5506446/](https://leetcode.com/problems/design-search-autocomplete-system/solutions/5506446/)

---

Use Trie
With each node keep the data that passed through it (sentence, rank)

For querying, get the last node in the prefix. Use priority queue to rank on requirements (rank and ordinal string), keep the heap at 3 results.

Trick: instead of sentence at each node, use it's HASH, this optimizes space complexity.

Finally when querying, just convert from hash into the sentence.
For this utilize a standard dict to keep hash <-> sentence lookup.

# Code
```
public class AutocompleteSystem {
    
    /**
        TIME:  
            N * max(W_LEN) || LETTERS <- to initialize trie
            total_sentences * log 3 <- lookup
            total_sentences => initial sentence S + new sentences NS
        SPACE: 
            total_nodes -> n * k + m * k (new sentences)

    */
    private Trie trie = new Trie();
    private StringBuilder query = new StringBuilder();

    public AutocompleteSystem(string[] sentences, int[] times) {
        for(var i = 0; i < sentences.Length; i++) {
            trie.AddSentence(sentences[i], times[i]);
        }    
    }
    
    public IList<string> Input(char c) {
        if(c == '#') {
            trie.AddSentence(query.ToString(), 1);
            trie.Reset();
            query.Clear();
            return new List<string>();
        }

        query.Append(c);
        return trie.PrefixSearch(c);
    }


    internal class Trie {
        public Dictionary<int, string> Hash2Sentence = new Dictionary<int, string>();
        
        private TrieNode root;
        private TrieNode last;

        public Trie() {
            root = new TrieNode();
            last = root;
        }

        internal void Reset() {
            last = root;
        }
        
        internal void AddSentence(string sentence, int rank_increment) {
            var hash = sentence.GetHashCode();

            var node = root;
            foreach(var c in sentence) {
                if(!node.children.ContainsKey(c))
                    node.children[c] = new TrieNode();

                node.AddSentence(hash, rank_increment);
                node = node.children[c];
            }

            Hash2Sentence.TryAdd(hash, sentence);
            node.AddSentence(hash, rank_increment);
        }

        internal IList<string> PrefixSearch(char c) {
            if(last == null || !last.children.ContainsKey(c)) {
                last = null;
                return new List<string>();
            }

            last = last.children[c];

            var pq = new PriorityQueue<int, (int rank, string val)>(
                Comparer<(int rank, string val)>.Create(
                    (a, b) => a.rank == b.rank 
                        ? string.CompareOrdinal(b.val, a.val) 
                        : a.rank - b.rank
                )
            );

            foreach(var (h, r) in last.hash_rank) {
                pq.Enqueue(h, (r, Hash2Sentence[h]));
                while(pq.Count > 3) pq.Dequeue();
            }

            var result = new string[pq.Count];
            var idx = pq.Count - 1;
            while(pq.Count > 0) {
                result[idx--] = Hash2Sentence[pq.Dequeue()];
            }

            return result.ToList();
        }


        internal class TrieNode {
            internal int rank;
            internal string val;

            internal Dictionary<char, TrieNode> children;
            internal Dictionary<int, int> hash_rank; // <hash, rank>

            internal TrieNode() {
                children = new Dictionary<char, TrieNode>();
                hash_rank = new Dictionary<int, int>();
            }

            internal void AddSentence(int hash, int rank_increment) {
                if(!hash_rank.ContainsKey(hash)) {
                    hash_rank.Add(hash, rank_increment);
                } 
                else {
                    hash_rank[hash] += rank_increment;
                }
            }

        }
    }
}

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * AutocompleteSystem obj = new AutocompleteSystem(sentences, times);
 * IList<string> param_1 = obj.Input(c);
 */
```