# ✅ [PHP🚀 Beats 96.55%] Three different approaches

**Author:** akunopaka
**Votes:** 5
**Link:** [https://leetcode.com/problems/merge-k-sorted-lists/solutions/3286051/](https://leetcode.com/problems/merge-k-sorted-lists/solutions/3286051/)

---

##### **Here are three different approaches to solving the problem of merging all the linked lists into one sorted linked list. I hope it will be useful for someone.**


- SOLUTION #1 - Create an array from all nodes of lists, sort it, then create and return a new linked list.
- SOLUTION #2 - Merging k Sorted Lists using HEAP
- SOLUTION #3 - Loop the lists and compare nodes to form a new linked list



##### SOLUTION #1 - Create an array from all nodes of lists, sort it, and create and return a new linked list.
 This solution uses an iterative approach to solving the problem. It iterates through each linked list and stores the values in an array. The array is sorted in descending order and converted back to a linked list.
*Time complexity*: O(NlogN) where N is the number of nodes in all lists. This is because the sorting algorithm used is rsort(), which is an O(NlogN) algorithm. 
*Space complexity*: O(N) where N is the number of nodes in all lists. This is because an array of size N is created to store all the values from the nodes.
```
class Solution {
    /**
     * @param ListNode[] $lists
     * @return ListNode
     */
    function mergeKLists(ListNode $lists): ?ListNode {
        $result = [];
        foreach($lists as $list) {
            $cur = $list;
            while ($cur !== null) {
                $result[] = $cur->val;
                $cur = $cur->next;
            }
        }
        rsort($result);
        $res = null;
        foreach($result as $v) {
            $res = new ListNode($v, $res);
        }
        return $res;
    }
}
```

##### SOLUTION #2 - Merging k Sorted Lists using Heap
This method uses a heap to store the elements of all the linked lists. We loop through all the linked lists, and add the elements in the heap. The heap is then used to extract the minimum element which is then added to the result linked list. This is repeated till the heap is empty. 
*Time complexity*: O(N*logK) where N is the total number of nodes and K is the number of linked lists. 
*Space complexity*: O(K) since we use an extra heap to store the elements of all the linked lists.
```
class Solution
{
    function mergeKLists(ListNode $lists): ?ListNode
    {
        // check if lists is empty
        if (count($lists) == 0) {
            return null;
        }
        // check if lists has only one element
        if (count($lists) == 1) {
            return $lists[0];
        }

        $heap = new SplMinHeap();
        foreach ($lists as $list) {
            if ($list) {
                $heap->insert([$list->val, $list]);
            }
        }

        $headResultList = new ListNode();
        $resultList = $headResultList;
        while (!$heap->isEmpty()) {
            $minElementFromHeap = $heap->extract();
            $resultList->next = new ListNode($minElementFromHeap[0]);
            $resultList = $resultList->next;
            $minElementFromHeap[1] = $minElementFromHeap[1]->next;
            if ($minElementFromHeap[1]) {
                $heap->insert([$minElementFromHeap[1]->val, $minElementFromHeap[1]]);
            }
        }
        return $headResultList->next;
    }
}
```

##### SOLUTION #3 - Loop the lists and compare nodes to form a new linked list
This solution uses a loop to compare each element in the given array of linked lists. It finds the smallest value in each list and adds it to the new list. After the smallest value is added to the new list, the list is either removed from the array or reassigned to the next node. This process is repeated until the array with lists is empty. 
*Time complexity* of O(N*K), where N is the total number of elements in all the linked lists and K is the number of lists. 
*Space complexity* of O(1).

```
class Solution 
{
    function mergeKLists(ListNode $lists): ?ListNode {
        // check if lists is empty
        if (count($lists) == 0) {
            return null;
        }
        // check if lists has only one list
        if (count($lists) == 1) {
            return $lists[0];
        }
        // foreach list in lists, compare value of list, get the smallest value add to new list
        while (count($lists) > 0) {
            $minValue = PHP_INT_MAX;
            $tmpList = null;
            $tmpKey = null;
            foreach ($lists as $keyList => $list) {
                if ($list == null || !isset($list->val)) {
                    unset($lists[$keyList]);
                    continue;
                }
                if ($list->val < $minValue) {
                    $minValue = $list->val;
                    $tmpList = $list;
                    $tmpKey = $keyList;
                }
            }

            if ($tmpList != null) {
                if (!isset($resultList)) {
                    $resultList = new ListNode();
                    $headResultList = $resultList;
                }
                $resultList->val = $minValue;
                $resultList->next = null;
                if ($tmpList->next == null) {
                    unset($lists[$tmpKey]);
                } else {
                    $lists[$tmpKey] = $tmpList->next;
                }
            }
            if (count($lists) > 0) {
                $resultList->next = new ListNode();
                $resultList = $resultList->next;
            }
        }
        return $headResultList ?? [];
    }
}
```

### *If my work was useful for you, please upvote*
\uD83D\uDC4D\uD83D\uDC4D\uD83D\uDC4D