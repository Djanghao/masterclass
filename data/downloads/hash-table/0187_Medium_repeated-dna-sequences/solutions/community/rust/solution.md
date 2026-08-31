# ✅ Detailed explanation of Repeated DNA Sequences problem with many programming languages

**Author:** trinhminhtriet
**Votes:** 0
**Link:** [https://leetcode.com/problems/repeated-dna-sequences/solutions/6121479/](https://leetcode.com/problems/repeated-dna-sequences/solutions/6121479/)

---

# Solution: Hash Table

We define a hash table $cnt$ to store the occurrence count of all substrings of length $10$.

We iterate through all substrings of length $10$ in the string $s$. For the current substring $t$, we update its count in the hash table. If the count of $t$ is $2$, we add it to the answer.

After the iteration, we return the answer array.

The time complexity is $O(n 	imes 10)$, and the space complexity is $O(n 	imes 10)$. Here, $n$ is the length of the string $s$.
    
# Code    


#### Python3

```python
class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        cnt = Counter()
        ans = []
        for i in range(len(s) - 10 + 1):
            t = s[i : i + 10]
            cnt[t] += 1
            if cnt[t] == 2:
                ans.append(t)
        return ans
```

#### Java

```java
class Solution {
    public List<String> findRepeatedDnaSequences(String s) {
        Map<String, Integer> cnt = new HashMap<>();
        List<String> ans = new ArrayList<>();
        for (int i = 0; i < s.length() - 10 + 1; ++i) {
            String t = s.substring(i, i + 10);
            if (cnt.merge(t, 1, Integer::sum) == 2) {
                ans.add(t);
            }
        }
        return ans;
    }
}
```

#### C++

```cpp
class Solution {
public:
    vector<string> findRepeatedDnaSequences(string s) {
        unordered_map<string, int> cnt;
        vector<string> ans;
        for (int i = 0, n = s.size() - 10 + 1; i < n; ++i) {
            auto t = s.substr(i, 10);
            if (++cnt[t] == 2) {
                ans.emplace_back(t);
            }
        }
        return ans;
    }
};
```

#### Go

```go
func findRepeatedDnaSequences(s string) (ans []string) {
	cnt := map[string]int{}
	for i := 0; i < len(s)-10+1; i++ {
		t := s[i : i+10]
		cnt[t]++
		if cnt[t] == 2 {
			ans = append(ans, t)
		}
	}
	return
}
```

#### TypeScript

```ts
function findRepeatedDnaSequences(s: string): string[] {
    const n = s.length;
    const cnt: Map<string, number> = new Map();
    const ans: string[] = [];
    for (let i = 0; i <= n - 10; ++i) {
        const t = s.slice(i, i + 10);
        cnt.set(t, (cnt.get(t) ?? 0) + 1);
        if (cnt.get(t) === 2) {
            ans.push(t);
        }
    }
    return ans;
}
```

#### Rust

```rust
use std::collections::HashMap;

impl Solution {
    pub fn find_repeated_dna_sequences(s: String) -> Vec<String> {
        if s.len() < 10 {
            return vec![];
        }
        let mut cnt = HashMap::new();
        let mut ans = Vec::new();
        for i in 0..s.len() - 9 {
            let t = &s[i..i + 10];
            let count = cnt.entry(t).or_insert(0);
            *count += 1;
            if *count == 2 {
                ans.push(t.to_string());
            }
        }
        ans
    }
}
```

#### JavaScript

```js
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    const cnt = new Map();
    const ans = [];
    for (let i = 0; i < s.length - 10 + 1; ++i) {
        const t = s.slice(i, i + 10);
        cnt.set(t, (cnt.get(t) || 0) + 1);
        if (cnt.get(t) === 2) {
            ans.push(t);
        }
    }
    return ans;
};
```

#### C#

```cs
public class Solution {
    public IList<string> FindRepeatedDnaSequences(string s) {
        var cnt = new Dictionary<string, int>();
        var ans = new List<string>();
        for (int i = 0; i < s.Length - 10 + 1; ++i) {
            var t = s.Substring(i, 10);
            if (!cnt.ContainsKey(t)) {
                cnt[t] = 0;
            }
            if (++cnt[t] == 2) {
                ans.Add(t);
            }
        }
        return ans;
    }
}
```


    
# Contact information
If you have any questions or suggestions, please feel free to contact me at https://trinhminhtriet.com/
- Website: [trinhminhtriet.com](https://trinhminhtriet.com/)
- Github: [trinhminhtriet](https://github.com/trinhminhtriet)
- LinkedIn: [trinhminhtriet](https://www.linkedin.com/in/triet-trinh/)
- Facebook: [trinhminhtriet](https://www.facebook.com/trinhminhtriet)
- Twitter: [trinhminhtriet](https://twitter.com/trinhminhtriet)
- Email: [contact@trinhminhtriet.com](mailto:contact@trinhminhtriet.com)