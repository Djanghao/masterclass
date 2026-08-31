# Java | JavaScript | TypeScript | C++ | C# Solution.

**Author:** LachezarTsK
**Votes:** 1
**Link:** [https://leetcode.com/problems/linked-list-frequency/solutions/4856190/](https://leetcode.com/problems/linked-list-frequency/solutions/4856190/)

---

```Java []
import java.util.HashMap;
import java.util.Map;

public class Solution {

    public ListNode frequenciesOfElements(ListNode head) {
        Map<Integer, Integer> valueToFrequency = new HashMap<>();
        ListNode current = head;

        while (current != null) {
            valueToFrequency.put(current.val, valueToFrequency.getOrDefault(current.val, 0) + 1);
            current = current.next;
        }

        return createLinkedListForFrequencyOfValues(valueToFrequency);
    }

    private ListNode createLinkedListForFrequencyOfValues(Map<Integer, Integer> valueToFrequency) {
        ListNode dummyNodePreceedingHead = new ListNode();
        ListNode current = dummyNodePreceedingHead;

        for (int frequency : valueToFrequency.values()) {
            current.next = new ListNode(frequency);
            current = current.next;
        }

        return dummyNodePreceedingHead.next;
    }
}
```
```JavaScript []
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var frequenciesOfElements = function (head) {
    const valueToFrequency = new Map();
    let current = head;

    while (current !== null) {
        if (!valueToFrequency.has(current.val)) {
            valueToFrequency.set(current.val, 0);
        }
        valueToFrequency.set(current.val, valueToFrequency.get(current.val) + 1);
        current = current.next;
    }

    return createLinkedListForFrequencyOfValues(valueToFrequency);
};

/**
 * @param {Map<number, number>} valueToFrequency
 * @return {ListNode}
 */
function createLinkedListForFrequencyOfValues(valueToFrequency) {
    let dummyNodePreceedingHead = new ListNode();
    let current = dummyNodePreceedingHead;

    for (let frequency of valueToFrequency.values()) {
        current.next = new ListNode(frequency);
        current = current.next;
    }

    return dummyNodePreceedingHead.next;
}
```
```TypeScript []
function frequenciesOfElements(head: ListNode | null): ListNode | null {
    const valueToFrequency: Map<number, number> = new Map();
    let current: ListNode = head;

    while (current !== null) {
        if (!valueToFrequency.has(current.val)) {
            valueToFrequency.set(current.val, 0);
        }
        valueToFrequency.set(current.val, valueToFrequency.get(current.val) + 1);
        current = current.next;
    }

    return createLinkedListForFrequencyOfValues(valueToFrequency);
};


function createLinkedListForFrequencyOfValues(valueToFrequency: Map<number, number>): ListNode {
    let dummyNodePreceedingHead: ListNode = new ListNode();
    let current: ListNode = dummyNodePreceedingHead;

    for (let frequency of valueToFrequency.values()) {
        current.next = new ListNode(frequency);
        current = current.next;
    }

    return dummyNodePreceedingHead.next;
}
```
```C++ []
#include <unordered_map>
using namespace std;

class Solution {

public:
    ListNode* frequenciesOfElements(ListNode* head) const {
        unordered_map<int, int> valueToFrequency;
        ListNode* current = head;

        while (current != nullptr) {
            ++valueToFrequency[current->val];
            current = current->next;
        }

        return createLinkedListForFrequencyOfValues(valueToFrequency);
    }

private:
    ListNode* createLinkedListForFrequencyOfValues(unordered_map<int, int>& valueToFrequency) const{
        ListNode* dummyNodePreceedingHead = new ListNode();
        ListNode* current = dummyNodePreceedingHead;

        for (const auto& [value, frequency] : valueToFrequency) {
            current->next = new ListNode(frequency);
            current = current->next;
        }

        return dummyNodePreceedingHead->next;
    }
};
```
```C# []
using System;

public class Solution
{
    public ListNode FrequenciesOfElements(ListNode head)
    {
        Dictionary<int, int> valueToFrequency = new Dictionary<int, int>();
        ListNode current = head;

        while (current != null)
        {
            if (!valueToFrequency.ContainsKey(current.val))
            {
                valueToFrequency.Add(current.val, 0);
            }
            ++valueToFrequency[current.val];
            current = current.next;
        }

        return CreateLinkedListForFrequencyOfValues(valueToFrequency);
    }

    private ListNode CreateLinkedListForFrequencyOfValues(Dictionary<int, int> valueToFrequency)
    {
        ListNode dummyNodePreceedingHead = new ListNode();
        ListNode current = dummyNodePreceedingHead;

        foreach (int frequency in valueToFrequency.Values)
        {
            current.next = new ListNode(frequency);
            current = current.next;
        }

        return dummyNodePreceedingHead.next;
    }
}
```
