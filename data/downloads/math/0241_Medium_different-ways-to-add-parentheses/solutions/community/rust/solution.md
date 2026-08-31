# 🔥 Beats 90% ! Beginner-Friendly | Python3 🐍 | Java ☕ | C++ 💻 | C# 🖥️ | Rust 🦀 | Go 🚀 | JS 🌐

**Author:** naruto11110000
**Votes:** 120
**Link:** [https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/5806448/](https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/5806448/)

---

### 1. **Intuition** \uD83D\uDCA1
The key idea is to break the expression down recursively at every operator (`+`, `-`, `*`). By treating each operator as a potential point to divide the expression into two parts, we calculate all possible results from both sides, then combine them. This recursive exploration generates all possible ways to parenthesize the expression.

Imagine an expression as a tree \uD83C\uDF33, where operators are the nodes and numbers are the leaves. Each split of the tree is a new way of grouping the numbers and operators, which yields a different result. Our goal is to explore every possible tree and return all results.

---

### 2. **Approach** \uD83E\uDDE9

1. **Divide & Conquer**: 
   - For each operator (`+`, `-`, `*`) in the expression, split the string into two parts: the left and right sub-expressions.
   - Recursively compute the results of both the left and right sub-expressions.

2. **Combine**:
   - Once you have the results of the left and right sub-expressions, combine them based on the current operator.
   - For each result in the left part and each result in the right part, compute a new result using the operator.

3. **Base Case**:
   - If the expression contains no operators (i.e., just a number), return that number as a result.

---

### 3. **Time and Space Complexity** \u23F3\uD83D\uDCE6

- **Time Complexity**: 
   The expression has `n` characters, where each operator can split the expression into two parts. The number of ways to split an expression grows exponentially (like the Catalan number sequence). This results in **O(2^n)** recursive calls in the worst case.

- **Space Complexity**:
   - The space complexity depends on the depth of the recursion tree, which can go as deep as `n`. The additional space used to store intermediate results (in the `res` array) also adds up. So, the space complexity is **O(2^n)**, primarily due to the recursive stack and storing results.

---

# Code


```python3 []
class Solution:
    def diffWaysToCompute(self, expression: str) -> List[int]:
        res = []
        # ans = []
        for i in range(len(expression)):
            oper = expression[i]
            if oper == "+" or oper == "-" or oper == "*":
                sub_str1 = expression[0 : i]
                sub_str2 = expression[i + 1 : ]
                s1 = self.diffWaysToCompute(sub_str1)
                s2 = self.diffWaysToCompute(sub_str2)
                for i in s1:
                    for j in s2:
                        if oper == "*":
                            res.append(int(i) * int(j))
                        if oper == "+":
                            res.append(int(i) + int(j))
                        if oper == "-":
                            res.append(int(i) - int(j))
        if len(res) == 0:
            res.append(int(expression))
        # print(res)
        return res
```

``` C++ []
class Solution {
public:
    vector<int> diffWaysToCompute(string expression) {
        vector<int> res;
        for (int i = 0; i < expression.size(); ++i) {
            char oper = expression[i];
            if (oper == '+' || oper == '-' || oper == '*') {
                vector<int> s1 = diffWaysToCompute(expression.substr(0, i));
                vector<int> s2 = diffWaysToCompute(expression.substr(i + 1));
                for (int a : s1) {
                    for (int b : s2) {
                        if (oper == '+') res.push_back(a + b);
                        else if (oper == '-') res.push_back(a - b);
                        else if (oper == '*') res.push_back(a * b);
                    }
                }
            }
        }
        if (res.empty()) res.push_back(stoi(expression));
        return res;
    }
};
```


