# [Fastest Solution Explained][0ms][100%] O(n)time complexity O(n)space complexity

**Author:** darian-catalin-cucer
**Votes:** 37
**Link:** [https://leetcode.com/problems/add-two-numbers/solutions/2383456/](https://leetcode.com/problems/add-two-numbers/solutions/2383456/)

---


(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

The best result for the code below is ***0ms / 3.27MB*** (beats 99.04% / 90.42%).
* *** Java ***

```

class Solution 
{
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) 
    {
        ListNode head= new ListNode(-1);//creating a node in order to store the sum of digit in a List format 
        ListNode temp= head;//we are using temp to add node to the new List 
        
        int carry= 0;//we are storing the carry at every digit pair iteration 
        
        while(l1 != null || l2 != null || carry > 0 )//our loop terminating condtition, all the numbers will be added 
        {
            int sum= 0;//to store the sum at every digit pair iteration 
            
            if(l1 != null)//adding list one node to the local sum
            {
                sum+= l1.val;//adding to the sum 
                l1= l1.next;//moving the l1 pointer to the next node
            }
            
            if(l2 != null)
            {
                sum+= l2.val;//adding to the sum 
                l2= l2.next;//moving the l2 pointer to the next node
            }
            sum+= carry;//adding the sum inclusive carry
            carry= sum / 10;//extracting the first digit 
            ListNode node= new ListNode(sum % 10);//extracting the last digit and creating the node 
            temp.next= node;//linking the node to the list 
            
            temp= temp.next;//moving the temp 
        }
        return head.next;//reaturning the new head of the new list 
    }
}//Please do Upvote, it helps a lot

```
* Time Complexity :- BigO(max(N, M)) where N is length of l1 & M is length of l2

* Space Complexity :- BigO(max(N,M))
```
```

```
```

The best result for the code below is ***0ms / 10MB*** (beats 100.00% / 95.49%).
* *** Python ***

```

class ListNode:
	""" Given in the problem """
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
		
def make_list_from_ListNode(l1):
    list1 = []
    while l1: #is not None
        list1.append(l1.val)
        l1 = l1.next
    return list1

def make_ListNode_from_list(a_list):
    head = l3 = ListNode(a_list[0])
    for x in a_list[1:]:
        l3.next = l3 = ListNode(x)
    return head

```

```
class Solution:
	def addTwoNumbers(self, l1, l2):
		list1 = make_list_from_ListNode(l1)
		list2 = make_list_from_ListNode(l2)

		### RIGHT PAD WITH ZEROES
		len_list1 = len(list1)
		len_list2 = len(list2)
		if len_list1 > len_list2:
			pad = len_list1 - len_list2
			list2 = list2 + [0,] * pad
		elif len_list2 > len_list1:
			pad = len_list2 - len_list1
			list1 = list1 + [0,] * pad

		### DO THE MATH
		d = 0
		the_sum = list()
		for x,y in zip(list1, list2):
			d, m = divmod(x + y + d, 10)
			the_sum.append(m)
		if d != 0:
			the_sum.append(d)
		return make_ListNode_from_list(the_sum)
```

```
##head = l3 = ListNode('dummy')
temp = ListNode('dummy')
head = temp
l3 = temp

##l3.next = l3 = ListNode(m)
temp = ListNode(m)
l3.next = temp
l3 = temp

# also equivalent
l3.next = ListNode(m)
l3 = l3.next
```

```
```

```
```

The best result for the code below is ***0ms / 23.7MB*** (beats 59.24% / 60.42%).
* *** C++ ***


```

class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *ptr = new ListNode();     //new list;
        ListNode *temp = ptr;
        
        int c = 0;
		//traversing both list till one of the list not reaches NULL
        while (l1 != NULL ||  l2 != NULL || c)
        {
            int sum = 0;
			// if l1  is not null
			// add l1-> value to sum
            if(l1 != NULL)
            {
                sum += l1->val;
                l1 = l1 -> next;
            }
            
			// if l2  is not null
			// add l2-> value to sum
            if(l2 != NULL)
            {
                sum += l2->val;
                l2 = l2 -> next;
            }
            
			// add carry to sum
            sum += c;
			// carry is updated by sum/10 because for 18 , 
			// 18 / 10 is 1 which is the carry
            c = sum/10;
			// add sum% 10 to new node as it containg the sum
            ListNode *node = new ListNode(sum%10);
            temp -> next = node;
            temp = temp -> next;
        }
        return ptr -> next;
    }
};

```
* We have to Traverse Both Lists & add sum to new list.
* Sum is equivalent to val1 + val2 + carry from previous Operation.
* The resulting node will be sum%10.
* Carry is updated by sum/10 for next Opeartion.
* Time Complexity O(n).
* Space Compelxity O(max(l1,l2)).

```
```

```
```

The best result for the code below is ***0ms / 78MB*** (beats 100.00% / 100.00%).
* *** JavaScript ***


```

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1!==null||l2!==null||sum>0){

        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;

    }

    return List.next;
};

```

```
```

```
```

The best result for the code below is ***0ms / 15.23MB*** (beats 89.94% / 90.99%).
* *** Python3 ***


```

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        res = dummy = ListNode()
        carry = 0
        while l1 or l2:
            v1, v2 = 0, 0
            if l1: v1, l1 = l1.val, l1.next
            if l2: v2, l2 = l2.val, l2.next
            
            val = carry + v1 + v2
            res.next = ListNode(val%10)
            res, carry = res.next, val//10
            
        if carry:
            res.next = ListNode(carry)
            
        return dummy.next

```
* We simply traverse lists, sum values and save result in a new list. 
* Sum is equal to val1 + val2 + carry from the previous operation. sum%10 gives us resulting digit for current node, and sum//10 gives us a value to carry to the next operation.

* Time: O(n)
* Space: O(1)
```
```

```
```

The best result for the code below is ***0ms / 33.33MB*** (beats 99.00% / 60.12%).
* *** Kotlin ***


```

class Solution {
    fun ListNode?.value() = this?.`val` ?: 0

    fun addTwoNumbers(l1: ListNode?, l2: ListNode?, carry: Int = 0): ListNode? {
        if (l1 == null && l2 == null && carry == 0) return null
        val s = l1.value() + l2.value() + carry
        return ListNode(s % 10).apply { next = addTwoNumbers(l1?.next, l2?.next, s / 10) }
    }
}

```

```
class Solution {
    fun addTwoNumbers(l1: ListNode?, l2: ListNode?): ListNode? {
        var list1 = l1
        var list2 = l2
        val head = ListNode(0)
        var result: ListNode? = head
        var carry = 0
        while (list1 != null || list2 != null || carry > 0) {
            val x1 = list1?.`val` ?: 0
            val x2 = list2?.`val` ?: 0
            val sum = (x1 + x2 + carry) % 10
            carry = (x1 + x2 + carry) / 10
            result?.next = ListNode(sum)
            result = result?.next
            if (list1 != null) list1 = list1.next
            if (list2 != null) list2 = list2.next
        }
        return head.next
    }
}
```

```
```

```
```

The best result for the code below is ***0ms / 13.17MB*** (beats 79.34% / 99.92%).
* *** Swift ***


```

class Solution {
    private var dig = 0
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        if l1 == nil && l2 == nil && dig == 0 { return nil }
        let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + dig
        dig = sum / 10
        return .init(sum % 10, addTwoNumbers(l1?.next, l2?.next))
    }
}

```

```
class Solution {
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        var l1 = l1
        var l2 = l2
        var prev = ListNode(0)
        var carry = 0
        let head = prev
        
        while l1 != nil || l2 != nil || carry != 0 {
            let cur = ListNode(0)
            let sum = (l2 == nil ? 0 : l2!.val) + (l1 == nil ? 0 : l1!.val) + carry
            cur.val = sum % 10
            carry = sum / 10
            prev.next = cur
            prev = cur
            l1 = l1 == nil ? l1: l1?.next
            l2 = l2 == nil ? l2: l2?.next
        }
        
        return head.next
    }
}
```

```
```

```
```

The best result for the code below is ***0ms / 62.07MB*** (beats 99.99% / 99.99%).
* *** PHP ***


```

class Solution {

    /**
     * @param ListNode $l1
     * @param ListNode $l2
     * @return ListNode
     */
    function addTwoNumbers($l1, $l2) {
        $fake_head = new ListNode(0);
        $res = $fake_head;
        $carry = 0;
        while ($l1 != null || $l2 != null) {
            $sum = $carry;
            $carry = 0;
            if ($l1 !== null) {
                $sum += $l1->val;
                $l1 = $l1->next;
            }
            if ($l2 !== null) {
                $sum += $l2->val;
                $l2 = $l2->next;
            }
            
            if ($sum > 9) {
                $carry += 1;
                $sum %= 10;
            }
            $res->next = new ListNode($sum);
            $res = $res->next;
        }
        
        if ($carry > 0) {
            $res->next = new ListNode($carry);
        }
        
        return $fake_head->next;
    }
}

```

```
```

```
```

The best result for the code below is ***0ms / 1.17MB*** (beats 99.64% / 99.92%).
* *** C ***


```

// create a result list
    struct ListNode* result = malloc(sizeof(struct ListNode)); 
    struct ListNode* ptr = result;
    result->val = 0;
    result->next = NULL;

    int carry = 0;
    
    while (l1 != NULL || l2!=NULL || carry !=0){
        
        int a = (l1 == NULL) ? 0 : l1->val;
        int b = (l2 == NULL) ? 0 : l2->val;
        ptr->val = a + b + carry;
        carry = ptr->val / 10;
        ptr->val = ptr->val %10;
        
        // the reason to check if two pointer is NULL is to ensure it will not update after it is already the Last node.
        // try consider the case of 
        // [9,9,9,9,9,9,9]
        // [9,9,9,9]
        if(l1!=NULL){
            l1 = (l1->next ==NULL)? NULL: l1->next;
        }
        
        if(l2 !=NULL){
            l2 = (l2->next !=NULL)? l2->next: NULL;
        }
        
        // this is to ensure only create new node if there some calculations needed
        if(l1 != NULL || l2!=NULL || carry !=0){
            ptr->next = malloc(sizeof(struct ListNode));
            ptr->next->next=NULL;
            ptr = ptr->next;
        }
        
    }
    return result;
}

```

```struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2){

    struct ListNode * res=NULL,*start=NULL;
    int x,y,c=0;
    
    if (!l1 && !l2)
        return NULL;
    else if (!l1)
        return l2;
    else if (!l2)
        return l1;

    while(l1 || l2 || c)
    {
        x = l1?l1->val:0;
        y = l2?l2->val:0;
        if (!res)
        {
            res = malloc(sizeof(struct ListNode));
            start = res;
        }
        else
        {
            res->next = malloc(sizeof(struct ListNode));
            res = res->next;
        }
        res->next =NULL;
        res->val = (x+y+c)%10;
        c = (x+y+c)/10;
        l1=l1?l1->next:NULL;
        l2=l2?l2->next:NULL;
    }
    return start;
}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***
