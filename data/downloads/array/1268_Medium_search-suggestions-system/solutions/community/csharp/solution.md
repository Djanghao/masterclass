# C#, Go, Python | Two approaches

**Author:** SergiiCh
**Votes:** 9
**Link:** [https://leetcode.com/problems/search-suggestions-system/solutions/4323271/](https://leetcode.com/problems/search-suggestions-system/solutions/4323271/)

---

# Code

## Option 1
``` csharp [one]
public class Solution {
    public IList<IList<string>> SuggestedProducts(string[] products, string searchWord) {
        var result = new List<IList<string>>();
        var previouse = products.OrderBy(it => it).ToList();
        for (var i = 0; i < searchWord.Length; i++)
        {
            var temp = new List<string>();
            foreach (var product in previouse)
            {
                if (product.Length > i && product[i] == searchWord[i])
                {
                    temp.Add(product);
                }
            }

            previouse = temp;
            result.Add(temp.Take(3).ToArray());
        }

        return result;
    }
}
```

``` go [one]
func suggestedProducts(products []string, searchWord string) [][]string {
    sort.Strings(products)

    result := [][]string{}
    previous := products
    for i := 0; i < len(searchWord); i++ {
        temp := []string{}
        for _, product := range previous {
            if len(product) > i && product[i] == searchWord[i] {
                temp = append(temp, product)
            }
        }

        previous = temp
        if len(temp) <= 3 {
            result = append(result, temp)
        } else {
            result = append(result, temp[:3])
        }
    }

    return result
}
```

``` python [one]
class Solution:
    def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:
        products.sort()

        result = []
        previous = products
        for i in range(len(searchWord)):
            temp = []
            for product in previous:
                if len(product) > i and product[i] == searchWord[i]:
                    temp.append(product)

            previous = temp
            result.append(temp[:3])

        return result
```

## Option 2 (Trie)
``` csharp [two]
public class Solution {
    public IList<IList<string>> SuggestedProducts(string[] products, string searchWord) {
        var root = new Node();

        foreach (var product in products.OrderBy(it => it))
        {
            var current = root;
            foreach (var ch in product)
            {
                current = current.Children[ch - 'a'] ??= new Node();
                current.Words.Add(product);
            }
        }

        var result = new List<IList<string>>();
        var node = root;
        foreach (var ch in searchWord)
        {
            node = node?.Children[ch - 'a'];
            result.Add(node is null ? Array.Empty<string>() : node.Words.Take(3).ToArray());
        }

        return result;
    }

    class Node
    {
        public HashSet<string> Words = new HashSet<string>();
        public Node?[] Children { get; } = new Node?[26];
    };
}
```

``` go [two]
func suggestedProducts(products []string, searchWord string) [][]string {
    sort.Strings(products)

    root := &Trie{}
    result := [][]string{}

    for _, product := range products {
        current := root
        for _, ch := range product {
            if current.children[ch - 'a'] != nil {
                current = current.children[ch - 'a']
            } else {
                current.children[ch - 'a'] = &Trie{}
                current = current.children[ch - 'a']
            }
            current.words = append(current.words, product)
        }
    }

    node := root
    for _, ch := range searchWord {
        if node != nil && node.children[ch - 'a'] != nil {
            node = node.children[ch - 'a']
            if len(node.words) <= 3 {
                result = append(result, node.words)
            } else {
                result = append(result, node.words[:3])
            }
        } else {
            node = nil
            result = append(result, []string{})
        }        
    }

    return result
}

type Trie struct {
    children [26]*Trie
    words []string
}
```

``` python [two]
class Solution:
    def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:
        root = Trie()

        products.sort()
        for product in products:
            current = root
            for ch in product:
                if ch in current.children:
                    current = current.children[ch] 
                else:
                    current.children[ch] = Trie()
                    current = current.children[ch]
                current.words.append(product)
        
        result = []
        node = root
        for ch in searchWord:
            node = node.children[ch] if node and ch in node.children else None
            result.append(node.words[:3] if node else [])

        return result
    
class Trie:
    def __init__(self) -> None:
        self.children = {}
        self.words = []
```