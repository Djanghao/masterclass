# [0ms, 5.9MB] The fastest solution

**Author:** moranilt
**Votes:** 0
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/solutions/4540110/](https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/solutions/4540110/)

---

# Intuition
WE should build a string with separators, where `$` - is separator of values and `#` - separator to detect the leaf.

# Approach
It's very simple to go through the tree, pass the **strings.Builder** to **DFS** function and for each value we should store this value and add dollar sign `$` to the end to be able to detect the end of integer since it can be 10000. If it is the end of tree - just return sentinel sign `#`.

Deserialize is simple too. Just create **pointer integer**, I'll use a structure to wrap integer, and iterate over the string to unmarshal integers by creaing memo `start index` and then just increment index  while you've reached a dollar sign `$`. THe number will be from `start index` to current `index`.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

type Codec struct {
    
}

func Constructor() *Codec {
  return &Codec{}
}

func (this *Codec) serialize(root *Node) string {
  str := &strings.Builder{}
  dfsSerialize(root, str)
  return str.String()
}

func dfsSerialize(root *Node, str *strings.Builder) {
  if root == nil {
    return
  }
  // convert int to string
  str.WriteString(fmt.Sprint(root.Val))
  // add dolar sign separator for values
  str.WriteByte('$')
  for _, child := range root.Children {
    dfsSerialize(child, str)
  }
  // add sentinel sign to mark as end of node
  str.WriteByte('#')
}

func (this *Codec) deserialize(data string) *Node {
  if len(data) == 0 {
    return nil
  }
  return dfsDeserialize(data, NewWrapInt(0))
}

func dfsDeserialize(data string, index *WrapInt) *Node {
  if index.GetValue() == len(data) {
    return nil
  }
  // remember the start of number 
  start := index.GetValue()
  // increment index while you've reached a dollar sign
  for data[index.GetValue()] != '$' {
    index.Increment()
  }
  // convert string to int
  newVal, _ := strconv.Atoi(data[start:index.GetValue()])
  newNode := &Node{
    Val: newVal,
    Children: []*Node{},
  }
  // go forward to skip dollar sign
  index.Increment()
  for index.GetValue() < len(data) && data[index.GetValue()] != '#' {
    newNode.Children = append(newNode.Children, dfsDeserialize(data, index))
  }

  index.Increment()
  return newNode
}

type WrapInt struct {
  val int
}

func NewWrapInt(n int) *WrapInt {
  return &WrapInt{
    val: n,
  }
}

func (w WrapInt) GetValue() int {
  return w.val
}

func (w *WrapInt) Increment() {
  w.val++
}
/**
 * Your Codec object will be instantiated and called as such:
 * obj := Constructor();
 * data := obj.serialize(root);
 * ans := obj.deserialize(data);
 */
```