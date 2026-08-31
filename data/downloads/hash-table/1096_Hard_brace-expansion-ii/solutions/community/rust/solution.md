# Rust | Abstract Syntax Tree, beats 100%

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/brace-expansion-ii/solutions/3929157/](https://leetcode.com/problems/brace-expansion-ii/solutions/3929157/)

---

# Approach

Compile the given string into an AST, then evaluate the value from that tree.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
#[derive(Debug, Clone)]
pub struct TokenNode(char);
#[derive(Debug, Clone)]
pub struct UnionNode(Vec<OperandNode>);
#[derive(Debug, Clone)]
pub struct ConcatNode(Vec<OperandNode>);

#[derive(Debug, Clone)]
pub enum OperandNode {
    Token(TokenNode),
    Union(UnionNode),
    Concat(ConcatNode),
}

pub trait Scanner: Sized {
    type Error;

    fn scan(stream: Vec<char>) -> Result<(Self, Vec<char>), Self::Error>;
}

impl Scanner for TokenNode {
    type Error = &'static str;

    fn scan(
        mut stream: Vec<char>
    ) -> Result<(Self, Vec<char>), Self::Error> {
        let token = if let Some(inner) = stream.pop() {
            inner
        } else { return Err("TokenNode: EOL"); };
        if !token.is_alphabetic() {
            return Err("TokenNode: illegal character");
        }

        Ok((Self(token), stream))
    }
}

impl Scanner for UnionNode {
    type Error = &'static str;

    fn scan(
        mut stream: Vec<char>
    ) -> Result<(Self, Vec<char>), Self::Error> {
        let token = if let Some(inner) = stream.pop() {
            inner
        } else { return Err("UnionNode: EOL while attempting to reach }"); };
        if token != '}' { return Err("UnionNode: missing }"); }
        
        let mut ret = vec![];
        while let Some(&token) = stream.last() {
            if token == '{' { break; }
            if token == ',' {
                stream.pop(); // trim commas
                continue;
            }

            let (op_node, stream_next) = OperandNode::scan(stream)?;
            stream = stream_next;

            ret.push(op_node);
        }
        ret.reverse();

        let token = if let Some(inner) = stream.pop() {
            inner
        } else { return Err("UnionNode: EOL while attempting to reach {"); };
        if token != '{' { return Err("UnionNode: missing {"); }

        Ok((Self(ret), stream))
    }
}

// concat node is greedy
impl Scanner for ConcatNode {
    type Error = &'static str;

    fn scan(
        mut stream: Vec<char>
    ) -> Result<(Self, Vec<char>), Self::Error> {
        let mut ret = vec![];
        while let Some(&token) = stream.last() {
            if token == '{' || token == ',' {
                break; // TODO: optimize
            }

            // Disallow nested ConcatNode!!
            let (op_node, stream_next) = if token == '}' {
                let (union_node, stream_next) = UnionNode::scan(stream)?;
                (OperandNode::Union(union_node), stream_next)
            } else {
                let (token_node, stream_next) = TokenNode::scan(stream)?;
                (OperandNode::Token(token_node), stream_next)
            };
            stream = stream_next;

            ret.push(op_node);
        }
        ret.reverse();

        Ok((Self(ret), stream))
    }
}

impl Scanner for OperandNode {
    type Error = &'static str;

    fn scan(
        mut stream: Vec<char>
    ) -> Result<(Self, Vec<char>), Self::Error> {
        let token = if let Some(inner) = stream.last().cloned() {
            inner
        } else { return Err("OperandNode: EOL"); };

        // try ConcatNode
        let (concat_node, stream_next) = ConcatNode::scan(stream)?;
        if concat_node.0.is_empty() {
            return Err("OperandNode: Nothing to read");
        }
        if concat_node.0.len() < 2 {
            return Ok((concat_node.0[0].clone(), stream_next));
        }
        
        Ok((Self::Concat(concat_node), stream_next))
    }
}

use std::collections::HashSet;

pub trait Evaluator {
    fn eval(self) -> HashSet<Vec<char>>;
}

impl Evaluator for TokenNode {
    fn eval(self) -> HashSet<Vec<char>> {
        HashSet::from([vec![self.0]])
    }
}

impl Evaluator for UnionNode {
    fn eval(self) -> HashSet<Vec<char>> {
        let mut ret = HashSet::new();
        for op_node in self.0 {
            ret.extend(op_node.eval());
        }
        ret
    }
}

impl Evaluator for ConcatNode {
    fn eval(self) -> HashSet<Vec<char>> {
        let mut ret: HashSet<Vec<char>> = HashSet::from([vec![]]);
        for op_node in self.0 {
            let mut ret_next = HashSet::new();
            
            let op_set = op_node.eval();
            for op0 in ret {
                for op1 in &op_set {
                    let mut op0 = op0.clone();
                    op0.extend(op1);

                    ret_next.insert(op0);
                }
            }

            ret = ret_next;
        }
        ret
    }
}

impl Evaluator for OperandNode {
    fn eval(self) -> HashSet<Vec<char>> {
        match self {
            Self::Token(token_node) => token_node.eval(),
            Self::Union(union_node) => union_node.eval(),
            Self::Concat(concat_node) => concat_node.eval(),
        }
    }
}

impl Solution {
    pub fn brace_expansion_ii(exp_str: String) -> Vec<String> {
        let stream = exp_str.chars().collect::<Vec<_>>();
        let (root, _) = OperandNode::scan(stream).unwrap();
        // println!("root: {:?}", root);

        let mut ret = root.eval()
            .into_iter()
            .collect::<Vec<_>>();
        ret.sort_unstable();

        ret.into_iter()
            .map(|v| {
                v.into_iter()
                    .collect::<String>()
            })
            .collect::<Vec<_>>()
    }
}
```