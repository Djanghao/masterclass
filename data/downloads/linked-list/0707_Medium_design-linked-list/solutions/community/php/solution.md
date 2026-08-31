# PHP - Beats: 100% (43 ms)

**Author:** BakhadyrovF
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-linked-list/solutions/2956872/](https://leetcode.com/problems/design-linked-list/solutions/2956872/)

---


# Approach
Simply Linked List implementation. Difference between other solutions is - my solution keeps track of the tail of Linked List, it is very useful when we should add at tail (we do not need to traverse until we reach tail, we can take the tail and point it to new node).

# Complexity
- Time complexity:
```addAtHead()``` - O(1)
```addAtTail()``` - O(1)
```addAtIndex()``` - O(n)
```deleteAtIndex()``` - O(n)

- Space complexity: O(n)

# Code
```
class MyListNode
{
    public ?self $next;
    public $value;

    public function __construct($value, ?self $next = null)
    {
        $this->value = $value;
        $this->next = $next;
    }
}

class MyLinkedList {
    private ?MyListNode $head = null;
    private ?MyListNode $tail = null;
    private int $length = 0;

    /**
     * @param Integer $index
     * @return Integer
     */
    public function get($index)
    {
        if ($this->length === 0) {
            return -1;
        }

        if ($index > $this->length - 1) {
            return -1;
        }

        return $this->traverseTo($index)->value;
    }

    /**
     * @param Integer $val
     * @return NULL
     */
    public function addAtHead($val)
    {
        $newNode = new MyListNode($val);
        if ($this->length === 0) {
            $this->tail = $newNode;
        }

        $newNode->next = $this->head;
        $this->head = $newNode;

        $this->length++;
        return true;
    }

    /**
     * @param Integer $val
     * @return NULL
     */
    public function addAtTail($val)
    {
        if ($this->length === 0) {
            return $this->addAtHead($val);
        }

        $newNode = new MyListNode($val);

        $this->tail->next = $newNode;
        $this->tail = $newNode;

        $this->length++;
        return true;
    }

    /**
     * @param Integer $index
     * @param Integer $val
     * @return NULL
     */
    public function addAtIndex($index, $val)
    {
        if ($index > $this->length) {
            return -1;
        }

        if ($index === 0) {
            return $this->addAtHead($val);
        }

        if ($index === $this->length) {
            return $this->addAtTail($val);
        }

        $previousNode = $this->traverseTo($index - 1);
        $newNode = new MyListNode($val, $previousNode->next);
        $previousNode->next = $newNode;

        $this->length++;
        return true;
    }

    /**
     * @param Integer $index
     * @return NULL
     */
    public function deleteAtIndex($index)
    {
        if ($index > $this->length - 1) {
            return -1;
        }

        if ($index === 0) {
            return $this->deleteHead();
        }

        if ($index === $this->length - 1) {
            return $this->deleteTail();
        }

        $previousNode = $this->traverseTo($index - 1);
        $previousNode->next = $previousNode->next->next;

        $this->length--;
        return true;
    }

    protected function deleteHead()
    {
        if ($this->length === 0) {
            return -1;
        }

        if ($this->length === 1) {
            $this->head = null;
            $this->tail = null;
        } else {
            $this->head = $this->head->next;
        }

        $this->length--;
        return true;
    }

    protected function deleteTail()
    {
        if ($this->length === 0) {
            return -1;
        }

        if ($this->length === 1) {
            return $this->deleteHead();
        }

        $previousNode = $this->traverseTo($this->length - 2);
        $previousNode->next = null;
        $this->tail = $previousNode;

        $this->length--;
        return true;
    }

    protected function traverseTo($index)
    {
        $node = $this->head;
        $i = 0;

        while ($i < $index) {
            $node = $node->next;
            $i++;
        }

        return $node;
    }
}
```