```Java []
import java.util.*;

class Solution {
    public List<Integer> diffWaysToCompute(String expression) {
        List<Integer> res = new ArrayList<>();
        for (int i = 0; i < expression.length(); ++i) {
            char oper = expression.charAt(i);
            if (oper == '+' || oper == '-' || oper == '*') {
                List<Integer> s1 = diffWaysToCompute(expression.substring(0, i));
                List<Integer> s2 = diffWaysToCompute(expression.substring(i + 1));
                for (int a : s1) {
                    for (int b : s2) {
                        if (oper == '+') res.add(a + b);
                        else if (oper == '-') res.add(a - b);
                        else if (oper == '*') res.add(a * b);
                    }
                }
            }
        }
        if (res.isEmpty()) res.add(Integer.parseInt(expression));
        return res;
    }
}
```

```JavaScript []
var diffWaysToCompute = function(expression) {
    let res = [];
    for (let i = 0; i < expression.length; i++) {
        let oper = expression[i];
        if (oper === '+' || oper === '-' || oper === '*') {
            let s1 = diffWaysToCompute(expression.slice(0, i));
            let s2 = diffWaysToCompute(expression.slice(i + 1));
            for (let a of s1) {
                for (let b of s2) {
                    if (oper === '+') res.push(a + b);
                    else if (oper === '-') res.push(a - b);
                    else if (oper === '*') res.push(a * b);
                }
            }
        }
    }
    if (res.length === 0) res.push(parseInt(expression));
    return res;
};

```

``` C# []
using System;
using System.Collections.Generic;

public class Solution {
    public IList<int> DiffWaysToCompute(string expression) {
        IList<int> res = new List<int>();
        for (int i = 0; i < expression.Length; i++) {
            char oper = expression[i];
            if (oper == '+' || oper == '-' || oper == '*') {
                IList<int> s1 = DiffWaysToCompute(expression.Substring(0, i));
                IList<int> s2 = DiffWaysToCompute(expression.Substring(i + 1));
                foreach (int a in s1) {
                    foreach (int b in s2) {
                        if (oper == '+') res.Add(a + b);
                        else if (oper == '-') res.Add(a - b);
                        else if (oper == '*') res.Add(a * b);
                    }
                }
            }
        }
        if (res.Count == 0) res.Add(Int32.Parse(expression));
        return res;
    }
}

```
``` Rust []
impl Solution {
    pub fn diff_ways_to_compute(expression: String) -> Vec<i32> {
        let mut res = Vec::new();
        for (i, oper) in expression.chars().enumerate() {
            if oper == '+' || oper == '-' || oper == '*' {
                let s1 = Solution::diff_ways_to_compute(expression[0..i].to_string());
                let s2 = Solution::diff_ways_to_compute(expression[i + 1..].to_string());
                for &a in &s1 {
                    for &b in &s2 {
                        match oper {
                            '+' => res.push(a + b),
                            '-' => res.push(a - b),
                            '*' => res.push(a * b),
                            _ => (),
                        }
                    }
                }
            }
        }
        if res.is_empty() {
            res.push(expression.parse().unwrap());
        }
        res
    }
}

```

```Go []
package main

import (
	"strconv"
)

func diffWaysToCompute(expression string) []int {
	var res []int
	for i := 0; i < len(expression); i++ {
		oper := expression[i]
		if oper == '+' || oper == '-' || oper == '*' {
			s1 := diffWaysToCompute(expression[:i])
			s2 := diffWaysToCompute(expression[i+1:])
			for _, a := range s1 {
				for _, b := range s2 {
					if oper == '+' {
						res = append(res, a+b)
					} else if oper == '-' {
						res = append(res, a-b)
					} else if oper == '*' {
						res = append(res, a*b)
					}
				}
			}
		}
	}

	if len(res) == 0 {
		num, _ := strconv.Atoi(expression)
		res = append(res, num)
	}

	return res
}

```

``` One_Note []

I originally solved using python... but I will be honest I just wanted to post with many more langs cause I thought it might help others so I used chatgpt to convert my code into other languages.
... :3 one upvote plz?

```
