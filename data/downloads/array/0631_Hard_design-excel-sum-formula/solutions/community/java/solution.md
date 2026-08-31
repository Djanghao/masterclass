# [Beats 98% / 95%] Clean and simple - Observer design pattern

**Author:** whoawhoawhoa
**Votes:** 10
**Link:** [https://leetcode.com/problems/design-excel-sum-formula/solutions/5149274/](https://leetcode.com/problems/design-excel-sum-formula/solutions/5149274/)

---

# Intuition
Given the fact that the constraints are low let's re-evaluate sum every time. So, we don't cache sum computations and keep the solution clean. We're going to use some sort of Observer design pattern here.

# Approach
Let's introduce Node class which represents one cell in our sheet. It can either be a single int value or refer to a number of other cells. We can then implement a simple DFS method to traverse all the child nodes and evaluate the sum for a given cell.
The trick is that we never change the initially created Node objects, we just change the references on `sum` calls. 


# Code

```java []
class Excel {

  Node[][] matrix;

  public Excel(int height, char width) {
    matrix = new Node[height][width - 'A' + 1];
    for (int i = 0; i < height; i++) {
      Arrays.setAll(matrix[i], _ -> new Node());
    }
  }

  public void set(int row, char column, int val) {
    matrix[row - 1][column - 'A'].val = val;
    matrix[row - 1][column - 'A'].children = null;
  }

  public int get(int row, char column) {
    return matrix[row - 1][column - 'A'].getValue();
  }

  public int sum(int row, char column, String[] numbers) {
    Node n = matrix[row - 1][column - 'A'];
    n.children = new ArrayList<>();
    for (String s : numbers) {
      int ix = s.indexOf(":");
      if (ix != -1) {
        char c1 = s.charAt(0), c2 = s.charAt(ix + 1);
        int r1 = Integer.parseInt(s.substring(1, ix)), r2 = Integer.parseInt(s.substring(ix + 2, s.length()));
        for (int i = r1 - 1; i < r2; i++) {
          for (int j = c1 - 'A'; j <= c2 - 'A'; j++) {
            n.children.add(matrix[i][j]);
          }
        }
      } else { // single num
        char c = s.charAt(0);
        int r = Integer.parseInt(s.substring(1, s.length()));
        n.children.add(matrix[r - 1][c - 'A']);
      }
    }
    return n.getValue();
  }
}

class Node {
  List<Node> children;
  int val;

  Node(int v) {
    val = v;
  }

  Node() {
  }

  int getValue() {
    if (children == null) {
      return val;
    }
    int res = 0;
    for (Node c : children) {
      res += c.getValue();
    }
    return res;
  }
}
```
```python []
class Node:
    def __init__(self, val: int = 0):
        self.val = val
        self.children: Optional[List[Node]] = None

    def get_value(self) -> int:
        if self.children is None:
            return self.val
        return sum(child.get_value() for child in self.children)


class Excel:
    def __init__(self, height: int, width: str):
        self.matrix = [
            [Node() for _ in range(ord(width) - ord("A") + 1)] for _ in range(height)
        ]

    def set(self, row: int, column: str, val: int) -> None:
        node = self.matrix[row - 1][ord(column) - ord("A")]
        node.val = val
        node.children = None

    def get(self, row: int, column: str) -> int:
        return self.matrix[row - 1][ord(column) - ord("A")].get_value()

    def sum(self, row: int, column: str, numbers: List[str]) -> int:
        node = self.matrix[row - 1][ord(column) - ord("A")]
        node.children = []

        for s in numbers:
            if ":" in s:
                c1, r1 = s[0], int(s[1 : s.index(":")])
                c2, r2 = s[s.index(":") + 1], int(s[s.index(":") + 2 :])
                for i in range(r1 - 1, r2):
                    for j in range(ord(c1) - ord("A"), ord(c2) - ord("A") + 1):
                        node.children.append(self.matrix[i][j])
            else:
                c, r = s[0], int(s[1:])
                node.children.append(self.matrix[r - 1][ord(c) - ord("A")])

        return node.get_value()
```
```Go []
type Node struct {
	val      int
	children []*Node
}

func (n *Node) getValue() int {
	if n.children == nil {
		return n.val
	}
	sum := 0
	for _, child := range n.children {
		sum += child.getValue()
	}
	return sum
}

type Excel struct {
	matrix [][]*Node
}

func Constructor(height int, width byte) Excel {
	matrix := make([][]*Node, height)
	for i := 0; i < height; i++ {
		matrix[i] = make([]*Node, width-'A'+1)
		for j := range matrix[i] {
			matrix[i][j] = &Node{}
		}
	}
	return Excel{matrix: matrix}
}

func (this *Excel) Set(row int, column byte, val int) {
	node := this.matrix[row-1][column-'A']
	node.val = val
	node.children = nil
}

func (this *Excel) Get(row int, column byte) int {
	return this.matrix[row-1][column-'A'].getValue()
}

func (this *Excel) Sum(row int, column byte, numbers []string) int {
	node := this.matrix[row-1][column-'A']
	node.children = []*Node{}

	for _, s := range numbers {
		if idx := indexOf(s, ":"); idx != -1 {
			// Parsing range (e.g., "A1:B2")
			c1, r1 := s[0], toInt(s[1:idx])
			c2, r2 := s[idx+1], toInt(s[idx+2:])
			for i := r1 - 1; i < r2; i++ {
				for j := c1 - 'A'; j <= c2-'A'; j++ {
					node.children = append(node.children, this.matrix[i][j])
				}
			}
		} else {
			// Parsing single cell (e.g., "A1")
			c, r := s[0], toInt(s[1:])
			node.children = append(node.children, this.matrix[r-1][c-'A'])
		}
	}
	return node.getValue()
}

func indexOf(s, sep string) int {
	for i := 0; i < len(s); i++ {
		if s[i:i+1] == sep {
			return i
		}
	}
	return -1
}

func toInt(s string) int {
	var num int
	for i := 0; i < len(s); i++ {
		num = num*10 + int(s[i]-'0')
	}
	return num
}
```
