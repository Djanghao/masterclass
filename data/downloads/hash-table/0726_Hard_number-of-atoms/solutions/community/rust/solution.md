# Rust | Abstract Syntax Tree

**Author:** soyflourbread
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-atoms/solutions/3874019/](https://leetcode.com/problems/number-of-atoms/solutions/3874019/)

---

# Approach

Write a parser, construct an AST from the given string with that parser, then traverse the AST to count the number of occurences of each element.

# Code
```
const BASE: u32 = 10;

#[derive(Debug, Clone)]
pub struct AtomNode(Vec<char>);

#[derive(Debug, Clone)]
pub struct CountNode(usize);

#[derive(Debug, Clone)]
pub enum ContainerNode {
    Atom(AtomNode),
    Formula(FormulaNode),
}

#[derive(Debug, Clone)]
pub struct FormulaItemNode(
    ContainerNode,
    Option<CountNode>,
);

#[derive(Debug, Clone)]
pub struct FormulaNode(
    Vec<FormulaItemNode>
);

pub trait ASTNode: Sized {
    type Error;

    fn parse(tokens: Vec<char>) -> Result<(Self, Vec<char>), Self::Error>;
}

impl ASTNode for AtomNode {
    type Error = &'static str;

    fn parse(mut tokens: Vec<char>) -> Result<(Self, Vec<char>), Self::Error> {
        let mut ret = vec![];
        
        while let Some(token) = tokens.pop() {
            if !token.is_alphabetic() {
                return Err("AtomNode: illegal character");
            }

            ret.push(token);
            if token.is_uppercase() {
                break; // end of atomic symbol
            }
        }
        ret.reverse();

        Ok((Self(ret), tokens))
    }
}

impl ASTNode for CountNode {
    type Error = &'static str;

    fn parse(mut tokens: Vec<char>) -> Result<(Self, Vec<char>), Self::Error> {
        if !tokens.last()
            .map(|&c| c.is_digit(BASE))
            .unwrap_or(false) {
            return Err("CountNode: no digit to collect");
        }
        
        let mut ret = u32::MIN;

        let mut base_cur = 1u32;
        while let Some(token) = tokens.pop() {
            if let Some(digit) = token.to_digit(BASE) {
                ret += digit * base_cur;
                base_cur *= BASE;
            } else {
                tokens.push(token);
                break;
            }
        }

        Ok((Self(ret as usize), tokens))
    }
}

impl ASTNode for ContainerNode {
    type Error = &'static str;

    fn parse(mut tokens: Vec<char>) -> Result<(Self, Vec<char>), Self::Error> {
        let c = if let Some(&inner) = tokens.last() {
            inner
        } else {
            return Err("ContainerNode: no char to collect");
        };

        if c != ')' {
            let (inner, tokens) = AtomNode::parse(tokens)?;
            return Ok((Self::Atom(inner), tokens));
        }

        tokens.pop();
        let (inner, mut tokens) = FormulaNode::parse(tokens)?;
        if tokens.pop().unwrap_or('X') != '(' {
            return Err("ContainerNode: mismatched brackets");
        }

        Ok((Self::Formula(inner), tokens))
    }
}

impl ASTNode for FormulaItemNode {
    type Error = &'static str;

    fn parse(mut tokens: Vec<char>) -> Result<(Self, Vec<char>), Self::Error> {
        let token = if let Some(&inner) = tokens.last() {
            inner
        } else {
            return Err("FormulaItemNode: no char to collect");
        };
        
        let mut count_node = None;
        if token.is_digit(BASE) {
            let (count_node_next, tokens_next) = CountNode::parse(tokens)?;
            tokens = tokens_next;
            count_node = Some(count_node_next);
        }

        let token = if let Some(&inner) = tokens.last() {
            inner
        } else {
            return Err("FormulaItemNode: e0 must exist");
        };

        let (container_node, tokens) = ContainerNode::parse(tokens)?;
        Ok((Self(container_node, count_node), tokens))
    }
}

impl ASTNode for FormulaNode {
    type Error = &'static str;

    fn parse(mut tokens: Vec<char>) -> Result<(Self, Vec<char>), Self::Error> {
        let mut ret = vec![];
        
        while let Some(&token) = tokens.last() {
            if token == '(' {
                break; // TODO: exclusion
            }

            let (item_node, tokens_next) = FormulaItemNode::parse(tokens)?;
            tokens = tokens_next;

            ret.push(item_node);
        }
        ret.reverse();

        Ok((Self(ret), tokens))
    }
}

#[derive(Debug, Clone)]
pub struct AST {
    root: FormulaNode,
}

use std::convert::TryFrom;
impl TryFrom<Vec<char>> for AST {
    type Error = &'static str;

    fn try_from(tokens: Vec<char>) -> Result<Self, Self::Error> {
        let (root, _) = FormulaNode::parse(tokens)?;
        Ok(Self { root })
    }
}

impl FormulaNode {
    pub fn stat(
        self,
        multiplier: usize,
        tree: &mut BTreeMap<Vec<char>, usize>
    ) {
        for item in self.0 {
            let FormulaItemNode(container_node, count_node) = item;
            let count = count_node.map(|n| n.0).unwrap_or(1);
            let count = count * multiplier;
            match container_node {
                ContainerNode::Formula(self_next) => {
                    self_next.stat(count, tree);
                },
                ContainerNode::Atom(AtomNode(atom)) => {
                    let count_prev = tree.remove(&atom).unwrap_or(usize::MIN);
                    tree.insert(atom, count + count_prev);
                },
            }
        }
    }
}

use std::collections::BTreeMap;
impl AST {
    pub fn stat(self) -> Vec<(Vec<char>, usize)> {
        let root = self.root;
        
        let mut tree = BTreeMap::new();
        root.stat(1, &mut tree);
        
        tree.into_iter().collect::<Vec<_>>()
    }
}

impl Solution {
    fn preproc(s: String) -> Vec<char> {
        s.chars().collect::<Vec<_>>()
    }

    pub fn count_of_atoms(formula: String) -> String {
        let tokens = Self::preproc(formula);

        let ast = AST::try_from(tokens).unwrap();
        // println!("ast: {:?}", ast);

        let ret = ast.stat().into_iter()
            .map(|(mut atom, count)| {
                if count > 1 {
                    let count_str = count.to_string().chars().collect::<Vec<_>>();
                    atom.extend(count_str);
                }
                atom.into_iter().collect::<String>()
            })
            .collect::<Vec<_>>();

        ret.join("")
    }
}
```