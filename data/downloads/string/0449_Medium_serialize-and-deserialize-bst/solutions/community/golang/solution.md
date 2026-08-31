# Golang BFS solution O(n)

**Author:** tuanbieber
**Votes:** 5
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/1847876/](https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/1847876/)

---

```
type Codec struct {
}

func Constructor() Codec {
    return Codec{}
}

func (this *Codec) serialize(root *TreeNode) string {
    var queue []*TreeNode

	enqueue(&queue, root)

	var result string

	for len(queue) > 0 {
		dequeuedElement := dequeue(&queue)

		if dequeuedElement != nil {
			result = result + fmt.Sprintf("%v", dequeuedElement.Val) + ","
			enqueue(&queue, dequeuedElement.Left)
			enqueue(&queue, dequeuedElement.Right)
		} else {
			result = result + "nil" + ","
		}
	}

	return result[:len(result)-1]
}

func (this *Codec) deserialize(data string) *TreeNode {    
    splittedData := strings.Split(data, ",")

	var result []*TreeNode

	for _, num := range splittedData {
		if num == "nil" {
			result = append(result, nil)
		} else {
			item := TreeNode{
				Val: toInt(num),
			}

			result = append(result, &item)
		}
	}
    
    begin := 0
    
	for _, node := range result {
		if node == nil {
            continue
		} else {
			left := 2 * begin + 1
			right := 2 * begin + 2

			if left < len(result) {
				node.Left = result[left]
			}

			if right < len(result) {
				node.Right = result[right]
			}
            
            begin++
		}
	}

	return result[0]
}

func enqueue(queue *[]*TreeNode, newItem *TreeNode) {
	if queue == nil {
		panic("nil pointer")
	}

	*queue = append(*queue, newItem)
}

func dequeue(queue *[]*TreeNode) *TreeNode {
	if queue == nil {
		panic("nil pointer")
	}

	if len(*queue) == 0 {
		panic("empty queue")
	}

	dequeuedElement := (*queue)[0]

	*queue = (*queue)[1:len(*queue)]

	return dequeuedElement
}

func toInt(s string) int {
	value, err := strconv.Atoi(s)

	if err != nil {
		panic(err)
	}

	return value
}
```